(this.webpackJsonpannygutierrez2=this.webpackJsonpannygutierrez2||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/world.abaff9c3.svg"},,,,,,,,,,,,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t.p+"static/media/menu-icon.642b85e2.svg"},function(e,a,t){e.exports=t.p+"static/media/menu-about.04d95ee7.svg"},function(e,a,t){e.exports=t.p+"static/media/label-icon.ba0740a9.svg"},function(e,a,t){e.exports=t.p+"static/media/label-about.9d34ae2a.svg"},function(e,a,t){e.exports=t.p+"static/media/anny-icon.92fb6403.svg"},function(e,a,t){e.exports=t.p+"static/media/user.55814f91.svg"},function(e,a,t){e.exports=t.p+"static/media/arrow.3b70819e.svg"},function(e,a,t){e.exports=t.p+"static/media/kaytrust.ff954aaf.svg"},function(e,a,t){e.exports=t.p+"static/media/kaytrustweb.0360a849.svg"},,,,,function(e,a,t){e.exports=t(56)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,function(e,a,t){e.exports=t.p+"static/media/people.9611aab9.svg"},function(e,a,t){e.exports=t.p+"static/media/ingrid.bbc56b94.svg"},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),i=t.n(c),l=(t(46),t(47),t(21),t(22),t(23));function o(){var e=Object(l.a)(["\n  background-color: #444;\n  color: white;\n  padding: 16px;\n  position: fixed;\n  top:","px;\n  right: 16px;\n  z-index: 10000;\n  transition: top 0.5s ease;\n"]);return o=function(){return e},e}var s=t(24).a.div(o(),(function(e){return e.top})),m=function(e){e.show;return r.a.createElement(s,{top:e.top},"Message sent")},p=t(8),d=function(e){var a=Object(n.useState)(e),t=Object(p.a)(a,2),r=t[0],c=t[1];return{value:r,setValue:c,reset:function(){return c("")},bind:{value:r,onChange:function(e){c(e.target.value)}}}},u=t(60),f=t(59),g=t(12),E=t(28),N=t.n(E),b=t(29),v=t.n(b),y=t(30),x=t.n(y),j=t(31),h=t.n(j),w=t(32),k=t.n(w),O=t(33),S=t.n(O),A=t(34),L=t.n(A),C=t(35),z=t.n(C),T=(t(50),t(9)),M=t.n(T),H=(t(51),t(36)),K=t.n(H),q=function(e,a){var t=Object(n.useRef)(!1);Object(n.useEffect)((function(){t.current?e():t.current=!0}),a)};var I=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)("Home"),l=Object(p.a)(i,2),o=l[0],s=l[1],u=function(){console.log("Hide"),c(!t)};Object(n.useEffect)((function(){return console.log("mounted")}),[]),q((function(){document.getElementById("menu-toggle").click()}),[o]);var f="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);console.log(f);var g={backgroundColor:f};t||(g.backgroundColor="transparent");var E=Object(n.useState)(-100),b=Object(p.a)(E,2),y=b[0],j=b[1],w=Object(n.useState)(!1),O=Object(p.a)(w,2),A=O[0],C=O[1],T=d(""),H=T.value,I=T.bind,_=T.reset,D=d(""),F=D.value,P=D.bind,W=D.reset,R=d(""),G=R.value,B=R.bind,J=R.reset;Object(n.useEffect)((function(){if("Home"===o){var e=document.getElementsByTagName("main")[0];return window.addEventListener("wheel",(function(a){a.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100})),function(){return window.removeEventListener("wheel",(function(a){a.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100}))}}}));var V=function(e){e.preventDefault(),""!==H&""!==F&""!==G&&(C(!0),fetch("https://ag-db.herokuapp.com/post",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:H,message:G,email:F})}).then((function(e){W(),_(),J(),j(16),C(!1),setTimeout((function(){j(-100)}),4e3)})).catch((function(e){C(!1)})))};return r.a.createElement("div",{className:"main-container"},r.a.createElement(m,{top:y}),r.a.createElement("input",{type:"checkbox",id:"menu-toggle"}),r.a.createElement("label",{onClick:function(){return u()},htmlFor:"menu-toggle",className:"menu-icon"},r.a.createElement("img",{className:"menu-icon-img",src:"Sobre mi"===o?v.a:N.a,alt:"menu-icon"})),r.a.createElement("label",{onClick:function(){return u()},htmlFor:"menu-toggle",className:"label-icon-container"},r.a.createElement("img",{className:"label-icon",src:"Sobre mi"===o?h.a:x.a,alt:"label-icon"})),"Home"===o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{id:"scroll",className:"container-scroll cont-scroll ".concat(t?"move-scroll":"")},r.a.createElement("div",{className:"wrapper1"},r.a.createElement("div",{className:"texto photo1 proj-text"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"In Grid - Am\xe9rica Televisi\xf3n"),r.a.createElement("p",{className:"project-title proj-text"},"In_grid - Management platform"),r.a.createElement("p",{className:"project-description proj-text"},"Web App dise\xf1ada para administrar el cat\xe1logo de programas, los cortes comerciales, programaci\xf3n de productos audiovisuales y los ingresos por marketing."),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen es una recreaci\xf3n de la web original para respetar privacidad de la empresa."))),r.a.createElement("div",{className:"texto photo2"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"KayTrust Hub - Everis"),r.a.createElement("p",{className:"project-title proj-text"},"Kay Trust - Landing page"),r.a.createElement("p",{className:"project-description proj-text"},"KayTrust es una plataforma de confianza que permite gestionar las identidades digitales de tus clientes de manera segura, confiable y soberana."),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen representa la p\xe1gina principal de la web original."))),r.a.createElement("div",{className:"texto photo3"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"Honduras - Everis"),r.a.createElement("p",{className:"project-title proj-text"},"Honduras - Proyecto de fiduciarios"),r.a.createElement("p",{className:"project-description proj-text"},"El proyecto de fiduciarios Honduras es un piloto ideado para mejorar la trazabilidad, eficiencia y transparencia de los procesos de contrataci\xf3n."),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen es una recreaci\xf3n de la web original para respetar privacidad de la empresa."))),r.a.createElement("div",{className:"texto photo4"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"Cadena - Everis"),r.a.createElement("p",{className:"project-title proj-text"},"Proyecto Cadena"),r.a.createElement("p",{className:"project-description proj-text"},"El Proyecto Cadena es una web app que ayuda en la administraci\xf3n y conexi\xf3n de las aduanas de: Per\xfa, M\xe9xico, Colombia y Chile."),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen es una recreaci\xf3n de la web original para respetar privacidad de la empresa."))),r.a.createElement("div",{className:"texto photo5"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"Kaytrust - Everis"),r.a.createElement("p",{className:"project-title proj-text"},"Kaytrust - David 19"),r.a.createElement("p",{className:"project-description proj-text"},"La aplicaci\xf3n es parte de LACChain y busca recopilar informaci\xf3n relacionada al COVID-19 de ciudadanos de forma privada y an\xf3nima."),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen es una recreaci\xf3n de la app original para respetar privacidad de la empresa."))),r.a.createElement("div",{className:"texto photo6"},r.a.createElement("div",{className:"project-description-scroll px-4 py-4"},r.a.createElement("p",{className:"p-2 font-weight-bold proj-text"},r.a.createElement("img",{className:"icon-world mr-2",src:M.a,alt:"world"}),"Kaytrust - Everis"),r.a.createElement("p",{className:"project-title proj-text"},"Kaytrust - Piloto Argentina"),r.a.createElement("p",{className:"project-description proj-text"},"Fue un test de c\xf3mo funcionar\xeda la digitalizaci\xf3n de la identidad de los ciudadanos de un pa\xeds y que riesgos de seguridad implica. "),r.a.createElement("p",{className:"project-description proj-text image-footer"},"* La im\xe1gen es una recreaci\xf3n de la app original para respetar privacidad de la empresa."))),r.a.createElement("div",{className:"texto d-flex align-items-center justify-content-center"},r.a.createElement("form",{onSubmit:function(e){return V(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},r.a.createElement("p",{className:"salute pb-3 contact-title"},"CONTACT ME"),A?r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("input",Object.assign({},I,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("input",Object.assign({},P,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("textarea",Object.assign({},B,{className:"form-control input-form-contact",placeholder:"Message"})))),A?r.a.createElement("p",{className:"salute mt-4"},"Sending..."):r.a.createElement("button",{disabled:A,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))))),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"presentation-section"},r.a.createElement("p",{className:"salute animation-text"},"HELLO THERE"),r.a.createElement("img",{className:"user-image",src:S.a,alt:"user-image"}),r.a.createElement("div",{className:"title-container animation-text"},r.a.createElement("span",{className:"title-presentation animation-text"},"Mi nombre es",r.a.createElement("br",null)," Anny Gutierrez."),r.a.createElement("br",null),r.a.createElement("span",{className:"title-presentation animation-text",style:g},"Desarrollo apps & programas.")),r.a.createElement("div",{className:"about-section"},r.a.createElement("div",{className:"about-head d-flex align-items-center pr-2"},r.a.createElement("img",{className:"arrow",src:L.a,alt:"arrow-icon"}),r.a.createElement("a",{href:"https://github.com/annygutierrez",target:"_blank",className:"about-title animation-text"},"GitHub")),r.a.createElement("p",{className:"salute mt-5 animation-text"},"ELSEWHERE"),r.a.createElement("div",{className:"d-flex flex-row media-links"},r.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center insta animation-text"},r.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-press"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center linked animation-text"},r.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-press"})),r.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center mail animation-text"},r.a.createElement("i",{className:"far fa-envelope icons-media icons-media-press"})),r.a.createElement("a",{href:"https://twitter.com/annygutierrezl",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center twitter animation-text"},r.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-press"}))))),r.a.createElement("div",{className:"content-web-section horizontal-scroll-wrapper squares"},r.a.createElement("div",{className:"projects-section pt-3"},r.a.createElement("p",{className:"salute work-title light-salute"},"RECENT WORK"),r.a.createElement("div",{className:"just-projects-container"},r.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},r.a.createElement("img",{className:"project-img",src:z.a,alt:"project"}),r.a.createElement("div",{className:"project-text py-4"},r.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),r.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),r.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},r.a.createElement("img",{className:"project-img",src:K.a,alt:"project"}),r.a.createElement("div",{className:"project-text py-4"},r.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),r.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))))),r.a.createElement("div",{className:"contact-section pb-5"},r.a.createElement("form",{onSubmit:function(e){return V(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},r.a.createElement("p",{className:"salute mt-5 pb-3 contact-title"},"CONTACT ME"),A?r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"}),r.a.createElement("div",{className:"ball"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("input",Object.assign({},I,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("input",Object.assign({},P,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),r.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},r.a.createElement("textarea",Object.assign({},B,{className:"form-control input-form-contact",placeholder:"Message"})))),A?r.a.createElement("p",{className:"salute mt-4"},"Sending..."):r.a.createElement("button",{disabled:A,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))),r.a.createElement("div",{className:"footer-container py-3 d-flex align-items-center justify-content-center flex-column"},r.a.createElement("div",{className:"d-flex flex-row media-links pt-3"},r.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center insta"},r.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-footer"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center linked"},r.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-footer"})),r.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center mail"},r.a.createElement("i",{className:"far fa-envelope icons-media icons-media-footer"})),r.a.createElement("a",{href:"https://twitter.com/annyglop23",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center twitter"},r.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-footer"}))),r.a.createElement("p",{className:"mt-5 footer-copyrights"},"\xa9 2020 Anny Gutierrez. All rights reserved."))))),"Sobre mi"===o&&r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"about-shadow"},r.a.createElement("div",{className:"content-about"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"5em",marginLeft:"10em",alignItems:"center"}},r.a.createElement("img",{style:{width:"5em",marginRight:"2em"},src:k.a,alt:"anny-icon"}),r.a.createElement("p",{className:"",style:{color:"white",fontSize:"25px"}},"Anny Gutierrez-L\xf3pez | Developer")),r.a.createElement("div",{style:{backgroundColor:"white",height:"3px",width:"3em",marginTop:"3em",marginLeft:"11em"}}),r.a.createElement("p",{className:"bold",style:{color:"white",marginTop:"3em",marginLeft:"9em",fontSize:"20px"}},"About"),r.a.createElement("div",{style:{}}))),r.a.createElement("div",{className:"content-container"}),r.a.createElement("main",{id:"scroll",className:"container-scroll cont-scroll"})),r.a.createElement("div",{className:"slideout-sidebar d-flex align-items-center justify-content-center"},r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",{className:"".concat("Home"===o?"active-item":""),onClick:function(){return s("Home"),void u()}},"Home"))))},_=t(5),D=Object(_.a)(),F=t(1);window.loadPromise=new Promise((function(e){window.addEventListener("DOMContentLoaded",e)}));var P=function(e,a,t){var n,r,c=t?0:.5;"/"===e?(n=function(e,a){var t=new F.d({paused:!0}),n=e.querySelectorAll(".animation-text");e.querySelectorAll(".proj-text");return t.from(e,0,{display:"none",autoAlpha:0,delay:a}).staggerFrom(n,.375,{autoAlpha:0,x:-25,ease:F.b.easeOut},.125),t}(a,c),r=function(e,a){var t=new F.d({paused:!0}),n=(e.querySelectorAll(".animation-text"),e.querySelectorAll(".proj-text"));return t.from(e,0,{display:"none",autoAlpha:0,delay:a}).staggerFrom(n,.375,{autoAlpha:0,x:-25,ease:F.b.easeOut},.125),t}(a,c)):n=function(e,a){var t=new F.d({paused:!0}),n=e.querySelector(".content"),r=e.querySelector(".content--inner");return t.from(e,.3,{display:"none",autoAlpha:0,delay:a,ease:F.b.easeIn}).from(n,.15,{autoAlpha:0,y:25,ease:F.b.easeInOut}).from(r,.15,{autoAlpha:0,delay:.15,ease:F.b.easeIn}),t}(a,c),console.log("window ************",window),console.log("window ************",window.loadPromise),window.loadPromise.then((function(){return requestAnimationFrame((function(){n.play(),r.play()}))}))},W=(t(37).a,function(){console.log(D);var e=D.location,a=e.pathname,t=e.key;return r.a.createElement("div",null,r.a.createElement(u.a,{component:null},r.a.createElement(f.a,{key:t,appear:!0,onEnter:function(e,t){return P(a,e,t)},onExit:function(e,a){return function(e){var a=new F.d({paused:!0});a.to(e,.15,{autoAlpha:0,ease:F.b.easeOut}),a.play()}(e)},timeout:{enter:750,exit:150}},r.a.createElement(g.b,{history:D},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:I}))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[41,1,2]]]);
//# sourceMappingURL=main.f48ea42e.chunk.js.map