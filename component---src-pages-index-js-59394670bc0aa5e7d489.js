(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(75),r=a.n(n),i=a(0),l=a.n(i),c=a(166),o=a(4),s=a.n(o),u=a(156),m=a(158),d=a(160),p=a(161),h=a.n(p),f=a(192),E=a.n(f),v=a(167),b=a(286),g=a(288),y=a(178),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props,n=a.onClick;if(a.disabled)return e.preventDefault(),void e.stopPropagation();n&&n(e)},t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.active,n=e.disabled,r=e.className,i=e.variant,c=e.action,o=e.as,s=e.eventKey,d=Object(m.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey"]);return l.a.createElement(g.a,Object(u.a)({},d,{eventKey:Object(y.b)(s,d.href),as:o||(c?d.href?"a":"button":"div"),onClick:this.handleClick,className:h()(r,t,a&&"active",n&&"disabled",i&&t+"-"+i,c&&t+"-action")}))},t}(l.a.Component);x.defaultProps={variant:null,active:!1,disabled:!1};var j=Object(v.a)(x,"list-group-item"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.bsPrefix,n=e.variant,r=Object(m.a)(e,["className","bsPrefix","variant"]);return l.a.createElement(b.a,Object(u.a)({},r,{className:h()(t,a,n&&a+"-"+n)}))},t}(l.a.Component);k.defaultProps={as:"div",variant:null};var N=E()(Object(v.a)(k,"list-group"),{activeKey:"onSelect"});N.Item=j;var R=N,C=a(233),q=a(174),T=function(e){var t=e.header,a=e.children,n=r()(e,["header","children"]);return l.a.createElement(c.a,Object.assign({},n,{className:"list-group-item"}),l.a.createElement("h4",{className:"list-group-item-heading"},t),l.a.createElement("p",{className:"list-group-item-text"},a))};T.propTypes={header:s.a.string.isRequired,children:s.a.node.isRequired};t.default=function(){return l.a.createElement(q.a,null,l.a.createElement("h4",null,"Installation"),l.a.createElement(C.a,{language:"bash"},"npm install bandit-pouch --save"),l.a.createElement("hr",null),l.a.createElement(R,null,l.a.createElement(T,{header:"UI components",to:"/ui"},"Common React components"),l.a.createElement(T,{header:"Forms",to:"/forms"},"Form input control components"),l.a.createElement(T,{header:"Redux",to:"/redux"},"Redux helper functions"),l.a.createElement(T,{header:"Utils",to:"/utils"},"Custom utility funtions"),l.a.createElement(T,{header:"Component API",to:"/api"},"Component API documentation")))}},166:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(34),o=a.n(c);a.d(t,"a",function(){return o.a});a(168);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},168:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},172:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Bandit Pouch",description:"Common React components and utilities",library:{name:"bandit-pouch",version:"2.1.1"}}}}}},174:function(e,t,a){"use strict";var n=a(173),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(180),s=a.n(o),u=a(166),m=a(748),d=a(749),p=a(750),h=(a(33),a(75)),f=a.n(h),E=a(161),v=a.n(E),b=a(759),g=a(761),y=function(e){var t=e.active,a=e.disabled,n=e.className,r=e.to,l=e.useATag,c=void 0!==l&&l,o=f()(e,["active","disabled","className","to","useATag"]);return delete o.onSelect,delete o.eventKey,delete o.activeKey,delete o.activeHref,i.a.createElement("li",{role:"presentation",className:v()(n,{active:t,disabled:a})},c?i.a.createElement("a",Object.assign({},o,{href:r})):i.a.createElement(u.a,Object.assign({},o,{to:r,disabled:a})))},x=function(e){var t=e.siteTitle;return i.a.createElement(b.a,null,i.a.createElement(b.a.Brand,null,i.a.createElement(u.a,{to:"/"},t)),i.a.createElement(b.a.Collapse,null,i.a.createElement(g.a,null,i.a.createElement(y,{to:"/ui"},"UI components"),i.a.createElement(y,{to:"/forms"},"Form"),i.a.createElement(y,{to:"/redux"},"Redux"),i.a.createElement(y,{to:"/utils"},"Utilities"),i.a.createElement(y,{to:"/api"},"API"),i.a.createElement(y,{to:"/bandit-pouch/storybook",useATag:!0},"Storybook"))))};x.propTypes={siteTitle:c.a.string.isRequired};var j=x,k=(a(169),a(179)),N=a.n(k),R=function(e){var t=e.repo,a=e.type;return i.a.createElement("span",{className:"github-button-wrapper"},i.a.createElement("iframe",{title:a,src:"https://ghbtns.com/github-btn.html?user=kayak&repo="+t+"&type="+a,frameBorder:"0",scrolling:"0",width:"60px",height:"20px"}))},C=function(e){var t=e.name,a=e.version;return i.a.createElement("footer",{style:{padding:"40px 0 20px",background:"#f8f8f8",borderTop:"1px solid #e7e7e7"}},i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"text-center"},i.a.createElement(p.a,{xs:6,xsOffset:3},i.a.createElement(R,{repo:t,type:"star"}),i.a.createElement(R,{repo:t,type:"fork"}))),i.a.createElement(d.a,{style:{marginTop:"20px"}},i.a.createElement(p.a,{xs:12,className:"text-center"},i.a.createElement("p",null,"Copyright  ",N()().format("YYYY"),"  KAYAK Germany, GmbH"),i.a.createElement("p",null,"Licensed under the  ",i.a.createElement("a",{href:"http://www.apache.org/licenses/LICENSE-2.0"},"Apache License Version 2.0"),", Documentation built using  ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")),i.a.createElement("p",{className:"text-right"},i.a.createElement("small",null,"v"+a))))))},q=(a(181),a(182),a(183),a(184),a(185),function(e){var t=e.children,a=e.data.site,n=(void 0===a?{}:a).siteMetadata,r=void 0===n?{}:n;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:"kayak, react, redux"}],script:[{type:"text/javascript",src:"https://buttons.github.io/buttons.js"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"canonical",href:"https://kayak.github.io/bandit-pouch"})),i.a.createElement(j,{siteTitle:r.title}),i.a.createElement(m.a,{style:{paddingBottom:"20px"}},i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:12},t))),i.a.createElement(C,r.library))});q.propTypes={data:c.a.object.isRequired,children:c.a.node.isRequired};var T=function(e){var t=e.children;return i.a.createElement(u.b,{query:"2212968517",render:function(e){return i.a.createElement(q,{data:e},t)},data:n})};T.propTypes={children:c.a.node.isRequired};t.a=T},233:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),c=a(4),o=a.n(c),s=a(188),u=a.n(s),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).element=l.a.createRef(),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.highlight()},a.componentDidUpdate=function(){this.highlight()},a.highlight=function(){this.element.current.querySelectorAll("code").forEach(function(e){return u.a.highlightBlock(e)})},a.render=function(){var e=this.props,t=e.children,a=e.language;return l.a.createElement("pre",{ref:this.element},l.a.createElement("code",{className:"hljs "+a},t))},t}(i.Component);m.propTypes={children:o.a.node.isRequired,language:o.a.string},m.defaultProps={language:"javascript"},t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-59394670bc0aa5e7d489.js.map