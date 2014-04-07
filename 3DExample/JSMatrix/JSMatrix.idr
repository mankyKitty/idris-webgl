module JSMatrix.JSMatrix

data JSGLMat3 : Type where
  MkMat3 : Ptr -> JSGLMat3

data JSGLMat4 : Type where  
  MkMat4 : Ptr -> JSGLMat4

data JSGLVec3 : Type where
  MkVec3 : Ptr -> JSGLVec3

data JSGLVec4 : Type where  
  MkVec4 : Ptr -> JSGLVec4

createMat3 : IO JSGLMat3
createMat3 = do
  m <- mkForeign (FFun "mat3.create()" [] FPtr)
  return (MkMat3 m)

createMat4 : IO JSGLMat4
createMat4 = do
  m <- mkForeign (FFun "mat4.create()" [] FPtr)
  return (MkMat4 m)

createVec3 : IO JSGLVec3
createVec3 = do
  v <- mkForeign (FFun "vec3.create()" [] FPtr)
  return (MkVec3 v)
  
createVec4 : IO JSGLVec4
createVec4 = do
  v <- mkForeign (FFun "vec4.create()" [] FPtr)
  return (MkVec4 v)

-- Create a GL Matrix 3p Vector from a Vect 3 Float
createVec3FromVect : Vect 3 Float -> IO JSGLVec3
createVec3FromVect [x,y,z] = do
  v <- mkForeign (FFun "vec3.fromValues(%0,%1,%2)" [FFloat,FFloat,FFloat] FPtr) x y z
  return (MkVec3 v)

-- Create a GL Matrix 4p Vector from a Vect 4 Float
createVec4FromVect : Vect 4 Float -> IO JSGLVec4
createVec4FromVect [r,g,b,a] = do
  v <- mkForeign (FFun "vec4.fromValues(%0,%1,%2)" [FFloat,FFloat,FFloat,FFloat] FPtr) r g b a
  return (MkVec4 v)
  
--| {mat4} mat4.translate(out, a, v)
--| Translate a mat4 by the given vector
-- Parameters:
  -- {mat4} a -- the matrix to translate
  -- {vec3} v -- vector to translate by
  -- {mat4} out -- the receiving matrix
-- Returns:
  -- {mat4} out
translateM4 : JSGLVec3 -> JSGLMat4 -> JSGLMat4 -> IO JSGLMat4
translateM4 (MkVec3 v) (MkMat4 out) (MkMat4 a) = do
  translatedM <- mkForeign (FFun "mat4.translate(%0,%1,%2)" [FPtr,FPtr,FPtr] FPtr) out a v
  return (MkMat4 translatedM)

--| {mat4} mat4.perspective(out, fovy, aspect, near, far)
--| Generates a perspective projection matrix with the given bounds
-- Parameters:
  -- {number} fovy -- Vertical field of view in radians
  -- {number} aspect -- Aspect ratio. typically viewport width/height
  -- {number} near -- Near bound of the frustum
  -- {number} far -- Far bound of the frustum
  -- {mat4} out -- mat4 frustum matrix will be written into
-- Returns:
  -- {mat4} out
perspectiveM4 : Float -> Float -> Float -> Float -> JSGLMat4 -> IO JSGLMat4
perspectiveM4 fovy aspect near far (MkMat4 out) = do
  newMat <- mkForeign (FFun "mat4.perspective(%0,%1,%2,%3,%4)"
                       [FPtr,FFloat,FFloat,FFloat,FFloat]
                       FPtr
                      ) out fovy aspect near far
  return (MkMat4 newMat)

--| {vec3} vec3.normalize(out, a)
--| Normalize a vec3
-- Parameters:
  -- {vec3} a -- vector to normalize
  -- {vec3} out -- the receiving vector  
-- Returns:
  -- {vec3} out
normaliseV3 : JSGLVec3 -> JSGLVec3 -> IO JSGLVec3
normaliseV3 (MkVec3 a) (MkVec3 out) = do
  normalisedVec <- mkForeign (FFun "vec3.normalize(%0,%1)"
                              [FPtr,FPtr]
                              FPtr
                             ) out a
  return (MkVec3 normalisedVec)

--| {mat4} mat4.rotate(out, a, rad, axis)
--| Rotates a mat4 by the given angle
-- Parameters:
  -- {mat4} a -- the matrix to rotate
  -- {number} rad -- the angle to rotate the matrix by
  -- {vec3} axis -- the axis to rotate around
  -- {mat4} out -- the receiving matrix  
-- Returns:
  -- {mat4} out
rotateM4 : JSGLMat4 -> Float -> JSGLVec3 -> JSGLMat4 -> IO JSGLMat4
rotateM4 (MkMat4 a) rad (MkVec3 axis) (MkMat4 out) = do
  rotatedM4 <- mkForeign (FFun "mat4.rotate(%0,%1,%2,$3)"
                          [FPtr,FPtr,FFloat,FPtr]
                          FPtr
                         ) out a rad axis
  return (MkMat4 rotatedM4)
