(this.webpackJsonpannygutierrez2=this.webpackJsonpannygutierrez2||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/js.a998edd4.svg"},,,function(e,t,a){e.exports=a.p+"static/media/react.1a18b710.svg"},function(e,t,a){e.exports=a.p+"static/media/node.5f9f5b26.svg"},,function(e,t,a){e.exports=a.p+"static/media/ipfs.09574710.svg"},function(e,t,a){e.exports=a.p+"static/media/solidity.9419f234.svg"},,function(e,t,a){e.exports=a.p+"static/media/indecopi.83d6409d.svg"},function(e,t,a){e.exports=a.p+"static/media/link.1488e546.svg"},,function(e,t,a){e.exports=a.p+"static/media/domestika.51c0420d.svg"},function(e,t,a){e.exports=a.p+"static/media/angular.bf84d5ec.svg"},,function(e,t,a){e.exports=a.p+"static/media/skillshare.184cc7f2.svg"},function(e,t,a){e.exports=a.p+"static/media/londres.20e7f6a6.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/menu.e0bd91fb.svg"},function(e,t,a){e.exports=a.p+"static/media/insta.80a7a7c1.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.6f0db579.svg"},function(e,t,a){e.exports=a.p+"static/media/github.5f87f17c.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.6f83edf0.svg"},function(e,t,a){e.exports=a.p+"static/media/anny.c7e38ebd.png"},function(e,t,a){e.exports=a.p+"static/media/america.ea0c6a27.png"},function(e,t,a){e.exports=a.p+"static/media/kaytrust.8b92e5c2.png"},function(e,t,a){e.exports=a.p+"static/media/everisid.8103fe17.png"},function(e,t,a){e.exports=a.p+"static/media/david19.004b2830.png"},function(e,t,a){e.exports=a.p+"static/media/argentina.99c6eae9.png"},function(e,t,a){e.exports=a.p+"static/media/cadena.8fa801f7.png"},function(e,t,a){e.exports=a.p+"static/media/honduras.c1f25388.png"},function(e,t,a){e.exports=a.p+"static/media/prima.17d26495.png"},function(e,t,a){e.exports=a.p+"static/media/vue.847f9742.svg"},function(e,t,a){e.exports=a.p+"static/media/mongo.bd582e20.svg"},function(e,t,a){e.exports=a.p+"static/media/potato.b3e8d36f.png"},function(e,t,a){e.exports=a.p+"static/media/laboratoria.71360249.svg"},function(e,t,a){e.exports=a.p+"static/media/udemy.5f5b9841.svg"},function(e,t,a){e.exports=a.p+"static/media/cisco.68816b6f.svg"},,,function(e,t,a){e.exports=a(75)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),r=a.n(o),c=(a(52),a(53),a(10)),s=a(7),l=a(25),d=a.n(l),m=(a(54),function(e){var t=e.onPressMenu;return i.a.createElement("div",{className:"HeaderTitleContainer"},i.a.createElement("div",{className:"HeaderTitleBlank"}),i.a.createElement("p",{className:"HeaderTitle"},"Gutierrez."),i.a.createElement("div",{onClick:t,className:"MenuButton"},i.a.createElement("img",{className:"MenuButtonIcon",src:d.a,alt:"menu"})))}),u=function(e){var t=e.activeItem,a=e.id,n=e.action,o=e.title;return i.a.createElement("div",{onClick:function(){return n(a)},style:{backgroundColor:"white",width:"100vw",display:"flex",flex:1,padding:"0.6em 3em"}},i.a.createElement("p",{style:{margin:"0px",fontFamily:"Antonio",color:t===a?"#07AC7B":"black",fontSize:"20px"}},o))},p=(a(55),function(e){var t=e.items,a=void 0===t?[]:t,n=e.activeItem,o=e.action;return i.a.createElement("div",{className:"MobileMenuContainer"},a.map((function(e){return i.a.createElement(u,{activeItem:n,key:e.code,id:e.code,action:o,title:e.name})})))}),f=function(e){var t=e.icon,a=e.alt,n=e.link;return i.a.createElement("a",{href:n,target:"_blank",style:{display:"flex",margin:"0 1.8em",alignItems:"center",cursor:"pointer"}},i.a.createElement("img",{style:{width:"25px",height:"25px"},src:t,alt:a}))},g=a(26),y=a.n(g),v=a(27),h=a.n(v),b=a(28),E=a.n(b),k=a(29),w=a.n(k),x=(a(56),"https://twitter.com/annygutierrezl"),C="https://www.instagram.com/annyglop16/",I="https://github.com/annygutierrez",S="https://www.linkedin.com/in/annygutierrez/",P=function(){return i.a.createElement("div",{className:"Socials"},i.a.createElement(f,{link:x,icon:h.a,alt:"twitter"}),i.a.createElement(f,{link:C,icon:y.a,alt:"insta"}),i.a.createElement(f,{link:I,icon:E.a,alt:"git"}),i.a.createElement(f,{link:S,icon:w.a,alt:"linkedin"}))},j=(a(57),function(e){var t=e.menuItems,a=e.activePage,o=e.onNavigate,r=Object(n.useState)(!1),c=Object(s.a)(r,2),l=c[0],d=c[1],u=function(){d(!l)};return i.a.createElement("div",{className:"HeaderContainer"},i.a.createElement(m,{onPressMenu:u}),l&&i.a.createElement(p,{items:t,activeItem:a,action:function(e){o(e),u()}}),i.a.createElement(P,null))}),A=function(e){var t=e.title,a=e.action,n=e.id,o=e.activeItem;return i.a.createElement("span",{onClick:function(){return a(n)},style:{fontFamily:"Antonio",fontSize:"25px",color:o===n?"#07AC7B":"black",margin:"0 1em",cursor:"pointer"}},t)},N=(a(58),function(e){var t=e.items,a=e.action,n=e.activeItem;return i.a.createElement("div",{className:"BodyMenuContainer"},t.map((function(e){return i.a.createElement(A,{activeItem:n,key:e.code,id:e.code,action:a,title:e.name})})))}),T=a(30),z=a.n(T),F=(a(59),function(){return i.a.createElement("div",{className:"AboutContainer"},i.a.createElement("div",{className:"AboutDescriptionContainer"},i.a.createElement("span",{style:{fontFamily:"Anton",fontSize:"26px"}},"Anny Gutierrez-L\xf3pez"),i.a.createElement("p",{style:{fontFamily:"Poppins",fontSize:"15px"}},"Programmer (Mainly front-end)"),i.a.createElement("div",{style:{paddingTop:"1em"}},i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"14px"}},"Hi! My name is Anny Gutierrez, and I\u2019ve been inmerse in this technology thing since 2017, when I was 19 years old. "),i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"14px"}},"In my still short time alive, I handled several and very different positions, such as housekeeper, luthier, waitress, cart attendant, front-end developer, back-end developer, designer (every now and then). These jobs made me, and helped me realize that I should stick with my interests instead of let the world fade them away, specially when they are friking enjoyable."),i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"14px"}}," \ud83d\ude00  My biggest hope as someone who loves technology and art is to become a maker, someone who can make some wild ideas reality."))),i.a.createElement("div",{className:"AboutImgContainer"},i.a.createElement("img",{className:"AboutImg",src:z.a,alt:"anny"})))}),L=(a(60),a(61),function(e){var t=e.image,a=e.alt;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement("img",{className:"ImageCoverImg",src:t,alt:a}))}),D=a(12),B=a.n(D),M=function(e){var t=e.title,a=e.projectLink;return a?i.a.createElement("a",{href:a,target:"_blank",style:{display:"flex"}},i.a.createElement("span",{style:{fontFamily:"Anton",fontSize:"25px",color:"black"}},t),i.a.createElement("img",{style:{display:"flex",width:"26px",height:"auto",marginLeft:"0.4em"},src:B.a,alt:"link"})):i.a.createElement("span",{style:{fontFamily:"Anton",fontSize:"25px"}},t)},R=function(e){var t=e.title,a=e.subtitle,n=e.description,o=e.projectLink;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:2}},i.a.createElement(M,{title:t,projectLink:o}),i.a.createElement("p",{style:{fontFamily:"Poppins",fontSize:"15px"}},a),i.a.createElement("div",null,i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"14px"}},n)))},O=(a(62),function(e){var t=e.items;return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",flex:5,justifyContent:"space-around"}},t.map((function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("img",{className:"ToolsImg",src:e.icon,alt:e.name}),i.a.createElement("p",{className:"ToolsName"},e.name))})))}),W=(a(63),function(e){var t=e.title,a=e.subtitle,n=e.description,o=e.image,r=e.tools,c=e.projectLink;return i.a.createElement("div",{style:{display:"flex",padding:"4em 0",alignItems:"center",flexDirection:"column"}},i.a.createElement(L,{image:o,alt:t}),i.a.createElement("div",{className:"PortfolioItemBottom"},i.a.createElement(R,{title:t,subtitle:a,description:n,projectLink:c}),i.a.createElement(O,{items:r})))}),q=a(31),J=a.n(q),V=a(32),G=a.n(V),H=a(33),K=a.n(H),_=a(34),U=a.n(_),Z=a(35),Y=a.n(Z),Q=a(36),$=a.n(Q),X=a(37),ee=a.n(X),te=a(38),ae=a.n(te),ne=a(39),ie=a.n(ne),oe=a(2),re=a.n(oe),ce=a(40),se=a.n(ce),le=a(6),de=a.n(le),me=a(15),ue=a.n(me),pe=a(5),fe=a.n(pe),ge=a(8),ye=a.n(ge),ve=a(9),he=a.n(ve),be=[{title:"In_Grid",subtitle:"Am\xe9rica Televisi\xf3n",description:"Web App dise\xf1ada para administrar el cat\xe1logo de programas, los cortes comerciales, programaci\xf3n de productos audiovisuales y los ingresos por marketing.",cover:J.a,tools:[{name:"Vue.js",icon:ie.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"Mongo DB",icon:se.a}]},{title:"Landing page",subtitle:"KayTrust - Everis",description:"KayTrust es una plataforma de confianza que permite gestionar las identidades digitales de tus clientes de manera segura, confiable y soberana.",cover:G.a,link:"https://www.kaytrust.id/",tools:[{name:"React.js",icon:fe.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a}]},{title:"Kaytrust App",subtitle:"KayTrust - Everis",description:"KayTrust Wallet is a wallet for your digital identity, compatible with latest W3C Verifiable Credentials and Decentralized Identity open standards. Its security is guaranteed by an interoperable distributed ledger that is immutable and whose content is impossible to falsify.",cover:K.a,link:"https://play.google.com/store/apps/details?id=com.everis.mytrust.app",tools:[{name:"React Native",icon:fe.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"IPFS",icon:ye.a},{name:"Solidity",icon:he.a}]},{title:"David 19",subtitle:"KayTrust - Banco Interamericano (BID)",description:"La aplicaci\xf3n es parte de LACChain y busca recopilar informaci\xf3n relacionada al COVID-19 de ciudadanos de forma privada y an\xf3nima.",cover:U.a,link:"https://mellamodavid19.org/en/",tools:[{name:"React Native",icon:fe.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"IPFS",icon:ye.a},{name:"Solidity",icon:he.a}]},{title:"Piloto Argentina",subtitle:"KayTrust - Gobierno Argentino",description:"Fue un MVP de c\xf3mo funcionar\xeda la digitalizaci\xf3n de la identidad de los ciudadanos de Argentina y que riesgos de seguridad implica.",cover:Y.a,tools:[{name:"React Native",icon:fe.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"IPFS",icon:ye.a},{name:"Solidity",icon:he.a}]},{title:"Proyecto Cadena",subtitle:"KayTrust - Aduanas Sudamericanas",description:"El Proyecto Cadena es una web app que ayuda en la administraci\xf3n y conexi\xf3n de las aduanas de: Per\xfa, M\xe9xico, Colombia y Chile.",cover:$.a,link:"https://publications.iadb.org/publications/spanish/document/Revista-Integracion--Comercio-Ano-24-No.-46-Octubre-2020-Blockchain-y-comercio-internacional-Nuevas-tecnologias-para-una-mayor-y-mejor-insercion-internacional-de-America-Latina.pdf",tools:[{name:"Angular",icon:ue.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"IPFS",icon:ye.a},{name:"Solidity",icon:he.a}]},{title:"Proyecto de fiduciarios",subtitle:"KayTrust - Gobierno de Honduras",description:"Fue un MVP de c\xf3mo funcionar\xeda la digitalizaci\xf3n de la identidad de los ciudadanos de Argentina y que riesgos de seguridad implica.",cover:ee.a,tools:[{name:"Angular",icon:ue.a},{name:"Javascript",icon:re.a},{name:"Node.js",icon:de.a},{name:"IPFS",icon:ye.a},{name:"Solidity",icon:he.a}]},{title:"Portal PRIMA AFP",subtitle:"NTT Data - Prima AFP",description:"P\xe1gina web para realizar tr\xe1mites virtuales  de una administradoras de fondos de pensiones del Per\xfa.",cover:ae.a,link:"https://miespacio.prima.com.pe/bienvenido",tools:[{name:"React.js",icon:fe.a},{name:"Javascript",icon:re.a}]}],Ee=function(){return i.a.createElement("div",null,be.map((function(e){return i.a.createElement(W,{title:e.title,subtitle:e.subtitle,description:e.description,image:e.cover,tools:e.tools,projectLink:e.link})})))},ke=a(41),we=[{title:"Potato Calendar",subtitle:"To Do list",description:"Potato Calendar is a task management app to help you stay organized and manage your day-to-day. You can use this to do app to make shopping lists or task lists, plan an event. Potato Calendar makes it easy to stay organized and manage your life.",cover:a.n(ke).a,projectLink:"https://play.google.com/store/apps/details?id=com.potatocalendar",tools:[{name:"React Native",icon:fe.a},{name:"Javascript",icon:re.a}]}],xe=function(){return i.a.createElement("div",null,we.map((function(e){return i.a.createElement(W,{title:e.title,subtitle:e.subtitle,description:e.description,image:e.cover,tools:e.tools,projectLink:e.projectLink})})))},Ce=a(16),Ie=(a(64),function(e){var t=e.title,a=e.action,n=e.id,o=e.activeItem;return i.a.createElement("span",{className:"SubMenuItem",onClick:function(){return a(n)},style:{fontFamily:"Antonio",fontSize:"25px",color:o===n?"#7280FA":"#686666",margin:"0 1em",cursor:"pointer"}},t)}),Se=(a(65),function(e){var t=e.items,a=void 0===t?[]:t,n=e.activeItem,o=e.action;return i.a.createElement("div",{className:"MenuTabContainer"},a.map((function(e){var t;return i.a.createElement(Ie,(t={action:o,activeItem:n,key:e.code,id:e.code},Object(Ce.a)(t,"action",o),Object(Ce.a)(t,"title",e.name),t))})))}),Pe=(a(66),function(e){var t=e.items,a=e.action,n=e.activeItem;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",paddingTop:"2.5em",alignItems:"center"}},i.a.createElement("div",{className:"SubMenuLines"}),i.a.createElement(Se,{action:a,items:t,activeItem:n}),i.a.createElement("div",{className:"SubMenuLines"}))}),je=function(e){var t=e.title,a=e.certLink;return a?i.a.createElement("a",{href:a,target:"_blank",style:{display:"flex"}},i.a.createElement("span",{style:{fontFamily:"Anton",fontSize:"25px",color:"black"}},t),i.a.createElement("img",{style:{display:"flex",width:"26px",height:"auto",marginLeft:"0.4em"},src:B.a,alt:"link"})):i.a.createElement("span",{style:{fontFamily:"Anton",fontSize:"25px"}},t)},Ae=(a(67),function(e){var t=e.title,a=e.certLink,n=e.subtitle,o=e.description,r=e.type;return i.a.createElement("div",{className:"CertDescriptionContainer"},i.a.createElement(je,{title:t,certLink:a}),i.a.createElement("p",{style:{fontFamily:"Poppins",fontSize:"15px"}},n),i.a.createElement("div",null,i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"14px"}},o)),i.a.createElement("p",{style:{fontFamily:"Roboto",fontSize:"15px",color:"#07AC7B",fontWeight:"bold"}},r))}),Ne=function(e){var t=e.image,a=e.alt;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("img",{style:{width:"129px",height:"auto"},src:t,alt:a}))},Te=(a(68),function(e){var t=e.title,a=e.subtitle,n=e.description,o=e.type,r=e.image,c=e.link;return i.a.createElement("div",{className:"CertItemContainer"},i.a.createElement(Ne,{image:r,alt:t}),i.a.createElement(Ae,{title:t,certLink:c,subtitle:a,description:n,type:o}))}),ze=a(17),Fe=a.n(ze),Le=a(14),De=a.n(Le),Be=a(11),Me=a.n(Be),Re=[{title:"Pencil Drawing for Superhero Comics",subtitle:"Domestika",description:"There are few Spanish-speaking artists who can say that they have gone through their hand characters such as Deadpool, Wolverine or Hulk. Salva Esp\xedn, with more than twenty Marvel comics behind him, is one of them and, in this course, will teach you the basics of sequential narrative, as well as his process to draw superheroes.",type:"Online Course",icon:De.a,link:"https://www.domestika.org/en/certificates/b6b4e227c3f882f226060ad488e22b01"},{title:"Visual Narrative for Comic Books by Sam Hart",subtitle:"Domestika",description:"In this course, he shares his expertise in combining the visual with the textual to craft compelling stories filled with emotion. Learn the essentials of comic book creation, from writing an impactful script to bringing the words on the page to life.",type:"Online Course",icon:De.a,link:"https://www.domestika.org/en/certificates/e2b6c1bb4590c52a769b4ce1070b6051"},{title:"Realistic Portrait with Graphite Pencil",subtitle:"Domestika",description:"In this course, learn how to draw a realistic portrait in pencil using a model. Diego explains a wide range of technical concepts, from composition and the anatomy of the head, to modeling and adding texture. Discover all the skills you need to make your own realistic portrait with graphite.",type:"Online Course",icon:De.a,link:"https://www.domestika.org/en/certificates/6f0b48c966f723dfa4f6c2c190255848.pdf"},{title:"La Historia Original en el C\xf3mic",subtitle:"Escuela Nacional Indecopi",description:"Esta video conferencia se encuentra dirigida a j\xf3venes dise\xf1adores, ilustradores, guionistas, profesionales involucrados con el mundo de los comics o historietas, estudiantes y ciudadan\xeda en general con inter\xe9s en el rubro de comics, con el objetivo de brindar conocimientos sobre la protecci\xf3n que les brinda la legislaci\xf3n de derecho de autor a los titulares de estas obras, as\xed como conocer de primera mano c\xf3mo se desarrolla la narrativa e historia del c\xf3mic.",type:"Video Conference",icon:Me.a,link:"http://servicio.indecopi.gob.pe/ecp/certificados/diaConsumidor/doc_202205091422331831.pdf"},{title:"El Arte de Dise\xf1ar Personajes Poderosos",subtitle:"Escuela Nacional Indecopi",description:"Esta video conferencia se encuentra dirigida a j\xf3venes dise\xf1adores, ilustradores, guionistas, profesionales involucrados con el mundo de los comics o historietas, estudiantes y ciudadan\xeda en general con inter\xe9s en el rubro de comics, con el objetivo de brindar conocimientos sobre la protecci\xf3n que les brinda la legislaci\xf3n de derecho de autor a los titulares de estas obras, as\xed como conocer de primera mano c\xf3mo se desarrolla la narrativa e historia del c\xf3mic.",type:"Video Conference",icon:Me.a,link:"http://servicio.indecopi.gob.pe/ecp/certificados/diaConsumidor/doc_202205091746455724.pdf"},{title:"Grandes ideas para C\xf3mics Poderosos",subtitle:"Escuela Nacional Indecopi",description:"Esta video conferencia se encuentra dirigida a j\xf3venes dise\xf1adores, ilustradores, guionistas, profesionales involucrados con el mundo de los comics o historietas, estudiantes y ciudadan\xeda en general con inter\xe9s en el rubro de comics, con el objetivo de brindar conocimientos sobre la protecci\xf3n que les brinda la legislaci\xf3n de derecho de autor a los titulares de estas obras, as\xed como conocer de primera mano c\xf3mo se desarrolla la narrativa e historia del c\xf3mic.",type:"Video Conference",icon:Me.a,link:"https://drive.google.com/file/d/1e-7aqDk5p8amr9LfIZ4pBPT5bWgT-L-R/view?usp=sharing"},{title:"Ilustraci\xf3n y Diagramaci\xf3n de C\xf3mics",subtitle:"Escuela Nacional Indecopi",description:"Esta video conferencia se encuentra dirigida a j\xf3venes dise\xf1adores, ilustradores, guionistas, profesionales involucrados con el mundo de los comics o historietas, estudiantes y ciudadan\xeda en general con inter\xe9s en el rubro de comics, con el objetivo de brindar conocimientos sobre la protecci\xf3n que les brinda la legislaci\xf3n de derecho de autor a los titulares de estas obras, as\xed como conocer de primera mano c\xf3mo se desarrolla la narrativa e historia del c\xf3mic.",type:"Video Conference",icon:Me.a,link:"https://drive.google.com/file/d/1_ZLC39bvYdhaRyVI09m0SxA-MiEBxp3x/view?usp=sharing"},{title:"Vector Illustration: Drawing with the Pen Tool",subtitle:"Skillshare",description:"Turn your drawings into clean and colorful vectors! Join illustrator Scott Martin and learn how to use the Pen Tool to transform your sketches into crisp and scalable vector images in Illustrator.",type:"Online Course",icon:Fe.a},{title:"Easy Animation: After Effects",subtitle:"Skillshare",description:"Turn your drawings into clean and colorful vectors! Join illustrator Scott Martin and learn how to use the Pen Tool to transform your sketches into crisp and scalable vector images in Illustrator.",type:"Online Course",icon:Fe.a}],Oe=function(){return i.a.createElement("div",{style:{display:"flex",paddingTop:"5em",flexDirection:"column",alignItems:"center"}},Re.map((function(e){return i.a.createElement(Te,{title:e.title,subtitle:e.subtitle,description:e.description,type:e.type,image:e.icon,link:e.link})})))},We=a(42),qe=a.n(We),Je=a(18),Ve=a.n(Je),Ge=a(43),He=a.n(Ge),Ke=a(44),_e=a.n(Ke),Ue=[{title:"Front-end developer",subtitle:"Laboratoria 2017 - 2018",description:"Laboratoria es una organizaci\xf3n de impacto social que trabaja para lograr una econom\xeda digital m\xe1s diversa, inclusiva y competitiva, que abra oportunidades para que cada mujer pueda desarrollar su potencial.",type:"Bootcamp",icon:qe.a,link:"https://drive.google.com/file/d/1j21bz7jh5MELNUwR4iQaOOqbbWWcldrE/view"},{title:"Introduction to Computer Programming",subtitle:"University of London - Coursera",description:"This specialisation covers topics ranging from basic computing principles to the mathematical foundations required for computer science. ",type:"Online Course",icon:Ve.a,link:"https://www.coursera.org/account/accomplishments/certificate/JWLRSZCCWLKV?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate"},{title:"How computers work",subtitle:"University of London - Coursera",description:"This specialisation covers topics ranging from basic computing principles to the mathematical foundations required for computer science.",type:"Online Course",icon:Ve.a,link:"https://www.coursera.org/account/accomplishments/certificate/6VZ6ZKWCK3P9"},{title:"ETW - Experimenting with REST APIs using Webex Teams",subtitle:"Cisco Networking Academy",description:"Networking Academy is Cisco's largest corporate social responsibility effort in education. Since 1997, more than 4 million students have taken academy courses, covering a wide spectrum of age, background, and career goals. Embrace innovative teaching and learning tools.",type:"Course",icon:_e.a,link:"https://drive.google.com/file/d/1w3pdvSNmteqdWhH8-lnJJVGWsWfvMOm0/view?usp=sharing"},{title:"Curso de Sass - B\xe1sico",subtitle:"Udemy",description:"Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",type:"Online Course",icon:He.a,link:"https://www.udemy.com/certificate/UC-600SSA8D/"}],Ze=(a(69),function(){return i.a.createElement("div",{className:"TechCertContainer"},Ue.map((function(e){return i.a.createElement(Te,{title:e.title,subtitle:e.subtitle,description:e.description,type:e.type,image:e.icon,link:e.link})})))}),Ye=function(){var e=Object(n.useState)(2),t=Object(s.a)(e,2),a=t[0],o=t[1];return i.a.createElement("div",null,i.a.createElement(Pe,{action:function(e){o(e)},activeItem:a,items:[{name:"Art & Design",code:1},{name:"Programming",code:2}]}),Boolean(2===a)&&i.a.createElement(Ze,null),Boolean(1===a)&&i.a.createElement(Oe,null))},Qe=function(e){var t=e.menuItems,a=e.activePage,n=e.onNavigate;return i.a.createElement("div",null,i.a.createElement(N,{activeItem:a,action:n,items:t}),Boolean(0===a)&&i.a.createElement(F,null),Boolean(1===a)&&i.a.createElement(Ee,null),Boolean(2===a)&&i.a.createElement(xe,null),Boolean(3===a)&&i.a.createElement(Ye,null))},$e=function(){return i.a.createElement("div",{style:{backgroundColor:"#E3E6FF",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1em"}},i.a.createElement("span",{style:{color:"black",fontSize:"12px",fontFamily:"Antonio"}},"\xa9 2022 Anny Gutierrez. All Rights Reserved."),i.a.createElement("a",{href:"https://annygutierrez.github.io/forfun",target:"_blank",style:{fontSize:"12px",fontFamily:"Roboto",color:"#727AC2",margin:"0px"}},"Here my web for fun \ud83d\ude0e."))},Xe=[{name:"About me",code:0},{name:"Portfolio",code:1},{name:"Projects",code:2},{name:"Certifications",code:3}],et=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],r=function(e){o(e)};return i.a.createElement("div",{style:{backgroundColor:"white",width:"100vw",height:"100vh"}},i.a.createElement(j,{onNavigate:r,activePage:a,menuItems:Xe}),i.a.createElement(Qe,{onNavigate:r,activePage:a,menuItems:Xe}),i.a.createElement($e,null))},tt=function(){var e=Object(c.d)();return i.a.createElement("div",null,i.a.createElement("div",{style:{position:"fixed",zIndex:"1000000000000",top:0,alignSelf:"center",width:"100%",height:"1em",display:"flex",justifyContent:"center"}},i.a.createElement("div",{onClick:function(){return e.push("/")},style:{backgroundColor:"#FFA152",height:"3em",marginTop:"1em",alignItems:"center",justifyContent:"center",display:"flex",padding:"0 10%",borderRadius:"2em"}},i.a.createElement("p",{style:{color:"white",display:"flex",textAlign:"center",marginTop:"1em",textDecoration:"underline",cursor:"pointer"}},"Go back to home"))),i.a.createElement("div",{style:{backgroundColor:"#07E1CA",padding:"4em"}},i.a.createElement("h1",{style:{color:"white",fontWeight:"bold",fontSize:"40px"}},"Potato Calendar"),i.a.createElement("h2",{style:{color:"white",fontWeight:"bold",fontSize:"20px"}},"Privacy Policy")),i.a.createElement("div",{style:{padding:"4em 5em"}},i.a.createElement("p",null,"Anny Gutierrez built the Potato Calendar app as a Free app. This SERVICE is provided by Anny Gutierrez at no cost and is intended for use as is.")," ",i.a.createElement("p",null,"This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Information Collection and Use"))," ",i.a.createElement("p",null,"This app does not collect any kind of information about the device or user in any kind of remote storage or remote database."),"  ",i.a.createElement("p",null,i.a.createElement("strong",null,"Log Data"))," ",i.a.createElement("p",null,"This app do not collect any information about malfunctions.")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Cookies"))," ",i.a.createElement("p",null,"This app do not use cookies."),i.a.createElement("p",null,i.a.createElement("strong",null,"Children\u2019s Privacy"))," ",i.a.createElement("p",null,"These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age.")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Changes to This Privacy Policy"))," ",i.a.createElement("p",null,"I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.")," ",i.a.createElement("p",null,"This policy is effective as of 2021-11-15")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Contact Us"))," ",i.a.createElement("p",null,"If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at potatocalendaraapp@gmail.com.")))},at=a(4),nt=Object(at.a)(),it=function(){return i.a.createElement(c.b,{history:nt},i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:et}),i.a.createElement(c.a,{path:"/potato-calendar/privacy-policy",component:tt}),i.a.createElement(c.a,{path:"/potato-calendar",component:tt})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(it,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[47,1,2]]]);
//# sourceMappingURL=main.48a39c40.chunk.js.map