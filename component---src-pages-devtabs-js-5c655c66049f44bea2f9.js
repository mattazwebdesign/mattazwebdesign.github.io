(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6xyR":function(e,t,a){"use strict";var n=a("wx14"),o=a("zLVn"),r=a("TSYQ"),i=a.n(r),s=a("q1tI"),c=a.n(s),l=a("vUet"),d=a("YdCC"),u=a("U1MP"),m=a("Wzyw"),h=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(o.a)(e,["bsPrefix","className","variant","as"]),h=Object(l.b)(a,"card-img");return c.a.createElement(u,Object(n.a)({ref:t,className:i()(s?h+"-"+s:h,r)},m))}));h.displayName="CardImg",h.defaultProps={variant:null};var f=h,p=Object(u.a)("h5"),b=Object(u.a)("h6"),g=Object(d.a)("card-body"),v=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.bg,u=e.text,h=e.border,f=e.body,p=e.children,b=e.as,v=void 0===b?"div":b,y=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),w=Object(l.b)(a,"card"),E=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:w+"-header"}}),[w]);return c.a.createElement(m.a.Provider,{value:E},c.a.createElement(v,Object(n.a)({ref:t},y,{className:i()(r,w,d&&"bg-"+d,u&&"text-"+u,h&&"border-"+h)}),f?c.a.createElement(g,null,p):p))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=f,v.Title=Object(d.a)("card-title",{Component:p}),v.Subtitle=Object(d.a)("card-subtitle",{Component:b}),v.Body=g,v.Link=Object(d.a)("card-link",{Component:"a"}),v.Text=Object(d.a)("card-text",{Component:"p"}),v.Header=Object(d.a)("card-header"),v.Footer=Object(d.a)("card-footer"),v.ImgOverlay=Object(d.a)("card-img-overlay");t.a=v},AvBe:function(e,t,a){e.exports=a.p+"static/devTabsLogo-a525e59a39d2b5faa5943caf3f8b86bb.png"},BZrW:function(e,t,a){"use strict";a.r(t);var n,o=a("q1tI"),r=a.n(o),i=a("Bl7J"),s=a("vrFN"),c=(a("M+du"),a("X/F8")),l=a.n(c),d=a("zLVn"),u=a("wx14"),m=a("dI71"),h=a("TSYQ"),f=a.n(h),p=a("VXAI"),b=a("ctsM"),g=a("stpP"),v=a("UZG4");function y(e){if((!n&&0!==n||e)&&b.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}a("91GP");function w(e){return e&&e.ownerDocument||document}function E(e){void 0===e&&(e=w());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(a){return e.body}}function k(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var N=!("undefined"==typeof window||!window.document||!window.document.createElement),O=!1,x=!1;try{var j={get passive(){return O=!0},get once(){return x=O=!0}};N&&(window.addEventListener("test",j,j),window.removeEventListener("test",j,!0))}catch(it){}var C=function(e,t,a,n){if(n&&"boolean"!=typeof n&&!x){var o=n.once,r=n.capture,i=a;!x&&o&&(i=a.__once||function e(n){this.removeEventListener(t,e,r),a.call(this,n)},a.__once=i),e.addEventListener(t,i,O?n:r)}e.addEventListener(t,a,n)};var I=function(e,t,a,n){var o=n&&"boolean"!=typeof n?n.capture:n;e.removeEventListener(t,a,o),a.__once&&e.removeEventListener(t,a.__once,o)};var T=function(e,t,a,n){return C(e,t,a,n),function(){I(e,t,a,n)}},A=a("i8i4"),R=a.n(A),M=a("XcHJ"),D=a("i52p");var B=a("ZCiN");a("2Spj"),a("KKXr"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("8+KV"),a("V+eJ"),a("dZ+Y");function S(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}a("Oyvg"),a("pIFo");function F(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function P(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=F(e.className,t):e.setAttribute("class",F(e.className&&e.className.baseVal||"",t))}function W(e,t){return function(e){var t=w(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var U=/([A-Z])/g;var H=/^ms-/;function Z(e){return function(e){return e.replace(U,"-$1").toLowerCase()}(e).replace(H,"-ms-")}var G=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var L,J=function(e,t){var a="",n="";if("string"==typeof t)return e.style.getPropertyValue(Z(t))||W(e).getPropertyValue(Z(t));Object.keys(t).forEach((function(o){var r=t[o];r||0===r?!function(e){return!(!e||!G.test(e))}(o)?a+=Z(o)+": "+r+";":n+=o+"("+r+") ":e.style.removeProperty(Z(o))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a};function Y(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function z(e){var t;return Y(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=Y(e)?w():w(e),a=Y(e)||t.defaultView;return t.body.clientWidth<a.innerWidth}(e):e.scrollHeight>e.clientHeight}var Q=["template","script","style"],X=function(e,t,a){[].forEach.call(e.children,(function(e){var n,o,r;-1===t.indexOf(e)&&(o=(n=e).nodeType,r=n.tagName,1===o&&-1===Q.indexOf(r.toLowerCase()))&&a(e)}))};function V(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var q,K=function(){function e(e){var t=void 0===e?{}:e,a=t.hideSiblingNodes,n=void 0===a||a,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=n,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=function(e){if((!L&&0!==L||e)&&N){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),L=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return L}()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return t=this.data,a=function(t){return-1!==t.modals.indexOf(e)},n=-1,t.some((function(e,t){return!!a(e,t)&&(n=t,!0)})),n;var t,a,n},t.setContainerStyle=function(e,t){var a={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(a.paddingRight=parseInt(J(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),J(t,a)},t.removeContainerStyle=function(e,t){var a=e.style;Object.keys(a).forEach((function(e){t.style[e]=a[e]}))},t.add=function(e,t,a){var n=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==n)return n;if(n=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;X(e,[a,n],(function(e){return V(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),n;var r={modals:[e],classes:a?a.split(/\s+/):[],overflowing:z(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(S.bind(null,t)),this.containers.push(t),this.data.push(r),n},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var a=this.containerIndexFromModal(e),n=this.data[a],o=this.containers[a];if(n.modals.splice(n.modals.indexOf(e),1),this.modals.splice(t,1),0===n.modals.length)n.classes.forEach(P.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(n,o),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;X(e,[a,n],(function(e){return V(!1,e)}))}(o,e),this.containers.splice(a,1),this.data.splice(a,1);else if(this.hideSiblingNodes){var r=n.modals[n.modals.length-1],i=r.backdrop;V(!1,r.dialog),V(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),_=function(e){var t;return"undefined"==typeof document?null:null==e?w().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function $(e){var t=e||(q||(q=new K),q),a=Object(o.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(e,n){return t.add(a.current,e,n)},remove:function(){return t.remove(a.current)},isTopModal:function(){return t.isTopModal(a.current)},setDialogRef:Object(o.useCallback)((function(e){a.current.dialog=e}),[]),setBackdropRef:Object(o.useCallback)((function(e){a.current.backdrop=e}),[])})}var ee=Object(o.forwardRef)((function(e,t){var a=e.show,n=void 0!==a&&a,i=e.role,s=void 0===i?"dialog":i,c=e.className,l=e.style,m=e.children,h=e.backdrop,f=void 0===h||h,p=e.keyboard,b=void 0===p||p,g=e.onBackdropClick,v=e.onEscapeKeyDown,y=e.transition,w=e.backdropTransition,O=e.autoFocus,x=void 0===O||O,j=e.enforceFocus,C=void 0===j||j,I=e.restoreFocus,A=void 0===I||I,S=e.restoreFocusOptions,F=e.renderDialog,P=e.renderBackdrop,W=void 0===P?function(e){return r.a.createElement("div",e)}:P,U=e.manager,H=e.container,Z=e.containerClassName,G=e.onShow,L=e.onHide,J=void 0===L?function(){}:L,Y=e.onExit,z=e.onExited,Q=e.onExiting,X=e.onEnter,V=e.onEntering,q=e.onEntered,K=Object(d.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ee=function(e,t){var a=Object(o.useState)((function(){return _(e)})),n=a[0],r=a[1];if(!n){var i=_(e);i&&r(i)}return Object(o.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(o.useEffect)((function(){var t=_(e);t!==n&&r(t)}),[e,n]),n}(H),te=$(U),ae=Object(M.a)(),ne=function(e){var t=Object(o.useRef)(null);return Object(o.useEffect)((function(){t.current=e})),t.current}(n),oe=Object(o.useState)(!n),re=oe[0],ie=oe[1],se=Object(o.useRef)(null);Object(o.useImperativeHandle)(t,(function(){return te}),[te]),N&&!ne&&n&&(se.current=E()),y||n||re?n&&re&&ie(!1):ie(!0);var ce=Object(B.a)((function(){if(te.add(ee,Z),fe.current=T(document,"keydown",me),he.current=T(document,"focus",(function(){return setTimeout(de)}),!0),G&&G(),x){var e=E(document);te.dialog&&e&&!k(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),le=Object(B.a)((function(){var e;(te.remove(),null==fe.current||fe.current(),null==he.current||he.current(),A)&&(null==(e=se.current)||null==e.focus||e.focus(S),se.current=null)}));Object(o.useEffect)((function(){n&&ee&&ce()}),[n,ee,ce]),Object(o.useEffect)((function(){re&&le()}),[re,le]),Object(D.a)((function(){le()}));var de=Object(B.a)((function(){if(C&&ae()&&te.isTopModal()){var e=E();te.dialog&&e&&!k(te.dialog,e)&&te.dialog.focus()}})),ue=Object(B.a)((function(e){e.target===e.currentTarget&&(null==g||g(e),!0===f&&J())})),me=Object(B.a)((function(e){b&&27===e.keyCode&&te.isTopModal()&&(null==v||v(e),e.defaultPrevented||J())})),he=Object(o.useRef)(),fe=Object(o.useRef)(),pe=y;if(!ee||!(n||pe&&!re))return null;var be=Object(u.a)(Object(u.a)({role:s,ref:te.setDialogRef,"aria-modal":"dialog"===s||void 0},K),{},{style:l,className:c,tabIndex:-1}),ge=F?F(be):r.a.createElement("div",be,r.a.cloneElement(m,{role:"document"}));pe&&(ge=r.a.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!n,onExit:Y,onExiting:Q,onExited:function(){ie(!0);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==z||z.apply(void 0,t)},onEnter:X,onEntering:V,onEntered:q},ge));var ve=null;if(f){var ye=w;ve=W({ref:te.setBackdropRef,onClick:ue}),ye&&(ve=r.a.createElement(ye,{appear:!0,in:!!n},ve))}return r.a.createElement(r.a.Fragment,null,R.a.createPortal(r.a.createElement(r.a.Fragment,null,ve,ge),ee))}));ee.displayName="Modal";var te,ae=Object.assign(ee,{Manager:K}),ne=a("ANPE"),oe=a("4L4a"),re=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ie=".sticky-top",se=".navbar-toggler",ce=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).adjustAndStore=function(e,t,a){var n,o=t.style[e];t.dataset[e]=o,Object(ne.a)(t,((n={})[e]=parseFloat(Object(ne.a)(t,e))+a+"px",n))},t.restore=function(e,t){var a,n=t.dataset[e];void 0!==n&&(delete t.dataset[e],Object(ne.a)(t,((a={})[e]=n,a)))},t}Object(m.a)(t,e);var a=t.prototype;return a.setContainerStyle=function(t,a){var n=this;if(e.prototype.setContainerStyle.call(this,t,a),t.overflowing){var o=y();Object(oe.a)(a,re).forEach((function(e){return n.adjustAndStore("paddingRight",e,o)})),Object(oe.a)(a,ie).forEach((function(e){return n.adjustAndStore("margingRight",e,-o)})),Object(oe.a)(a,se).forEach((function(e){return n.adjustAndStore("margingRight",e,o)}))}},a.removeContainerStyle=function(t,a){var n=this;e.prototype.removeContainerStyle.call(this,t,a),Object(oe.a)(a,re).forEach((function(e){return n.restore("paddingRight",e)})),Object(oe.a)(a,ie).forEach((function(e){return n.restore("margingRight",e)})),Object(oe.a)(a,se).forEach((function(e){return n.restore("margingRight",e)}))},t}(K),le=a("CR+v"),de=a("dRu9"),ue=a("z+q/"),me=((te={})[de.b]="show",te[de.a]="show",te),he=r.a.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(d.a)(e,["className","children"]),s=Object(o.useCallback)((function(e){Object(ue.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return r.a.createElement(de.e,Object(u.a)({ref:t,addEndListener:le.a},i,{onEnter:s}),(function(e,t){return r.a.cloneElement(n,Object(u.a)({},t,{className:f()("fade",a,n.props.className,me[e])}))}))}));he.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},he.displayName="Fade";var fe=he,pe=a("YdCC"),be=Object(pe.a)("modal-body"),ge=r.a.createContext({onHide:function(){}}),ve=a("vUet"),ye=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.centered,i=e.size,s=e.children,c=e.scrollable,l=Object(d.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),m=(a=Object(ve.b)(a,"modal"))+"-dialog";return r.a.createElement("div",Object(u.a)({},l,{ref:t,className:f()(m,n,i&&a+"-"+i,o&&m+"-centered",c&&m+"-scrollable")}),r.a.createElement("div",{className:a+"-content"},s))}));ye.displayName="ModalDialog";var we=ye,Ee=Object(pe.a)("modal-footer"),ke=r.a.forwardRef((function(e,t){var a=e.label,n=e.onClick,o=e.className,i=Object(d.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(u.a)({ref:t,type:"button",className:f()("close",o),onClick:n},i),r.a.createElement("span",{"aria-hidden":"true"},"×"),r.a.createElement("span",{className:"sr-only"},a))}));ke.displayName="CloseButton",ke.defaultProps={label:"Close"};var Ne=ke,Oe=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,i=e.closeButton,s=e.onHide,c=e.className,l=e.children,m=Object(d.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);a=Object(ve.b)(a,"modal-header");var h=Object(o.useContext)(ge),p=Object(B.a)((function(){h&&h.onHide(),s&&s()}));return r.a.createElement("div",Object(u.a)({ref:t},m,{className:f()(c,a)}),l,i&&r.a.createElement(Ne,{label:n,onClick:p}))}));Oe.displayName="ModalHeader",Oe.defaultProps={closeLabel:"Close",closeButton:!1};var xe,je=Oe,Ce=a("U1MP"),Ie=Object(Ce.a)("h4"),Te=Object(pe.a)("modal-title",{Component:Ie}),Ae={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:we};function Re(e){return r.a.createElement(fe,e)}function Me(e){return r.a.createElement(fe,e)}var De=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={style:{}},t.modalContext={onHide:function(){return t.props.onHide()}},t.setModalRef=function(e){t._modal=e},t.handleDialogMouseDown=function(){t._waitingForMouseUp=!0},t.handleMouseUp=function(e){t._waitingForMouseUp&&e.target===t._modal.dialog&&(t._ignoreBackdropClick=!0),t._waitingForMouseUp=!1},t.handleClick=function(e){t._ignoreBackdropClick||e.target!==e.currentTarget?t._ignoreBackdropClick=!1:t.props.onHide()},t.handleEnter=function(e){var a;e&&(e.style.display="block",t.updateDialogStyle(e));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onEnter&&(a=t.props).onEnter.apply(a,[e].concat(o))},t.handleEntering=function(e){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onEntering&&(a=t.props).onEntering.apply(a,[e].concat(o)),Object(p.a)(window,"resize",t.handleWindowResize)},t.handleExited=function(e){var a;e&&(e.style.display="");for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onExited&&(a=t.props).onExited.apply(a,o),Object(v.a)(window,"resize",t.handleWindowResize)},t.handleWindowResize=function(){t.updateDialogStyle(t._modal.dialog)},t.getModalManager=function(){return t.props.manager?t.props.manager:(xe||(xe=new ce),xe)},t.renderBackdrop=function(e){var a=t.props,n=a.bsPrefix,o=a.backdropClassName,i=a.animation;return r.a.createElement("div",Object(u.a)({},e,{className:f()(n+"-backdrop",o,!i&&"show")}))},t}Object(m.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(v.a)(window,"resize",this.handleWindowResize)},a.updateDialogStyle=function(e){if(b.a){var t=this.getModalManager().isContainerOverflowing(this._modal),a=e.scrollHeight>Object(g.a)(e).documentElement.clientHeight;this.setState({style:{paddingRight:t&&!a?y():void 0,paddingLeft:!t&&a?y():void 0}})}},a.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.style,o=e.dialogClassName,i=e.children,s=e.dialogAs,c=e["aria-labelledby"],l=e.show,m=e.animation,h=e.backdrop,p=e.keyboard,b=e.onEscapeKeyDown,g=e.onShow,v=e.onHide,y=e.container,w=e.autoFocus,E=e.enforceFocus,k=e.restoreFocus,N=e.restoreFocusOptions,O=e.onEntered,x=e.onExit,j=e.onExiting,C=(e.onExited,e.onEntering,e.onEnter,e.onEntering,e.backdropClassName,Object(d.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onExited","onEntering","onEnter","onEntering","backdropClassName"])),I=!0===h?this.handleClick:null,T=Object(u.a)({},n,{},this.state.style);return m||(T.display="block"),r.a.createElement(ge.Provider,{value:this.modalContext},r.a.createElement(ae,{show:l,backdrop:h,container:y,keyboard:p,autoFocus:w,enforceFocus:E,restoreFocus:k,restoreFocusOptions:N,onEscapeKeyDown:b,onShow:g,onHide:v,onEntered:O,onExit:x,onExiting:j,manager:this.getModalManager(),ref:this.setModalRef,style:T,className:f()(a,t),containerClassName:t+"-open",transition:m?Re:void 0,backdropTransition:m?Me:void 0,renderBackdrop:this.renderBackdrop,onClick:I,onMouseUp:this.handleMouseUp,onEnter:this.handleEnter,onEntering:this.handleEntering,onExited:this.handleExited,"aria-labelledby":c},r.a.createElement(s,Object(u.a)({},C,{onMouseDown:this.handleDialogMouseDown,className:o}),i)))},t}(r.a.Component);De.defaultProps=Ae;var Be=Object(ve.a)(De,"modal");Be.Body=be,Be.Header=je,Be.Title=Te,Be.Footer=Ee,Be.Dialog=we,Be.TRANSITION_DURATION=300,Be.BACKDROP_TRANSITION_DURATION=150;var Se=Be,Fe=function(){var e=r.a.useState(!1),t=e[0],a=e[1],n=function(){return a(!1)};return r.a.createElement("div",{className:"row intro-container"},r.a.createElement("div",{className:"devTabs-intro  slide-in-left col-md-6 col-lg-4"},r.a.createElement("h2",null,"Mattaz Web Development's"),r.a.createElement("h3",null,"Dev Tabs Chrome Extension"),r.a.createElement("p",{className:"devtabs-intro-text"},"I was having trouble finding a new tab/homepage extension that suited my needs for my Chrome installation. I wanted a landing page and 'new tab' page that was geared towards my work, and went even further by helping me with my work. I could not find one, so I set out to build one. That is how Dev Tabs came to life. A landing page and new tab page for your Google Chrome and Firefox browser."),r.a.createElement("p",{className:"devtabs-intro-text"},"This New Tab page has a few different things it does. I tried to make a mix of business and pleasure. I like to see what is going on in the industry when I first log on in the mornings, then quickly transition into work mode."," ")),r.a.createElement("div",{className:"intro-image col-md-6 col-lg-8"},r.a.createElement("img",{className:"img-responsive intro-screenshot slide-in-right",src:l.a,alt:"Screenshot of the Dev Tabs Extension",onClick:function(){return a(!0)}})),r.a.createElement(Se,{size:"xl",className:"modal-total",show:t,onHide:n},r.a.createElement(Se.Header,{closeButton:!0}),r.a.createElement(Se.Body,{onClick:n},r.a.createElement("img",{className:"modal-img",src:l.a,alt:"Dev Tabs extension"}))))},Pe=a("6xyR"),We=a("dbZe"),Ue=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,o=e.size,i=e.active,s=e.className,c=e.block,l=e.type,m=e.as,h=Object(d.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(ve.b)(a,"btn"),b=f()(s,p,i&&"active",p+"-"+n,c&&p+"-block",o&&p+"-"+o);if(h.href)return r.a.createElement(We.a,Object(u.a)({},h,{as:m,ref:t,className:f()(b,h.disabled&&"disabled")}));t&&(h.ref=t),m||(h.type=l);var g=m||"button";return r.a.createElement(g,Object(u.a)({},h,{className:b}))}));Ue.displayName="Button",Ue.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var He=Ue,Ze=a("tFHA"),Ge=a.n(Ze),Le=function(){return r.a.createElement(Pe.a,{className:"text-center",style:{marginTop:"70px",marginBottom:"70px"}},r.a.createElement(Pe.a.Header,{style:{backgroundColor:"#fda5a5"}},"Dev Tabs Privacy Policy"),r.a.createElement(Pe.a.Body,{style:{backgroundColor:"#eae7e7"}},r.a.createElement(Pe.a.Title,null,"Extension Tracking & Personal Identifiable Information:"),r.a.createElement(Pe.a.Text,null,"This extension does not track you in any way. Any information gathered about you, is stored on ",r.a.createElement("b",null,"your")," machine. I made a point to not track users in any way. I even left off Google Analytics. This too, was one of the motivations for creating this extension. Every single one I looked at, had some kind of tracking and/or ads. This has neither. This is a Free, Open Source extension that I built and wanted to share. You are welcome to check out the"," ",r.a.createElement("a",{href:"https://github.com/Cipher-Coder/chromeExtension",target:"_blank",rel:"noopener noreferrer"},"source code")," ","and contribute. If you get any use out of this and want to buy me a coffee... It would be greatly appreciated."),r.a.createElement(He,{variant:"primary",size:"sm",href:"https://paypal.me/CipherCoder?locale.x=en_US",target:"_blank",rel:"noopener noreferrer"},"Buy Me a"," ",r.a.createElement("span",{role:"img","aria-label":"Coffee Cup"},"☕"))),r.a.createElement(Pe.a.Footer,{className:"text-center",style:{backgroundColor:"#fda5a5"}},r.a.createElement("a",{href:"https://github.com/Cipher-Coder/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Ge.a,alt:"GitHub Icon"}))))},Je=function(e){return r.a.createElement("div",{className:e.divClass},r.a.createElement("img",{className:e.imgClass,src:e.myUrl,alt:e.alt}),r.a.createElement("div",{className:"col-sm-8 first-paragraph"},r.a.createElement("h3",{className:"desc-text-title"},e.title),r.a.createElement("p",{className:"desc-text"},e.content)))},Ye=(a("f3/d"),function(e){return r.a.createElement("a",{className:"download-button btn btn-primary",href:e.href,target:"_blank",rel:"noopener noreferrer"},e.name)}),ze=(a("Xw7b"),a("AvBe")),Qe=a.n(ze),Xe=a("oiZk"),Ve=a.n(Xe),qe=a("hGhd"),Ke=a.n(qe),_e=a("ZkQd"),$e=a.n(_e),et=a("h+mn"),tt=a.n(et),at=a("EBFv"),nt=a.n(at),ot=a("c11U"),rt=a.n(ot);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Dev Tabs"}),r.a.createElement("div",{class:"main-div"},r.a.createElement("section",{className:"intro-devtabs"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{className:"devTabsLogo",src:Qe.a,alt:"Dev Tabs Extension Logo"})),r.a.createElement(Fe,null))),r.a.createElement("section",{className:"info-section"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"font-weight-bold m-auto"},"Dev Tabs Browser Extension")),r.a.createElement("div",{className:"row"},r.a.createElement(Je,{divClass:"row bookmark",imgClass:"col-sm-3 bookmark-image",myUrl:Ve.a,alt:"Bookmarks folder",title:"Bookmarks:",content:"On the left side of the page are your commonly used bookmarks.\n              These are sites that you visit everyday and don't want to be\n              hunting through all of your folders for. These will be entered\n              separately, and do not impact your browser bookmarks. For the\n              initial setup, click on the settings cog in the middle of the\n              page, you will be brought to the settings page. Using Markdown\n              format, enter all of the sites you want to show up in that column,\n              each separated by a comma, and click save. When you go back to the\n              landing page, they will be there. I also included an input on the\n              landing page to enter individual links, so you can continue to add\n              on as you find new sites you visit often. The individual links\n              will be appended to the end of the list. The bookmarks column will\n              scroll independently. All of these are stored in Chrome's local\n              storage. Again, they do not have anything to do with your normal\n              bookmarks. There is also a button on the new tab page to add a single bookmark."}),r.a.createElement(Je,{divClass:"row github",imgClass:"col-sm-3 bookmark-image",myUrl:Ke.a,alt:"Bookmarks folder",title:"GitHub:",content:"I have included two different aspects of Github on the Dev Tabs page. First, is the Github commit graph. When you first install the extension, go to the settings page, and on the left, click the option to enter your Github Username. Once entered, click save and when you go back to the Dev Tabs page, your Github commit graph will show up in the middle of the page. When I did the 100 days of code, I tracked my progress using Github and committing something everyday. I liked to see my progress and got used to see the graph, so I included it on here. Also you will see on the right hand side of the page a space for your top 10 Github repos. Again, you will configure this in the settings page by entering your Github username for the Github repos. I left this as two separate options as you may have more than one account and want to see the graph from one account and repos from a different one or vice versa."}),r.a.createElement(Je,{divClass:"row dev-to",imgClass:"col-sm-3 bookmark-image",myUrl:$e.a,alt:"Bookmarks folder",title:"Developer News:",content:"When I get started in the mornings, I like to read the news and see what is going on around the community and learn a little something. Twitter can be very opinionated and I really just want to read a few articles. I included the article feed from Dev.to. They always have great articles to peruse, and since I do contribute on occasion, I like to keep track of what is going on there. The article title is a link and when clicked on will bring you to the selected article in the same window. They also have a Chrome extension for Twitter. If you check out the Github repo for The Practical Dev, you can look at the extension. I went ahead and borrowed from that and included the important parts of their extension in this one. So now when you visit Twitter, the Dev.to headlines will appear on the right-hand side of your Twitter feed. Not too intrusive, just another way to keep up on the days current headlines."}),r.a.createElement(Je,{divClass:"row weather",imgClass:"col-sm-3 bookmark-image",myUrl:tt.a,alt:"Bookmarks folder",title:"Weather:",content:"The weather is pretty self explanatory. I used the Open Weather Map Api to fetch the current conditions for your location. To set your location, go to the settings page, click the 'Weather' option and just click the button to get your current location. On the first time, it will ask your permission to acquire your location. Also, use the toggle switch to choose your unit of measure (MPH or KPH). Once you click 'ok', it will fetch your coordinates with the HTML Geolocation api and store them in Chrome's local storage. It will then make the api call to Open Weather Map, get your weather, and display it. This extension does not track you in any way. It stores your coordinates in local storage, on your machine and your machine only. Which means, if you move locations and want your weather display to reflect that, you will need to go back into your weather settings and click the button to get your current location. It will then rewrite the data and store your updated coordinates"})))),r.a.createElement("section",{className:"evenMore"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"font-weight-bold m-auto more-heading"},"Check it out... Even More!"),r.a.createElement("img",{src:nt.a,className:"evenMore-img",alt:"Dev Tabs Screenshot"}),r.a.createElement("h2",{className:"qr-heading"},"QR Code Generation")),r.a.createElement("div",{className:"row qrCode-info"},r.a.createElement("img",{src:rt.a,alt:"QR code generator",className:"img-responsive col-xs-6 col-sm-8 col-md-7 col-lg-6 qr-img"}),r.a.createElement("div",{className:"qr-explain col-xs-6 col-sm-8 col-md-7 col-lg-5"},r.a.createElement("h4",{className:"qr-title"},"QR Code Generator"),r.a.createElement("p",{className:"qr-text"},"So many times I am in the middle of reading an article or watching a tutorial and I have to stop what I am doing and go do something else. This was the main inspiration behind this tool. I work from home and everyday, at 2:15pm, I have to stop what I am doing and go pick up my kids from school. I have to wait on line for usually around 30 mins. Now, if I am in the middle of reading something, I can click the icon button in the toolbar and copy the url of whatever site I am on and create a QR Code that I can scan with my phone and take with me. Then while waiting to pick the kids up, I can continue to read whatever it was I was working on."))),r.a.createElement("div",{className:"row tracking-card"},r.a.createElement(Le,null)),r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"link-heading"},"Download Extension")),r.a.createElement("div",{className:"row download-links"},r.a.createElement(Ye,{href:"https://chrome.google.com/webstore/detail/dev-tabs/ghkccmckjecalghejidolggalehgbcnj",name:"Download Chrome Extension"}),r.a.createElement(Ye,{href:"https://microsoftedge.microsoft.com/addons/detail/mjnididbffjmpdccgmcbdmondlpafkef?hl=en-US",name:"Download Edge Extension"}),r.a.createElement(Ye,{href:"https://addons.mozilla.org/en-US/firefox/addon/dev-tabs/",name:"Download Firefox Extension"}))))))}},EBFv:function(e,t,a){e.exports=a.p+"static/screenshot4-ea8fd724eeb031f0663e0a3d7398bfcf.jpg"},"M+du":function(e,t,a){},U1MP:function(e,t,a){"use strict";var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("TSYQ"),s=a.n(i);t.a=function(e){return r.a.forwardRef((function(t,a){return r.a.createElement("div",Object(n.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},"X/F8":function(e,t,a){e.exports=a.p+"static/devTabsNew-668b0d7766136971eb1012d15523447c.png"},XcHJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");function o(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},Xw7b:function(e,t,a){},ZkQd:function(e,t,a){e.exports=a.p+"static/thepracticaldev-97c699d8a1142bc41001f236ce1b96d9.png"},c11U:function(e,t,a){e.exports=a.p+"static/getQR-7744f2f9e14095b9d4884f570b1a2a9a.png"},"h+mn":function(e,t,a){e.exports=a.p+"static/theWeather-6b935e17aba2b28fc6b521307b1d55b4.png"},hGhd:function(e,t,a){e.exports=a.p+"static/github-3d-e717e7898eaa6509cacd30d01b45d907.png"},i52p:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");function o(e){var t,a,o=(t=e,(a=Object(n.useRef)(t)).current=t,a);Object(n.useEffect)((function(){return function(){return o.current()}}),[])}},oiZk:function(e,t,a){e.exports=a.p+"static/3d-bookmarks-e53a569e584e472e7fe0c0b3b5ff036c.png"},tFHA:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-devtabs-js-5c655c66049f44bea2f9.js.map