module Shaders

import Types

-- Return the enum value for the shader type for the given GL context
shaderType : Shader -> GLCxt -> IO Int
shaderType (Vertex _) (MkCxt c) = mkForeign (FFun "%0.VERTEX_SHADER" [FPtr] FInt) c
shaderType (Fragment _) (MkCxt c) = mkForeign (FFun "%0.FRAGMENT_SHADER" [FPtr] FInt) c

-- This could be better.. so much better
-- Takes a shader, a GL context and the enum value for the shader type
-- and creates a shader program, inserts the source into the program
-- and then compiles it.
-- This should possibly return an Either ShaderProg Error but then again you want
-- to know to explode if your shader doesn't compile sooooo yeah.
compileShader : Shader -> GLCxt -> Int -> IO ShaderProg
compileShader shdr (MkCxt c) type = compileIt
  where
    -- This is horrible, good grief Charlie Brown!!
    code : Shader -> String
    code (Vertex x) = x
    code (Fragment x) = x
    
    compileIt : IO ShaderProg
    compileIt = do
      s <- mkForeign (FFun "%0.createShader(%1)" [FPtr,FInt] FPtr) c type
      mkForeign (FFun "%0.shaderSource(%1,%2)" [FPtr,FPtr,FString] FUnit) c s (code shdr)
      mkForeign (FFun "%0.compileShader(%1)" [FPtr,FPtr] FUnit) c s
      return (MkShdrPrg s)

-- Build some shader goodness
buildShader : Shader -> GLCxt -> IO ShaderProg
buildShader shdr cxt = do
  typeInt <- shaderType shdr cxt
  compileShader shdr cxt typeInt

-- Attach a Shader Program to the given GL program and context
attachShader : GLProgram -> GLCxt -> ShaderProg -> IO (GLProgram, GLCxt)
attachShader (MkGLProg prog) (MkCxt cxt) (MkShdrPrg shdr) = do
  mkForeign (FFun "%0.attachShader(%1,%2)" [FPtr,FPtr,FPtr] FUnit) cxt prog shdr
  return ((MkGLProg prog), (MkCxt cxt))

-- Build,Compile,Link all given shaders with the given program and context.
compileAndLinkShaders : List Shader -> GLProgram -> GLCxt -> IO (GLProgram, GLCxt)
compileAndLinkShaders [] (MkGLProg x) (MkCxt y) = do
  mkForeign (FFun "%0.linkProgram(%1)" [FPtr,FPtr] FUnit) y x
  return ((MkGLProg x), (MkCxt y))
compileAndLinkShaders (y :: xs) prog cxt = do
  (nProg,nCxt) <- buildShader y cxt >>= attachShader prog cxt
  compileAndLinkShaders xs nProg nCxt

-- Setting attribute locations for shader variables.
getAttribLocation : String -> (GLProgram,GLCxt) -> IO Int
getAttribLocation attr ((MkGLProg p), (MkCxt c)) =
  mkForeign (FFun "%0.getAttribLocation(%1,%2)" [FPtr,FPtr,FString] FInt) c p attr 

-- Set the vertexPosAttrib for the current program
setVertexPosAttrib : (GLProgram,GLCxt) -> Int -> IO (GLProgram,GLCxt)
setVertexPosAttrib ((MkGLProg p),(MkCxt c)) loc = do
  mkForeign (FFun "%0.vertexPosAttrib = %1" [FPtr,FInt] FUnit) p loc
  return ((MkGLProg p),(MkCxt c))

-- Enable the Vertex Attribute Array for the current vertexPosAttrib
enableVertexAttribArray : (GLProgram,GLCxt) -> IO (GLProgram,GLCxt)
enableVertexAttribArray ((MkGLProg p),(MkCxt c)) = do
  mkForeign (FFun "%0.enableVertexAttribArray(%1.vertexPosAttrib)" [FPtr,FPtr] FUnit) c p
  return ((MkGLProg p),(MkCxt c))

-- Set the array pointer for the GL program so it knows where to find some vertices.
setVertexAttribPointer : Int -> (GLProgram,GLCxt) -> IO (GLProgram,GLCxt)
setVertexAttribPointer x ((MkGLProg p),(MkCxt c)) = do
  mkForeign (FFun
             "%0.vertexAttribPointer(%1.vertexPosAttrib, %2, %0.FLOAT, false, 0, 0)"
             [FPtr,FPtr,FInt] FUnit
            ) c p x
  return ((MkGLProg p),(MkCxt c))
                       
