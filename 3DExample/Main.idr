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

-- Create the 2D Vector
-- Populate the 2D Vector
-- var vertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5]
triangleVertices : List Float
triangleVertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5]

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

-- Some basic settings for starting our GL env
baseGLInit : GLCxt -> IO GLCxt
baseGLInit c = clearColor [1.0, 1.0, 1.0, 1.0] c >>= enableGLSetting >>= depthFun >>= glClear

prepareVerticesArray : List Float -> IO F32Array
prepareVerticesArray xs = createJSArray
                          >>= fromFloatList xs
                          >>= createF32Array
                          
-- Create an array, populate it with vertices, and use it to create a proper Float32Array
prepareTriangleArray : IO F32Array
prepareTriangleArray = prepareVerticesArray triangleVertices

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
mvTranslateVect = [0.0,0.0,-3.0]

rotateVec : Vect 3 Float
rotateVec = [0.0,1.0,0.0]            

translateMat : JSGLMat4 -> IO JSGLMat4
translateMat jsMat4 =
  createVec3FromVect mvTranslateVect >>= \v3 => translateM4 v3 jsMat4 jsMat4

main : IO ()
main = do
  [w,h] <- getElemById "canvas" >>= canvasDimensions
  verticesF32 <- prepareVerticesArray pyramidVertices
  coloursF32 <- prepareVerticesArray pyramidColours
  glCxt <- locateInitCanvas -- start our engines
  
  vBuffer <- createBuffer glCxt -- create a buffer to store our vertex information
  bindArrayBuffer glCxt vBuffer -- bind the buffer to the current gl context

  cBuffer <- createBuffer glCxt -- Create a colour buffer
  bindArrayBuffer glCxt cBuffer -- bind the buffer to current gl context
  
   -- fill the buffer with vertex info
  program <- bufferVertexData verticesF32 glCxt
             >>= bufferVertexData coloursF32
             >>= createProg
             
  -- Pull the shaders off the DOM
  vshader <- getShader "vshader"
  fshader <- getShader "fshader"

  -- JS Math.Pi Value
  mPI <- mathPI
  
  -- Create our matrices
  mvMatrix <- createMat4 >>= translateMat
  pjMatrix <- createMat4 >>= perspectiveM4 mPI (w/h) 1 100
  -- Create rotation vector
  rotationAxis <- createVec3FromVect rotateVec
  rotationAxis' <- createVec3 >>= normaliseV3 rotationAxis
  
  -- Pass our shader code to be built,compiled, and linked to the GL context
  progCxt <- bindAttrZero (program,glCxt) "vertPos"
    >>= compileAndLinkShaders [Vertex vshader, Fragment fshader]
    >>= useProg -- set the gl context to use this created program
    >>= assignVertexPositionAttribs "vertPos" 3
    >>= assignVertexPositionAttribs "vertColor" 4

  pjLoc <- getUniformLocation "pjMatrix" progCxt
  mvLoc <- getUniformLocation "mvMatrix" progCxt

  _ <- uniformMatrix4v pjMatrix progCxt pjLoc
       >>= (\pc => uniformMatrix4v mvMatrix pc mvLoc)
       >>= (\pc => drawTriangles pc 0 12) -- draw our vertices to the screen
  putStrLn "We're finished?"
