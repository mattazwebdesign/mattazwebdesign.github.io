(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),l=a(66),o=a.n(l),i=a(219),c=a(217),d=(a(197),a(239)),s=a.n(d),u="1706824449";t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement(c.a,{title:"Mattaz Blog"}),n.a.createElement("div",{className:"container bloglist-container"},n.a.createElement("div",{className:"row bloglist-title"},n.a.createElement("h1",{className:"text-center"},"Latest Posts:")),n.a.createElement("div",{className:"row card-rows"},t.allMarkdownRemark.edges.map(function(e){return n.a.createElement("div",{key:e.node.id},n.a.createElement("div",{className:"start-cards"},n.a.createElement(s.a,{style:{width:"18rem"}},n.a.createElement(s.a.Img,{variant:"top",style:{height:"180px"},src:e.node.frontmatter.cover_image.childImageSharp.fluid.src}),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,e.node.frontmatter.title),n.a.createElement(s.a.Subtitle,{className:"mb-2 text-muted"},"Posted On: ",e.node.frontmatter.date),n.a.createElement(s.a.Text,null,e.node.excerpt),n.a.createElement(o.a,{to:e.node.frontmatter.path},"Read More...")),n.a.createElement(s.a.Footer,null,"By: ",e.node.frontmatter.author))))}))))}},212:function(e,t,a){var r;e.exports=(r=a(216))&&r.default||r},214:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(66),o=a.n(l);a.d(t,"a",function(){return o.a});a(212),a(9).default.enqueue,n.a.createContext({})},215:function(e){e.exports={data:{site:{siteMetadata:{title:"Mattaz Web Design"}}}}},216:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),l=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},217:function(e,t,a){"use strict";var r=a(218),n=a(0),l=a.n(n),o=a(224),i=a.n(o);function c(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,c=r.data.site,d=t||c.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d},{name:"keywords",content:c.siteMetadata.keywords}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Mattaz Web Design",description:"Mattaz Web Design. Small business websites at affordable prices.",author:"@MRebehn",keywords:"Mattaz, Gatsby, React, Web, Design"}}}}},219:function(e,t,a){"use strict";var r=a(215),n=a(0),l=a.n(n),o=a(214),i=a(221),c=a.n(i),d=a(223),s=a.n(d),u=function(e){var t=e.siteTitle;return l.a.createElement(c.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(c.a.Brand,{href:"https://mattaz.com"},t),l.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(s.a,{className:"mr-auto"}),l.a.createElement(s.a,null,l.a.createElement(o.a,{to:"/",style:{color:"#fff",textDecoration:"none",paddingRight:"12px"},activeStyle:{color:"#007bff"}},"Home"),l.a.createElement(o.a,{to:"/devtabs/",style:{color:"#fff",textDecoration:"none",paddingRight:"12px"},activeStyle:{color:"#007bff"}},"Dev Tabs"),l.a.createElement(o.a,{to:"/blog/",style:{color:"#fff",textDecoration:"none",paddingRight:"12px"},activeStyle:{color:"#007bff"}},"Blog"),l.a.createElement(o.a,{to:"/contact/",style:{color:"#fff",textDecoration:"none",paddingRight:"15px"},activeStyle:{color:"#007bff"}},"Contact"))))};u.defaultProps={siteTitle:""};var f=u;a(196);var m=function(){return l.a.createElement("footer",{style:{textAlign:"center",backgroundColor:"#333",color:"#e2e2e2",padding:".9rem",fontSize:".75rem"}},"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", By:"," ",l.a.createElement("a",{href:"https://mattaz.com"},"Mattaz Web Design"))};t.a=function(e){var t=e.children,a=r.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},l.a.createElement("main",null,t)),l.a.createElement(m,null))}},227:function(e,t,a){"use strict";var r=a(13);t.__esModule=!0,t.default=void 0;var n=r(a(133)),l=r(a(0)),o=r(a(210));t.default=function(e){return l.default.forwardRef(function(t,a){return l.default.createElement("div",(0,n.default)({},t,{ref:a,className:(0,o.default)(t.className,e)}))})},e.exports=t.default},239:function(e,t,a){"use strict";var r=a(213),n=a(13);t.__esModule=!0,t.default=void 0;var l=n(a(133)),o=n(a(134)),i=n(a(210)),c=r(a(0)),d=a(211),s=n(a(220)),u=n(a(227)),f=n(a(236)),m=n(a(240)),p=(0,u.default)("h5"),v=(0,u.default)("h6"),g=(0,s.default)("card-body"),b=c.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,s=e.text,u=e.border,m=e.body,p=e.children,v=e.as,b=void 0===v?"div":v,E=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,d.useBootstrapPrefix)(a,"card"),x=(0,c.useMemo)(function(){return{cardHeaderBsPrefix:y+"-header"}},[y]);return c.default.createElement(f.default.Provider,{value:x},c.default.createElement(b,(0,l.default)({ref:t},E,{className:(0,i.default)(r,y,n&&"bg-"+n,s&&"text-"+s,u&&"border-"+u)}),m?c.default.createElement(g,null,p):p))});b.displayName="Card",b.defaultProps={body:!1},b.Img=m.default,b.Title=(0,s.default)("card-title",{Component:p}),b.Subtitle=(0,s.default)("card-subtitle",{Component:v}),b.Body=g,b.Link=(0,s.default)("card-link",{Component:"a"}),b.Text=(0,s.default)("card-text",{Component:"p"}),b.Header=(0,s.default)("card-header"),b.Footer=(0,s.default)("card-footer"),b.ImgOverlay=(0,s.default)("card-img-overlay");var E=b;t.default=E,e.exports=t.default},240:function(e,t,a){"use strict";var r=a(13);t.__esModule=!0,t.default=void 0;var n=r(a(133)),l=r(a(134)),o=r(a(210)),i=r(a(0)),c=a(211),d=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,d=e.variant,s=e.as,u=void 0===s?"img":s,f=(0,l.default)(e,["bsPrefix","className","variant","as"]),m=(0,c.useBootstrapPrefix)(a,"card-img");return i.default.createElement(u,(0,n.default)({ref:t,className:(0,o.default)(d?m+"-"+d:m,r)},f))});d.displayName="CardImg",d.defaultProps={variant:null};var s=d;t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-blog-js-559dcc4bf2bdc63f8d75.js.map