(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(83)},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=a(49),i=a(12),s=a(20),u=a(21),m=a(25),h=a(23),v=a(29),p=a.n(v),d=a(22),g=a(17),b=a(107),E=a(108),f=a(105),S=a(109),j=a(99),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchStr:{value:"",error:!1}},e.handleField=function(t){e.setState({searchStr:Object(i.a)({},e.state.searchStr,{value:t.target.value,error:!1})})},e.handleSubmit=function(t){t.preventDefault(),""===e.state.searchStr.value?e.setState({searchStr:Object(i.a)({},e.state.searchStr,{error:!0})}):(e.setState({searchStr:Object(i.a)({},e.state.searchStr,{error:!1})}),e.props.getMovies(e.state.searchStr.value))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,{id:"regular",inputProps:{placeholder:"Search movie"},formControlProps:{fullWidth:!0},type:"text",onChange:this.handleField,value:this.state.searchStr.value,className:this.state.searchStr.error?"error":""}),r.a.createElement(j.a,{type:"button"},"Search movies"))}}]),a}(r.a.Component);function y(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var w=a(100),k=a(101),x=a(102),C=a(103),F=a(104),M=a(106),P=function(e){var t=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"resultaat van opzoeking"),r.a.createElement(w.a,{container:!0,spacing:3},t.map(function(e){return r.a.createElement(w.a,{item:!0,xs:4,md:3,xl:2,key:e.imdbID},r.a.createElement(k.a,null,r.a.createElement(x.a,null,r.a.createElement(C.a,{component:"img",height:"200",image:e.Poster,title:"Contemplative Reptile"}),r.a.createElement(F.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.Title),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},e.Plot))),r.a.createElement(M.a,null,r.a.createElement(d.b,{to:"movie/".concat(e.imdbID,"/").concat(y(e.Title))},"Learn More"))))})))},z=function(e){return r.a.createElement("p",null,"Loading movies...")},D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:{data:{},loading:!1,error:!1}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState(Object(i.a)({},this.state,{movie:Object(i.a)({},this.state.movie,{loading:!0,error:!1})})),p.a.get("https://www.omdbapi.com/?apikey=2e3b4604&plot=full&i="+this.props.match.params.id).then(function(t){e.setState(Object(i.a)({},e.state,{movie:{data:Object(i.a)({},t.data),loading:!1,error:!1}}))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.movie.loading&&r.a.createElement("p",null,"Loading movie..."),Object.keys(this.state.movie.data).length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.state.movie.data.Title),r.a.createElement("p",null,this.state.movie.data.Plot),r.a.createElement("p",null,"rating: ",this.state.movie.data.imdbRating)),r.a.createElement(d.b,{to:"/"},"Search again"))}}]),a}(r.a.Component),L=(a(82),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:{loading:!1,error:!1,data:[]}},e.getMovies=function(t){e.setState({movies:Object(i.a)({},e.state.movies,{loading:!0})}),p.a.get("https://www.omdbapi.com/?apikey=2e3b4604&s="+t).then(function(t){e.setState({movies:Object(i.a)({},e.state.movies,{data:Object(l.a)(t.data.Search),loading:!1})})}).catch(function(e){console.log(e)})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(b.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(f.a,{variant:"h3"},"Find your movie"))),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{getMovies:e.getMovies}),e.state.movies.loading&&r.a.createElement(z,null),0!==e.state.movies.data.length&&r.a.createElement(P,{movies:e.state.movies.data}))}}),r.a.createElement(g.a,{path:"/movie/:id/:title",render:function(e){return r.a.createElement(D,e)}})))}}]),a}(n.Component)),A=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),A)}},[[55,1,2]]]);
//# sourceMappingURL=main.885ef527.chunk.js.map