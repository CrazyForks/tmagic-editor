System.register(["./index-legacy-DAXMxUP0.js","./_plugin-vue_export-helper-legacy-iRLPXgvE.js"],(function(t,e){"use strict";var n,r,o;return{setters:[t=>{n=t.g},t=>{r=t.u,o=t._}],execute:function(){var e,i,u={};function s(){return i?e:(i=1,e=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then})}var a,c={},f={};function l(){if(a)return f;let t;a=1;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return f.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},f.getSymbolTotalCodewords=function(t){return e[t]},f.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},f.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');t=e},f.isKanjiModeEnabled=function(){return void 0!==t},f.toSJIS=function(e){return t(e)},f}var h,d,g,p,m,w={};function E(){return h||(h=1,function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(r){return n}}}(w)),w}var y,A,C,v,B={},I={},M={},T={};function N(){if(v)return T;v=1;const t=E(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return T.getBlocksCount=function(n,r){switch(r){case t.L:return e[4*(n-1)+0];case t.M:return e[4*(n-1)+1];case t.Q:return e[4*(n-1)+2];case t.H:return e[4*(n-1)+3];default:return}},T.getTotalCodewordsCount=function(e,r){switch(r){case t.L:return n[4*(e-1)+0];case t.M:return n[4*(e-1)+1];case t.Q:return n[4*(e-1)+2];case t.H:return n[4*(e-1)+3];default:return}},T}var P,b,R,L,x={},U={};function S(){return b||(b=1,function(t){const e=function(){if(P)return U;P=1;const t=new Uint8Array(512),e=new Uint8Array(256);return function(){let n=1;for(let r=0;r<255;r++)t[r]=n,e[n]=r,n<<=1,256&n&&(n^=285);for(let e=255;e<512;e++)t[e]=t[e-255]}(),U.log=function(t){if(t<1)throw new Error("log("+t+")");return e[t]},U.exp=function(e){return t[e]},U.mul=function(n,r){return 0===n||0===r?0:t[e[n]+e[r]]},U}();t.mul=function(t,n){const r=new Uint8Array(t.length+n.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<n.length;i++)r[o+i]^=e.mul(t[o],n[i]);return r},t.mod=function(t,n){let r=new Uint8Array(t);for(;r.length-n.length>=0;){const t=r[0];for(let i=0;i<n.length;i++)r[i]^=e.mul(n[i],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let o=0;o<n;o++)r=t.mul(r,new Uint8Array([1,e.exp(o)]));return r}}(x)),x}var k,D={},F={},z={};function H(){return k||(k=1,z.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),z}var _,J,K,Y={};function V(){if(_)return Y;_=1;const t="[0-9]+";let e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";e=e.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+e+")(?:.|[\r\n]))+";Y.KANJI=new RegExp(e,"g"),Y.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Y.BYTE=new RegExp(n,"g"),Y.NUMERIC=new RegExp(t,"g"),Y.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const r=new RegExp("^"+e+"$"),o=new RegExp("^"+t+"$"),i=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Y.testKanji=function(t){return r.test(t)},Y.testNumeric=function(t){return o.test(t)},Y.testAlphanumeric=function(t){return i.test(t)},Y}function j(){return J||(J=1,function(t){const e=H(),n=V();t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(r){return n}}}(F)),F}function O(){return K||(K=1,function(t){const e=l(),n=N(),r=E(),o=j(),i=H(),u=e.getBCHDigit(7973);function s(t,e){return o.getCharCountIndicator(t,e)+4}function a(t,e){let n=0;return t.forEach((function(t){const r=s(t.mode,e);n+=r+t.getBitsLength()})),n}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,r,u){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===u&&(u=o.BYTE);const a=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,r));if(u===o.MIXED)return a;const c=a-s(u,t);switch(u){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,n){let i;const u=r.from(n,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(a(e,r)<=t.getCapacity(r,n,o.MIXED))return r}(e,u);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,r){for(let o=1;o<=40;o++)if(n<=t.getCapacity(o,r,e))return o}(i.mode,i.getLength(),u)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-u>=0;)n^=7973<<e.getBCHDigit(n)-u;return t<<12|n}}(D)),D}var q,Q,$,Z,X,W,G,tt,et,nt,rt,ot,it={},ut={},st={exports:{}};function at(){return nt||(nt=1,function(t){var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var u,s,a,c,f,l,h,d=e.PriorityQueue.make();for(d.push(n,0);!d.empty();)for(a in s=(u=d.pop()).value,c=u.cost,f=t[s]||{})f.hasOwnProperty(a)&&(l=c+f[a],h=i[a],(void 0===i[a]||h>l)&&(i[a]=l,d.push(a,l),o[a]=s));if(void 0!==r&&void 0===i[r]){var g=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(st)),st.exports}function ct(){return rt||(rt=1,function(t){const e=j(),n=function(){if($)return Q;$=1;const t=j();function e(e){this.mode=t.NUMERIC,this.data=e.toString()}return e.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},Q=e}(),r=function(){if(X)return Z;X=1;const t=j(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(e){this.mode=t.ALPHANUMERIC,this.data=e}return n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=45*e.indexOf(this.data[n]);r+=e.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(e.indexOf(this.data[n]),6)},Z=n}(),o=function(){if(G)return W;G=1;const t=j();function e(e){this.mode=t.BYTE,this.data="string"==typeof e?(new TextEncoder).encode(e):new Uint8Array(e)}return e.getBitsLength=function(t){return 8*t},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},W=e}(),i=function(){if(et)return tt;et=1;const t=j(),e=l();function n(e){this.mode=t.KANJI,this.data=e}return n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let n;for(n=0;n<this.data.length;n++){let r=e.toSJIS(this.data[n]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[n]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},tt=n}(),u=V(),s=l(),a=at();function c(t){return unescape(encodeURIComponent(t)).length}function f(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function h(t){const n=f(u.NUMERIC,e.NUMERIC,t),r=f(u.ALPHANUMERIC,e.ALPHANUMERIC,t);let o,i;return s.isKanjiModeEnabled()?(o=f(u.BYTE,e.BYTE,t),i=f(u.KANJI,e.KANJI,t)):(o=f(u.BYTE_KANJI,e.BYTE,t),i=[]),n.concat(r,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function d(t,u){switch(u){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return r.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function g(t,u){let a;const c=e.getBestModeForData(t);if(a=e.from(u,c),a!==e.BYTE&&a.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(a)+".\n Suggested mode is: "+e.toString(c));switch(a!==e.KANJI||s.isKanjiModeEnabled()||(a=e.BYTE),a){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new r(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t}),[])},t.fromString=function(n,r){const o=function(t){const n=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case e.NUMERIC:n.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:n.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:n.push([o,{data:o.data,mode:e.BYTE,length:c(o.data)}]);break;case e.BYTE:n.push([{data:o.data,mode:e.BYTE,length:c(o.data)}])}}return n}(h(n,s.isKanjiModeEnabled())),i=function(t,n){const r={},o={start:{}};let i=["start"];for(let u=0;u<t.length;u++){const s=t[u],a=[];for(let t=0;t<s.length;t++){const c=s[t],f=""+u+t;a.push(f),r[f]={node:c,lastCount:0},o[f]={};for(let t=0;t<i.length;t++){const u=i[t];r[u]&&r[u].node.mode===c.mode?(o[u][f]=d(r[u].lastCount+c.length,c.mode)-d(r[u].lastCount,c.mode),r[u].lastCount+=c.length):(r[u]&&(r[u].lastCount=c.length),o[u][f]=d(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,n))}}i=a}for(let e=0;e<i.length;e++)o[i[e]].end=0;return{map:o,table:r}}(o,r),u=a.find_path(i.map,"start","end"),f=[];for(let t=1;t<u.length-1;t++)f.push(i.table[u[t]].node);return t.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(f))},t.rawSplit=function(e){return t.fromArray(h(e,s.isKanjiModeEnabled()))}}(ut)),ut}function ft(){if(ot)return c;ot=1;const t=l(),e=E(),n=function(){if(g)return d;function t(){this.buffer=[],this.length=0}return g=1,t.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},d=t}(),r=function(){if(m)return p;function t(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return m=1,t.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},t.prototype.get=function(t,e){return this.data[t*this.size+e]},t.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},t.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},p=t}(),o=(y||(y=1,function(t){const e=l().getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,r=e(t),o=145===r?26:2*Math.ceil((r-13)/(2*n-2)),i=[r-7];for(let e=1;e<n-1;e++)i[e]=i[e-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}}(B)),B),i=function(){if(A)return I;A=1;const t=l().getSymbolSize;return I.getPositions=function(e){const n=t(e);return[[0,0],[n-7,0],[0,n-7]]},I}(),u=(C||(C=1,function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,r=40,o=10;function i(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(n+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return n*r%2+n*r%3==0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let r=0,o=0,i=0,u=null,s=null;for(let a=0;a<n;a++){o=i=0,u=s=null;for(let c=0;c<n;c++){let n=t.get(a,c);n===u?o++:(o>=5&&(r+=e+(o-5)),u=n,o=1),n=t.get(c,a),n===s?i++:(i>=5&&(r+=e+(i-5)),s=n,i=1)}o>=5&&(r+=e+(o-5)),i>=5&&(r+=e+(i-5))}return r},t.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,o=0,i=0;for(let r=0;r<e;r++){o=i=0;for(let u=0;u<e;u++)o=o<<1&2047|t.get(r,u),u>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(u,r),u>=10&&(1488===i||93===i)&&n++}return n*r},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*o},t.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,i(t,o,r))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let o=0,i=1/0;for(let u=0;u<r;u++){n(u),t.applyMask(u,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(u,e),r<i&&(i=r,o=u)}return o}}(M)),M),s=N(),a=function(){if(L)return R;L=1;const t=S();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(e){this.degree=e,this.genPoly=t.generateECPolynomial(this.degree)},e.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=t.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(r,o),t}return r},R=e}(),f=O(),h=function(){if(q)return it;q=1;const t=l(),e=t.getBCHDigit(1335);return it.getEncodedBits=function(n,r){const o=n.bit<<3|r;let i=o<<10;for(;t.getBCHDigit(i)-e>=0;)i^=1335<<t.getBCHDigit(i)-e;return 21522^(o<<10|i)},it}(),w=j(),v=ct();function T(t,e,n){const r=t.size,o=h.getEncodedBits(e,n);let i,u;for(i=0;i<15;i++)u=1==(o>>i&1),i<6?t.set(i,8,u,!0):i<8?t.set(i+1,8,u,!0):t.set(r-15+i,8,u,!0),i<8?t.set(8,r-i-1,u,!0):i<9?t.set(8,15-i-1+1,u,!0):t.set(8,15-i-1,u,!0);t.set(r-8,8,1,!0)}function P(e,r,o){const i=new n;o.forEach((function(t){i.put(t.mode.bit,4),i.put(t.getLength(),w.getCharCountIndicator(t.mode,e)),t.write(i)}));const u=8*(t.getSymbolTotalCodewords(e)-s.getTotalCodewordsCount(e,r));for(i.getLengthInBits()+4<=u&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);const c=(u-i.getLengthInBits())/8;for(let t=0;t<c;t++)i.put(t%2?17:236,8);return function(e,n,r){const o=t.getSymbolTotalCodewords(n),i=s.getTotalCodewordsCount(n,r),u=o-i,c=s.getBlocksCount(n,r),f=o%c,l=c-f,h=Math.floor(o/c),d=Math.floor(u/c),g=d+1,p=h-d,m=new a(p);let w=0;const E=new Array(c),y=new Array(c);let A=0;const C=new Uint8Array(e.buffer);for(let t=0;t<c;t++){const e=t<l?d:g;E[t]=C.slice(w,w+e),y[t]=m.encode(E[t]),w+=e,A=Math.max(A,e)}const v=new Uint8Array(o);let B,I,M=0;for(B=0;B<A;B++)for(I=0;I<c;I++)B<E[I].length&&(v[M++]=E[I][B]);for(B=0;B<p;B++)for(I=0;I<c;I++)v[M++]=y[I][B];return v}(i,e,r)}function b(e,n,s,a){let c;if(Array.isArray(e))c=v.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let t=n;if(!t){const n=v.rawSplit(e);t=f.getBestVersionForData(n,s)}c=v.fromString(e,t||40)}}const l=f.getBestVersionForData(c,s);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(n){if(n<l)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+l+".\n")}else n=l;const h=P(n,s,c),d=t.getSymbolSize(n),g=new r(d);return function(t,e){const n=t.size,r=i.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}(g,n),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(g),function(t,e){const n=o.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}(g,n),T(g,s,0),n>=7&&function(t,e){const n=t.size,r=f.getEncodedBits(e);let o,i,u;for(let s=0;s<18;s++)o=Math.floor(s/3),i=s%3+n-8-3,u=1==(r>>s&1),t.set(o,i,u,!0),t.set(i,o,u,!0)}(g,n),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,u=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,s-n)){let r=!1;u<e.length&&(r=1==(e[u]>>>i&1)),t.set(o,s-n,r),i--,-1===i&&(u++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(g,h),isNaN(a)&&(a=u.getBestMask(g,T.bind(null,g,s))),u.applyMask(a,g),T(g,s,a),{modules:g,version:n,errorCorrectionLevel:s,maskPattern:a,segments:c}}return c.create=function(n,r){if(void 0===n||""===n)throw new Error("No input text");let o,i,s=e.M;return void 0!==r&&(s=e.from(r.errorCorrectionLevel,e.M),o=f.from(r.version),i=u.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),b(n,o,s,i)},c}var lt,ht,dt={},gt={};function pt(){return lt||(lt=1,function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const o=n.modules.size,i=n.modules.data,u=t.getScale(o,r),s=Math.floor((o+2*r.margin)*u),a=r.margin*u,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let f=4*(t*s+n),l=r.color.light;t>=a&&n>=a&&t<s-a&&n<s-a&&(l=c[i[Math.floor((t-a)/u)*o+Math.floor((n-a)/u)]?1:0]),e[f++]=l.r,e[f++]=l.g,e[f++]=l.b,e[f]=l.a}}}(gt)),gt}function mt(){return ht||(ht=1,function(t){const e=pt();t.render=function(t,n,r){let o=r,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);const u=e.getImageWidth(t.modules.size,o),s=i.getContext("2d"),a=s.createImageData(u,u);return e.qrToImageData(a.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,i,u),s.putImageData(a,0,0),i},t.renderToDataURL=function(e,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=t.render(e,n,o),u=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(u,s.quality)}}(dt)),dt}var wt,Et,yt={};function At(){if(wt)return yt;wt=1;const t=pt();function e(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function n(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}return yt.render=function(r,o,i){const u=t.getOptions(o),s=r.modules.size,a=r.modules.data,c=s+2*u.margin,f=u.color.light.a?"<path "+e(u.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+e(u.color.dark,"stroke")+' d="'+function(t,e,r){let o="",i=0,u=!1,s=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),f=Math.floor(a/e);c||u||(u=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(o+=u?n("M",c+r,.5+f+r):n("m",i,0),i=0,u=!1),c+1<e&&t[a+1]||(o+=n("h",s),s=0)):i++}return o}(a,s,u.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(u.width?'width="'+u.width+'" height="'+u.width+'" ':"")+h+' shape-rendering="crispEdges">'+f+l+"</svg>\n";return"function"==typeof i&&i(null,d),d},yt}var Ct=function(){if(Et)return u;Et=1;const t=s(),e=ft(),n=mt(),r=At();function o(n,r,o,i,u){const s=[].slice.call(arguments,1),a=s.length,c="function"==typeof s[a-1];if(!c&&!t())throw new Error("Callback required as last argument");if(!c){if(a<1)throw new Error("Too few arguments provided");return 1===a?(o=r,r=i=void 0):2!==a||r.getContext||(i=o,o=r,r=void 0),new Promise((function(t,u){try{const u=e.create(o,i);t(n(u,r,i))}catch(s){u(s)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(u=o,o=r,r=i=void 0):3===a&&(r.getContext&&void 0===u?(u=i,i=void 0):(u=i,i=o,o=r,r=void 0));try{const t=e.create(o,i);u(null,n(t,r,i))}catch(f){u(f)}}return u.create=e.create,u.toCanvas=o.bind(null,n.render),u.toDataURL=o.bind(null,n.renderToDataURL),u.toString=o.bind(null,(function(t,e,n){return r.render(t,n)})),u}();const vt=n(Ct),Bt=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(t){const e=VueDemi.ref();return VueDemi.watch((()=>t.config.url),((t="")=>{vt.toDataURL(t,((t,n)=>{t&&console.error(t),e.value=n}))}),{immediate:!0}),r({config:t.config,methods:{},iteratorContainerId:t.iteratorContainerId,iteratorIndex:t.iteratorIndex}),{imgUrl:e}}}),It=["src"];t("default",o(Bt,[["render",function(t,e,n,r,o,i){return Vue.openBlock(),Vue.createElementBlock("img",{src:t.imgUrl},null,8,It)}]]))}}}));
//# sourceMappingURL=index-legacy-C6O57Gri.js.map
