/** @constructor */
var __IDRRT__Type = function(type) {
  this.type = type;
};

var __IDRRT__Int = new __IDRRT__Type('Int');
var __IDRRT__Char = new __IDRRT__Type('Char');
var __IDRRT__String = new __IDRRT__Type('String');
var __IDRRT__Integer = new __IDRRT__Type('Integer');
var __IDRRT__Float = new __IDRRT__Type('Float');
var __IDRRT__Ptr = new __IDRRT__Type('Pointer');
var __IDRRT__Forgot = new __IDRRT__Type('Forgot');

var __IDRRT__ffiWrap = function(fid) {
  return function(){
    var res = fid;
    var i = 0;
    var arg;
    while (res instanceof __IDRRT__Con){
      arg = arguments[i];
      res = __IDRRT__tailcall(function(){
        return __IDR__mAPPLY0(res, arg);
      });
      ++i;
    }
    return res;
  }
};

var __IDRRT__tailcall = function(k) {
  var ret = k();
  while (ret instanceof __IDRRT__Cont)
    ret = ret.k();

  return ret;
};

var __IDRRT__print = function(s) {
  console.log(s);
};

var __IDRLT__APPLY65619 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65633,null,__IDRLT__APPLY65633,[marg0])]),__IDRCTR__65634])
})
}
var __IDRLT__APPLY65620 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65642,null,__IDRLT__APPLY65642,[marg0])]),__IDRCTR__65643])
})
}
var __IDRLT__APPLY65621 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenuuseProg(marg0)
})
}
var __IDRLT__APPLY65622 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].bindBuffer(mfn0.vars[0].ARRAY_BUFFER, mfn0.vars[1])
})
}
var __IDRLT__APPLY65623 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65624 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].ARRAY_BUFFER
})
}
var __IDRLT__APPLY65625 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].bufferData(mfn0.vars[1], mfn0.vars[2], mfn0.vars[3])
})
}
var __IDRLT__APPLY65626 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65627 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenmbufferVertexData2(mfn0.vars[0],mfn0.vars[1],mfn0.vars[2],marg0)
})
}
var __IDRLT__APPLY65628 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenmbufferVertexData3(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65629 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].clearColor(0.0,0.0,0.0,0.1)
})
}
var __IDRLT__APPLY65630 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65631 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].createBuffer()
})
}
var __IDRLT__APPLY65632 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65633 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].createProgram()
})
}
var __IDRLT__APPLY65634 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65635 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].depthFunc(mfn0.vars[0].LEQUAL)
})
}
var __IDRLT__APPLY65636 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65637 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].STATIC_DRAW
})
}
var __IDRLT__APPLY65638 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].vars[1].drawArrays(mfn0.vars[0].vars[1].TRIANGLES, mfn0.vars[1],mfn0.vars[2])
})
}
var __IDRLT__APPLY65639 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenmdrawTriangles1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65640 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].enable(mfn0.vars[0].DEPTH_TEST)
})
}
var __IDRLT__APPLY65641 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65642 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].getContext('webgl')
})
}
var __IDRLT__APPLY65643 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65644 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].clear(mfn0.vars[0].COLOR_BUFFER_BIT | mfn0.vars[0].DEPTH_BUFFER_BIT)
})
}
var __IDRLT__APPLY65645 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65646 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenmuseProg0(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65647 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenmuseProg1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65648 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65650,null,__IDRLT__APPLY65650,[marg0])]),__IDRCTR__65651])
})
}
var __IDRLT__APPLY65649 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__JSArraysnufromFloatList(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65650 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new Float32Array(mfn0.vars[0])
})
}
var __IDRLT__APPLY65651 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65652 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new Array()
})
}
var __IDRLT__APPLY65653 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65654 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__JSArraysnufromFloatList(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65655 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].push(mfn0.vars[1])
})
}
var __IDRLT__APPLY65656 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65657 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnuassignVertexPositionAttribs(marg0)
})
}
var __IDRLT__APPLY65658 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnubaseGLInit(marg0)
})
}
var __IDRLT__APPLY65659 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenuglClear(mfn0.vars[0])
})
}
var __IDRLT__APPLY65660 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnmbaseGLInit1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65661 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__MainnmbaseGLInit2(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65662 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return document.getElementById(mfn0.vars[0])
})
}
var __IDRLT__APPLY65663 = function(mfn0,marg0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,marg0])
}
var __IDRLT__APPLY65664 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__GLCorenudrawTriangles(marg0,0,3)
})
}
var __IDRLT__APPLY65665 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65671,null,__IDRLT__APPLY65671,["We\'re finished?\n"])])
})
}
var __IDRLT__APPLY65666 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__ShadersnucompileAndLinkShaders(new __IDRRT__Con(1,null,null,[new __IDRRT__Con(0,null,null,["attribute vec2 pos;void main() { gl_Position = vec4(pos, 0, 1); }"]),new __IDRRT__Con(1,null,null,[new __IDRRT__Con(1,null,null,["precision mediump float;void main() { gl_FragColor = vec4(0,0.8,0,1); }"]),__IDRCTR__0])]),marg0,mfn0.vars[0])
}),__IDRCTR__65621]),__IDRCTR__65657]),__IDRCTR__65664]),__IDRCTR__65665])
})
}
var __IDRLT__APPLY65667 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__Mainnmmain3(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65668 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__Mainnmmain4(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65669 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__Mainnmmain5(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65670 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65662,null,__IDRLT__APPLY65662,["canvas"])]),__IDRCTR__65663])
}),__IDRCTR__65620]),__IDRCTR__65658])
}),new __IDRRT__Con(65669,null,__IDRLT__APPLY65669,[marg0])])
})
}
var __IDRLT__APPLY65671 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDRRT__print(mfn0.vars[0])
})
}
var __IDRLT__APPLY65672 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnuattachShader(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65673 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnuenableVertexAttribArray(marg0)
})
}
var __IDRLT__APPLY65674 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnusetVertexAttribPointer(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65675 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnusetVertexPosAttrib(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65676 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].attachShader(mfn0.vars[1],mfn0.vars[2])
})
}
var __IDRLT__APPLY65677 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[mfn0.vars[0],mfn0.vars[1]])])
})
}
var __IDRLT__APPLY65678 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__wnucompileShaderucompileIt0swnucompileShaderucompileIt0(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65679 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmcompileAndLinkShaders0(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65680 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].linkProgram(mfn0.vars[1])
})
}
var __IDRLT__APPLY65681 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[mfn0.vars[0],mfn0.vars[1]])])
})
}
var __IDRLT__APPLY65682 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmenableVertexAttribArray0(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65683 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmenableVertexAttribArray1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65684 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmgetAttribLocation0(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65685 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmsetVertexAttribPointer0(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65686 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmsetVertexAttribPointer1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65687 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].vars[0].vertexPosAttrib = mfn0.vars[1]
})
}
var __IDRLT__APPLY65688 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnmsetVertexPosAttrib1(mfn0.vars[0],marg0)
})
}
var __IDRLT__APPLY65689 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].FRAGMENT_SHADER
})
}
var __IDRLT__APPLY65690 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].VERTEX_SHADER
})
}
var __IDRLT__APPLY65691 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(mfn0.vars[3],__IDRRT__APPLYTC(mfn0.vars[2],marg0)),null)
})
}
var __IDRLT__APPLY65692 = function(mfn0,marg0){
return mfn0.vars[1]
}
var __IDRLT__APPLY65693 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65694 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].createShader(mfn0.vars[1])
})
}
var __IDRLT__APPLY65695 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].shaderSource(mfn0.vars[1],__IDRRT__tailcall(function(){
return __IDR__wnucompileShaderucode0swnucompileShaderucode0(null,null,null,mfn0.vars[2])
}))
})
}
var __IDRLT__APPLY65696 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].compileShader(mfn0.vars[1])
})
}
var __IDRLT__APPLY65697 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,mfn0.vars[0]])
})
}
var __IDRLT__APPLY65698 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mShaders_46compileShader_44_compileIt4(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRLT__APPLY65699 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mShaders_46compileShader_44_compileIt5(mfn0.vars[0],mfn0.vars[1],marg0)
})
}
var __IDRRT__APPLYTC = function(mfn0,marg0){
var ret = (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null);
while (ret instanceof __IDRRT__Cont) {
ret=ret.k()
};
return ret
}
/** @constructor */
var __IDRRT__Con = function(tag,eval,app,vars){
this.tag=tag;
this.eval=eval;
this.app=app;
this.vars=vars
}
var __IDRCTR__0 = new __IDRRT__Con(0,null,null,[])
var __IDRCTR__65619 = new __IDRRT__Con(65619,null,__IDRLT__APPLY65619,[])
var __IDRCTR__65620 = new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,[])
var __IDRCTR__65621 = new __IDRRT__Con(65621,null,__IDRLT__APPLY65621,[])
var __IDRCTR__65632 = new __IDRRT__Con(65632,null,__IDRLT__APPLY65632,[])
var __IDRCTR__65634 = new __IDRRT__Con(65634,null,__IDRLT__APPLY65634,[])
var __IDRCTR__65643 = new __IDRRT__Con(65643,null,__IDRLT__APPLY65643,[])
var __IDRCTR__65648 = new __IDRRT__Con(65648,null,__IDRLT__APPLY65648,[])
var __IDRCTR__65651 = new __IDRRT__Con(65651,null,__IDRLT__APPLY65651,[])
var __IDRCTR__65652 = new __IDRRT__Con(65652,null,__IDRLT__APPLY65652,[])
var __IDRCTR__65653 = new __IDRRT__Con(65653,null,__IDRLT__APPLY65653,[])
var __IDRCTR__65657 = new __IDRRT__Con(65657,null,__IDRLT__APPLY65657,[])
var __IDRCTR__65658 = new __IDRRT__Con(65658,null,__IDRLT__APPLY65658,[])
var __IDRCTR__65663 = new __IDRRT__Con(65663,null,__IDRLT__APPLY65663,[])
var __IDRCTR__65664 = new __IDRRT__Con(65664,null,__IDRLT__APPLY65664,[])
var __IDRCTR__65665 = new __IDRRT__Con(65665,null,__IDRLT__APPLY65665,[])
var __IDRCTR__65670 = new __IDRRT__Con(65670,null,__IDRLT__APPLY65670,[])
var __IDRCTR__65673 = new __IDRRT__Con(65673,null,__IDRLT__APPLY65673,[])
var __IDR__JSArraysnucreateJSArray = new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,__IDRCTR__65652]),__IDRCTR__65653])
var __IDR__MainnutriangleVertices = new __IDRRT__Con(1,null,null,[-0.5,new __IDRRT__Con(1,null,null,[-0.5,new __IDRRT__Con(1,null,null,[0.5,new __IDRRT__Con(1,null,null,[-0.5,new __IDRRT__Con(1,null,null,[0.0,new __IDRRT__Con(1,null,null,[0.5,__IDRCTR__0])])])])])])
var __IDR__MainnuprepareTriangleArray = new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDR__JSArraysnucreateJSArray,new __IDRRT__Con(65649,null,__IDRLT__APPLY65649,[__IDR__MainnutriangleVertices])]),__IDRCTR__65648])
var __IDR__Mainnumain = new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDR__MainnuprepareTriangleArray,__IDRCTR__65670])
/** @constructor */
var __IDRRT__Cont = function(k){
this.k=k
}
var __IDRCTR____IDR__MainnuassignVertexPositionAttribs_1 = new __IDRRT__Con(65674,null,__IDRLT__APPLY65674,[2])
var __IDR__MainnuassignVertexPositionAttribs = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65684,null,__IDRLT__APPLY65684,[me0,"pos"])])
}),new __IDRRT__Con(65675,null,__IDRLT__APPLY65675,[me0])]),__IDRCTR__65673]),__IDRCTR____IDR__MainnuassignVertexPositionAttribs_1])
}
var __IDR__ShadersnuattachShader = function(me0,me1,me2){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65676,null,__IDRLT__APPLY65676,[me1,me0,me2])]),new __IDRRT__Con(65677,null,__IDRLT__APPLY65677,[me0,me1])])
}
var __IDR__MainnubaseGLInit = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__GLCorenuclearColor(me0)
}),new __IDRRT__Con(65661,null,__IDRLT__APPLY65661,[me0])])
}
var __IDR__GLCorenubindArrayBuffer = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65622,null,__IDRLT__APPLY65622,[me0,me1])]),new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[me0])])
}
var __IDR__GLCorenubufferVertexData = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65624,null,__IDRLT__APPLY65624,[me1])])
}),new __IDRRT__Con(65628,null,__IDRLT__APPLY65628,[me1,me0])])
}
var __IDR__ShadersnubuildShader = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__ShadersnushaderType(me0,me1)
}),new __IDRRT__Con(65678,null,__IDRLT__APPLY65678,[me0,me1])])
}
var __IDR__GLCorenuclearColor = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65629,null,__IDRLT__APPLY65629,[me0])]),new __IDRRT__Con(65630,null,__IDRLT__APPLY65630,[me0])])
}
var __IDR__ShadersnucompileAndLinkShaders = function(me0,me1,me2){
if (1 == me0.tag) {
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__ShadersnubuildShader(me0.vars[0],me2)
}),new __IDRRT__Con(65672,null,__IDRLT__APPLY65672,[me1,me2])]),new __IDRRT__Con(65679,null,__IDRLT__APPLY65679,[me0.vars[1]])]);
} else {
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65680,null,__IDRLT__APPLY65680,[me2,me1])]),new __IDRRT__Con(65681,null,__IDRLT__APPLY65681,[me1,me2])]);
}
}
var __IDR__GLCorenudepthFun = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65635,null,__IDRLT__APPLY65635,[me0])]),new __IDRRT__Con(65636,null,__IDRLT__APPLY65636,[me0])])
}
var __IDR__GLCorenudrawTriangles = function(me0,me1,me2){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65638,null,__IDRLT__APPLY65638,[me0,me1,me2])]),new __IDRRT__Con(65639,null,__IDRLT__APPLY65639,[me0])])
}
var __IDR__GLCorenuenableGLSetting = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65640,null,__IDRLT__APPLY65640,[me0])]),new __IDRRT__Con(65641,null,__IDRLT__APPLY65641,[me0])])
}
var __IDR__ShadersnuenableVertexAttribArray = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65682,null,__IDRLT__APPLY65682,[me0])]),new __IDRRT__Con(65683,null,__IDRLT__APPLY65683,[me0])])
}
var __IDR__JSArraysnufromFloatList = function(me0,me1){
if (1 == me0.tag) {
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__JSArraysnupushFloat(me1,me0.vars[0])
}),new __IDRRT__Con(65654,null,__IDRLT__APPLY65654,[me0.vars[1]])]);
} else {
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,me1]);
}
}
var __IDR__GLCorenuglClear = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65644,null,__IDRLT__APPLY65644,[me0])]),new __IDRRT__Con(65645,null,__IDRLT__APPLY65645,[me0])])
}
var __IDR__JSArraysnupushFloat = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65655,null,__IDRLT__APPLY65655,[me0,me1])]),new __IDRRT__Con(65656,null,__IDRLT__APPLY65656,[me0])])
}
var __IDR__ShadersnusetVertexAttribPointer = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65685,null,__IDRLT__APPLY65685,[me1,me0])]),new __IDRRT__Con(65686,null,__IDRLT__APPLY65686,[me1])])
}
var __IDR__ShadersnusetVertexPosAttrib = function(me0,me1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65687,null,__IDRLT__APPLY65687,[me0,me1])]),new __IDRRT__Con(65688,null,__IDRLT__APPLY65688,[me0])])
}
var __IDR__ShadersnushaderType = function(me0,me1){
if (1 == me0.tag) {
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65689,null,__IDRLT__APPLY65689,[me1])]);
} else {
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65690,null,__IDRLT__APPLY65690,[me1])]);
}
}
var __IDR__GLCorenuuseProg = function(me0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65646,null,__IDRLT__APPLY65646,[me0])]),new __IDRRT__Con(65647,null,__IDRLT__APPLY65647,[me0])])
}
var __IDR__mAPPLY0 = function(mfn0,marg0){
return (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null)
}
var __IDR__ShadersnmcompileAndLinkShaders0 = function(me4,mbpat0){
return new __IDRRT__Cont(function(){
return __IDR__ShadersnucompileAndLinkShaders(me4,mbpat0.vars[0],mbpat0.vars[1])
})
}
var __IDR__ShadersnmenableVertexAttribArray0 = function(me0,mw0){
return me0.vars[1].enableVertexAttribArray(me0.vars[0].vertexPosAttrib)
}
var __IDR__ShadersnmgetAttribLocation0 = function(me1,me0,mw0){
return me1.vars[1].getAttribLocation(me1.vars[0],me0)
}
var __IDR__mrunMain0 = function(){
return new __IDRRT__Cont(function(){
return __IDRRT__tailcall(function(){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDR__Mainnumain,null)
})
})
})
}
var __IDR__ShadersnmsetVertexAttribPointer0 = function(me1,me0,mw0){
return me1.vars[1].vertexAttribPointer(me1.vars[0].vertexPosAttrib, me0, me1.vars[1].FLOAT, false, 0, 0)
}
var __IDR__GLCorenmuseProg0 = function(me0,mw0){
return me0.vars[1].useProgram(me0.vars[0])
}
var __IDR__MainnmbaseGLInit1 = function(me0,mbindx1){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__GLCorenudepthFun(me0)
}),new __IDRRT__Con(65659,null,__IDRLT__APPLY65659,[me0])])
}
var __IDR__GLCorenmdrawTriangles1 = function(me0,mbindx0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[me0.vars[0],me0.vars[1]])])
}
var __IDR__ShadersnmenableVertexAttribArray1 = function(me0,mbindx0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[me0.vars[0],me0.vars[1]])])
}
var __IDR__ShadersnmsetVertexAttribPointer1 = function(me1,mbindx0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[me1.vars[0],me1.vars[1]])])
}
var __IDR__ShadersnmsetVertexPosAttrib1 = function(me0,mbindx0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[me0.vars[0],me0.vars[1]])])
}
var __IDR__GLCorenmuseProg1 = function(me0,mbindx0){
return new __IDRRT__Con(65692,null,__IDRLT__APPLY65692,[null,new __IDRRT__Con(0,null,null,[me0.vars[0],me0.vars[1]])])
}
var __IDR__MainnmbaseGLInit2 = function(me0,mbindx0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__GLCorenuenableGLSetting(me0)
}),new __IDRRT__Con(65660,null,__IDRLT__APPLY65660,[me0])])
}
var __IDR__GLCorenmbufferVertexData2 = function(me1,ubType,me0,ustyle){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[me1,ubType,me0,ustyle])]),new __IDRRT__Con(65626,null,__IDRLT__APPLY65626,[me1])])
}
var __IDR__GLCorenmbufferVertexData3 = function(me1,me0,ubType){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65637,null,__IDRLT__APPLY65637,[me1])])
}),new __IDRRT__Con(65627,null,__IDRLT__APPLY65627,[me1,ubType,me0])])
}
var __IDR__Mainnmmain3 = function(uf_51_50Arr,uglCxt,mbindx0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__GLCorenubufferVertexData(uf_51_50Arr,uglCxt)
}),__IDRCTR__65619]),new __IDRRT__Con(65666,null,__IDRLT__APPLY65666,[uglCxt])])
}
var __IDR__mShaders_46compileShader_44_compileIt4 = function(me1,us,mbindx0){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65696,null,__IDRLT__APPLY65696,[me1,us])]),new __IDRRT__Con(65697,null,__IDRLT__APPLY65697,[us])])
}
var __IDR__Mainnmmain4 = function(uglCxt,uf_51_50Arr,ubuffer){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return __IDR__GLCorenubindArrayBuffer(uglCxt,ubuffer)
}),new __IDRRT__Con(65667,null,__IDRLT__APPLY65667,[uf_51_50Arr,uglCxt])])
}
var __IDR__mShaders_46compileShader_44_compileIt5 = function(me1,me0,us){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65695,null,__IDRLT__APPLY65695,[me1,us,me0])]),new __IDRRT__Con(65698,null,__IDRLT__APPLY65698,[me1,us])])
}
var __IDR__Mainnmmain5 = function(uf_51_50Arr,uglCxt){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65631,null,__IDRLT__APPLY65631,[uglCxt])]),__IDRCTR__65632])
}),new __IDRRT__Con(65668,null,__IDRLT__APPLY65668,[uglCxt,uf_51_50Arr])])
}
var __IDR__wnucompileShaderucode0swnucompileShaderucode0 = function(me0,me1,me2,me3){
if (1 == me3.tag) {
return me3.vars[0];
} else {
return me3.vars[0];
}
}
var __IDR__wnucompileShaderucompileIt0swnucompileShaderucompileIt0 = function(me0,me1,me2){
return new __IDRRT__Con(65691,null,__IDRLT__APPLY65691,[null,null,new __IDRRT__Con(65693,null,__IDRLT__APPLY65693,[null,new __IDRRT__Con(65694,null,__IDRLT__APPLY65694,[me1,me2])]),new __IDRRT__Con(65699,null,__IDRLT__APPLY65699,[me1,me0])])
}
var main = function(){
if (document.readyState == "complete" || document.readyState == "loaded") {
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
});
} else {
window.addEventListener("DOMContentLoaded",function(){
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
})
},false);
}
}
main()