"use strict";exports.id=197,exports.ids=[197],exports.modules={5029:(e,t,n)=>{n.d(t,{D:()=>a,U:()=>r});var o=n(5815);function r(e,t,n=1,r){if(0===t)throw(0,o.T)("INVALID_BOOST_VALUE");const a=new Map,s=new Map,i=e.length;for(let n=0;n<i;n++){const o=e[n],r=o.length;for(let e=0;e<r;e++){const[n,r]=o[e],i=r*t,c=a.get(n);void 0!==c?(a.set(n,1.5*c+i),s.set(n,s.get(n)+1)):(a.set(n,i),s.set(n,1))}}const c=[];for(const e of a.entries())c.push(e);const l=c.sort(((e,t)=>t[1]-e[1]));if(1===n)return l;const u=l.length,d=[];for(const e of s.entries())d.push(e);const f=d.sort(((e,t)=>t[1]-e[1]));let p;for(let e=0;e<u&&f[e][1]===r;e++)p=e;if(void 0===p){if(0===n)return[];p=0}if(0===n)return l.slice(0,p+1);const h=p+Math.ceil(100*n*(l.length-p)/100);return l.slice(0,l.length+h)}function a(e,t,n,o,r,a){const{k:s,b:i,d:c}=a;return Math.log(1+(n-t+.5)/(t+.5))*(c+e*(s+1))/(e+s*(1-i+i*o/r))}},7571:(e,t,n)=>{function o(e,t){let n=0;for(let o=0;o<t;o++)n+=e[o]*e[o];return Math.sqrt(n)}function r(e,t,n,r=.8){const a=o(e,n),s=[];for(const[o,[i,c]]of Object.entries(t)){let t=0;for(let o=0;o<n;o++)t+=e[o]*c[o];const l=t/(a*i);l>=r&&s.push([o,l])}return s.sort(((e,t)=>t[1]-e[1]))}n.d(t,{M:()=>r,T:()=>o})},8071:(e,t,n)=>{n.d(t,{F:()=>s});var o=n(5815),r=n(8070);function a(e="desc",t,n){return"asc"===e.toLowerCase()?t[1]-n[1]:n[1]-t[1]}async function s(e,t,n){const s={},l=t.map((([e])=>e)),u=await e.documentsStore.getMultiple(e.data.docs,l),d=Object.keys(n),f=await e.index.getSearchablePropertiesWithTypes(e.data.index);for(const e of d){let t={};if("number"===f[e]){const{ranges:o}=n[e],r=[];for(const e of o)r.push([`${e.from}-${e.to}`,0]);t=Object.fromEntries(r)}s[e]={count:0,values:t}}const p=u.length;for(let e=0;e<p;e++){const t=u[e];for(const e of d){const a=e.includes(".")?await(0,r.Sf)(t,e):t[e],l=f[e];switch(l){case"number":i(n[e].ranges,s[e].values,a);break;case"number[]":{const t=new Set,o=n[e].ranges;for(const n of a)i(o,s[e].values,n,t);break}case"boolean":case"enum":case"string":c(s[e].values,a,l);break;case"boolean[]":case"enum[]":case"string[]":{const t=new Set,n="boolean[]"===l?"boolean":"string";for(const o of a)c(s[e].values,o,n,t);break}default:throw(0,o.T)("FACET_NOT_SUPPORTED",l)}}}for(const e of d)if(s[e].count=Object.keys(s[e].values).length,"string"===f[e]){const t=n;s[e].values=Object.fromEntries(Object.entries(s[e].values).sort(((e,n)=>a(t.sort,e,n))).slice(t.offset??0,t.limit??10))}return s}function i(e,t,n,o){for(const r of e){const e=`${r.from}-${r.to}`;o&&o.has(e)||n>=r.from&&n<=r.to&&(void 0===t[e]?t[e]=1:(t[e]++,o&&o.add(e)))}}function c(e,t,n,o){const r=(null==t?void 0:t.toString())??("boolean"===n?"false":"");o&&o.has(r)||(e[r]=(e[r]??0)+1,o&&o.add(r))}},3523:(e,t,n)=>{function o(e,t){const n=new Map,o=[];for(const t of e)n.set(t,!0);for(const[e,r]of t)n.has(e)&&(o.push([e,r]),n.delete(e));return o}n.d(t,{u:()=>o})},889:(e,t,n)=>{n.d(t,{j:()=>c});var o=n(5815),r=n(8070),a=n(3714);const s={reducer:(e,t,n,o)=>(t[o]=n,t),getInitialValue:e=>Array.from({length:e})},i=["string","number","boolean"];async function c(e,t,n){const c=n.properties,u=c.length,d=await e.index.getSearchablePropertiesWithTypes(e.data.index);for(let e=0;e<u;e++){const t=c[e];if(void 0===d[t])throw(0,o.T)("UNKNOWN_GROUP_BY_PROPERTY",t);if(!i.includes(d[t]))throw(0,o.T)("INVALID_GROUP_BY_PROPERTY",t,i.join(", "),d[t])}const f=t.map((([t])=>(0,a.K7)(e.internalDocumentIDStore,t))),p=await e.documentsStore.getMultiple(e.data.docs,f),h=p.length,m=n.maxResult||Number.MAX_SAFE_INTEGER,g=[],I={};for(let e=0;e<u;e++){const t=c[e],n={property:t,perValue:{}},o=new Set;for(let e=0;e<h;e++){const a=p[e],s=await(0,r.Sf)(a,t);if(void 0===s)continue;const i="boolean"!=typeof s?s:""+s;void 0===n.perValue[i]&&(n.perValue[i]={indexes:[],count:0}),n.perValue[i].count>=m||(n.perValue[i].indexes.push(e),n.perValue[i].count++,o.add(s))}g.push(Array.from(o)),I[t]=n}const y=l(g),w=y.length,S=[];for(let e=0;e<w;e++){const t=y[e],n=t.length,o={values:[],indexes:[]},a=[];for(let e=0;e<n;e++){const n=t[e],r=c[e];a.push(I[r].perValue["boolean"!=typeof n?n:""+n].indexes),o.values.push(n)}o.indexes=(0,r.wf)(a).sort(((e,t)=>e-t)),0!==o.indexes.length&&S.push(o)}const T=S.length,b=Array.from({length:T});for(let e=0;e<T;e++){const o=S[e],r=n.reduce||s,a=o.indexes.map((e=>({id:f[e],score:t[e][1],document:p[e]}))),i=r.reducer.bind(null,o.values),c=r.getInitialValue(o.indexes.length),l=a.reduce(i,c);b[e]={values:o.values,result:l}}return b}function l(e,t=0){if(t+1===e.length)return e[t].map((e=>[e]));const n=e[t],o=l(e,t+1),a=[];for(const e of n)for(const t of o){const n=[e];(0,r.hT)(n,t),a.push(n)}return a}},7220:(e,t,n)=>{n.d(t,{RI:()=>r,ZI:()=>s,et:()=>c,mX:()=>i,me:()=>o,rf:()=>a});const o=["tokenizer","index","documentsStore","sorter"],r=["validateSchema","getDocumentIndexId","getDocumentProperties","formatElapsedTime"];async function a(e,t,n,o){const r=e.length;for(let a=0;a<r;a++)await e[a](t,n,o)}async function s(e,t,n){const o=e.length;for(let r=0;r<o;r++)await e[r](t,n)}async function i(e,t,n,o,r){const a=e.length;for(let s=0;s<a;s++)await e[s](t,n,o,r)}async function c(e,t,n,o){const r=e.length;for(let a=0;a<r;a++)await e[a](t,n,o)}},3714:(e,t,n)=>{function o(){return{idToInternalId:new Map,internalIdToId:[],save:r,load:a}}function r(e){return{internalIdToId:e.internalIdToId}}function a(e,t){const{internalIdToId:n}=t;e.internalDocumentIDStore.idToInternalId.clear(),e.internalDocumentIDStore.internalIdToId=[];for(let t=0;t<n.length;t++)e.internalDocumentIDStore.idToInternalId.set(n[t],t+1),e.internalDocumentIDStore.internalIdToId.push(n[t])}function s(e,t){if("string"==typeof t){const n=e.idToInternalId.get(t);if(n)return n;const o=e.idToInternalId.size+1;return e.idToInternalId.set(t,o),e.internalIdToId.push(t),o}return t>e.internalIdToId.length?s(e,t.toString()):t}function i(e,t){if(e.internalIdToId.length<t)throw new Error(`Invalid internalId ${t}`);return e.internalIdToId[t-1]}n.d(t,{HM:()=>s,K7:()=>i,Lo:()=>o})},2084:(e,t,n)=>{n.d(t,{E7:()=>r,zr:()=>o});const o={dutch:/[^A-Za-zàèéìòóù0-9_'-]+/gim,english:/[^A-Za-zàèéìòóù0-9_'-]+/gim,french:/[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,italian:/[^A-Za-zàèéìòóù0-9_'-]+/gim,norwegian:/[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,portuguese:/[^a-z0-9à-úÀ-Ú]/gim,russian:/[^a-z0-9а-яА-ЯёЁ]+/gim,spanish:/[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,swedish:/[^a-z0-9_åÅäÄöÖüÜ-]+/gim,german:/[^a-z0-9A-ZäöüÄÖÜß]+/gim,finnish:/[^a-z0-9äöÄÖ]+/gim,danish:/[^a-z0-9æøåÆØÅ]+/gim,hungarian:/[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,romanian:/[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,serbian:/[^a-z0-9čćžšđČĆŽŠĐ]+/gim,turkish:/[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,lithuanian:/[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,arabic:/[^a-z0-9أ-ي]+/gim,nepali:/[^a-z0-9अ-ह]+/gim,irish:/[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,indian:/[^a-z0-9अ-ह]+/gim,armenian:/[^a-z0-9ա-ֆ]+/gim,greek:/[^a-z0-9α-ωά-ώ]+/gim,indonesian:/[^a-z0-9]+/gim,ukrainian:/[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,slovenian:/[^a-z0-9čžšČŽŠ]+/gim,bulgarian:/[^a-z0-9а-яА-Я]+/gim,tamil:/[^a-z0-9அ-ஹ]+/gim,sanskrit:/[^a-z0-9A-Zāīūṛḷṃṁḥśṣṭḍṇṅñḻḹṝ]+/gim},r=Object.keys({arabic:"ar",armenian:"am",bulgarian:"bg",danish:"dk",dutch:"nl",english:"en",finnish:"fi",french:"fr",german:"de",greek:"gr",hungarian:"hu",indian:"in",indonesian:"id",irish:"ie",italian:"it",lithuanian:"lt",nepali:"np",norwegian:"no",portuguese:"pt",romanian:"ro",russian:"ru",serbian:"rs",slovenian:"ru",spanish:"es",swedish:"se",tamil:"ta",turkish:"tr",ukrainian:"uk",sanskrit:"sk"})},5815:(e,t,n)=>{n.d(t,{T:()=>s});var o=n(2084),r=n(8070);const a={NO_LANGUAGE_WITH_CUSTOM_TOKENIZER:"Do not pass the language option to create when using a custom tokenizer.",LANGUAGE_NOT_SUPPORTED:`Language "%s" is not supported.\nSupported languages are:\n - ${o.E7.join("\n - ")}`,INVALID_STEMMER_FUNCTION_TYPE:"config.stemmer property must be a function.",MISSING_STEMMER:'As of version 1.0.0 @orama/orama does not ship non English stemmers by default. To solve this, please explicitly import and specify the "%s" stemmer from the package @orama/stemmers. See https://docs.oramasearch.com/open-source/text-analysis/stemming for more information.',CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY:"Custom stop words array must only contain strings.",UNSUPPORTED_COMPONENT:'Unsupported component "%s".',COMPONENT_MUST_BE_FUNCTION:'The component "%s" must be a function.',COMPONENT_MUST_BE_FUNCTION_OR_ARRAY_FUNCTIONS:'The component "%s" must be a function or an array of functions.',INVALID_SCHEMA_TYPE:'Unsupported schema type "%s" at "%s". Expected "string", "boolean" or "number" or array of them.',DOCUMENT_ID_MUST_BE_STRING:'Document id must be of type "string". Got "%s" instead.',DOCUMENT_ALREADY_EXISTS:'A document with id "%s" already exists.',DOCUMENT_DOES_NOT_EXIST:'A document with id "%s" does not exists.',MISSING_DOCUMENT_PROPERTY:'Missing searchable property "%s".',INVALID_DOCUMENT_PROPERTY:'Invalid document property "%s": expected "%s", got "%s"',UNKNOWN_INDEX:'Invalid property name "%s". Expected a wildcard string ("*") or array containing one of the following properties: %s',INVALID_BOOST_VALUE:"Boost value must be a number greater than, or less than 0.",INVALID_FILTER_OPERATION:"You can only use one operation per filter, you requested %d.",SCHEMA_VALIDATION_FAILURE:'Cannot insert document due schema validation failure on "%s" property.',INVALID_SORT_SCHEMA_TYPE:'Unsupported sort schema type "%s" at "%s". Expected "string" or "number".',CANNOT_SORT_BY_ARRAY:'Cannot configure sort for "%s" because it is an array (%s).',UNABLE_TO_SORT_ON_UNKNOWN_FIELD:'Unable to sort on unknown field "%s". Allowed fields: %s',SORT_DISABLED:"Sort is disabled. Please read the documentation at https://docs.oramasearch for more information.",UNKNOWN_GROUP_BY_PROPERTY:'Unknown groupBy property "%s".',INVALID_GROUP_BY_PROPERTY:'Invalid groupBy property "%s". Allowed types: "%s", but given "%s".',UNKNOWN_FILTER_PROPERTY:'Unknown filter property "%s".',INVALID_VECTOR_SIZE:'Vector size must be a number greater than 0. Got "%s" instead.',INVALID_VECTOR_VALUE:'Vector value must be a number greater than 0. Got "%s" instead.',INVALID_INPUT_VECTOR:'Property "%s" was declared as a %s-dimensional vector, but got a %s-dimensional vector instead.\nInput vectors must be of the size declared in the schema, as calculating similarity between vectors of different sizes can lead to unexpected results.',WRONG_SEARCH_PROPERTY_TYPE:'Property "%s" is not searchable. Only "string" properties are searchable.',FACET_NOT_SUPPORTED:'Facet doens\'t support the type "%s".',INVALID_DISTANCE_SUFFIX:'Invalid distance suffix "%s". Valid suffixes are: cm, m, km, mi, yd, ft.',INVALID_SEARCH_MODE:'Invalid search mode "%s". Valid modes are: "fulltext", "vector", "hybrid".',MISSING_VECTOR_AND_SECURE_PROXY:"No vector was provided and no secure proxy was configured. Please provide a vector or configure an Orama Secure Proxy to perform hybrid search.",MISSING_TERM:'"term" is a required parameter when performing hybrid search. Please provide a search term.',INVALID_VECTOR_INPUT:'Invalid "vector" property. Expected an object with "value" and "property" properties, but got "%s" instead.',PLUGIN_CRASHED:"A plugin crashed during initialization. Please check the error message for more information:"};function s(e,...t){const n=new Error((0,r.gB)(a[e]??`Unsupported Orama Error code: ${e}`,...t));return n.code=e,"captureStackTrace"in Error.prototype&&Error.captureStackTrace(n),n}},3158:(e,t,n)=>{n.r(t),n.d(t,{searchVector:()=>f});var o=n(3566),r=n(8070),a=n(8071),s=n(5815),i=n(7571),c=n(3523),l=n(889),u=n(3714),d=n(7220);async function f(e,t,n="english"){const f=await(0,r.XN)();e.beforeSearch&&await(0,d.et)(e.beforeSearch,e,t,n);const{vector:p}=t;if(p&&(!("value"in p)||!("property"in p)))throw(0,s.T)("INVALID_VECTOR_INPUT",Object.keys(p).join(", "));const{limit:h=10,offset:m=0,includeVectors:g=!1}=t,I=e.data.index.vectorIndexes[p.property],y=I.size,w=I.vectors,S=t.facets&&Object.keys(t.facets).length>0,T=Object.keys(t.where??{}).length>0,{index:b,docs:_}=e.data;if((null==p?void 0:p.value.length)!==y)throw(0,s.T)("INVALID_INPUT_VECTOR",null==p?void 0:p.property,y,null==p?void 0:p.value.length);p instanceof Float32Array||(p.value=new Float32Array(p.value));let O=(0,i.M)(p.value,w,y,t.similarity).map((([t,n])=>[(0,u.HM)(e.internalDocumentIDStore,t),n])),N=e.caches.propertiesToSearch;if(!N){const t=await e.index.getSearchablePropertiesWithTypes(b);N=await e.index.getSearchableProperties(b),N=N.filter((e=>t[e].startsWith("string"))),e.caches.propertiesToSearch=N}const v=await(0,o.createSearchContext)(e.tokenizer,e.index,e.documentsStore,n,t,N,[],await e.documentsStore.count(_),f);let E=[];T&&(E=await e.index.searchByWhereClause(v,b,t.where),O=(0,c.u)(E,O));let D=[];S&&(D=await(0,a.F)(e,O,t.facets));const x=Array.from({length:h});for(let t=0;t<h;t++){const n=O[t+m];if(!n)break;const o=e.data.docs.docs[n[0]];if(o){g||(o[p.property]=null);const r={id:(0,u.K7)(e.internalDocumentIDStore,n[0]),score:n[1],document:o};x[t]=r}}let A=[];t.groupBy&&(A=await(0,l.j)(e,O,t.groupBy)),e.afterSearch&&await(0,d.mX)(e.afterSearch,e,t,n,O);const M=await(0,r.XN)()-f;return{count:O.length,hits:x.filter(Boolean),elapsed:{raw:Number(M),formatted:await(0,r.Ed)(M)},...D?{facets:D}:{},...A?{groups:A}:{}}}},3566:(e,t,n)=>{n.r(t),n.d(t,{createSearchContext:()=>b,defaultBM25Params:()=>T,fetchDocuments:()=>N,fetchDocumentsWithDistinct:()=>O,search:()=>_});var o=n(3714),r=n(5815),a=n(8070);const s="fulltext",i="hybrid",c="vector";var l=n(3523),u=n(5029),d=n(8071),f=n(889),p=n(7220),h=n(3158),m=n(7571);async function g(e,t,n){const o=await(0,a.XN)();t.relevance=Object.assign(t.relevance??{},T);const{term:s,properties:i,threshold:c=1}=t,{index:l,docs:d}=e.data,f=await e.tokenizer.tokenize(s??"",n);let p=e.caches.propertiesToSearch;if(!p){const t=await e.index.getSearchablePropertiesWithTypes(l);p=await e.index.getSearchableProperties(l),p=p.filter((e=>t[e].startsWith("string"))),e.caches.propertiesToSearch=p}if(i&&"*"!==i){for(const e of i)if(!p.includes(e))throw(0,r.T)("UNKNOWN_INDEX",e,p.join(", "));p=p.filter((e=>i.includes(e)))}const h=await b(e.tokenizer,e.index,e.documentsStore,n,t,p,f,await e.documentsStore.count(d),o),m=f.length;if(m||i&&i.length>0){const n=p.length;for(let o=0;o<n;o++){var g;const n=p[o];if(0!==m)for(let t=0;t<m;t++){const o=f[t],r=await e.index.search(h,l,n,o);(0,a.hT)(h.indexMap[n][o],r)}else{h.indexMap[n][""]=[];const t=await e.index.search(h,l,n,"");(0,a.hT)(h.indexMap[n][""],t)}const r=h.indexMap[n],s=Object.values(r);h.docsIntersection[n]=(0,u.U)(s,(null==t||null===(g=t.boost)||void 0===g?void 0:g[n])??1,c,m);const i=h.docsIntersection[n],d=i.length;for(let e=0;e<d;e++){const[t,n]=i[e],o=h.uniqueDocsIDs[t];h.uniqueDocsIDs[t]=o?o+n+.5:n}}}else 0===f.length&&s?h.uniqueDocsIDs={}:h.uniqueDocsIDs=Object.fromEntries(Object.keys(await e.documentsStore.getAll(e.data.docs)).map((e=>[e,0])));return y(Object.entries(h.uniqueDocsIDs).map((([e,t])=>[+e,t])).sort(((e,t)=>t[1]-e[1])))}async function I(e,t){const n=t.vector,a=e.data.index.vectorIndexes[null==n?void 0:n.property],s=a.size,i=a.vectors;if(n&&(!n.value||!n.property))throw(0,r.T)("INVALID_VECTOR_INPUT",Object.keys(n).join(", "));if(n.value.length!==s)throw(0,r.T)("INVALID_INPUT_VECTOR",n.property,s,n.value.length);return n instanceof Float32Array||(n.value=new Float32Array(n.value)),y((0,m.M)(n.value,i,s,t.similarity).map((([t,n])=>[(0,o.HM)(e.internalDocumentIDStore,t),n])))}function y(e){const t=Math.max(...e.map((([,e])=>e)));return e.map((([e,n])=>[e,n/t]))}function w(e,t){return e/t}function S(e,t,n,o){return e*n+t*o}const T={k:1.2,b:.75,d:.5};async function b(e,t,n,o,r,a,s,i,c){const l={},u={};for(const e of a){const t={};for(const e of s)t[e]=[];l[e]=t,u[e]=[]}return{timeStart:c,tokenizer:e,index:t,documentsStore:n,language:o,params:r,docsCount:i,uniqueDocsIDs:{},indexMap:l,docsIntersection:u}}async function _(e,t,n){const m=t.mode??s;if(m===s)return async function(e,t,n){const s=await(0,a.XN)();e.beforeSearch&&await(0,p.et)(e.beforeSearch,e,t,n),t.relevance=Object.assign(t.relevance??{},T);const i=Object.keys(e.data.index.vectorIndexes),c=t.facets&&Object.keys(t.facets).length>0,{limit:h=10,offset:m=0,term:g,properties:I,threshold:y=1,distinctOn:w,includeVectors:S=!1}=t,_=!0===t.preflight,{index:v,docs:E}=e.data,D=await e.tokenizer.tokenize(g??"",n);let x=e.caches.propertiesToSearch;if(!x){const t=await e.index.getSearchablePropertiesWithTypes(v);x=await e.index.getSearchableProperties(v),x=x.filter((e=>t[e].startsWith("string"))),e.caches.propertiesToSearch=x}if(I&&"*"!==I){for(const e of I)if(!x.includes(e))throw(0,r.T)("UNKNOWN_INDEX",e,x.join(", "));x=x.filter((e=>I.includes(e)))}const A=await b(e.tokenizer,e.index,e.documentsStore,n,t,x,D,await e.documentsStore.count(E),s),M=Object.keys(t.where??{}).length>0;let P=[];M&&(P=await e.index.searchByWhereClause(A,v,t.where));const R=D.length;if(R||I&&I.length>0){const n=x.length;for(let o=0;o<n;o++){var k;const n=x[o];if(0!==R)for(let t=0;t<R;t++){const o=D[t],r=await e.index.search(A,v,n,o);(0,a.hT)(A.indexMap[n][o],r)}else{A.indexMap[n][""]=[];const t=await e.index.search(A,v,n,"");(0,a.hT)(A.indexMap[n][""],t)}const r=A.indexMap[n],s=Object.values(r);A.docsIntersection[n]=(0,u.U)(s,(null==t||null===(k=t.boost)||void 0===k?void 0:k[n])??1,y,R);const i=A.docsIntersection[n],c=i.length;for(let e=0;e<c;e++){const[t,n]=i[e],o=A.uniqueDocsIDs[t];A.uniqueDocsIDs[t]=o?o+n+.5:n}}}else 0===D.length&&g?A.uniqueDocsIDs={}:A.uniqueDocsIDs=Object.fromEntries(Object.keys(await e.documentsStore.getAll(e.data.docs)).map((e=>[e,0])));let U,B=Object.entries(A.uniqueDocsIDs).map((([e,t])=>[+e,t]));if(M&&(B=(0,l.u)(P,B)),t.sortBy)if("function"==typeof t.sortBy){const n=B.map((([e])=>e)),o=(await e.documentsStore.getMultiple(e.data.docs,n)).map(((e,t)=>[B[t][0],B[t][1],e]));o.sort(t.sortBy),B=o.map((([e,t])=>[e,t]))}else B=await e.sorter.sortBy(e.data.sorting,B,t.sortBy).then((t=>t.map((([t,n])=>[(0,o.HM)(e.internalDocumentIDStore,t),n]))));else B=B.sort(a.XO);!_&&w?U=await O(e,B,m,h,w):_||(U=await N(e,B,m,h));const V={elapsed:{formatted:"",raw:0},hits:[],count:B.length};if(void 0!==U&&(V.hits=U.filter(Boolean),S||(0,a.ZL)(V,i)),c){const n=await(0,d.F)(e,B,t.facets);V.facets=n}return t.groupBy&&(V.groups=await(0,f.j)(e,B,t.groupBy)),e.afterSearch&&await(0,p.mX)(e.afterSearch,e,t,n,V),V.elapsed=await e.formatElapsedTime(await(0,a.XN)()-A.timeStart),V}(e,t,n);if(m===c)return(0,h.searchVector)(e,t);if(m===i)return async function(e,t,n){const o=await(0,a.XN)();e.beforeSearch&&await(0,p.et)(e.beforeSearch,e,t,n);const{offset:s=0,limit:i=10,includeVectors:c=!1}=t,u=t.facets&&Object.keys(t.facets).length>0,[h,m]=await Promise.all([g(e,t,n),I(e,t)]),{index:y,docs:T}=e.data;let _=function(e,t,n){const o=Math.max(...e.map((([,e])=>e))),r=Math.max(...t.map((([,e])=>e))),{textWeight:a,vectorWeight:s}={textWeight:.5,vectorWeight:.5},i=new Map,c=e.length;for(let t=0;t<c;t++){const n=S(w(e[t][1],o),0,a,s);i.set(e[t][0],n)}const l=t.length;for(let e=0;e<l;e++){const n=w(t[e][1],r);if(i.has(t[e][0])){let o=i.get(t[e][0]);i.set(t[e][0],o+=S(0,n,a,s))}else i.set(t[e][0],S(0,n,a,s))}return[...i].sort(((e,t)=>t[1]-e[1]))}(h,m,t.term);const O=await e.tokenizer.tokenize(t.term??"",n);let v=e.caches.propertiesToSearch;if(!v){const t=await e.index.getSearchablePropertiesWithTypes(y);v=await e.index.getSearchableProperties(y),v=v.filter((e=>t[e].startsWith("string"))),e.caches.propertiesToSearch=v}if(t.properties&&"*"!==t.properties){for(const e of t.properties)if(!v.includes(e))throw(0,r.T)("UNKNOWN_INDEX",e,v.join(", "));v=v.filter((e=>t.properties.includes(e)))}const E=await b(e.tokenizer,e.index,e.documentsStore,n,t,v,O,await e.documentsStore.count(T),o);let D,x,A=[];Object.keys(t.where??{}).length>0&&(A=await e.index.searchByWhereClause(E,y,t.where),_=(0,l.u)(A,_).slice(s,s+i)),u&&(D=await(0,d.F)(e,_,t.facets)),t.groupBy&&(x=await(0,f.j)(e,_,t.groupBy));const M=(await N(e,_,s,i)).filter(Boolean);e.afterSearch&&await(0,p.mX)(e.afterSearch,e,t,n,M);const P=await(0,a.XN)(),R={count:_.length,elapsed:{raw:Number(P-o),formatted:await(0,a.Ed)(P-o)},hits:M,...D?{facets:D}:{},...x?{groups:x}:{}};if(!c){const t=Object.keys(e.data.index.vectorIndexes);(0,a.ZL)(R,t)}return R}(e,t);throw(0,r.T)("INVALID_SEARCH_MODE",m)}async function O(e,t,n,r,s){const i=e.data.docs,c=new Map,l=[],u=new Set,d=t.length;let f=0;for(let p=0;p<d;p++){const d=t[p];if(void 0===d)continue;const[h,m]=d;if(u.has(h))continue;const g=await e.documentsStore.get(i,h),I=await(0,a.Sf)(g,s);if(void 0!==I&&!c.has(I)&&(c.set(I,!0),f++,!(f<=n)&&(l.push({id:(0,o.K7)(e.internalDocumentIDStore,h),score:m,document:g}),u.add(h),f>=n+r)))break}return l}async function N(e,t,n,r){const a=e.data.docs,s=Array.from({length:r}),i=new Set;for(let c=n;c<r+n;c++){const n=t[c];if(void 0===n)break;const[r,l]=n;if(!i.has(r)){const t=await e.documentsStore.get(a,r);s[c]={id:(0,o.K7)(e.internalDocumentIDStore,r),score:l,document:t},i.add(r)}}return s}},8070:(e,t,n)=>{n.d(t,{EL:()=>I,Ed:()=>m,Mo:()=>O,OX:()=>T,Sf:()=>b,XN:()=>g,XO:()=>w,ZL:()=>N,eg:()=>y,gB:()=>f,hT:()=>d,td:()=>p,wf:()=>S});var o=n(5815);const r=Date.now().toString().slice(5);let a=0;const s=1024,i=BigInt(1e3),c=BigInt(1e6),l=BigInt(1e9),u=65535;function d(e,t){if(t.length<u)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;n+=u)Array.prototype.push.apply(e,t.slice(n,n+u))}function f(e,...t){return e.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g,(function(...e){const n=e[e.length-1],{width:o,type:r,position:a}=n,s=a?t[Number.parseInt(a)-1]:t.shift(),i=""===o?0:Number.parseInt(o);switch(r){case"d":return s.toString().padStart(i,"0");case"f":{let e=s;const[t,n]=o.split(".").map((e=>Number.parseFloat(e)));return"number"==typeof n&&n>=0&&(e=e.toFixed(n)),"number"==typeof t&&t>=0?e.toString().padStart(i,"0"):e.toString()}case"s":return i<0?s.toString().padEnd(-i," "):s.toString().padStart(i," ");default:return s}}))}async function p(e,t=2){if(0===e)return"0 Bytes";const n=t<0?0:t,o=Math.floor(Math.log(e)/Math.log(s));return`${parseFloat((e/Math.pow(s,o)).toFixed(n))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`}function h(){return BigInt(Math.floor(1e6*performance.now()))}async function m(e){return"number"==typeof e&&(e=BigInt(e)),e<i?`${e}ns`:e<c?e/i+"μs":e<l?e/c+"ms":e/l+"s"}async function g(){return"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?h():"undefined"!=typeof process&&process.release&&"node"===process.release.name||"undefined"!=typeof process&&void 0!==process.hrtime?process.hrtime.bigint():"undefined"!=typeof performance?h():BigInt(0)}async function I(){return`${r}-${a++}`}function y(e,t){return void 0===Object.hasOwn?Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0:Object.hasOwn(e,t)?e[t]:void 0}function w(e,t){return t[1]===e[1]?e[0]-t[0]:t[1]-e[1]}function S(e){if(0===e.length)return[];if(1===e.length)return e[0];for(let t=1;t<e.length;t++)if(e[t].length<e[0].length){const n=e[0];e[0]=e[t],e[t]=n}const t=new Map;for(const n of e[0])t.set(n,1);for(let n=1;n<e.length;n++){let o=0;for(const r of e[n]){const e=t.get(r);e===n&&(t.set(r,e+1),o++)}if(0===o)return[]}return e[0].filter((n=>{const o=t.get(n);return void 0!==o&&t.set(n,0),o===e.length}))}async function T(e,t){const n={},o=t.length;for(let r=0;r<o;r++){const o=t[r],a=o.split(".");let s=e;const i=a.length;for(let e=0;e<i;e++)if(s=s[a[e]],"object"==typeof s){if(null!==s&&"lat"in s&&"lon"in s&&"number"==typeof s.lat&&"number"==typeof s.lon){s=n[o]=s;break}if(!Array.isArray(s)&&null!==s&&e===i-1){s=void 0;break}}else if((null===s||"object"!=typeof s)&&e<i-1){s=void 0;break}void 0!==s&&(n[o]=s)}return n}async function b(e,t){return(await T(e,[t]))[t]}const _={cm:.01,m:1,km:1e3,ft:.3048,yd:.9144,mi:1609.344};function O(e,t){const n=_[t];if(void 0===n)throw new Error((0,o.T)("INVALID_DISTANCE_SUFFIX",e).message);return e*n}function N(e,t){e.hits=e.hits.map((e=>({...e,document:{...e.document,...t.reduce(((e,t)=>{const n=t.split("."),o=n.pop();let r=e;for(const e of n)r[e]=r[e]??{},r=r[e];return r[o]=null,e}),e.document)}})))}}};
//# sourceMappingURL=197.index.js.map