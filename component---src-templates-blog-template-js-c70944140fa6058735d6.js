(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GCtb:function(e,t,a){"use strict";a("OG14");var n=a("TqRt");t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var l=n(a("pVnL")),r=n(a("8OQS")),s=n(a("q1tI")),c=n(a("17x9")),o=a("Wbzz"),i=a("n83N"),m=function(e){var t=e.to,a=e.language,n=e.children,c=e.onClick,m=(0,r.default)(e,["to","language","children","onClick"]);return s.default.createElement(i.IntlContextConsumer,null,(function(e){var r=a||e.language,i=e.routed||a?"/"+r+t:""+t;return s.default.createElement(o.Link,(0,l.default)({},m,{to:i,onClick:function(e){a&&localStorage.setItem("gatsby-intl-language",a),c&&c(e)}}),n)}))};m.propTypes={children:c.default.node.isRequired,to:c.default.string,language:c.default.string},m.defaultProps={to:""};var u=m;t.default=u;t.navigate=function(e,t){if("undefined"!=typeof window){var a=window.___gatsbyIntl,n=a.language,l=a.routed?"/"+n+e:""+e;(0,o.navigate)(l,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var a=window.___gatsbyIntl.routed,n="/"+e+(t||function(e){if(!a)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/vasconez.dev";return 0===e.indexOf(t)&&(e=e.slice(t.length)),e}(window.location.pathname)))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,o.navigate)(n)}}},"a+XO":function(e,t,a){},e2gX:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("q1tI")),r=a("7++0");t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),l.default.createElement((0,r.injectIntl)(e),t)}}},j6fc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("kOA+"),s=a.n(r),c=function(e){e.siteTitle;return l.a.createElement("header",null,l.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-gray-900 p-3"},l.a.createElement(s.a,{swipe:!0,to:"/",direction:"right",className:"flex items-center flex-shrink-0 text-white p-2 rounded mr-6"},l.a.createElement("span",{className:"text-xs tracking-tight"},"jvas28 $")),l.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},l.a.createElement("a",{href:"https://github.com/jvas28",rel:"noopener noreferrer",target:"_blank",className:"mx-2 text-white cursor-pointer"},l.a.createElement("i",{className:"fab fa-github "})),l.a.createElement("a",{href:"https://www.linkedin.com/in/jvasconez/",rel:"noopener noreferrer",target:"_blank",className:"mx-2 text-white cursor-pointer"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"mailto:julio@vasconez.dev",className:"mx-2 text-white cursor-pointer"},l.a.createElement("i",{className:"fas fa-envelope"})))))};c.defaultProps={siteTitle:""};var o=c;var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("footer",{className:"text-gray-600 w-full p-2 text-center text-sm"},"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("i",{className:"fas fa-heart"})," & ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},n}(n.Component),m=a("bN6C");function u(){var e=m.data;return l.a.createElement("div",{className:" bg-transparent flex flex-col overflow-hidden w-full text-blue-400"},l.a.createElement("div",{className:"p-3"},l.a.createElement("p",{className:"text-lg text-gray-500 font-bold"},l.a.createElement("i",{className:"fas fa-rss mx-2"}),"Lastest Posts"),l.a.createElement("ul",{className:""},e.allMarkdownRemark.edges.map((function(e){var t=e.node,a=t.id,n=t.frontmatter,r=n.title,c=n.tags,o=n.path;n.lang;return l.a.createElement("li",{className:"",key:a},l.a.createElement(s.a,{swipe:!0,to:o,direction:"left",className:"p-4 flex flex-col text-sm justify-between cursor-pointer hover:bg-blue-900 hover:text-white border border-blue-600 my-1"},l.a.createElement("p",{className:"mb-2"},r),l.a.createElement("div",{className:"flex flex-row justify-end"},c.map((function(e){return l.a.createElement("span",{key:e,className:"text-xs text-purple-700 text-white border border-indigo-700 p-1 rounded mr-2"},l.a.createElement("span",null,e))})))))})))))}var f=a("kCIJ"),d=(a("a+XO"),"1940926775");t.default=Object(f.injectIntl)((function(e){var t=e.data,a=t.markdownRemark;if(!a)return null;var n=a.frontmatter,r=a.html;return l.a.createElement("div",{className:"flex flex-col min-h-screen w-full"},l.a.createElement(o,{data:t}),l.a.createElement("main",{className:"flex flex-col md:flex-row  flex-grow w-full  bg-gray-800 md:p-8"},l.a.createElement("article",{className:"bg-gray-900 mx-auto flex flex-col w-full p-5 md:w-4/6"},l.a.createElement("h1",{className:"text-2xl font-extrabold text-blue-600"},n.title),l.a.createElement("div",{className:"blog-post-content markdown p-2",style:{maxWidth:1200},dangerouslySetInnerHTML:{__html:r}})),l.a.createElement("aside",{className:"flex flex-col w-full md:w-2/6 flex-grow md:ml-3 mt-2 md:mt-0"},l.a.createElement("div",{className:"w-full bg-gray-900 p-3"},l.a.createElement("div",{className:"flex flex-col text-gray-600 p-2"},l.a.createElement("div",{className:"flex flex-row w-full justify-start p-2"},l.a.createElement("i",{className:"fas fa-calendar pr-2"}),l.a.createElement("h2",{className:"text-xs px-1"},n.date)),l.a.createElement("div",{className:"flex flex-col w-full justify-start p-2"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-tags text-xs pr-2"}),"Tags"),l.a.createElement("div",{className:"flex flex-wrap pt-2"},n.tags.map((function(e){return l.a.createElement("span",{key:e,className:"px-1 m-1 rounded-full bg-gray-400 text-blue-700 flex flex-wrap cursor-pointer"},"#",e)})))))),l.a.createElement("div",{className:"w-full bg-gray-900 p-3 mt-2"},l.a.createElement(u,null)))),l.a.createElement(i,null))}))},kCIJ:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("TqRt"),l=a("284h");t.__esModule=!0;var r={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var s=a("7++0");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||(t[e]=s[e]))}));var c=l(a("GCtb"));t.Link=c.default,t.navigate=c.navigate,t.changeLocale=c.changeLocale;var o=n(a("e2gX"));t.withIntl=o.default;var i=a("n83N");t.IntlContextProvider=i.IntlContextProvider,t.IntlContextConsumer=i.IntlContextConsumer}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-c70944140fa6058735d6.js.map