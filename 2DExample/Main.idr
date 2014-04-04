module Main

import GLCore
import JSArrays
import Shaders

-- Save time, just get the canvas directly by id
getElemById : String -> IO Element
getElemById s = do
  x <- mkForeign (FFun "document.getElementById(%0)" [FString] FPtr) s
  return (MkElem x)

-- Shader Functions
vShader : String
vShader = "attribute vec2 pos;void main() { gl_Position = vec4(pos, 0, 1); }"
fShader : String
fShader = "precision mediump float;void main() { gl_FragColor = vec4(0,0.8,0,1); }"

-- Create the 2D Vector
-- Populate the 2D Vector
-- var vertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5]
triangleVertices : List Float
triangleVertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5]

-- Some basic settings for starting our GL env
baseGLInit : GLCxt -> IO GLCxt
baseGLInit c = do
  clearColor c
  enableGLSetting c
  depthFun c
  glClear c

-- Create an array, populate it with vertices, and use it to create a proper Float32Array
prepareTriangleArray : IO F32Array
prepareTriangleArray = createJSArray >>= fromFloatList triangleVertices >>= createF32Array

-- Wrapper for finding and init'ing our GL env and context
locateInitCanvas : IO GLCxt
locateInitCanvas = getElemById "canvas" >>= getGLCxt >>= baseGLInit

-- Wrapper for the process of assigning a shader variable the correct location
-- for our program to locate vertex information when the shader runs.
assignVertexPositionAttribs : (GLProgram,GLCxt) -> IO (GLProgram,GLCxt)
assignVertexPositionAttribs glProg = getAttribLocation "pos" glProg
                                     >>= setVertexPosAttrib glProg
                                     >>= enableVertexAttribArray
                                     >>= setVertexAttribPointer 2
                                     
main : IO ()
main = do
  f32Arr <- prepareTriangleArray -- prepare our vertices
  glCxt <- locateInitCanvas -- start our engines
  buffer <- createBuffer glCxt -- create a buffer to store our vertex information
  bindArrayBuffer glCxt buffer -- bind the buffer to the current gl context
  program <- bufferVertexData f32Arr glCxt >>= createProg -- fill the buffer with vertex info
  -- Pass our shader code to be built,compiled, and linked to the GL context
  compileAndLinkShaders [(Vertex vShader),(Fragment fShader)] program glCxt
    >>= useProg -- set the gl context to use this created program
    >>= assignVertexPositionAttribs -- assign our pointer information for the shaders
    >>= \glProg => drawTriangles glProg 0 3 -- draw our vertices to the screen
  putStrLn "We're finished?"
