module Types

-- WebGL Context
-- returned by canvasElement.getContext('webgl')
data GLCxt : Type where
  MkCxt : Ptr -> GLCxt

-- GL Buffer
-- returned by gl.createBuffer()
data GLBuffer : Type where
  MkBuf : Ptr -> GLBuffer

-- GL Program
-- For use with shaders etc
-- returned by gl.createProgram()
data GLProgram : Type where
  MkGLProg : Ptr -> GLProgram

-- JavaScript Float32Array()
-- returned by 'new Float32Array([0.3...])'
data F32Array : Type where
  MkF32Array : Ptr -> F32Array

-- Shader Types for keeping the type of shader
-- mixed with the actual shader code.
data Shader = Vertex String
            | Fragment String

-- Shader Program
-- returned by gl.createShader()
data ShaderProg : Type where
  MkShdrPrg : Ptr -> ShaderProg

-- Standard JavaScript Array
-- FFI Doesn't have full conversion for types and probably should stay that way imho.
-- returned by 'new Array()'
data JSArray : Type where
  MkJSArray : Ptr -> JSArray

-- HTML Element
-- Stolen from Idris/JavaScript
data Element : Type where
    MkElem : Ptr -> Element
