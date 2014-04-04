CC= idris
JS_CODEGEN= --codegen javascript
OUTPUT= idris-webgl.js
MAIN= Main.idr

CLEAN= rm *.ibc

2d:
	cd 2DExample/; $(CC) $(JS_CODEGEN) -o $(OUTPUT) $(MAIN); $(CLEAN); cd ../
