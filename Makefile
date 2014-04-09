CC= idris
JS_CODEGEN= --codegen javascript
OUTPUT= idris-webgl.js
MAIN= Main.idr

CLEAN= rm *.ibc

2d:
	cd 2DExample/; $(CLEAN); $(CC) $(JS_CODEGEN) -o $(OUTPUT) $(MAIN); $(CLEAN); cd ../

3d:
	cd 3DExample/; $(CLEAN); $(CC) $(JS_CODEGEN) -o $(OUTPUT) $(MAIN); $(CLEAN); cd ../

clean:
	rm 2DExample/*.ibc
	rm 3DExample/*.ibc;rm 3DExample/JSMatrix/*.ibc
