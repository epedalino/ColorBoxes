(this.webpackJsonpcolorboxes=this.webpackJsonpcolorboxes||[]).push([[0],{10:function(e,t,o){"use strict";o.r(t);var n=o(0),l=o.n(n),r=o(4),c=o.n(r),a=o(1),u=(o(3),function(){var e,t,o,r=Object(n.useState)("My Hex"),c=Object(a.a)(r,2),u=c[0],i=c[1];function s(n){(e=window.getComputedStyle(n.target)).getPropertyValue("background-color"),t=e.backgroundColor,document.body.style.backgroundColor=t,o=function(e){var t=e.indexOf(",")>-1?",":" ",o=(+(e=e.substr(4).split(")")[0].split(t))[0]).toString(16),n=(+e[1]).toString(16),l=(+e[2]).toString(16);1===o.length&&(o="0"+o);1===n.length&&(n="0"+n);1===l.length&&(l="0"+l);return"#"+o+n+l}(t),i(o)}return l.a.createElement("div",null,l.a.createElement("h1",null,"Entropy - the natural course for colors!"),l.a.createElement("label",null,"My chosen color is: "),l.a.createElement("input",{type:"text",readOnly:!0,id:"chosenColor",value:u}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"boxitem box1",onClick:function(e){return s(e)}},"1"),l.a.createElement("div",{className:"boxitem box2",onClick:function(e){return s(e)}},"2"),l.a.createElement("div",{className:"boxitem box3",onClick:function(e){return s(e)}},"3"),l.a.createElement("div",{className:"boxitem box4",onClick:function(e){return s(e)}},"4")))}),i=function(){var e,t,o,r=Object(n.useState)("My Hex"),c=Object(a.a)(r,2),u=c[0],i=c[1],s=Object(n.useRef)(null),b=Object(n.useRef)(null),d=Object(n.useRef)(null),m=Object(n.useRef)(null);function g(e){var t=e.indexOf(",")>-1?",":" ",o=(+(e=e.substr(4).split(")")[0].split(t))[0]).toString(16),n=(+e[1]).toString(16),l=(+e[2]).toString(16);return 1===o.length&&(o="0"+o),1===n.length&&(n="0"+n),1===l.length&&(l="0"+l),"#"+o+n+l}return l.a.createElement("div",null,l.a.createElement("h1",null,"Entropy - Colorboxes using useRef"),l.a.createElement("label",null,"My chosen color is: "),l.a.createElement("input",{type:"text",readOnly:!0,id:"chosenColor",value:u}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"boxitem box1",ref:s,onClick:function(){null!==s.current&&(e=window.getComputedStyle(s.current),t=e.getPropertyValue("background-color"),console.log(e.getPropertyValue("background-color")),document.body.style.backgroundColor=t,o=g(t),i(o),console.log(o))}}),l.a.createElement("div",{className:"boxitem box2",ref:b,onClick:function(){null!==b.current&&(e=window.getComputedStyle(b.current),t=e.getPropertyValue("background-color"),console.log(e.getPropertyValue("background-color")),document.body.style.backgroundColor=t,o=g(t),i(o),console.log(o))}}),l.a.createElement("div",{className:"boxitem box3",ref:d,onClick:function(){null!==d.current&&(e=window.getComputedStyle(d.current),t=e.getPropertyValue("background-color"),console.log(e.getPropertyValue("background-color")),document.body.style.backgroundColor=t,o=g(t),i(o),console.log(o))}}),l.a.createElement("div",{className:"boxitem box4",ref:m,onClick:function(){null!==m.current&&(e=window.getComputedStyle(m.current),t=e.getPropertyValue("background-color"),console.log(e.getPropertyValue("background-color")),document.body.style.backgroundColor=t,o=g(t),i(o),console.log(o))}})))};c.a.render(l.a.createElement((function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(i,null))}),null),document.querySelector("#root"))},3:function(e,t,o){},5:function(e,t,o){e.exports=o(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.94e3ddeb.chunk.js.map