(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(6),i=n.n(l),o=n(4),s=n(0),m=(n(21),n(7)),u=n(8),c=n(10),d=n(9),h=n(11),p=(n(23),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).handleEmailChange=function(t){e.setState({email:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.getFormData=function(){return{email:e.state.email,password:e.state.password}},e.onFormSubmit=function(t){if(t.preventDefault(),!e.state.pending){e.setState({pending:!0});var n=e.getFormData(),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("/php/login.php",a).then(function(e){return e.json()}).then(function(t){t.response?e.setState({redirect:"/home"}):e.setState({pending:!1})})}},e.state={email:"",password:"",pending:!1},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(s.a,{to:this.state.redirect}):r.a.createElement("div",{id:"login-div"},r.a.createElement("form",{onSubmit:this.onFormSubmit,id:"login-form"},r.a.createElement("label",{htmlFor:"email"},"E-Mail"),r.a.createElement("input",{type:"email",autoComplete:"username",id:"email",value:this.state.email,onChange:this.handleEmailChange,required:!0}),r.a.createElement("label",{htmlFor:"password"},"Heslo"),r.a.createElement("input",{type:"password",autoComplete:"current-password",minLength:"6",id:"password",value:this.state.password,onChange:this.handlePasswordChange,required:!0}),r.a.createElement("button",{type:"submit"},this.state.pending?"P\u0159ihla\u0161ov\xe1n\xed":"P\u0159ihl\xe1sit")),r.a.createElement("div",{id:"forgotten-password"},r.a.createElement("p",null,"Zapomenut\xe9 heslo? ",r.a.createElement("a",{href:"#"},"Obnoven\xed hesla"))))}}]),t}(r.a.Component)),E=function(){return r.a.createElement("div",{id:"login-background"},r.a.createElement(p,null))};var f=function(){return r.a.createElement("h1",null,"this is the homepage")};function g(){return r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(g,null)}),r.a.createElement(s.b,{index:!0,element:r.a.createElement(E,null)}),r.a.createElement(s.b,{path:"home",element:r.a.createElement(f,null)})))}n.d(t,"default",function(){return g}),i.a.createRoot(document.getElementById("root")).render(r.a.createElement(g,null))}},[[12,2,1]]]);
//# sourceMappingURL=main.81bc2f7a.chunk.js.map