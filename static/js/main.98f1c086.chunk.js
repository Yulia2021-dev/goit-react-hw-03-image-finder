(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,r){},26:function(e,t,r){},47:function(e,t,r){},49:function(e,t,r){},61:function(e,t,r){},62:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(9),o=r.n(n),s=(r(24),r(11)),c=r(3),u=r.n(c),i=r(8),l=r(4),h=r(5),m=r(7),p=r(6),f=(r(26),r(17)),b=r.n(f),j=(r(47),r(10)),g=r(2),d=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var r=e.state.searchQuery,a=e.props.onSubmit;""!==r.trim()?(a(r),e.setState({searchQuery:""})):j.b.error("Enter correct name!")},e}return Object(h.a)(r,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"searchbar",children:Object(g.jsxs)("form",{className:"searchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"searchForm-button",children:Object(g.jsx)("span",{className:"searchForm-button"})}),Object(g.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange,value:this.state.searchQuery})]})})}}]),r}(a.Component),O=d,y=(r(49),r(18)),v=(r(60),function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e}return Object(h.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.id,a=t.webformatURL,n=t.largeImageURL,o=this.state.isOpen;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"imageGalleryItem",onClick:function(){return e.setState({isOpen:!0})},children:Object(g.jsx)("img",{src:a,alt:"pic-".concat(r),className:"imageGalleryItem-image"})},r),o&&Object(g.jsx)(y.a,{mainSrc:n,onCloseRequest:function(){return e.setState({isOpen:!1})}})]})}}]),r}(a.Component)),x=(r(61),function(e){var t=e.result;return Object(g.jsx)("ul",{className:"gallery",children:t.map((function(e){return Object(g.jsx)(v,{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL},e.id)}))})}),w=(r(62),function(e){var t=e.onClick;return Object(g.jsx)("button",{className:"button",type:"button",onClick:t,children:"Load more"})}),k=(r(63),function(){var e=Object(i.a)(u.a.mark((function e(t,r){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(r,"&per_page=12&key=").concat("23670564-24f7dd7b8f7c27899fb90c8ea"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),S=k,I=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",page:1,status:"idle",result:[],showModal:!1,largeImage:null,error:null},e.onLoadMoreClick=Object(i.a)(u.a.mark((function t(){var r,a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.state,a=r.page,n=r.searchQuery,e.setState({status:"pending"}),e.onFetchImages(a,e.onErrorNoMoreImages(n),e.onErrorNoMoreImages(n));case 3:case"end":return t.stop()}}),t)}))),e.onFetchImages=function(){var t=Object(i.a)(u.a.mark((function t(r,a,n){var o,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.searchQuery,t.prev=1,t.next=4,S(o,r);case 4:if(c=t.sent,0!==(i=c.hits).length){t.next=8;break}throw new Error(a);case 8:if(!(i.length<12)){t.next=11;break}throw e.setState((function(e){return{result:[].concat(Object(s.a)(e.result),Object(s.a)(i))}})),new Error(n);case 11:e.setState((function(e){return{status:"resolved",result:[].concat(Object(s.a)(e.result),Object(s.a)(i)),page:r+1}})),window.scrollBy({top:1e3,behavior:"smooth"}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),j.b.error(t.t0.message),e.setState({status:"idle"});case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,r,a){return t.apply(this,arguments)}}(),e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e.toggleModal=function(t){e.setState((function(e){return{largeImage:t,showModal:!e.showModal}}))},e}return Object(h.a)(r,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(u.a.mark((function e(t,r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.state.searchQuery)!==r.searchQuery&&(this.setState({result:[],status:"pending"}),this.onFetchImages(1,this.onErrorNoImages(a),this.onErrorNoMoreImages(a)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onErrorNoImages",value:function(e){return'No images found for "'.concat(e,'". Try again.')}},{key:"onErrorNoMoreImages",value:function(e){return'No more images found for "'.concat(e,'".')}},{key:"render",value:function(){var e=this.state,t=e.result,r=e.status;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(x,{result:t}),"resolved"===r&&Object(g.jsx)(w,{onClick:this.onLoadMoreClick}),"pending"===r&&Object(g.jsx)(b.a,{type:"ThreeDots",color:"#995471",width:100,style:{textAlign:"center"}}),Object(g.jsx)(j.a,{position:"top-right",autoClose:3e3})]})}}]),r}(a.Component),N=I;o.a.render(Object(g.jsx)(N,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.98f1c086.chunk.js.map