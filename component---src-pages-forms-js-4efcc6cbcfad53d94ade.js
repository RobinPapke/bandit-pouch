(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,a,t){"use strict";t.d(a,"c",function(){return j}),t.d(a,"b",function(){return O}),t.d(a,"a",function(){return k});var n=t(5),r=t.n(n),l=t(6),i=t.n(l),o=t(7),s=t.n(o),u=t(8),c=t.n(u),d=t(9),p=t.n(d),m=t(11),h=t.n(m),f=t(0),g=t.n(f),y=t(3),b=t.n(y),v=t(111),E=t.n(v),T=t(561),C=t(563),R=t(564),q=t(562),x=t(546),N=function(e){var a=e.id,t=e.pages,n=e.examples,r=e.defaultActiveKey;return g.a.createElement(T.a.Container,{id:a,defaultActiveKey:r},g.a.createElement(C.a,null,g.a.createElement(R.a,{sm:4,md:3,lg:2},g.a.createElement(q.a,{bsStyle:"pills",stacked:!0},t.map(function(e){return g.a.createElement(x.a,{key:e.id,eventKey:e.id},e.title)}))),g.a.createElement(R.a,{sm:8,md:9,lg:10},g.a.createElement(T.a.Content,{animation:!0},t.map(function(e){return g.a.createElement(T.a.Pane,{key:e.id,eventKey:e.id,title:e.title},g.a.createElement(k,{html:e.html,title:e.title,examples:n[e.id]}))})))))};function j(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{}).allMarkdownRemark,a=((void 0===e?{}:e)||{}).edges;return(void 0===a?[]:a).map(function(e){var a=e.node;return h()({html:a.html},a.frontmatter)})}function O(e){var a=e.id,t=e.defaultActiveKey,n=e.data,r=e.examples,l=j(n);return g.a.createElement(N,{id:a,pages:l,examples:r,defaultActiveKey:t})}N.propTypes={id:b.a.string.isRequired,pages:b.a.array.isRequired,examples:b.a.object,defaultActiveKey:b.a.string.isRequired},N.defaultProps={examples:{}},O.propTypes={id:b.a.string.isRequired,data:b.a.object.isRequired,examples:b.a.object,defaultActiveKey:b.a.string.isRequired},O.defaultProps={examples:{}};var k=function(e){function a(e){var t;return r()(this,a),(t=s()(this,c()(a).call(this,e))).element=g.a.createRef(),t}return p()(a,e),i()(a,[{key:"componentDidMount",value:function(){this.element.current.querySelectorAll("code").forEach(function(e){return E.a.highlightBlock(e)})}},{key:"render",value:function(){var e=this.props,a=e.title,t=e.html,n=e.examples;return g.a.createElement("div",{ref:this.element,className:"row markdown-container"},g.a.createElement(R.a,{xs:12},g.a.createElement("h1",null,a)),g.a.createElement("hr",null),g.a.createElement(R.a,{xs:12},g.a.createElement("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t}}),n.map(function(e){return g.a.createElement("span",{key:e},e)})))}}]),a}(f.Component);k.propTypes={title:b.a.string.isRequired,html:b.a.string.isRequired,examples:b.a.array},k.defaultProps={examples:[]}},122:function(e,a,t){},129:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(3),i=t.n(l),o=t(72),s=t.n(o),u=t(112),c=t.n(u),d=(t(98),t(79)),p=t.n(d),m=t(565),h=t(566),f=i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node,i.a.arrayOf(i.a.element),i.a.element]),g=function(e){return p.a.noop},y=function(e){return m.a===p.a.get(e,"type")?e:r.a.createElement(m.a,{id:"tooltip"},e)},b=function(e,a){return r.a.createElement(h.a,{id:"popover",title:e},a)},v=(g(),g(),function(e){var a=e.icon,t=e.className,n=e.children;return r.a.createElement("div",{className:s()("error-page",t)},a&&r.a.createElement(c.a,{name:a,size:"4x"}),r.a.createElement("h1",{className:"page-error"},n))});v.defaultProps={icon:null,className:null},v.propTypes={icon:i.a.string,className:i.a.string,children:f.isRequired};var E=v,T=function(){return r.a.createElement(E,null,"Not found")},C=(t(81),t(23)),R=t.n(C),q=t(563),x=t(564),N={children:f.isRequired},j=function(e){function a(){return e.apply(this,arguments)||this}R()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props.title;document.title=e},t.componentWillReceiveProps=function(e){this.props.title!==e.title&&(document.title=e.title)},t.render=function(){var e=this.props,a=e.style,t=e.className,n=e.children;return r.a.createElement("div",{className:t,style:a},n)},a}(n.Component);j.propTypes=Object.assign({},N,{title:i.a.string,style:i.a.object,className:i.a.string}),j.defaultProps={style:null,title:null,className:null};var O=function(e){var a=e.style,t=e.className,n=e.children;return r.a.createElement("div",{className:s()("page-layout-toppanel",t),style:a},n)};O.propTypes=Object.assign({},N,{style:i.a.object,className:i.a.string}),O.defaultProps={style:null,className:null};var k=function(e){var a=e.style,t=e.className,n=e.children;return r.a.createElement(q.a,{className:s()("page-layout-horizontalsplit",t),style:Object.assign({},a,{display:"flex"})},n)};k.propTypes=Object.assign({},N,{style:i.a.object,className:i.a.string}),k.defaultProps=Object.assign({},O.defaultProps);var P=function(e){var a=e.style,t=e.className,n=e.children;return r.a.createElement("div",{className:s()("page-layout-content",t),style:a},n)};P.propTypes=Object.assign({},N,{style:i.a.object,className:i.a.string}),P.defaultProps=Object.assign({},O.defaultProps);var S=function(e){var a=e.contentWidthXs,t=void 0===a?8:a,n=e.contentWidthSm,l=void 0===n?9:n,i=e.style,o=e.className,u=e.children;return r.a.createElement(x.a,{xs:12-t,md:12-l,className:s()("page-layout-horizontalsplit-left",o),style:i},u)};S.propTypes=Object.assign({},N,{style:i.a.object,className:i.a.string,contentWidthXs:i.a.number,contentWidthSm:i.a.number}),S.defaultProps=Object.assign({},O.defaultProps);var w=function(e){var a=e.contentWidthXs,t=void 0===a?8:a,n=e.contentWidthSm,l=void 0===n?9:n,i=e.style,o=e.className,u=e.children;return r.a.createElement(x.a,{xs:t,md:l,className:s()("page-layout-horizontalsplit-right",o),style:i},u)};w.propTypes=Object.assign({},N,{style:i.a.object,className:i.a.string,contentWidthXs:i.a.number,contentWidthSm:i.a.number}),w.defaultProps=Object.assign({},S.defaultProps);var V=function(e){var a=e.children;return r.a.createElement("div",{style:{position:"fixed",bottom:"5em",right:"5em"}},a)};V.propTypes=Object.assign({},N);t(99),t(163),t(164);var W=t(578),A=(t(122),function(e){function a(){return e.apply(this,arguments)||this}R()(a,e);var t=a.prototype;return t.componentWillMount=function(){var e=this,a=this.props.timeout;a&&setTimeout&&(this.timeout=setTimeout(function(){return e.dismiss()},1e3*a))},t.componentWillUnmount=function(){this.clearTimeout()},t.dismiss=function(){(0,this.props.onClose)(),this.clearTimeout()},t.clearTimeout=function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(){clearTimeout&&clearTimeout(this.timeout)}),t.render=function(){var e=this,a=this.props,t=a.header,n=a.errors,l=a.message,i=a.bsStyle;return r.a.createElement(W.a,{bsStyle:i,onDismiss:function(){return e.dismiss()}},t&&r.a.createElement("h4",null,t),r.a.createElement("p",null,l),r.a.createElement("ul",null,p.a.map(n,function(e){return r.a.createElement("li",{key:e},e)})))},a}(n.Component));A.propTypes={header:i.a.string,message:i.a.string.isRequired,errors:i.a.arrayOf(i.a.string),bsStyle:i.a.oneOf(["success","info","warning","danger"]),timeout:i.a.number,onClose:i.a.func.isRequired},A.defaultProps={header:null,errors:[],timeout:30,bsStyle:"info"};var K=function(e){var a=e.alerts,t=e.timeout,n=e.clearAlert;return r.a.createElement("div",{id:"notification-container"},p.a.map(a,function(e){var a=e.id,l=e.header,i=e.message,o=e.errors,s=e.bsStyle;return r.a.createElement(A,{key:a,header:l,message:i,errors:o,bsStyle:s,timeout:t,onClose:function(){return n(a)}})}))};K.propTypes={timeout:i.a.number,alerts:i.a.arrayOf(i.a.shape({id:i.a.oneOfType([i.a.string,i.a.number]).isRequired,header:i.a.string,message:i.a.string.isRequired,errors:i.a.arrayOf(i.a.string),bsStyle:i.a.oneOf(["success","info","warning","danger"])})),clearAlert:i.a.func},K.defaultProps={alerts:[],timeout:30,clearAlert:function(){}};var L=t(570),F=t(567),z=t(568),M=t(569),B=function(e){var a=e.style,t=void 0===a?{}:a,n=e.children,l=void 0===n?[]:n;return r.a.createElement("strong",{className:"text-danger",style:t},r.a.createElement(c.a,{name:"warning"})," ",r.a.createElement("span",{className:"validation-error"},l))};B.propTypes={style:i.a.object,children:f.isRequired},B.defaultProps={style:null};var D=B;var U=function(e){var a=e.id,t=e.label,n=e.help,l=e.children,i=e.className,o=e.meta,s=o.touched,u=o.error,c=function(e,a){if(e)return p.a.isEmpty(a)?"success":"error"}(s,u),d=u&&p.a.isString(u)?u.split("\n"):u;return r.a.createElement(F.a,{controlId:a,className:i,validationState:c},t&&r.a.createElement(z.a,null,t),l,n&&r.a.createElement(M.a,null,r.a.createElement("small",null,n)),s&&!p.a.isEmpty(u)&&r.a.createElement(D,null,d.map(function(e,a){return a?r.a.createElement("div",{key:"error-"+a},e):e})))};U.propTypes={id:i.a.any,label:i.a.string,help:i.a.string,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])}),className:i.a.string,children:f.isRequired},U.defaultProps={id:null,help:null,label:null,className:null,meta:{touched:!1,error:[]}};var I=U,Q=function(e){var a=e.input,t=e.label,n=e.help,l=e.meta,i=e.disabled;return r.a.createElement(I,{id:a.id,help:n,meta:l},r.a.createElement(L.a,{checked:!!a.value,disabled:i,onChange:function(e){return a.onChange(e.target.checked)}},t))};Q.propTypes={input:i.a.any.isRequired,label:i.a.string,help:i.a.string,disabled:i.a.bool,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])})},Q.defaultProps={help:null,label:null,disabled:!1,meta:{touched:!1,error:[]}};var G=Q,X=t(100),H=t.n(X),J=t(574),_=function(e){var a=e.input,t=e.label,n=e.help,l=e.meta,i=e.onChangeValue,o=e.componentClass,s=H()(e,["input","label","help","meta","onChangeValue","componentClass"]);return r.a.createElement(I,{id:a.id,label:t,help:n,meta:l},r.a.createElement(J.a,Object.assign({},a,s,{componentClass:o,onChange:function(e){a.onChange(e),i(e)}})),r.a.createElement(J.a.Feedback,null))};_.propTypes={input:i.a.any.isRequired,label:i.a.string,help:i.a.string,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])}),componentClass:J.a.propTypes.componentClass,onChangeValue:i.a.func},_.defaultProps={help:null,label:null,meta:{touched:!1,error:[]},onChangeValue:p.a.noop,componentClass:"input"};var Y=_,Z=function(e){var a=e.input,t=e.label,n=e.placeholder,l=e.help,i=e.meta,o=e.disabled,s=e.onChangeValue;return r.a.createElement(Y,{type:"password",input:a,label:t,help:l,meta:i,disabled:o,placeholder:n,onChange:s})};Z.propTypes={input:i.a.any.isRequired,label:i.a.string,help:i.a.string,onChangeValue:i.a.func,disabled:i.a.bool,placeholder:i.a.string,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])})},Z.defaultProps={help:null,label:null,disabled:!1,placeholder:null,onChangeValue:p.a.noop,meta:{touched:!1,error:[]}};var $=Z,ee=t(189);var ae=function(e){var a=e.input,t=e.label,n=e.defaultValue,l=e.help,i=e.meta,o=e.options,s=e.isLoading,u=e.clearable,c=e.multi,d=e.creatable,m=e.async,h=e.onChangeValue,f=e.innerRef,g=e.onChangeWithValue,y=void 0===g||g,b=e.denormalize,v=H()(e,["input","label","defaultValue","help","meta","options","isLoading","clearable","multi","creatable","async","onChangeValue","innerRef","onChangeWithValue","denormalize"]),E=function(e,a){return e?a?ee.a.AsyncCreatable:ee.a.Async:a?ee.a.Creatable:ee.a}(m,d),T=(b?b(a.value):a.value)||n;return r.a.createElement(I,{id:a.id,label:t,help:l,meta:i},r.a.createElement(E,Object.assign({value:T,options:o,clearable:u,multi:c,onChange:function(e){var t=v.valueKey,n=void 0===t?"value":t,r=e;y&&(r=c?e&&p.a.map(e,n):e&&e[n]),a.onChange(r),h(r)},onBlur:function(){return a.onBlur()},onFocus:function(){return a.onFocus()},isLoading:s,ref:f},v)))};ae.propTypes={input:i.a.any.isRequired,label:i.a.string,help:i.a.string,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])}),defaultValue:i.a.string,options:i.a.arrayOf(i.a.any),isLoading:i.a.bool,clearable:i.a.bool,creatable:i.a.bool,async:i.a.bool,denormalize:i.a.bool,onChangeValue:i.a.func,onChangeWithValue:i.a.bool},ae.defaultProps={help:null,label:null,meta:{touched:!1,error:[]},defaultValue:null,options:[],isLoading:!1,clearable:!1,creatable:!1,async:!1,denormalize:!1,onChangeValue:function(){},onChangeWithValue:!0};var te=ae,ne=function(e){var a=e.input,t=e.label,n=e.placeholder,l=e.rows,i=e.cols,o=e.help,s=e.meta,u=e.disabled,c=e.onChangeValue;return r.a.createElement(Y,{input:a,label:t,help:o,meta:s,rows:l,cols:i,disabled:u,placeholder:n,onChange:c,componentClass:"textarea"})};ne.propTypes={input:i.a.any.isRequired,label:i.a.string,help:i.a.string,onChangeValue:i.a.func,disabled:i.a.bool,placeholder:i.a.string,cols:i.a.number,rows:i.a.number,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])})},ne.defaultProps={help:null,label:null,disabled:!1,placeholder:null,cols:6,rows:4,onChangeValue:p.a.noop,meta:{touched:!1,error:[]}};var re=ne,le=function(e){var a=e.input,t=e.label,n=e.placeholder,l=e.help,i=e.meta,o=e.disabled,s=e.type,u=e.onChangeValue;return r.a.createElement(Y,{type:s,input:a,label:t,help:l,meta:i,disabled:o,placeholder:n,onChange:u})};le.propTypes={input:i.a.any.isRequired,type:i.a.string,label:i.a.string,help:i.a.string,onChangeValue:i.a.func,disabled:i.a.bool,placeholder:i.a.string,meta:i.a.shape({touched:i.a.bool,error:i.a.oneOfType([i.a.string,i.a.array])})},le.defaultProps={help:null,label:null,disabled:!1,placeholder:null,type:"text",onChangeValue:p.a.noop,meta:{touched:!1,error:[]}};var ie=le;t(167),t(575);t(168),t(135);var oe=t(170);new(t.n(oe).a);t.d(a,"g",function(){return j}),t.d(a,"e",function(){return S}),t.d(a,"j",function(){return w}),t.d(a,"b",function(){return P}),t.d(a,"n",function(){return O}),t.d(a,"c",function(){return E}),t.d(a,"h",function(){return T}),t.d(a,"d",function(){return k}),t.d(a,"f",function(){return K}),t.d(a,"a",function(){return G}),t.d(a,"i",function(){return $}),t.d(a,"k",function(){return te}),t.d(a,"l",function(){return re}),t.d(a,"m",function(){return ie}),t.d(a,"o",function(){return b}),t.d(a,"p",function(){return y})},151:function(e,a,t){"use strict";var n=t(5),r=t.n(n),l=t(6),i=t.n(l),o=t(7),s=t.n(o),u=t(8),c=t.n(u),d=t(9),p=t.n(d),m=t(0),h=t.n(m),f=t(3),g=t.n(f),y=t(111),b=t.n(y),v=function(e){function a(e){var t;return r()(this,a),(t=s()(this,c()(a).call(this,e))).element=h.a.createRef(),t}return p()(a,e),i()(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"highlight",value:function(){this.element.current.querySelectorAll("code").forEach(function(e){return b.a.highlightBlock(e)})}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.language;return h.a.createElement("pre",{ref:this.element},h.a.createElement("code",{className:"hljs ".concat(t)},a))}}]),a}(m.Component);v.propTypes={children:g.a.node.isRequired,language:g.a.string},v.defaultProps={language:"javascript"},a.a=v},70:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t.n(n),l=t(13),i=t.n(l),o=t(11),s=t.n(o),u=t(0),c=t.n(u),d=t(3),p=t.n(d),m=t(183),h=t(151),f=t(88),g=t(92),y=t.n(g),b=t(572),v=t(571),E=t(129),T=function(e){var a=e.handleSubmit;y()(e,["handleSubmit"]);return c.a.createElement("form",{onSubmit:a},c.a.createElement(b.a,{component:E.m,name:"text",label:"Text field label",placeholder:"Enter some text"}),c.a.createElement(b.a,{component:E.i,name:"password",label:"Password field label",placeholder:"Enter your password"}),c.a.createElement(b.a,{component:E.k,name:"select",label:"Select field label",placeholder:"Select a value",options:[{value:"foo",label:"Foo"},{value:"bar",label:"Bar"}]}),c.a.createElement(b.a,{component:E.a,name:"checkbox",label:"Tick me"}),c.a.createElement(b.a,{component:E.l,name:"textarea",label:"Text area field label",placeholder:"Write me a story"}))};T.propTypes={handleSubmit:p.a.func.isRequired};var C=Object(v.a)({form:"example"})(T),R=t(108),q=t(150),x=t(576),N=Object(q.b)({form:x.a}),j=Object(q.c)(N);t.d(a,"pageQuery",function(){return P});var O=Object(m.b)(function(e){return s()({},e.form)})(function(e){var a=e.example,t=void 0===a?{}:a,n=t.registeredFields,r=void 0===n?{}:n,l=t.values,o=void 0===l?{}:l,u=t.fields,d=void 0===u?{}:u,p=Object.keys(r).reduce(function(e,a){var t=s()({name:a,value:o[a]||null,active:!1,touched:!1},d[a]||{});return s()({},e,i()({},a,t))},{active:t.active||!1,anyTouched:!!t.anyTouched});return c.a.createElement("div",null,c.a.createElement("p",null,"Debug values"),c.a.createElement(h.a,{language:"json"},JSON.stringify(p,null,2)))}),k=function(e){var a=e.data,t=Object(R.c)(a),n=r()(t,1)[0];return c.a.createElement(m.a,{store:j},c.a.createElement(f.a,null,c.a.createElement(R.a,{title:"Form components",html:n.html}),c.a.createElement(C,{handleSubmit:console.log}),c.a.createElement(O,null)))};k.propTypes={data:p.a.object.isRequired};var P="1059599421";a.default=k},80:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return m});var n=t(0),r=t.n(n),l=t(3),i=t.n(l),o=t(73),s=t.n(o);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var u=t(82),c=t.n(u);t.d(a,"PageRenderer",function(){return c.a});var d=t(16);t.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},82:function(e,a,t){var n;e.exports=(n=t(84))&&n.default||n},84:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t.n(n),l=t(0),i=t.n(l),o=t(3),s=t.n(o),u=t(25),c=t(2),d=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(u.a,r()({location:a,pageResources:t},t.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=d},85:function(e){e.exports={data:{site:{siteMetadata:{title:"Bandit Pouch",description:"Common React components and utilities"}}}}},86:function(e,a,t){},88:function(e,a,t){"use strict";var n=t(85),r=t(0),l=t.n(r),i=t(3),o=t.n(i),s=t(103),u=t.n(s),c=t(80),d=t(281),p=t(563),m=t(564),h=t(22),f=t.n(h),g=t(92),y=t.n(g),b=t(72),v=t.n(b),E=t(573),T=t(562),C=function(e){var a=e.active,t=e.disabled,n=e.className,r=y()(e,["active","disabled","className"]);return delete r.onSelect,delete r.eventKey,delete r.activeKey,delete r.activeHref,l.a.createElement("li",{role:"presentation",className:v()(n,{active:a,disabled:t})},l.a.createElement(c.Link,f()({},r,{disabled:t})))},R=function(e){var a=e.siteTitle;return l.a.createElement(E.a,null,l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Brand,null,l.a.createElement(c.Link,{to:"/"},a))),l.a.createElement(E.a.Collapse,null,l.a.createElement(T.a,null,l.a.createElement(C,{to:"/ui"},"UI components"),l.a.createElement(C,{to:"/forms"},"Form"),l.a.createElement(C,{to:"/redux"},"Redux"),l.a.createElement(C,{to:"/utils"},"Utilities"),l.a.createElement(C,{to:"/api"},"API"))))};R.propTypes={siteTitle:o.a.string.isRequired};var q=R,x=(t(104),t(105),t(106),t(86),function(e){var a=e.children,t=e.data.site,n=(void 0===t?{}:t).siteMetadata,r=void 0===n?{}:n;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:"kayak, react, redux"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(q,{siteTitle:r.title}),l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(m.a,{xs:12},a))))});x.propTypes={data:o.a.object.isRequired,children:o.a.node.isRequired};var N=function(e){var a=e.children;return l.a.createElement(c.StaticQuery,{query:"2779630680",render:function(e){return l.a.createElement(x,{data:e},a)},data:n})};N.propTypes={children:o.a.node.isRequired};a.a=N}}]);
//# sourceMappingURL=component---src-pages-forms-js-4efcc6cbcfad53d94ade.js.map