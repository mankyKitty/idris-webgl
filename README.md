idris-webgl
===========

Experimentation with Idris and WebGL via JavaScript FFI !

__This is a Proof Of Concept__

This simply demonstrates how to use the FFI to access the terrifying and unityped world of JavaScript. It will most likely bitrot if the FFI changes too much or I get too busy so be mindful and pay attention to the compiler over me (obviously).

The 2D example works just fine, working on a 3D demo and then (the whole reason I started this) an ASM demo as well hopefully.

To build the different examples, there is a Makefile included that lets you run either:
	$ make 2d
or
	$ make 3d
To build the respective example. You can then just open the `index.html` in your favourite browser and *VIEW THE SIMPLICITY!!*

To clean up the `*.ibc` files just run `make clean`.

There is an additional `JSMatrix` lib that is included with the 3D example that is hosted separately [here](https://github.com/mankyKitty/idris-jsglmatrix). It is built upon the delicious [glMatrix](http://glmatrix.net/) library. The version of glMatrix that I am using is included in the 3D Example file.

Don't judge me.. Food.

there are many refactorings to come for this that will make somethings easier. I am still trying to make the 3D one actually behave too so don't get greedy.
