(this["webpackJsonprumpel-react"]=this["webpackJsonprumpel-react"]||[]).push([[6],{12:function(t,e,n){"use strict";var r,a;n.d(e,"a",(function(){return r})),function(t){t.EDIT_HAT_CLAIM="EDIT_HAT_CLAIM",t.EDIT_HAT_PASSWORD="EDIT_HAT_PASSWORD",t.EDIT_CURRENT_STEP="EDIT_CURRENT_STEP",t.EDIT_HAT_CLAIM_ERROR_MSG="EDIT_HAT_CLAIM_ERROR_MSG"}(r||(r={})),function(t){t.EDIT_HAT_CLAIM_TEST="EDIT_HAT_CLAIM_TEST",t.EDIT_HAT_PASSWORD_TEST="EDIT_HAT_PASSWORD_TEST",t.EDIT_CURRENT_STEP_TEST="EDIT_CURRENT_STEP_TEST",t.EDIT_HAT_CLAIM_ERROR_MSG_TEST="EDIT_HAT_CLAIM_ERROR_MSG_TEST"}(a||(a={}))},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n(1),a=n.n(r),c=n(3),i=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{method:"get"},t.next=3,u(new Request(e,n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:{method:"post",body:JSON.stringify(n)},t.next=3,u(new Request(e,r));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(t){return new Promise((function(e,n){var r;fetch(t).then((function(t){return r=t,t.json()})).then((function(t){r.ok?(r.parsedBody=t,e(r)):n(t)})).catch((function(t){n(t)}))}))}},18:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f}));n(1),n(3);var r=n(32),a=n(4),c=(n(7),Object(a.b)({name:"hmi",initialState:{parentApp:null,dependencyApps:[]},reducers:{parentApp:function(t,e){t.parentApp=e.payload},dependencyApps:function(t,e){var n;(n=t.dependencyApps).push.apply(n,Object(r.a)(e.payload))}}})),i=c.actions,o=i.parentApp,u=i.dependencyApps,s=function(t){return function(e){e(o(t))}},p=function(t){return function(e){e(u(t))}},l=function(t){return t.hmi.parentApp},f=function(t){return t.hmi.dependencyApps};e.a=c.reducer},21:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return g}));var r,a=n(4),c=n(15),i=n(23),o={version:"4.0.0.0",name:i.a.appName,tokenApp:i.a.tokenName,tokenExpiryTime:3,supportedDomains:[".hubofallthings.net",".hubat.net",".hat.direct",".dataswift.me",".dataswift.dev"],supportedPorts:[3e3,9e3,9001],native:i.a.native,protocol:i.a.protocol,links:{bestPractices:"https://docs.dataswift.io/technology/why/security-best-practice",termsOfService:"https://cdn.dataswift.io/legal/hat-owner-terms-of-service.pdf",privacyPolicy:"https://cdn.dataswift.io/legal/dataswift-privacy-policy.pdf"}},u=n(30),s=n(84),p=n(85);!function(t){t.LOGIN_REQUEST="login_request",t.LOGIN_FAILED="login_failed"}(r||(r={}));var l={isAuthenticated:!1,authState:r.LOGIN_REQUEST,rememberMe:!1},f=Object(a.b)({name:"authentication",initialState:l,reducers:{authenticateWithToken:function(t,e){t.token=e.payload,t.isAuthenticated=!0},loginAuthState:function(t,e){t.authState=e.payload}}}),d=f.actions,h=d.authenticateWithToken,v=d.loginAuthState,m=function(t){return function(e){try{b(c.HatTokenValidation.decodeToken(t))?(e(h(t)),window.sessionStorage.setItem("token",t)):e(v(r.LOGIN_FAILED))}catch(n){e(v(r.LOGIN_FAILED))}}},b=function(t){var e,n=Object(u.a)(1e3*t.exp),r=Object(u.a)(1e3*t.iat),a=t.application===o.tokenApp||"owner"===t.accessScope,c=(null===(e=t.iss)||void 0===e?void 0:e.slice(t.iss.indexOf(".")))||"",i=o.supportedDomains.indexOf(c)>-1,l=new RegExp("^[w.]+:"+o.supportedPorts.join("|")+"$","gi").test(c),f=Object(s.a)(n)&&Object(s.a)(Object(p.a)(r,o.tokenExpiryTime));return a&&(i||l)&&f},g=function(t){return t.authentication.isAuthenticated};e.a=f.reducer},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={production:!0,sandbox:!1,native:!0,protocol:"https:",appName:"Rumpel",tokenName:"hatapp"}},29:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return p}));var r=n(1),a=n.n(r),c=n(3),i=n(4),o=Object(i.b)({name:"messages",initialState:{},reducers:{messages:function(t,e){Object.assign(t,e.payload)}}}),u=o.actions.messages,s=function(t){return t.messages},p=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.e(2).then(n.t.bind(null,82,3)).then((function(t){var n,r=t.default;return e((n=r,function(t){t(u(n))}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=o.reducer},42:function(t,e,n){"use strict";n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return v}));var r=n(1),a=n.n(r),c=n(3),i=n(4),o=n(7),u=n(18),s=Object(i.b)({name:"hatSetupLogin",initialState:{errorMessage:"",redirectError:{error:"",errorReason:""}},reducers:{errorMessage:function(t,e){t.errorMessage=e.payload},redirectError:function(t,e){t.redirectError.error=e.payload.error,t.redirectError.errorReason=e.payload.errorReason}}}),p=s.actions,l=(p.errorMessage,p.redirectError),f=function(t,e){return function(n){n(l({error:t,errorReason:e}))}},d=function(t){return t.hatSetupLogin.redirectError},h=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(m(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.a.getInstance(),t.prev=1,t.next=4,n.sendReport("hmi_declined");case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(1),t.abrupt("return","error ".concat(t.t0));case 9:return t.prev=9,n.logout(),e(f("access_denied","user_cancelled")),t.finish(9);case 13:case"end":return t.stop()}}),t,null,[[1,6,9,13]])})));return function(e){return t.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getInstance().setupApplication(t);case 3:if(!(null===(r=e.sent)||void 0===r?void 0:r.parsedBody)){e.next=6;break}return e.abrupt("return",n(Object(u.e)(r.parsedBody)));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};e.a=s.reducer},44:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return v}));var r=n(1),a=n.n(r),c=n(3),i=n(32),o=n(4),u=n(16),s=n(7),p=Object(o.b)({name:"applications",initialState:{applications:[],expirationTime:20},reducers:{apps:function(t,e){var n;(n=t.applications).push.apply(n,Object(i.a)(e.payload))}}}),l=p.actions.apps,f=function(t){return function(e){e(l(t))}},d=function(t){return t.applications.applications},h=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/api/applications",t.next=3,Object(u.a)("/api/applications");case 3:if(!(n=t.sent).parsedBody){t.next=6;break}return t.abrupt("return",e(f(n.parsedBody)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.getInstance().getApplicationHmi(t);case 3:(null===(r=e.sent)||void 0===r?void 0:r.parsedBody)&&n(f(r.parsedBody)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};e.a=p.reducer},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),a=n.n(r),c=(n(80),function(t){return a.a.createElement("div",{className:"loading"},a.a.createElement("div",{className:"loading-spinner"}),a.a.createElement("div",{className:"loading-text"},t.loadingText))})},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(8);function a(){return new URLSearchParams(Object(r.h)().search)}},50:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return d}));var r=n(1),a=n.n(r),c=n(3),i=n(4),o=n(7),u=n(18),s=Object(i.b)({name:"hatLogin",initialState:{errorMessage:""},reducers:{errorMessage:function(t,e){t.errorMessage=e.payload}}}),p=s.actions.errorMessage,l=function(t){return function(e){e(p(t))}},f=function(t){return t.hatLogin.errorMessage},d=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getInstance().setupApplication(t);case 3:if(!(null===(r=e.sent)||void 0===r?void 0:r.parsedBody)){e.next=6;break}return e.abrupt("return",n(Object(u.e)(r.parsedBody)));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};e.a=s.reducer},54:function(t,e,n){t.exports=n(81)},59:function(t,e,n){},60:function(t,e,n){},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(1),a=n.n(r),c=n(3),i=n(26),o=n(27),u=n(38),s=n(16),p=n(15),l=function(){function t(e){if(Object(i.a)(this,t),this.pathPrefix="/api/v2.6",this.hat=void 0,this.secure=!1,e){var n,r=p.HatTokenValidation.decodeToken(e);this.secure="https:"===window.location.protocol||-1===(null===(n=r.iss)||void 0===n?void 0:n.indexOf(":")),this.hat=new u.HatClient({token:e||"",secure:this.secure,apiVersion:"v2.6"})}else this.hat=new u.HatClient({apiVersion:"v2.6"})}return Object(o.a)(t,[{key:"logout",value:function(){return this.hat.auth().signOut()}},{key:"getApplications",value:function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.hat.applications().getAllDefault();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getApplicationById",value:function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.hat.applications().getById(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"setupApplication",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.hat.auth().getToken(),r=this.hat.auth().getHatDomain(),n){t.next=4;break}return t.abrupt("return");case 4:return c="".concat(r).concat(this.pathPrefix,"/applications/").concat(e,"/setup"),t.abrupt("return",Object(s.a)(c,{method:"get",headers:{"x-auth-token":n}}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"isTokenExpired",value:function(t){return this.hat.auth().isTokenExpired(t)}},{key:"getApplicationHmi",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.hat.auth().getToken(),r=this.hat.auth().getHatDomain(),n){t.next=4;break}return t.abrupt("return");case 4:return c="".concat(r).concat(this.pathPrefix,"/applications/hmi?applicationId=").concat(e),t.abrupt("return",Object(s.a)(c,{method:"get",headers:{"x-auth-token":n}}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"sendReport",value:function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.hat.auth().getToken(),c=this.hat.auth().getHatDomain(),r){t.next=4;break}return t.abrupt("return");case 4:return i="".concat(c).concat(this.pathPrefix,"/report-frontend-action"),o={actionCode:e,message:n},t.abrupt("return",Object(s.b)(i,{},{method:"post",body:JSON.stringify(o),headers:{"x-auth-token":r,"content-type":"application/json"}}));case 7:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"appLogin",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.hat.auth().getToken(),r=this.hat.auth().getHatDomain(),n){t.next=4;break}return t.abrupt("return");case 4:return c="".concat(r).concat(this.pathPrefix,"/applications/").concat(e,"/access-token"),t.abrupt("return",Object(s.a)(c,{method:"get",headers:{"x-auth-token":n}}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"getInstance",value:function(e){return t.instance||(t.instance=new t(e)),e&&(t.instance=new t(e)),t.instance}}]),t}();l.instance=void 0},80:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(25),i=n.n(c);n(59),n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(49),u=n(8),s=n(26),p=n(27),l=n(39),f=n(40),d=n(53),h=n(47),v=n(13),m=n(21),b=n(48),g=n.n(b),E=n(7);function T(t){var e=t.children,n=Object(d.a)(t,["children"]),c=Object(v.d)(m.c),i=Object(h.a)(),o=Object(v.c)();return Object(r.useEffect)((function(){var t=g.a.get("token")||sessionStorage.getItem("token"),e=i.get("token"),n=E.a.getInstance();e&&!n.isTokenExpired(e)?(o(Object(m.b)(e)),E.a.getInstance(e)):t&&!n.isTokenExpired(t)&&(o(Object(m.b)(t)),E.a.getInstance(t))}),[i,o]),a.a.createElement(u.b,Object.assign({},n,{render:function(t){var n=t.location;return c?e:a.a.createElement(y,{to:{pathname:"/user/login",state:{from:n}},delay:100})}}))}var y=function(t){Object(f.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).timeout=null,t.state={timeToRedirect:!1},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timeout=setTimeout((function(){t.setState({timeToRedirect:!0})}),this.props.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var t=Object.assign({},this.props);return this.state.timeToRedirect?a.a.createElement(u.a,t):null}}]),n}(a.a.Component),O=n(45),k=a.a.lazy((function(){return n.e(3).then(n.bind(null,190))})),w=a.a.lazy((function(){return n.e(9).then(n.bind(null,179))})),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,195))})),j=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,192))})),x=a.a.lazy((function(){return n.e(7).then(n.bind(null,189))})),A=function(){return a.a.createElement(o.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(O.a,{loadingText:"Loading"})},a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/hat/claim/:claimToken",component:k}),a.a.createElement(u.b,{path:"/user/login/",component:w}),a.a.createElement(u.b,{path:"/user/password/recover",component:x}),a.a.createElement(T,{path:"/hatlogin"},a.a.createElement(_,null)),a.a.createElement(T,{path:"/hat-setup-login"},a.a.createElement(j,null)),a.a.createElement(u.b,{exact:!0,path:"/",render:function(t){var e=t.location;return a.a.createElement(u.a,{to:e.hash.replace("#","")})}}))))},S=n(4),I=n(44),R=Object(S.b)({name:"language",initialState:{language:"en"},reducers:{language:function(t,e){t.language=e.payload}}}),D=R.actions.language,M=R.reducer,L=n(29),H=n(50),C=n(42),P=n(18),N=n(20),B=n(31),G=n(12),W={password:"",email:"",hatName:"",hatCluster:"",termsAgreed:!1,optins:!1},U=n(6),z={password:"",passwordConfirm:"",passwordStrength:{score:0},passwordMatch:!1},F=Object(U.c)({hatClaim:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;return e.type===G.a.EDIT_HAT_CLAIM?Object(B.a)({},t,Object(N.a)({},e.name,e.value)):t},currentStep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return e.type===G.a.EDIT_CURRENT_STEP?e.step:t},password:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;return e.type===G.a.EDIT_HAT_PASSWORD?Object(B.a)({},t,Object(N.a)({},e.name,e.value)):t},errorMsg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return e.type===G.a.EDIT_HAT_CLAIM_ERROR_MSG?e.message:t}}),J=Object(S.a)({reducer:{applications:I.a,authentication:m.a,language:M,messages:L.a,hmi:P.a,hatLogin:H.a,hatSetupLogin:C.a,hatClaim:F}}),V=function(t){return a.a.createElement(v.a,{store:J},t.children)},q=function(t){var e=Object(v.c)();return Object(r.useEffect)((function(){var t;e((t="en",function(e){e(D(t))})),e(Object(L.b)())}),[e]),a.a.createElement(a.a.Fragment,null,t.children)},Q=function(){return a.a.createElement(V,null,a.a.createElement(q,null,a.a.createElement(A,null)))};i.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[54,8,10]]]);
//# sourceMappingURL=main.b2095975.chunk.js.map