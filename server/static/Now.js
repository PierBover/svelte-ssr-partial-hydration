!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(t){return Array.from(t.childNodes)}function l(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):i(n)}let s;function d(t){s=t}function p(t){(function(){if(!s)throw new Error("Function called outside component initialization");return s})().$$.on_mount.push(t)}const h=[],m=[],g=[],$=[],y=Promise.resolve();let w=!1;function _(t){g.push(t)}let b=!1;const x=new Set;function v(){if(!b){b=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];d(n),E(n.$$)}for(h.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(h.length);for(;$.length;)$.pop()();w=!1,b=!1,x.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const N=new Set;function S(t,n){-1===t.$$.dirty[0]&&(h.push(t),w||(w=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,i,f,l,p,h,m=[-1]){const g=s;d(c);const $=i.props||{},y=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:p,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:e(),dirty:m};let w=!1;if(y.ctx=f?f(c,$,(t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&p(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),w&&S(c,t)),n}):[],y.update(),w=!0,o(y.before_update),y.fragment=!!l&&l(y.ctx),i.target){if(i.hydrate){const t=a(i.target);y.fragment&&y.fragment.l(t),t.forEach(u)}else y.fragment&&y.fragment.c();i.intro&&((b=c.$$.fragment)&&b.i&&(N.delete(b),b.i(x))),function(t,e,c){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(e,c),_(()=>{const e=i.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(_)}(c,i.target,i.anchor),v()}var b,x;d(g)}function D(n){let e,o;return{c(){e=i("div"),o=f(n[0])},l(t){e=l(t,"DIV",{});var r=a(e);o=function(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return f(n)}(r,n[0]),r.forEach(u)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),function(t,n){t.appendChild(n)}(e,o)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(o,t[0])},i:t,o:t,d(t){t&&u(e)}}}function j(t,n,e){let o=(new Date).toString();return p(()=>{setInterval(()=>{e(0,o=(new Date).toString())},1e3)}),[o]}window.Now=class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),k(this,t,j,D,c,{})}}}();
