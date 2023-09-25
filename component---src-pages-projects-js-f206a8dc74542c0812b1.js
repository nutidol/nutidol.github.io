"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[853],{5309:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var l=a(7294),r=a(1761),n=a(6947),c=a.p+"static/0-779096afe8e96e0f1a21f6d60afa47b2.jpg",i=a.p+"static/1-eaf7daa1aa25457d518b0fcb591286cc.jpg",o=a.p+"static/2-0a1aabebfdfb854ea9c6e6d09486f14b.jpg",s=a.p+"static/2.5-b9a3cb67c5e2d2fd37dcde944d59b733.png",m=a.p+"static/3-f6a23ab1fba87bbe76161c091dc609f5.jpg",d=a.p+"static/4-3a1710a0f8c1739cd00010539436aea8.jpg",u=a.p+"static/5-a15340e11d3aa7f4efccf957b342281c.jpg",f=a.p+"static/6-0e2c3af4cd75e8b7400c5e8a4c61e013.jpg",p=a.p+"static/7-02a188a70f793edc514418bfe268c5e8.jpg",E=a.p+"static/8-6d480119942a6b8fa39826e872f354a6.jpg",b=a.p+"static/9-539d3491f0e775e09428a006c182a51b.jpg",v=a(4160),h=a(682),g=a(7462),y=a(3366),x=a(4184),Z=a.n(x),k=a(6792),N=["bsPrefix","className","noGutters","as"],w=["xl","lg","md","sm","xs"],T=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.noGutters,c=e.as,i=void 0===c?"div":c,o=(0,y.Z)(e,N),s=(0,k.vE)(a,"row"),m=s+"-cols",d=[];return w.forEach((function(e){var t,a=o[e];delete o[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&d.push(""+m+l+"-"+t)})),l.createElement(i,(0,g.Z)({ref:t},o,{className:Z().apply(void 0,[r,s,n&&"no-gutters"].concat(d))}))}));T.displayName="Row",T.defaultProps={noGutters:!1};var B=T,P=["bsPrefix","className","as"],R=["xl","lg","md","sm","xs"],A=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.as,c=void 0===n?"div":n,i=(0,y.Z)(e,P),o=(0,k.vE)(a,"col"),s=[],m=[];return R.forEach((function(e){var t,a,l,r=i[e];if(delete i[e],"object"==typeof r&&null!=r){var n=r.span;t=void 0===n||n,a=r.offset,l=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&s.push(!0===t?""+o+c:""+o+c+"-"+t),null!=l&&m.push("order"+c+"-"+l),null!=a&&m.push("offset"+c+"-"+a)})),s.length||s.push(o),l.createElement(c,(0,g.Z)({},i,{ref:t,className:Z().apply(void 0,[r].concat(s,m))}))}));A.displayName="Col";var D=A,C=a(7116),j=function(e){return l.forwardRef((function(t,a){return l.createElement("div",(0,g.Z)({},t,{ref:a,className:Z()(t.className,e)}))}))},U=a(8154),W=["bsPrefix","className","variant","as"],I=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,c=e.as,i=void 0===c?"img":c,o=(0,y.Z)(e,W),s=(0,k.vE)(a,"card-img");return l.createElement(i,(0,g.Z)({ref:t,className:Z()(n?s+"-"+n:s,r)},o))}));I.displayName="CardImg",I.defaultProps={variant:null};var S=I,z=["bsPrefix","className","bg","text","border","body","children","as"],G=j("h5"),O=j("h6"),_=(0,C.Z)("card-body"),M=(0,C.Z)("card-title",{Component:G}),L=(0,C.Z)("card-subtitle",{Component:O}),q=(0,C.Z)("card-link",{Component:"a"}),H=(0,C.Z)("card-text",{Component:"p"}),X=(0,C.Z)("card-header"),Y=(0,C.Z)("card-footer"),F=(0,C.Z)("card-img-overlay"),J=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,c=e.text,i=e.border,o=e.body,s=e.children,m=e.as,d=void 0===m?"div":m,u=(0,y.Z)(e,z),f=(0,k.vE)(a,"card"),p=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:f+"-header"}}),[f]);return l.createElement(U.Z.Provider,{value:p},l.createElement(d,(0,g.Z)({ref:t},u,{className:Z()(r,f,n&&"bg-"+n,c&&"text-"+c,i&&"border-"+i)}),o?l.createElement(_,null,s):s))}));J.displayName="Card",J.defaultProps={body:!1},J.Img=S,J.Title=M,J.Subtitle=L,J.Body=_,J.Link=q,J.Text=H,J.Header=X,J.Footer=Y,J.ImgOverlay=F;var K=J,V=a(1330),Q=a(8358),$=["bsPrefix","variant","size","active","className","block","type","as"],ee=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,n=e.size,c=e.active,i=e.className,o=e.block,s=e.type,m=e.as,d=(0,y.Z)(e,$),u=(0,k.vE)(a,"btn"),f=Z()(i,u,c&&"active",r&&u+"-"+r,o&&u+"-block",n&&u+"-"+n);if(d.href)return l.createElement(Q.Z,(0,g.Z)({},d,{as:m,ref:t,className:Z()(f,d.disabled&&"disabled")}));t&&(d.ref=t),s?d.type=s:m||(d.type="button");var p=m||"button";return l.createElement(p,(0,g.Z)({},d,{className:f}))}));ee.displayName="Button",ee.defaultProps={variant:"primary",active:!1,disabled:!1};var te=ee;var ae=()=>l.createElement("div",null,l.createElement(r.Z,null),l.createElement("div",{className:"container",style:{margin:"0 auto",maxWidth:960,paddingBottom:"200px"}},l.createElement(h.Z,{className:"text-center"},l.createElement(B,{xs:1,md:2,className:"g-4 py-4"},l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:b,classname:"class-img-top",alt:"SG",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Evaluating StyleGAN variants"),l.createElement(K.Text,null,"To discover effective methods for evaluating the outputs of a generative model. Also, this project aims to see the correlation between the existing quantitative metrics and human perception."),l.createElement(v.rU,{to:"/p-sg"},l.createElement(te,{variant:"outline-dark"},"Read more")),l.createElement(te,{variant:"outline-dark",className:"m-1",href:"https://www.youtube.com/embed/Zn6SmSWUXts"},"Watch overview")))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:c,classname:"class-img-top",alt:"DDPG",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"DDPG Bipedal Walker"),l.createElement(K.Text,null,"A reinforcement learning algorithm for the BipedalWalker problem. The DDPG agent teaches the walker to walk through rough terrain in a thousand episodes."),l.createElement(v.rU,{to:"/p-ddpg"},l.createElement(te,{variant:"outline-dark"},"Read more")),l.createElement(te,{variant:"outline-dark",className:"m-1",href:"https://www.youtube.com/watch?v=TDYcXUJmAB4"},"Watch demo")))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:i,classname:"class-img-top",alt:"Cook Burn",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Cook Burn Application"),l.createElement(K.Text,null,"A mobile application that generates menus and recipes based on users’ ingredients and preferences. I used the free tier of AWS for backend and React Native for frontend."),l.createElement(v.rU,{to:"/p-cookburn"},l.createElement(te,{variant:"outline-dark"},"Read more")),l.createElement(te,{variant:"outline-dark",className:"m-1",href:"https://youtu.be/mhzyxke2IkU"},"Watch demo")))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:o,classname:"class-img-top",alt:"Data Warehouse",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Data Warehouse Project"),l.createElement(K.Text,null,"Implemented Data warehouse for retail business and analyzed past data using Power BI."),l.createElement(v.rU,{to:"/p-dw"},l.createElement(te,{variant:"outline-dark"},"Read more"))))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:s,classname:"class-img-top",alt:"Data Science",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Data Science Project on Azure ML"),l.createElement(K.Text,null,"Advanced analytics on Azure ML related to Data Warehousing Project in Retails."),l.createElement(v.rU,{to:"/p-ds"},l.createElement(te,{variant:"outline-dark"},"Read more")),l.createElement(te,{variant:"outline-dark",className:"m-1",href:"https://youtu.be/OGkc9OhO3Bg"},"Watch demo")))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:m,classname:"class-img-top",alt:"Beat Up",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Beat Up Application"),l.createElement(K.Text,null,"A prototype mobile application for solving the problem of being bored during the lockdown due to the spread of COVID-19."),l.createElement(v.rU,{to:"/p-bu"},l.createElement(te,{variant:"outline-dark"},"Read more"))))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:d,classname:"class-img-top",alt:"Clover",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Receipt-Based Reverse Engineering Project"),l.createElement(K.Text,null,"Receipt-Based Reverse Engineering for an Enterprise Information System. Me and my classmates reversed engineer the receipt of D'oro coffee shop to obtain an enterprise information system."),l.createElement(v.rU,{to:"/p-eis"},l.createElement(te,{variant:"outline-dark"},"Read more"))," "))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:u,classname:"class-img-top",alt:"CheezyAvocado",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"CheezyAvocado"),l.createElement(K.Text,null,"A web application with an IOT device aiming to tackle the problem of hotel room services."),l.createElement(v.rU,{to:"/p-ca"},l.createElement(te,{variant:"outline-dark"},"Read more"))," ",l.createElement(te,{variant:"outline-dark",className:"m-1",href:"https://www.youtube.com/watch?v=ku1EKh2EWZY&t=18s&ab_channel=NatSaeTang"},"Watch overview")))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:f,classname:"class-img-top",alt:"Bin Bin",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Bin Bin Application"),l.createElement(K.Text,null,"A prototype application that can track and classify users’ trashes."),l.createElement(v.rU,{to:"/p-bb"},l.createElement(te,{variant:"outline-dark"},"Read more"))))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:p,classname:"class-img-top",alt:"Deer With No Eyes",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Deer With No Eyes"),l.createElement(K.Text,null,"A mathematic(calculus) quiz application made for android devices from Android Studio."),l.createElement(v.rU,{to:"/p-noidea"},l.createElement(te,{variant:"outline-dark"},"Read more"))," "))),l.createElement(D,null,l.createElement(K,{bg:"light"},l.createElement(V.Z,{src:E,classname:"class-img-top",alt:"Automatic Tissue Dispenser",fluid:!0}),l.createElement(K.Body,null,l.createElement(K.Title,null,"Automatic Tissue Dispenser"),l.createElement(K.Text,null,"A prototype of an automatic tissue dispenser that can control the length of dispensed paper towel."),l.createElement(v.rU,{to:"/p-ts"},l.createElement(te,{variant:"outline-dark"},"Read more"))," ")))))),l.createElement(n.Z,null))},1330:function(e,t,a){var l=a(7462),r=a(3366),n=a(4184),c=a.n(n),i=a(7294),o=a(5697),s=a.n(o),m=a(6792),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(s().string,s().bool,s().bool,s().bool,s().bool,i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.fluid,s=e.rounded,u=e.roundedCircle,f=e.thumbnail,p=(0,r.Z)(e,d);a=(0,m.vE)(a,"img");var E=c()(o&&a+"-fluid",s&&"rounded",u&&"rounded-circle",f&&a+"-thumbnail");return i.createElement("img",(0,l.Z)({ref:t},p,{className:c()(n,E)}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=u}}]);
//# sourceMappingURL=component---src-pages-projects-js-f206a8dc74542c0812b1.js.map