(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{56:function(e,t,a){},58:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var s,c,n,i=a(0),r=a.n(i),l=a(19),o=a.n(l),d=(a(56),a(26)),m=a(4),j=(a(57),a(58),a(11)),h=a(12),p=a(14),b=a(13),u=a(31),x=a(23),v=a(1),O=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(x.a,{bg:"light",expand:"lg",fixed:"top",sticky:"top",children:[Object(v.jsx)(x.a.Brand,{href:"#",children:"Pokemon"}),Object(v.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(u.a,{className:"mr-auto",children:[Object(v.jsx)(u.a.Link,{href:"#list",children:"List"}),Object(v.jsx)(u.a.Link,{href:"#link",children:"My Pokemon List"})]})})]})}}]),a}(i.Component),g=a(20),f=a.n(g),k=a(24),N=a(25),y=a.n(N),w=a(29),L=a(30),A=a.p+"static/media/Rainbow.6d776ca1.gif",C=L.a.img(s||(s=Object(w.a)(["\n  width: 5em;\n  height: 5em;\n  display: none;\n"]))),I=L.a.div(c||(c=Object(w.a)(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.24), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]))),M=Object(L.a)(d.b)(n||(n=Object(w.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),R=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",imageURL:"",pokemonIndex:"",imageLoading:!0,toManyRequest:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.url,s=a.split("/")[a.split("/").length-2],c="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(s,".png?raw=true");this.setState({name:t,imageURL:c,pokemonIndex:s})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"col-md-3 col-sm-6 mb-5",children:Object(v.jsx)(M,{to:"pokemon/".concat(this.state.pokemonIndex),children:Object(v.jsxs)(I,{className:"card",children:[Object(v.jsx)("h5",{className:"card-header",children:this.state.pokemonIndex}),this.state.imageLoading?Object(v.jsx)("img",{src:A,style:{width:"2em",height:"2em"},className:"card-img-top rounded mx-auto d-block mt-2"}):null,Object(v.jsx)(C,{className:"card-img-top rounded mx-auto mt-2",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequest:!0})},src:this.state.imageURL,style:this.state.toManyRequest?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequest?Object(v.jsx)("h6",{className:"mx-auto",children:Object(v.jsx)("span",{className:"badge badge-danger mt-2 ",children:"To Many Request"})}):null,Object(v.jsx)("div",{className:"card-body mx-auto",children:Object(v.jsx)("h6",{className:"card-title",children:this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})})]})})})}}]),a}(i.Component),D=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={url:"https://pokeapi.co/api/v2/pokemon",pokemon:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(this.state.url);case 2:t=e.sent,this.setState({pokemon:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(r.a.Fragment,{children:this.state.pokemon?Object(v.jsx)("div",{className:"row",children:this.state.pokemon.map((function(e){return Object(v.jsx)(R,{name:e.name,url:e.url},e.name)}))}):Object(v.jsx)("h1",{children:"Loading Pokemon"})})}}]),a}(i.Component),S=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col mt-5",children:Object(v.jsx)(D,{})})})}}]),a}(i.Component),B=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",pokemonIndex:"",imageURL:"",description:"",types:[],moves:[],stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(f.a.mark((function e(){var t,a,s,c,n,i,r,l,o,d,m,j,h,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.pokemonIndex,a="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),"https://pokeapi.co/api/v2/type/".concat(t,"/"),"https://pokeapi.co/api/v2/move/".concat(t,"/"),e.next=6,y.a.get(a);case 6:s=e.sent,n=(c="").hp,i=c.attack,r=c.defense,l=c.speed,o=c.specialAttack,d=c.specialDefense,s.data.stats.map((function(e){switch(e.stat.name){case"hp":n=e.base_stat;break;case"attack":i=e.base_stat;break;case"defense":r=e.base_stat;break;case"speed":l=e.base_stat;break;case"special-attack":o=e.base_stat;break;case"special-defense":d=e.base_stat}})),m=s.data.name,this.setState({name:m}),j=s.data.sprites.front_default,h=s.data.moves.map((function(e){return e.move.name})),p=s.data.types.map((function(e){return e.type.name})),this.setState({imageURL:j,pokemonIndex:t,types:p,moves:h,stats:{hp:n,attack:i,defense:r,speed:l,specialAttack:o,specialDefense:d}});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("div",{className:"card mt-5",children:Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-5",children:Object(v.jsx)("h5",{children:this.state.pokemonIndex})}),Object(v.jsx)("div",{className:"col-7",children:Object(v.jsx)("div",{className:"float-right",children:this.state.types.map((function(e){return Object(v.jsx)("span",{className:"badge badge-primary badge-pill mr-1",children:e},"type")}))})})]}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("div",{className:"row align-items-center",children:[Object(v.jsx)("div",{className:"col-md-3",children:Object(v.jsx)("img",{src:this.state.imageURL,className:"card-img-top rounded mx-auto mt-2"})}),Object(v.jsxs)("div",{className:"col-md-9",children:[Object(v.jsx)("h4",{className:"mx-auto",children:this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"HP"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.hp,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.hp})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Attack"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.attack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.attack})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Defense"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.defense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.defense})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Speed"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.speed,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.speed})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Special Attack"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialAttack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.specialAttack})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Special Defense"}),Object(v.jsx)("div",{className:"col-12 col-md-9",children:Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialDefense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(v.jsx)("small",{children:this.state.stats.specialDefense})})})})]}),Object(v.jsxs)("div",{className:"row align-item-center",children:[Object(v.jsx)("div",{className:"col-12 col-md-3",children:"Moves"}),Object(v.jsx)("div",{className:"col-12 col-md-9"})]})]})]})}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsx)("h5",{className:"card-title text-center",children:"Moves"})}),Object(v.jsx)("div",{className:"row",children:this.state.moves.map((function(e){return Object(v.jsx)("span",{className:"badge badge-primary badge-pill m-1",children:e})}))})]})})})}}]),a}(i.Component);var P=function(){return Object(v.jsx)(d.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(O,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{exact:!0,path:"/",component:S}),Object(v.jsx)(m.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:B})]})})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),U()}},[[86,1,2]]]);
//# sourceMappingURL=main.d4f35dd5.chunk.js.map