(this.webpackJsonpannygutierrez2=this.webpackJsonpannygutierrez2||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/world.abaff9c3.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/menu-icon.642b85e2.svg"},function(e,t,a){e.exports=a.p+"static/media/label-icon.ba0740a9.svg"},function(e,t,a){e.exports=a.p+"static/media/user.55814f91.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow.3b70819e.svg"},function(e,t,a){e.exports=a.p+"static/media/kaytrust.ff954aaf.svg"},function(e,t,a){e.exports=a.p+"static/media/kayweb1.2495b077.svg"},function(e,t,a){e.exports=a.p+"static/media/people.9611aab9.svg"},function(e,t,a){e.exports=a.p+"static/media/kaytrustweb.0360a849.svg"},,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/wallet1.fe51fbef.svg"},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),s=a.n(l),i=(a(27),a(1)),r=(a(28),a(29),a(30),a(7)),o=a.n(r),m=a(8),d=a.n(m),p=a(9),u=a.n(p),f=a(10),E=a.n(f),g=a(11),N=a.n(g),b=a(12),y=a.n(b),v=(a(31),a(13)),w=a.n(v),h=a(3),x=a.n(h),j=a(14),k=a.n(j),O=a(15);function T(){var e=Object(O.a)(["\n  background-color: #444;\n  color: white;\n  padding: 16px;\n  position: fixed;\n  top:","px;\n  right: 16px;\n  z-index: 10000;\n  transition: top 0.5s ease;\n"]);return T=function(){return e},e}var z=a(16).a.div(T(),(function(e){return e.top})),K=function(e){e.show;return c.a.createElement(z,{top:e.top},"Message sent")},S=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],l=a[1];return{value:c,setValue:l,reset:function(){return l("")},bind:{value:c,onChange:function(e){l(e.target.value)}}}};var C=function(){var e=Object(n.useState)(-100),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),m=r[0],p=r[1],f=S(""),g=f.value,b=f.bind,v=f.reset,h=S(""),j=h.value,O=h.bind,T=h.reset,z=S(""),C=z.value,L=z.bind,_=z.reset;Object(n.useEffect)((function(){var e=document.getElementsByTagName("main")[0];return window.addEventListener("wheel",(function(t){t.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100})),function(){return window.removeEventListener("wheel",(function(t){t.deltaY>0?e.scrollLeft+=100:e.scrollLeft-=100}))}}));var M=function(e){e.preventDefault(),""!==g&""!==j&""!==C&&(p(!0),fetch("https://ag-db.herokuapp.com/post",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g,message:C,email:j})}).then((function(e){T(),v(),_(),l(16),p(!1),setTimeout((function(){l(-100)}),4e3)})).catch((function(e){p(!1)})))};return c.a.createElement("div",{className:"main-container"},c.a.createElement("main",{className:"cont-scroll"},c.a.createElement("div",{className:"wrapper1"},c.a.createElement("div",{className:"texto"},c.a.createElement("img",{className:"kayweb1",src:y.a,alt:"kayweb1"}),c.a.createElement("div",{className:"project-description-scroll px-4 py-4"},c.a.createElement("p",{className:"p-2 font-weight-bold"},c.a.createElement("img",{class:"icon-world mr-2",src:x.a,alt:"world"}),"KayTrust"),c.a.createElement("p",{className:"project-title"},"Kay Trust Wallet - Digital Identity"),c.a.createElement("p",{className:"project-description"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),c.a.createElement("div",{className:"texto"},c.a.createElement("img",{className:"kayweb1",src:w.a,alt:"kayweb1"}),c.a.createElement("div",{className:"project-description-scroll px-4 py-4"},c.a.createElement("p",{className:"p-2 font-weight-bold"},c.a.createElement("img",{class:"icon-world mr-2",src:x.a,alt:"world"}),"KayTrust"),c.a.createElement("p",{className:"project-title"},"Kay Trust Wallet - Digital Identity"),c.a.createElement("p",{className:"project-description"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),c.a.createElement("div",{className:"texto d-flex align-items-center justify-content-center"},c.a.createElement("form",{onSubmit:function(e){return M(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},c.a.createElement("p",{className:"salute pb-3 contact-title"},"CONTACT ME"),m?c.a.createElement("div",{className:"loading-container"},c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("input",Object.assign({},b,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("input",Object.assign({},O,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("textarea",Object.assign({},L,{className:"form-control input-form-contact",placeholder:"Message"})))),m?c.a.createElement("p",{className:"salute mt-4"},"Sending..."):c.a.createElement("button",{disabled:m,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))))),c.a.createElement(K,{top:a}),c.a.createElement("input",{type:"checkbox",id:"menu-toggle"}),c.a.createElement("label",{htmlFor:"menu-toggle",className:"menu-icon"},c.a.createElement("img",{className:"menu-icon-img",src:o.a,alt:"menu-icon"})),c.a.createElement("label",{htmlFor:"menu-toggle",className:"label-icon-container"},c.a.createElement("img",{className:"label-icon",src:d.a,alt:"label-icon"})),c.a.createElement("div",{className:"content-container"},c.a.createElement("div",{className:"presentation-section"},c.a.createElement("p",{className:"salute"},"HELLO THERE"),c.a.createElement("img",{className:"user-image",src:u.a,alt:"user-image"}),c.a.createElement("div",{className:"title-container"},c.a.createElement("span",{className:"title-presentation"},"My name is",c.a.createElement("br",null)," Anny Gutierrez."),c.a.createElement("br",null),c.a.createElement("span",{className:"title-presentation"},"I develop apps & progams.")),c.a.createElement("div",{className:"about-section"},c.a.createElement("div",{className:"about-head d-flex align-items-center pr-2"},c.a.createElement("img",{className:"arrow",src:E.a,alt:"arrow-icon"}),c.a.createElement("span",{className:"about-title"},"About me")),c.a.createElement("p",{className:"salute mt-5"},"ELSEWHERE"),c.a.createElement("div",{className:"d-flex flex-row media-links"},c.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center insta"},c.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-press"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center linked"},c.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-press"})),c.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center mail"},c.a.createElement("i",{className:"far fa-envelope icons-media icons-media-press"})),c.a.createElement("a",{href:"https://twitter.com/annyglop23",target:"_blank",className:"media-icon-container media-icon-container-press d-flex align-items-center justify-content-center twitter"},c.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-press"}))))),c.a.createElement("div",{className:"content-web-section horizontal-scroll-wrapper squares"},c.a.createElement("div",{className:"projects-section pt-3"},c.a.createElement("p",{className:"salute work-title light-salute"},"RECENT WORK"),c.a.createElement("div",{className:"just-projects-container"},c.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},c.a.createElement("img",{className:"project-img",src:N.a,alt:"project"}),c.a.createElement("div",{className:"project-text py-4"},c.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),c.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))),c.a.createElement("div",{className:"project-container d-flex align-items-center justify-content-center flex-column py-3"},c.a.createElement("img",{className:"project-img",src:k.a,alt:"project"}),c.a.createElement("div",{className:"project-text py-4"},c.a.createElement("p",{className:"project-title light-salute"},"Kay Trust Wallet - Digital Identity"),c.a.createElement("p",{className:"project-description light-salute"},"KayTrust is a trusted platform that allows you to manage the digital identities of your customers in a safe, reliable and end-to-end manner."))))),c.a.createElement("div",{className:"contact-section pb-5"},c.a.createElement("form",{onSubmit:function(e){return M(e)},className:"contact-form d-flex align-items-center justify-content-center flex-column"},c.a.createElement("p",{className:"salute mt-5 pb-3 contact-title"},"CONTACT ME"),m?c.a.createElement("div",{className:"loading-container"},c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"}),c.a.createElement("div",{className:"ball"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("input",Object.assign({},b,{type:"text",className:"form-control input-form-contact",placeholder:"Name"}))),c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("input",Object.assign({},O,{type:"text",className:"form-control input-form-contact",placeholder:"Email"}))),c.a.createElement("div",{className:"input-group flex-nowrap input-contact py-2"},c.a.createElement("textarea",Object.assign({},L,{className:"form-control input-form-contact",placeholder:"Message"})))),m?c.a.createElement("p",{className:"salute mt-4"},"Sending..."):c.a.createElement("button",{disabled:m,type:"submit",className:"btn btn-outline-secondary form-button mt-4"},"Send Message"))),c.a.createElement("div",{className:"footer-container py-3 d-flex align-items-center justify-content-center flex-column"},c.a.createElement("div",{className:"d-flex flex-row media-links pt-3"},c.a.createElement("a",{href:"https://www.instagram.com/annyglop16/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center insta"},c.a.createElement("i",{className:"fab fa-instagram icons-media icons-media-footer"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/annygutierrez/",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center linked"},c.a.createElement("i",{className:"fab fa-linkedin-in icons-media icons-media-footer"})),c.a.createElement("a",{href:"mailto:annygutierrezlopez@gmail.com",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center mail"},c.a.createElement("i",{className:"far fa-envelope icons-media icons-media-footer"})),c.a.createElement("a",{href:"https://twitter.com/annyglop23",target:"_blank",className:"media-icon-container media-icon-container-footer d-flex align-items-center justify-content-center twitter"},c.a.createElement("i",{className:"fab fa-twitter icons-media icons-media-footer"}))),c.a.createElement("p",{className:"mt-5 footer-copyrights"},"\xa9 2020 Anny Gutierrez. All rights reserved.")))),c.a.createElement("div",{className:"slideout-sidebar d-flex align-items-center justify-content-center"},c.a.createElement("ul",{className:"menu-list"},c.a.createElement("li",null,"Kaytrust"),c.a.createElement("li",null,"Cadena"),c.a.createElement("li",null,"In_grid"),c.a.createElement("li",null,"Alastria"),c.a.createElement("li",null,"Honduras"),c.a.createElement("li",null,"Contact"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[22,1,2]]]);
//# sourceMappingURL=main.a3f8f3b7.chunk.js.map