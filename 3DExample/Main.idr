module Main

import GLCore
import JSArrays
import Shaders

import JSMatrix.JSMatrix

-- Save time, just get the canvas directly by id
getElemById : String -> IO Element
getElemById s = do
  x <- mkForeign (FFun "document.getElementById(%0)" [FString] FPtr) s
  return (MkElem x)

textContent : Element -> IO String
textContent (MkElem e) =
  mkForeign (FFun "%0.textContent" [FPtr] FString) e
  
-- Shader Functions
getShader : String -> IO String
getShader e = getElemById e >>= textContent

-- Pyramid
pyramidVertices : List Float
pyramidVertices = [ 0.0, 1.0, 0.0,
                    -1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0,
                    
                    0.0, 1.0, 0.0,
                    0.0, 0.0, 1.0,
                    1.0, 0.0, 0.0,
                    
                    0.0, 1.0, 0.0,
                    1.0, 0.0, 0.0,
                    0.0, 0.0, -1.0,

                    0.0, 1.0, 0.0,
                    0.0, 0.0, -1.0,
                    -1.0, 0.0, 0.0]

pyramidColours : List Float
pyramidColours = [0, 0, 1, 1,
                  0, 0, 1, 1,
                  0, 0, 1, 1,
                  
                  1, 1, 0, 1,
                  1, 1, 0, 1,
                  1, 1, 0, 1,

                  0, 1, 0, 1,
                  0, 1, 0, 1,
                  0, 1, 0, 1,

                  1, 0, 0, 1,
                  1, 0, 0, 1,
                  1, 0, 0, 1]

-- Some basic settings for starting our GL env
baseGLInit : GLCxt -> IO GLCxt
baseGLInit c = clearColor [1.0, 1.0, 1.0, 1.0] c >>= enableGLSetting >>= glClear

prepareVerticesArray : List Float -> IO F32Array
prepareVerticesArray xs = createJSArray
                          >>= fromFloatList xs
                          >>= createF32Array

-- Wrapper for finding and init'ing our GL env and context
locateInitCanvas : IO GLCxt
locateInitCanvas = getElemById "canvas" >>= getGLCxt >>= baseGLInit

-- Wrapper for the process of assigning a shader variable the correct location
-- for our program to locate vertex information when the shader runs.
assignVertexPositionAttribs : String -> Int -> (GLProgram,GLCxt) -> IO (GLProgram,GLCxt)
assignVertexPositionAttribs attr n glProg = do
  loc <- getAttribLocation attr glProg
  enableVertexAttribArray glProg loc >>= setVertexAttribPointer n loc

mvTranslateVect : Vect 3 Float
mvTranslateVect = [0.0,0.0,-4.0]

rotateVec : Vect 3 Float
rotateVec = [0.0,1.0,0.0]            

translateMat : JSGLMat4 -> IO JSGLMat4
translateMat jsMat4 =
  createVec3FromVect mvTranslateVect >>= \v3 => translateM4 v3 jsMat4 jsMat4

printJunk : JSGLMat4 -> IO ()
printJunk (MkMat4 a) = mkForeign (FFun "console.log(%0)" [FPtr] FUnit) a

main : IO ()
main = do
  [w,h] <- getElemById "canvas" >>= canvasDimensions
  verticesF32 <- prepareVerticesArray pyramidVertices
  coloursF32 <- prepareVerticesArray pyramidColours

  (vBuffer,glCxt) <- locateInitCanvas >>= flip createBindBuffer verticesF32
  (cBuffer,glCxt') <- createBindBuffer glCxt coloursF32
  
  prgCxt <- createProg glCxt'

  -- Pull the shaders off the DOM
  vshader <- [| Vertex $ getShader "vshader" |]
  fshader <- [| Fragment $ getShader "fshader" |]

  -- JS Math.Pi Value
  mPI <- mathPI

  -- Create rotation vector
  rotationAxis <- createVec3
  rotationAxis' <- createVec3FromVect rotateVec >>= normaliseV3 rotationAxis

  -- Create our matrices
  mvMatrix <- createMat4 >>= translateMat
  -- mvMatrix' <- rotateM4 mvMatrix (mPI*2*(1396850589796/10000)) rotationAxis' mvMatrix

  pjMatrix <- createMat4 >>= perspectiveM4 (mPI/4) (w/h) 1 100

  -- Pass our shader code to be built,compiled, and linked to the GL context
  prgCxt' <- compileAndLinkShaders [vshader, fshader] prgCxt
    >>= useProg -- set the gl context to use this created program
    >>= assignVertexPositionAttribs "vertPos" 3
    >>= assignVertexPositionAttribs "vertColor" 4

  pjLoc <- getUniformLocation "pjMatrix" prgCxt'
  mvLoc <- getUniformLocation "mvMatrix" prgCxt'

  _ <- uniformMatrix4v pjMatrix prgCxt' pjLoc
       >>= (\pc => uniformMatrix4v mvMatrix pc mvLoc)
       >>= (\pc => drawTriangles pc 0 12) -- draw our vertices to the screen
  putStrLn "We're finished?"
