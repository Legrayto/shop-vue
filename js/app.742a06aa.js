(function(t){function e(e){for(var a,n,s=e[0],i=e[1],l=e[2],u=0,b=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);p&&p(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],a=!0,s=1;s<c.length;s++){var i=c[s];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=c[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var c=a[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=a,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(c,a,function(e){return t[e]}.bind(null,a));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/shop-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=i;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"016e":function(t,e,c){"use strict";c("bea4")},"129c":function(t,e,c){t.exports=c.p+"img/6.eec005ca.jpg"},"19e1":function(t,e,c){"use strict";c("8e5e")},"29a3":function(t,e,c){},"3a67":function(t,e,c){"use strict";c("ab09")},"41bf":function(t,e,c){"use strict";c("7a45")},"53bb":function(t,e,c){"use strict";c("7208")},"546a":function(t,e,c){t.exports=c.p+"img/5.5394f1f3.jpg"},"56d7":function(t,e,c){"use strict";c.r(e);var a=c("7a23");const r={id:"nav"};function o(t,e,c,o,n,s){const i=Object(a["z"])("MainWrapper");return Object(a["t"])(),Object(a["g"])("div",r,[Object(a["j"])(i)])}const n={class:"v-main-wrapper"};function s(t,e,c,r,o,s){const i=Object(a["z"])("Header"),l=Object(a["z"])("router-view");return Object(a["t"])(),Object(a["g"])("div",n,[Object(a["j"])(i),(Object(a["t"])(),Object(a["e"])(a["b"],null,[Object(a["j"])(l)],1024))])}var i=c("cf05"),l=c.n(i);const p={class:"header"},u=Object(a["h"])("img",{class:"header__logo",src:l.a,alt:"logo"},null,-1),b={class:"header__search-container"},d={class:"header__search"};function h(t,e,c,r,o,n){const s=Object(a["z"])("router-link");return Object(a["t"])(),Object(a["g"])("div",p,[Object(a["j"])(s,{to:{name:"Main-page"}},{default:Object(a["F"])(()=>[u]),_:1}),Object(a["h"])("div",b,[Object(a["h"])("div",d,[Object(a["G"])(Object(a["h"])("input",{class:"header__input",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.searchValue=t),onKeyup:e[1]||(e[1]=Object(a["H"])(t=>n.search(o.searchValue),["enter"]))},null,544),[[a["D"],o.searchValue]]),Object(a["h"])("i",{class:"header__clear-btn far fa-times-circle fa-lg",onClick:e[2]||(e[2]=(...t)=>n.clearSearch&&n.clearSearch(...t))})]),Object(a["h"])("button",{class:"header__search-btn _btn-1",onClick:e[3]||(e[3]=t=>n.search(o.searchValue))},"Поиск")])])}var j={name:"header",components:{},data(){return{searchValue:""}},methods:{search(t){"/Catalog"!==this.$router.path&&this.$router.push("/Catalog"),this.$store.commit("search",t),this.clearSearch()},clearSearch(){this.searchValue=""}}},m=(c("53bb"),c("6b0d")),O=c.n(m);const g=O()(j,[["render",h]]);var _=g,v={name:"v-main-wrapper",components:{Header:_}};const f=O()(v,[["render",s]]);var y=f,C={el:"nav",components:{MainWrapper:y}};c("e4bb");const P=O()(C,[["render",o]]);var k=P,w=c("6c02");const x={class:"catalog"},S={class:"catalog__container _container"},B=Object(a["h"])("h1",{class:"catalog__title"},"Catalog",-1),V={class:"catalog__filters"},I={class:"catalog__range range"},Q={class:"range__slider"},M={class:"range__values"},T={class:"range__value"},q={class:"range__value"},$=Object(a["h"])("i",{class:"fas fa-shopping-cart fa-2x cart__icon"},null,-1),R={class:"cart__text"},z={class:"catalog__list"};function D(t,e,c,r,o,n){const s=Object(a["z"])("Select"),i=Object(a["z"])("router-link"),l=Object(a["z"])("catalogItem");return Object(a["t"])(),Object(a["g"])("div",x,[Object(a["h"])("div",S,[B,Object(a["h"])("div",V,[Object(a["j"])(s,{class:"catalog__select",selected:o.selected,options:o.category,onSelectOption:n.sortByCategory},null,8,["selected","options","onSelectOption"]),Object(a["h"])("div",I,[Object(a["h"])("div",Q,[Object(a["G"])(Object(a["h"])("input",{class:"range__input",type:"range",min:"0",max:"10000",step:"100","onUpdate:modelValue":e[0]||(e[0]=t=>o.minPrice=t),onChange:e[1]||(e[1]=(...t)=>n.setRange&&n.setRange(...t))},null,544),[[a["D"],o.minPrice,void 0,{number:!0}]]),Object(a["G"])(Object(a["h"])("input",{class:"range__input",type:"range",min:"0",max:"10000",step:"100","onUpdate:modelValue":e[2]||(e[2]=t=>o.maxPrice=t),onChange:e[3]||(e[3]=(...t)=>n.setRange&&n.setRange(...t))},null,544),[[a["D"],o.maxPrice,void 0,{number:!0}]])]),Object(a["h"])("div",M,[Object(a["h"])("div",T,"Min: "+Object(a["B"])(o.minPrice),1),Object(a["h"])("div",q,"Max: "+Object(a["B"])(o.maxPrice),1)])]),Object(a["j"])(i,{to:{name:"Cart"},class:"catalog__cart"},{default:Object(a["F"])(()=>[$,Object(a["h"])("div",R,"Cart: "+Object(a["B"])(t.cart.length),1)]),_:1})]),Object(a["h"])("div",z,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["x"])(n.filter,t=>(Object(a["t"])(),Object(a["e"])(l,{key:t.article,product:t},null,8,["product"]))),128))])])])}const U={class:"select"},F={class:"select__container"},A={class:"select__text"},L={key:0,class:"select__options"},E=["onClick"];function G(t,e,c,r,o,n){return Object(a["t"])(),Object(a["g"])("div",U,[Object(a["h"])("div",F,[Object(a["h"])("div",{class:"select__active",onClick:e[0]||(e[0]=t=>n.active())},[Object(a["h"])("div",A,[Object(a["i"])(Object(a["B"])(c.selected)+" ",1),Object(a["h"])("i",{class:Object(a["p"])(["select__arrow fas fa-chevron-down",{active:o.areOptionsVisible}])},null,2)])]),o.areOptionsVisible?(Object(a["t"])(),Object(a["g"])("div",L,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["x"])(c.options,(t,e)=>(Object(a["t"])(),Object(a["g"])("div",{class:"select__option",key:e,onClick:e=>n.selectOption(t)},Object(a["B"])(t.name),9,E))),128))])):Object(a["f"])("",!0)])])}var H={name:"select",props:["options","selected"],components:{},data(){return{areOptionsVisible:!1}},methods:{selectOption(t){this.$emit("selectOption",t),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1},active(){this.areOptionsVisible=!this.areOptionsVisible}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeUnmount(){document.removeEventListener("click",this.hideSelect)}};c("3a67");const J=O()(H,[["render",G]]);var K=J;const N={class:"catalog-item"},W={class:"popup__image"},X=["src"],Y={class:"popup__price"},Z=["src"],tt={class:"catalog-item__body"},et={class:"catalog-item__name"},ct={class:"catalog-item__price"},at={class:"catalog-item__buttons"};function rt(t,e,r,o,n,s){const i=Object(a["z"])("Popup");return Object(a["t"])(),Object(a["g"])("div",N,[n.isShowPopup?(Object(a["t"])(),Object(a["e"])(i,{key:0,class:"catalog-item__popup",onClosePopup:s.closePopup,onClickRightBtn:s.addToCart,product:r.product},{default:Object(a["F"])(()=>[Object(a["h"])("div",W,[Object(a["h"])("img",{src:c("7584")("./"+r.product.image),alt:""},null,8,X)]),Object(a["h"])("div",Y,"Price: "+Object(a["B"])(r.product.price),1)]),_:1},8,["onClosePopup","onClickRightBtn","product"])):Object(a["f"])("",!0),Object(a["h"])("img",{class:"catalog-item__image",src:c("7584")("./"+r.product.image),alt:""},null,8,Z),Object(a["h"])("div",tt,[Object(a["h"])("div",et,Object(a["B"])(r.product.name),1),Object(a["h"])("div",ct,"Price: "+Object(a["B"])(r.product.price),1),Object(a["h"])("div",at,[Object(a["h"])("button",{class:"catalog-item__btn-show-more _btn-2",onClick:e[0]||(e[0]=(...t)=>s.showMore&&s.showMore(...t))},"Show more"),Object(a["h"])("button",{class:"catalog-item__btn-add-to-cart _btn-1",onClick:e[1]||(e[1]=(...t)=>s.addToCart&&s.addToCart(...t))},"Add to cart")])])])}const ot={class:"popup"},nt={class:"popup__container"},st={class:"popup__header"},it={class:"popup__title"},lt={class:"popup__body"},pt={class:"popup__buttons"};function ut(t,e,c,r,o,n){return Object(a["t"])(),Object(a["g"])("div",ot,[Object(a["h"])("div",nt,[Object(a["h"])("i",{class:"popup__icon-close fas fa-times fa-2x",onClick:e[0]||(e[0]=(...t)=>n.closePopup&&n.closePopup(...t))}),Object(a["h"])("div",st,[Object(a["h"])("div",it,Object(a["B"])(c.product.name),1)]),Object(a["h"])("div",lt,[Object(a["y"])(t.$slots,"default")]),Object(a["h"])("div",pt,[Object(a["h"])("button",{class:"popup__btn-close _btn-2",onClick:e[1]||(e[1]=(...t)=>n.closePopup&&n.closePopup(...t))},"Close"),Object(a["h"])("button",{class:"popup__btn-action _btn-1",onClick:e[2]||(e[2]=(...t)=>n.clickRightBtn&&n.clickRightBtn(...t))},"Add to cart")])])])}var bt={name:"popup",props:["product"],components:{},methods:{clickRightBtn(){this.$emit("clickRightBtn")},closePopup(){this.$emit("closePopup")}}};c("9d47");const dt=O()(bt,[["render",ut]]);var ht=dt,jt={name:"catalog-item",props:["product"],components:{Popup:ht},data(){return{isShowPopup:!1}},methods:{closePopup(){this.isShowPopup=!1},showMore(){this.isShowPopup=!0},addToCart(){this.$store.commit("addToCart",this.product)}}};c("19e1");const mt=O()(jt,[["render",rt]]);var Ot=mt,gt=c("5502"),_t={name:"catalog",components:{catalogItem:Ot,Select:K},data(){return{category:[{name:"All",value:"all"},{name:"PC",value:"pc"},{name:"PlayStation",value:"ps"}],selected:"All",sortedProducts:[],sortedSearch:[],sortedCategory:[],sortedPrice:[],minPrice:0,maxPrice:1e4}},methods:{sortBySearch(t){t&&(this.sortedSearch=[...this.products].filter(e=>e.name.toLowerCase().includes(t.toLowerCase())))},setRange(){if(this.sortedSearch=[],this.maxPrice<this.minPrice){let t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}let t=this;this.sortedPrice=[...this.products].filter(e=>e.price>t.minPrice&&e.price<t.maxPrice)},sortByCategory(t){this.sortedSearch=[],"All"!=t.name?this.sortedCategory=[...this.products].filter(e=>e.category===t.name):this.sortedCategory=this.products,this.selected=t.name}},watch:{searchValue(){this.sortBySearch(this.searchValue)}},computed:{...Object(gt["c"])(["products","cart"]),...Object(gt["b"])(["searchValue"]),filter(){return this.sortedSearch.length?this.sortedSearch:this.sortedCategory.filter(t=>this.sortedPrice.indexOf(t)>-1)}},mounted(){this.sortedCategory=this.products,this.sortedPrice=this.products}};c("41bf");const vt=O()(_t,[["render",D]]);var ft=vt;const yt={class:"cart"},Ct={class:"cart__container _container"},Pt=Object(a["h"])("i",{class:"cart-back__arrow fas fa-sign-in-alt fa-ls"},null,-1),kt=Object(a["h"])("div",{class:"cart-back__text"},"Catalog",-1),wt=Object(a["h"])("div",{class:"cart__title"},"Cart",-1),xt={class:"cart__list"},St={class:"cart__total"};function Bt(t,e,c,r,o,n){const s=Object(a["z"])("router-link"),i=Object(a["z"])("CartItem");return Object(a["t"])(),Object(a["g"])("div",yt,[Object(a["h"])("div",Ct,[Object(a["j"])(s,{to:{name:"Catalog"},class:"cart__back-to-catalog"},{default:Object(a["F"])(()=>[Pt,kt]),_:1}),wt,Object(a["h"])("div",xt,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["x"])(t.cart,(t,e)=>(Object(a["t"])(),Object(a["e"])(i,{class:"cart__item",key:t.article,cartItem:t,onRemoveInCart:t=>n.removeInCart(e),onDownQty:t=>n.downQty(e),onUpQty:t=>n.upQty(e)},null,8,["cartItem","onRemoveInCart","onDownQty","onUpQty"]))),128))]),Object(a["h"])("div",St,"Total: "+Object(a["B"])(n.totalCost),1)])])}const Vt={class:"cart-item"},It={class:"cart-item__title"},Qt={class:"cart-item__body"},Mt={class:"cart-item__image"},Tt=["src"],qt={class:"cart-item__content"},$t={class:"cart-item__qty qty"},Rt=Object(a["h"])("div",{class:"qty__title"},"Qty",-1),zt={class:"qty__body"},Dt={class:"qty__text"},Ut={class:"cart-item__price"};function Ft(t,e,r,o,n,s){return Object(a["t"])(),Object(a["g"])("div",Vt,[Object(a["h"])("div",It,Object(a["B"])(r.cartItem.name),1),Object(a["h"])("div",Qt,[Object(a["h"])("div",Mt,[Object(a["h"])("img",{src:c("7584")("./"+r.cartItem.image),alt:""},null,8,Tt)]),Object(a["h"])("div",qt,[Object(a["h"])("div",$t,[Rt,Object(a["h"])("div",zt,[Object(a["h"])("div",{class:"qty__btn",onClick:e[0]||(e[0]=(...t)=>s.downQty&&s.downQty(...t))},"-"),Object(a["h"])("div",Dt,Object(a["B"])(r.cartItem.qty),1),Object(a["h"])("div",{class:"qty__btn",onClick:e[1]||(e[1]=(...t)=>s.upQty&&s.upQty(...t))},"+")])]),Object(a["h"])("div",Ut,"Price: "+Object(a["B"])(s.price),1),Object(a["h"])("button",{class:"cart-item__btn _btn-1",onClick:e[2]||(e[2]=(...t)=>s.removeInCart&&s.removeInCart(...t))},"Delete")])])])}var At={name:"cart-item",props:["cartItem"],components:{},methods:{removeInCart(){this.$emit("removeInCart")},downQty(){this.$emit("downQty")},upQty(){this.$emit("upQty")}},computed:{price(){return this.cartItem.price*this.cartItem.qty}}};c("016e");const Lt=O()(At,[["render",Ft]]);var Et=Lt,Gt={name:"cart",components:{CartItem:Et},computed:{...Object(gt["c"])(["cart"]),totalCost(){return this.cart.length?this.cart.reduce((t,e)=>t+e.price*e.qty,0):0}},methods:{removeInCart(t){this.$store.commit("removeInCart",t)},downQty(t){this.$store.commit("downQty",t)},upQty(t){this.$store.commit("upQty",t)}}};c("a26e");const Ht=O()(Gt,[["render",Bt]]);var Jt=Ht;const Kt={class:"main-page"},Nt=Object(a["h"])("div",{class:"main-page__title"},"Main Page",-1),Wt=Object(a["h"])("div",{class:"main-page__link-to-catalog"},"To catalog",-1);function Xt(t,e,c,r,o,n){const s=Object(a["z"])("router-link");return Object(a["t"])(),Object(a["g"])("div",Kt,[Nt,Object(a["j"])(s,{to:{name:"Catalog"}},{default:Object(a["F"])(()=>[Wt]),_:1})])}var Yt={name:"main-page",components:{}};c("8b62");const Zt=O()(Yt,[["render",Xt]]);var te=Zt;const ee=[{path:"/",name:"Main-page",component:te},{path:"/Catalog",name:"Catalog",component:ft},{path:"/Cart",name:"Cart",component:Jt,props:!0}],ce=Object(w["a"])({history:Object(w["b"])(),routes:ee});var ae=ce,re=Object(gt["a"])({state:{isDesktop:!0,isMobile:!1,products:[{image:"1.jpg",name:"Prey",price:2100,article:"T1",available:!0,category:"PC"},{image:"2.jpg",name:"DOOM",price:3150,article:"T2",available:!0,category:"PC"},{image:"3.jpg",name:"Spider-Man",price:4200,article:"T3",available:!1,category:"PlayStation"},{image:"4.jpg",name:"Kena",price:5300,article:"T4",available:!0,category:"PlayStation"},{image:"5.jpg",name:"Bloodborne",price:6500,article:"T5",available:!1,category:"PlayStation"},{image:"6.jpg",name:"Deathloop",price:8700,article:"T6",available:!0,category:"PlayStation"}],cart:[],searchValue:""},mutations:{search(t,e){t.searchValue=e},addToCart(t,e){if(t.cart.length){let c=!1;t.cart.map(t=>{t.article===e.article&&(t.qty++,c=!0)}),c||(t.cart.push(e),e.qty=1)}else t.cart.push(e),e.qty=1},removeInCart(t,e){t.cart.splice(e,1)},downQty(t,e){t.cart[e].qty>1&&t.cart[e].qty--},upQty(t,e){t.cart[e].qty++}},getters:{searchValue(t){return t.searchValue}}});Object(a["d"])(k).use(re).use(ae).mount("#app")},"593c":function(t,e,c){t.exports=c.p+"img/2.5ab1532c.jpg"},6800:function(t,e,c){t.exports=c.p+"img/3.d1b23d19.jpg"},7208:function(t,e,c){},7584:function(t,e,c){var a={"./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800","./4.jpg":"ffd7","./5.jpg":"546a","./6.jpg":"129c"};function r(t){var e=o(t);return c(e)}function o(t){if(!c.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="7584"},7588:function(t,e,c){},"7a45":function(t,e,c){},"8b62":function(t,e,c){"use strict";c("7588")},"8e5e":function(t,e,c){},"98a8":function(t,e,c){t.exports=c.p+"img/1.3426bd57.jpg"},"9d47":function(t,e,c){"use strict";c("cbd7")},a26e:function(t,e,c){"use strict";c("f5c4")},ab09:function(t,e,c){},bea4:function(t,e,c){},cbd7:function(t,e,c){},cf05:function(t,e,c){t.exports=c.p+"img/logo.a6248224.png"},e4bb:function(t,e,c){"use strict";c("29a3")},f5c4:function(t,e,c){},ffd7:function(t,e,c){t.exports=c.p+"img/4.718e4198.jpg"}});
//# sourceMappingURL=app.742a06aa.js.map