(this.webpackJsonpannygutierrez2=this.webpackJsonpannygutierrez2||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/world.abaff9c3.svg"},21:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/menu-icon.642b85e2.svg"},29:function(e,t,a){e.exports=a.p+"static/media/label-icon.ba0740a9.svg"},30:function(e,t,a){e.exports=a.p+"static/media/user.55814f91.svg"},31:function(e,t,a){e.exports=a.p+"static/media/arrow.3b70819e.svg"},32:function(e,t,a){e.exports=a.p+"static/media/kaytrust.ff954aaf.svg"},33:function(e,t,a){e.exports=a.p+"static/media/people.9611aab9.svg"},34:function(e,t,a){e.exports=a.p+"static/media/kaytrustweb.0360a849.svg"},39:function(e,t,a){e.exports=a(52)},44:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),i=(a(44),a(45),a(21),a(22),a(23));function o(){var e=Object(i.a)(["\n  background-color: #444;\n  color: white;\n  padding: 16px;\n  position: fixed;\n  top:","px;\n  right: 16px;\n  z-index: 10000;\n  transition: top 0.5s ease;\n"]);return o=function(){return e},e}var s=a(24).a.div(o(),(function(e){return e.top})),m=function(e){e.show;return l.a.createElement(s,{top:e.top},"Message sent")},u=a(9),d=function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],c=a[1];return{value:l,setValue:c,reset:function(){return c("")},bind:{value:l,onChange:function(e){c(e.target.value)}}}},p=a(56),f=a(55),E=a(11),g=a(28),N=a.n(g),b=a(29),y=a.n(b),v=a(30),x=a.n(v),h=a(31),w=a.n(h),j=a(32),k=a.n(j),O=a(33),S=a.n(O),A=a(14),T=a.n(A),M=a(34),z=a.n(M);var C=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);console.log(r);var i={backgroundColor:r};a||(i.display="none");var o=Object(n.useState)(-100),s=Object(u.a)(o,2),p=s[0],f=s[1],E=Object(n.useState)(!1),g=Object(u.a)(E,2),b=g[0],v=g[1],h=d(""),j=h.value,O=h.bind,A=h.reset,M=d(""),C=M.value,K=M.bind,L=M.reset,I=d(""),_=I.value,q=I.bind,W=I.reset;Object(n.useEffect)((function(){var e=document.getElementsByTagName("main")[0];return window.addEventListener("wheel",(function(t){t.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100})),function(){return window.removeEventListener("wheel",(function(t){t.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100}))}}));var F=function(e){e.preventDefault(),""!==j&""!==C&""!==_&&(v(!0),fetch("https://ag-db.herokuapp.com/post",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j,message:_,email:C})}).then((function(e){L(),A(),W(),f(16),v(!1),setTimeout((function(){f(-100)}),4e3)})).catch((function(e){v(!1)})))};return l.a.createElement("div",{className:"main-container"},l.a.createElement("main",{className:"cont-scroll"},l.a.createElement("div",{className:"wrapper1"},l.a.createElement("div",{className:"texto photo1 proj-text"},l.a.createElement("div",{className:"project-description-scroll px-4 py-4"},l.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},l.a.createElement("img",{className:"icon-world mr-2",src:T.a,alt:"world"}),"KayTrust"),l.a.createElement("p",{className:"project-title proj-text"},"Kay Trust Wallet - Digital Identity"),l.a.createElement("p",{className:"project-description proj-text"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),l.a.createElement("div",{className:"texto photo2"},l.a.createElement("img",{className:"kayweb1",src:S.a,alt:"kayweb1"}),l.a.createElement("div",{className:"project-description-scroll px-4 py-4"},l.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},l.a.createElement("img",{className:"icon-world mr-2",src:T.a,alt:"world"}),"KayTrust"),l.a.createElement("p",{className:"project-title proj-text"},"Kay Trust Wallet - Digital Identity"),l.a.createElement("p",{className:"project-description proj-text"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),l.a.createElement("div",{className:"texto d-flex align-items-center justify-content-center"},l.a.createElement("form",{onSubmit:function(e){return F(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},l.a.createElement("p",{className:"salute pb-3 contact-title"},"CONTACT ME"),b?l.a.createElement("div",{className:"loading-container"},l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"})):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("input",Object.assign({},O,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("input",Object.assign({},K,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("textarea",Object.assign({},q,{className:"form-control input-form-contact",placeholder:"Message"})))),b?l.a.createElement("p",{className:"salute mt-4"},"Sending..."):l.a.createElement("button",{disabled:b,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))))),l.a.createElement(m,{top:p}),l.a.createElement("input",{type:"checkbox",id:"menu-toggle"}),l.a.createElement("label",{onClick:function(){c(!a)},htmlFor:"menu-toggle",className:"menu-icon"},l.a.createElement("img",{className:"menu-icon-img",src:N.a,alt:"menu-icon"})),l.a.createElement("label",{htmlFor:"menu-toggle",className:"label-icon-container"},l.a.createElement("img",{className:"label-icon",src:y.a,alt:"label-icon"})),l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"presentation-section"},l.a.createElement("p",{className:"salute animation-text"},"HELLO THERE"),l.a.createElement("img",{className:"user-image",src:x.a,alt:"user-image"}),l.a.createElement("div",{className:"title-container animation-text"},l.a.createElement("span",{className:"title-presentation animation-text"},"My name is",l.a.createElement("br",null)," Anny Gutierrez."),l.a.createElement("br",null),l.a.createElement("span",{className:"title-presentation animation-text"},"I develop apps & progams."),l.a.createElement("div",{className:"rectangle-colorful",style:i})),l.a.createElement("div",{className:"about-section"},l.a.createElement("div",{className:"about-head d-flex align-items-center pr-2"},l.a.createElement("img",{className:"arrow",src:w.a,alt:"arrow-icon"}),l.a.createElement("span",{className:"about-title animation-text"},"About me")),l.a.createElement("p",{className:"salute mt-5 animation-text"},"ELSEWHERE"),l.a.createElement("div",{className:"d-flex flex-row media-links"},l.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center insta animation-text"},l.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-press"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center linked animation-text"},l.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-press"})),l.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center mail animation-text"},l.a.createElement("i",{className:"far fa-envelope icons-media icons-media-press"})),l.a.createElement("a",{href:"https://twitter.com/annyglop23",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center twitter animation-text"},l.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-press"}))))),l.a.createElement("div",{className:"content-web-section horizontal-scroll-wrapper squares"},l.a.createElement("div",{className:"projects-section pt-3"},l.a.createElement("p",{className:"salute work-title light-salute"},"RECENT WORK"),l.a.createElement("div",{className:"just-projects-container"},l.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},l.a.createElement("img",{className:"project-img",src:k.a,alt:"project"}),l.a.createElement("div",{className:"project-text py-4"},l.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),l.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),l.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},l.a.createElement("img",{className:"project-img",src:z.a,alt:"project"}),l.a.createElement("div",{className:"project-text py-4"},l.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),l.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))))),l.a.createElement("div",{className:"contact-section pb-5"},l.a.createElement("form",{onSubmit:function(e){return F(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},l.a.createElement("p",{className:"salute mt-5 pb-3 contact-title"},"CONTACT ME"),b?l.a.createElement("div",{className:"loading-container"},l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"ball"})):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("input",Object.assign({},O,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("input",Object.assign({},K,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),l.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},l.a.createElement("textarea",Object.assign({},q,{className:"form-control input-form-contact",placeholder:"Message"})))),b?l.a.createElement("p",{className:"salute mt-4"},"Sending..."):l.a.createElement("button",{disabled:b,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))),l.a.createElement("div",{className:"footer-container py-3 d-flex align-items-center justify-content-center flex-column"},l.a.createElement("div",{className:"d-flex flex-row media-links pt-3"},l.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center insta"},l.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-footer"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center linked"},l.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-footer"})),l.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center mail"},l.a.createElement("i",{className:"far fa-envelope icons-media icons-media-footer"})),l.a.createElement("a",{href:"https://twitter.com/annyglop23",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center twitter"},l.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-footer"}))),l.a.createElement("p",{className:"mt-5 footer-copyrights"},"\xa9 2020 Anny Gutierrez. All rights reserved.")))),l.a.createElement("div",{className:"slideout-sidebar d-flex align-items-center justify-content-center"},l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",null,"Kaytrust"),l.a.createElement("li",null,"Cadena"),l.a.createElement("li",null,"In_grid"),l.a.createElement("li",null,"Alastria"),l.a.createElement("li",null,"Honduras"),l.a.createElement("li",null,"Contact"))))},K=a(5),L=Object(K.a)(),I=a(1);window.loadPromise=new Promise((function(e){window.addEventListener("DOMContentLoaded",e)}));var _=function(e,t,a){var n,l,c=a?0:.5;"/"===e?(n=function(e,t){var a=new I.d({paused:!0}),n=e.querySelectorAll(".animation-text");e.querySelectorAll(".proj-text");return a.from(e,0,{display:"none",autoAlpha:0,delay:t}).staggerFrom(n,.375,{autoAlpha:0,x:-25,ease:I.b.easeOut},.125),a}(t,c),l=function(e,t){var a=new I.d({paused:!0}),n=(e.querySelectorAll(".animation-text"),e.querySelectorAll(".proj-text"));return a.from(e,0,{display:"none",autoAlpha:0,delay:t}).staggerFrom(n,.375,{autoAlpha:0,x:-25,ease:I.b.easeOut},.125),a}(t,c)):n=function(e,t){var a=new I.d({paused:!0}),n=e.querySelector(".content"),l=e.querySelector(".content--inner");return a.from(e,.3,{display:"none",autoAlpha:0,delay:t,ease:I.b.easeIn}).from(n,.15,{autoAlpha:0,y:25,ease:I.b.easeInOut}).from(l,.15,{autoAlpha:0,delay:.15,ease:I.b.easeIn}),a}(t,c),console.log("window ************",window),console.log("window ************",window.loadPromise),window.loadPromise.then((function(){return requestAnimationFrame((function(){n.play(),l.play()}))}))},q=(a(35).a,function(){console.log(L);var e=L.location,t=e.pathname,a=e.key;return l.a.createElement("div",null,l.a.createElement(p.a,{component:null},l.a.createElement(f.a,{key:a,appear:!0,onEnter:function(e,a){return _(t,e,a)},onExit:function(e,t){return function(e){var t=new I.d({paused:!0});t.to(e,.15,{autoAlpha:0,ease:I.b.easeOut}),t.play()}(e)},timeout:{enter:750,exit:150}},l.a.createElement(E.b,{history:L},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:C}))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.866de85f.chunk.js.map