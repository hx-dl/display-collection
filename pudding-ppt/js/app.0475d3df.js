(function(e){function t(t){for(var n,a,u=t[0],c=t[1],l=t[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(s.length)s.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("mark-display",{ref:"display",attrs:{src:e.pptPath,"keyboard-ctrl":"","url-hash-ctrl":"","support-preview":"","auto-blank-target":""},on:{title:e.setTitle}})],1)},i=[],a=(r("4de4"),r("a15b"),r("c8b5")),u=r.n(a),c=r("0386"),l="./ppt.txt",p={components:{MarkDisplay:c["a"]},data:function(){return{pptPath:l}},mounted:function(){var e=new u.a(this.$el),t=this.$refs.display;e.on("swipe",(function(e){if("mouse"!==e.pointerType)switch(e.direction){case u.a.DIRECTION_LEFT:return void t.goNext();case u.a.DIRECTION_RIGHT:return void t.goPrev()}}))},methods:{setTitle:function(e){var t=e.title;document.title=[t,"Example"].filter(Boolean).join(" - ")}}},f=p,s=(r("034f"),r("2877")),d=Object(s["a"])(f,o,i,!1,null,null,null),h=d.exports,b=r("1487"),v=r.n(b);r("2c43");Object(c["b"])((function(e,t){if(t)try{return v.a.highlight(t,e).value}catch(r){}return e})),new n["a"]({el:"#app",render:function(e){return e(h)}})},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.0475d3df.js.map