(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n(0),s=n.n(r),c=n(28),a=n.n(c),i=n(77),l=n(78),h=n(83),u=n(82),d=(n(97),n(123)),j=n(124),m=n(81),p=(n(98),function(e){return Object(o.jsx)(j.a,{className:"cardStyle",style:{backgroundColor:"#89D3D3"},children:Object(o.jsxs)(j.a.Content,{children:[Object(o.jsx)(m.a,{alt:"monster",src:"https://robohash.org/"+e.monster.id+"?set=set2"}),Object(o.jsx)("h3",{children:e.monster.name}),Object(o.jsx)("p",{children:e.monster.email})]})})}),b=function(e){return Object(o.jsx)(d.a,{children:Object(o.jsx)(j.a.Group,{itemsPerRow:4,children:e.monsters.map((function(e,t){return Object(o.jsx)(p,{monster:e},t)}))})})},f=(n(105),n(125)),x=function(e){var t=e.placeholder,n=e.handleChange;return Object(o.jsx)(f.a,{style:{marginBottom:"30px",marginTop:"10px"},icon:"search",placeholder:t,onChange:n})},O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{style:{fontFamily:"Bigelow Rules",fontSize:"72px",color:"#0CCAC4",marginTop:"30px"},children:"Monsters Rolodex"}),Object(o.jsx)(x,{placeholder:"Search Monsters...",handleChange:this.handleChange}),Object(o.jsx)(b,{monsters:r})]})}}]),n}(r.Component),g=(n(106),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),s(e),c(e)}))});a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),g()},97:function(e,t,n){},98:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.a026cc25.chunk.js.map