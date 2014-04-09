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

getElemFloatProp : String -> Element -> IO Float
getElemFloatProp p (MkElem e) = mkForeign (FFun "%0[%1]" [FPtr,FString] FFloat) e p

getElemStringProp : String -> Element -> IO String
getElemStringProp p (MkElem e) = mkForeign (FFun "%0[%1]" [FPtr,FString] FString) e p

-- Retrieve the dimensions of the canvas element
canvasDimensions : Element -> IO (List Float)
canvasDimensions e = do
  w <- getElemFloatProp "width" e
  h <- getElemFloatProp "height" e
  return [w,h]

-- Shader Functions
getShader : String -> IO String
getShader e = getElemById e >>= getElemStringProp "textContent"

-- Pyramid
pyramidVertices : List Float
pyramidVertices = [0.0, 1.0, 0.0,
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

mvTranslateVect : Vect 3 Float
mvTranslateVect = [0.0,0.0,-4.0]

rotateVec : Vect 3 Float
rotateVec = [0.0,1.0,0.0]

-- Some basic settings for starting our GL env
baseGLInit : GLCxt -> IO GLCxt
baseGLInit c = do
  depthTest <- getGLProp "DEPTH_TEST" c
  clearColor [1.0, 1.0, 1.0, 1.0] c >>= enableGLSetting depthTest >>= glClear

prepareVerticesArray : List Float -> IO F32Array
prepareVerticesArray xs = createJSArray >>= fromFloatList xs >>= createF32Array

-- Wrapper for finding and init'ing our GL env and context
locateInitCanvas : IO GLCxt
locateInitCanvas = getElemById "canvas" >>= getGLCxt >>= baseGLInit

-- Wrapper for the process of assigning a shader variable the correct location
-- for our program to locate vertex information when the shader runs.
assignVertexPositionAttribs : String -> Int -> (GLProgram,GLCxt) -> IO (GLProgram,GLCxt)
assignVertexPositionAttribs attr n glProg = do
  loc <- getAttribLocation attr glProg
  enableVertexAttribArray glProg loc >>= setVertexAttribPointer n loc

translateMat : JSGLMat4 -> IO JSGLMat4
translateMat jsMat4 =
  createVec3FromVect mvTranslateVect >>= \v3 => translateM4 v3 jsMat4 jsMat4

printJunk : F32Array -> IO ()
printJunk (MkF32Array a) = mkForeign (FFun "console.log(%0)" [FPtr] FUnit) a

main : IO ()
main = do
  [w,h] <- getElemById "canvas" >>= canvasDimensions
  verticesF32 <- prepareVerticesArray pyramidVertices
  coloursF32 <- prepareVerticesArray pyramidColours

  (vBuffer,glCxt) <- locateInitCanvas >>= flip createBindBuffer verticesF32
  (cBuffer,glCxt') <- createBindBuffer glCxt coloursF32

  -- Set the viewport size
  setViewport w h glCxt'

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
  mvMatrix' <- rotateM4 mvMatrix (mPI*2*(1396850589796/10000)) rotationAxis' mvMatrix

  pjMatrix <- createMat4 >>= perspectiveM4 (mPI/4) (w/h) 1 100

  -- Pass our shader code to be built,compiled, and linked to the GL context
  prgCxt' <- compileAndLinkShaders [vshader, fshader] prgCxt >>= useProg
  
  prgCxt'' <- assignVertexPositionAttribs "vertPos" 3 prgCxt'
  nxtPrgCxt <- assignVertexPositionAttribs "vertColor" 4 prgCxt''

  mvLoc <- getUniformLocation "mvMatrix" nxtPrgCxt
  pjLoc <- getUniformLocation "pjMatrix" nxtPrgCxt

  _ <- uniformMatrix4v pjMatrix nxtPrgCxt pjLoc
       >>= (\pc => uniformMatrix4v mvMatrix' pc mvLoc)
       >>= (\pc => drawTriangles pc 0 12) -- draw our vertices to the screen

  putStrLn "It might have worked... who knows!"
