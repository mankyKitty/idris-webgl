module JSArrays

import Types

-- This creates a new normal javascript array for you to use.
createJSArray : IO JSArray
createJSArray = do
  a <- mkForeign (FFun "new Array()" [] FPtr)
  return (MkJSArray a)

-- This pushes a floating point value onto the array
pushFloat : JSArray -> Float -> IO JSArray
pushFloat (MkJSArray x) i = do
  _<- mkForeign (FFun "%0.push(%1)" [FPtr,FFloat] FInt) x i
  return (MkJSArray x)

-- This pushes an integer value onto the array
pushInt : JSArray -> Int -> IO JSArray
pushInt (MkJSArray x) i = do
  _<- mkForeign (FFun "%0.push(%1)" [FPtr,FInt] FInt) x i
  return (MkJSArray x)

-- This creates a javascript array of floats from a List Float
fromFloatList : List Float -> JSArray -> IO JSArray
fromFloatList [] (MkJSArray x) = return (MkJSArray x)
fromFloatList (y :: xs) jsA = do
  njsA <- pushFloat jsA y
  fromFloatList xs njsA

-- This takes a javascript array and attempts to create a specific JS
-- Float32Array.  
createF32Array : JSArray -> IO F32Array
createF32Array (MkJSArray xs) = do
  ys <- mkForeign (FFun "new Float32Array(%0)" [FPtr] FPtr) xs
  return (MkF32Array ys)
