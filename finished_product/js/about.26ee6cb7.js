(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],f=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,l,d,p,g=i(t),v="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,h=void 0!==b,y=s(g),S=0;if(h&&(b=n(b,m>2?arguments[2]:void 0,2)),void 0==y||v==Array&&a(y))for(e=c(g.length),r=new v(e);e>S;S++)p=h?b(g[S],S):g[S],u(r,S,p);else for(l=y.call(g),d=l.next,r=new v;!(f=d.call(l)).done;S++)p=h?o(l,b,[f.value,S],!0):f.value,u(r,S,p);return r.length=S,r}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7e55":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("AddManga",{on:{"add-manga":t.AddManga}})],1)},i=[];r("99af");function o(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return o(t)||a(t)||c()}var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:t.addManga}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Manga"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.chapters,expression:"chapters"}],attrs:{type:"text",placeholder:"Chapters"},domProps:{value:t.chapters},on:{input:function(e){e.target.composing||(t.chapters=e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],attrs:{type:"text",name:"image",placeholder:"image url"},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}}),r("br"),r("input",{staticClass:"buttons",attrs:{type:"submit",value:"Submit"}})])])},f=[],l={name:"AddManga",data:function(){return{title:"",chapters:"",image:""}},methods:{addManga:function(t){t.preventDefault();var e={title:this.title,chapters:this.chapters,image:this.image,completed:!1};this.$emit("add-manga",e),this.title="",this.chapters="",this.image=""}}},d=l,p=(r("93b5"),r("2877")),g=Object(p["a"])(d,s,f,!1,null,"3a90b481",null),v=g.exports,m={name:"Add",components:{AddManga:v},methods:{AddManga:function(t){this.manga=[].concat(u(this.mangas),[t])}}},b=m,h=Object(p["a"])(b,n,i,!1,null,null,null);e["default"]=h.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"93b5":function(t,e,r){"use strict";var n=r("990e"),i=r.n(n);i.a},"990e":function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),u=r("50c4"),s=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),p=r("2d00"),g=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),h=l("concat"),y=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},S=!b||!h;n({target:"Array",proto:!0,forced:S},{concat:function(t){var e,r,n,i,o,a=c(this),l=f(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],y(o)){if(i=u(o.length),d+i>v)throw TypeError(m);for(r=0;r<i;r++,d++)r in o&&s(l,d,o[r])}else{if(d>=v)throw TypeError(m);s(l,d++,o)}return l.length=d,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),g=r("825a"),v=r("7b0b"),m=r("fc6a"),b=r("c04e"),h=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),x=r("057f"),A=r("7418"),L=r("06cf"),O=r("9bf2"),M=r("d1e7"),T=r("9112"),P=r("6eeb"),j=r("5692"),C=r("f772"),E=r("d012"),N=r("90e3"),k=r("b622"),D=r("e538"),R=r("746f"),V=r("d44e"),G=r("69f3"),F=r("b727").forEach,$=C("hidden"),H="Symbol",I="prototype",J=k("toPrimitive"),_=G.set,q=G.getterFor(H),B=Object[I],Q=i.Symbol,W=o("JSON","stringify"),z=L.f,K=O.f,U=x.f,X=M.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=i.QObject,it=!nt||!nt[I]||!nt[I].findChild,ot=c&&f((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(B,e);n&&delete B[e],K(t,e,r),n&&t!==B&&K(B,e,n)}:K,at=function(t,e){var r=Y[t]=y(Q[I]);return _(r,{type:H,tag:t,description:e}),c||(r.description=e),r},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ut=function(t,e,r){t===B&&ut(Z,e,r),g(t);var n=b(e,!0);return g(r),l(Y,n)?(r.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),r=y(r,{enumerable:h(0,!1)})):(l(t,$)||K(t,$,h(1,{})),t[$][n]=!0),ot(t,n,r)):K(t,n,r)},st=function(t,e){g(t);var r=m(e),n=S(r).concat(gt(r));return F(n,(function(e){c&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):st(y(t),e)},lt=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,$)&&this[$][e])||r)},dt=function(t,e){var r=m(t),n=b(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var i=z(r,n);return!i||!l(Y,n)||l(r,$)&&r[$][n]||(i.enumerable=!0),i}},pt=function(t){var e=U(m(t)),r=[];return F(e,(function(t){l(Y,t)||l(E,t)||r.push(t)})),r},gt=function(t){var e=t===B,r=U(e?Z:m(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(u||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===B&&r.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),ot(this,e,h(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:r}),at(e,t)},P(Q[I],"toString",(function(){return q(this).tag})),P(Q,"withoutSetter",(function(t){return at(N(t),t)})),M.f=lt,O.f=ut,L.f=dt,w.f=x.f=pt,A.f=gt,D.f=function(t){return at(k(t),t)},c&&(K(Q[I],"description",{configurable:!0,get:function(){return q(this).description}}),a||P(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Q}),F(S(rt),(function(t){R(t)})),n({target:H,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(v(t))}}),W){var vt=!u||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,W.apply(null,i)}})}Q[I][J]||T(Q[I],J,Q[I].valueOf),V(Q,H),E[$]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),c=r("b622"),u=c("iterator"),s=c("toStringTag"),f=o.values;for(var l in i){var d=n[l],p=d&&d.prototype;if(p){if(p[u]!==f)try{a(p,u,f)}catch(v){p[u]=f}if(p[s]||a(p,s,l),i[l])for(var g in o)if(p[g]!==o[g])try{a(p,g,o[g])}catch(v){p[g]=o[g]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),u=r("9bf2").f,s=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var p=d.prototype=f.prototype;p.constructor=d;var g=p.toString,v="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=g.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.26ee6cb7.js.map