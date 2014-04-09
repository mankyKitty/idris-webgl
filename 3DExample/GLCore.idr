module GLCore

import Types
import JSMatrix.JSMatrix

-- Create the WebGL context from a canvas element
getGLCxt : Element -> IO GLCxt
getGLCxt (MkElem e) = do
  x <- mkForeign (FFun "%0.getContext('experimental-webgl')" [FPtr] FPtr) e
  return (MkCxt x)

-- Create a program for building and linking shaders
createProg : GLCxt -> IO (GLProgram,GLCxt)
createProg (MkCxt x) = do
  p <- mkForeign (FFun "%0.createProgram()" [FPtr] FPtr) x
  return ((MkGLProg p),(MkCxt x))

-- Assign the program to the given webGL context
useProg : (GLProgram, GLCxt) -> IO (GLProgram, GLCxt)
useProg ((MkGLProg y),(MkCxt x)) = do
  mkForeign (FFun "%0.useProgram(%1)" [FPtr,FPtr] FUnit) x y
  return ((MkGLProg y), (MkCxt x))

-- Enable a specific GL setting. I don't know how to access enum properties
-- using the JavaScript FFI yet so this is a bit filthy but easy to change.
enableGLSetting : GLCxt -> IO GLCxt
enableGLSetting (MkCxt c) = do
  _ <- mkForeign (FFun "%0.enable(%0.DEPTH_TEST)" [FPtr] FUnit) c
  return (MkCxt c)

-- Again with the enum properties. But this clears the current context.
glClear : GLCxt -> IO GLCxt
glClear (MkCxt c) = do
  mkForeign (FFun "%0.clear(%0.COLOR_BUFFER_BIT | %0.DEPTH_BUFFER_BIT)" [FPtr] FUnit) c
  return (MkCxt c)

-- Assign a clear colour to the entire gl region.
clearColor : Vect 4 Float -> GLCxt -> IO GLCxt
clearColor [r,g,b,a] (MkCxt c) = do
  mkForeign (FFun "%0.clearColor(%1,%2,%3,%4)" [FPtr,FFloat,FFloat,FFloat,FFloat] FUnit) c r g b a
  return (MkCxt c)

-- Choose a depth effect function - this time we choose to hide objects
-- that are 'behind' closer objects.
depthFun : GLCxt -> IO GLCxt
depthFun (MkCxt c) = do
  mkForeign (FFun "%0.depthFunc(%0.LEQUAL)" [FPtr] FUnit) c
  return (MkCxt c)

-- Create a buffer
-- var vertexPosBuffer = gl.createBuffer()
createBuffer : GLCxt -> IO GLBuffer
createBuffer (MkCxt c) = do
  b <- mkForeign (FFun "%0.createBuffer()" [FPtr] FPtr) c
  return (MkBuf b)
  
-- Bind the buffer
-- gl.bindBuffer(gl.ARRAY_BUFFER, vertextPosBuffer)
bindArrayBuffer : GLCxt -> GLBuffer -> IO GLCxt
bindArrayBuffer (MkCxt c) (MkBuf b) = do
  mkForeign (FFun "%0.bindBuffer(%0.ARRAY_BUFFER, %1)" [FPtr,FPtr] FUnit) c b
  return (MkCxt c)

-- Retrieve the array buffer type value
bufferType : GLCxt -> IO Int
bufferType (MkCxt c) = mkForeign (FFun "%0.ARRAY_BUFFER" [FPtr] FInt) c
-- Retrieve the static draw style value
drawStyle : GLCxt -> IO Int
drawStyle (MkCxt c) = mkForeign (FFun "%0.STATIC_DRAW" [FPtr] FInt) c

-- Load the buffer data
-- gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
bufferVertexData : F32Array -> GLCxt -> IO GLCxt
bufferVertexData (MkF32Array xs) (MkCxt c) = do
  bType <- bufferType (MkCxt c)
  style <- drawStyle (MkCxt c)
  mkForeign (FFun "%0.bufferData(%1, %2, %3)" [FPtr,FInt,FPtr,FInt] FUnit) c bType xs style
  return (MkCxt c)

-- Helper/Convenience function to create/bind/fill an ARRAY_BUFFER with an F32Array
createBindBuffer : GLCxt -> F32Array -> IO (GLBuffer,GLCxt)  
createBindBuffer cxt arr = do
  buf <- createBuffer cxt
  cxt' <- bindArrayBuffer cxt buf
  cxt'' <- bufferVertexData arr cxt'
  return (buf,cxt'')
  
-- call gl.drawArrays to specifically draw triangles.
-- First argument is the current program/glcontext
-- start = where on the vertex array to start reading vertices
-- nVertices = number of vertices to be read
drawTriangles : (GLProgram,GLCxt) -> Int -> Int -> IO (GLProgram,GLCxt)
drawTriangles ((MkGLProg p),(MkCxt c)) start nVertices = do
  mkForeign (FFun "%0.drawArrays(%0.TRIANGLES, %1,%2)" [FPtr,FInt,FInt] FUnit) c start nVertices
  return ((MkGLProg p),(MkCxt c))

-- Set the viewport size to the canvas element size
setViewport : Element -> GLCxt -> IO GLCxt
setViewport (MkElem e) (MkCxt c) = do
  mkForeign (FFun "%0.viewport(0,0, %1.width, %1.height)" [FPtr,FPtr] FUnit) c e
  return (MkCxt c)

-- Get a uniform location
getUniformLocation : String -> (GLProgram,GLCxt) -> IO Int
getUniformLocation uni ((MkGLProg p),(MkCxt c)) =
  mkForeign (FFun "%0.getUniformLocation(%1,%2)" [FPtr,FPtr,FString] FInt) c p uni

-- Assign 4x4 Matrix value to uniform location
uniformMatrix4v : JSGLMat4 -> (GLProgram,GLCxt) -> Int -> IO (GLProgram,GLCxt)
uniformMatrix4v (MkMat4 mat4) ((MkGLProg p),(MkCxt c)) loc = do
  mkForeign (FFun "%0.uniformMatrix4fv(%1,false,%2)" [FPtr,FInt,FPtr] FUnit) c loc mat4
  return ((MkGLProg p),(MkCxt c))

-- Fetch the Math.PI value from JS Land
mathPI : IO Float
mathPI = mkForeign (FFun "Math.PI" [] FFloat)

-- Retrieve the dimensions of the canvas element
canvasDimensions : Element -> IO (List Float)
canvasDimensions (MkElem e) = do
  width <- mkForeign (FFun "%0.width" [FPtr] FFloat) e
  height <- mkForeign (FFun "%0.height" [FPtr] FFloat) e
  return [width,height]

