"use strict";(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[544],{5769:function(e,t,a){a.r(t);var l=a(4578),n=a(1804),s=a.n(n),r=a(7294),m=a(1883),c=a(8032),i=a(3304),o=a(9357);let p=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,a=e.allMdx.edges,{currentPage:l,numPages:n}=this.props.pageContext,p=1===l,g=l===n,u=l-1==1?"/":"../"+(l-1),d="../"+(l+1);return r.createElement(i.Z,null,r.createElement(o.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),r.createElement("div",{className:"content-box clearfix"},a.map((e=>{let{node:t}=e;return r.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&r.createElement(m.Link,{to:t.fields.slug,className:"post-thumbnail"},r.createElement(c.G,{image:t.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",key:t.frontmatter.img.childImageSharp.gatsbyImageData.src,alt:""})),r.createElement("div",{className:"post-content"},r.createElement("h2",{className:"post-title"},r.createElement(m.Link,{to:t.fields.slug},t.frontmatter.title)),r.createElement("p",null,t.excerpt),r.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.createElement("span",{className:"post-words"},t.fields.timeToRead.text),r.createElement("span",{className:"page-tag"},t.frontmatter.tags&&t.frontmatter.tags.map((e=>r.createElement("span",{key:e},r.createElement(m.Link,{className:"tag",to:"/tags/"+s()(e)+"/"},e)))))))})),r.createElement("div",{className:"container"},r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("ul",null,!p&&r.createElement("p",null,r.createElement(m.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),r.createElement("p",null,r.createElement("span",{className:"page-number"},"Page ",l," of ",n)),!g&&r.createElement("p",null,r.createElement(m.Link,{to:d,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(r.Component);t.default=p}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-8b0241cf1ef1bba8b4e4.js.map