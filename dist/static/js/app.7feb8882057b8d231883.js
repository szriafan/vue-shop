webpackJsonp([1],{"+MPS":function(t,e){},0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"2bHb":function(t,e){},"5CSe":function(t,e){},"5RcT":function(t,e){},"9HX0":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o=n("NYxO"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay"},[e("div",{staticClass:"ball-pulse"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")])])}]};var s="PRELOAD",i="LOADED",c={components:{Loading:n("VU/8")({name:"Loading"},a,!1,function(t){n("+MPS")},"data-v-0169d045",null).exports},name:"app",created:function(){var t=this;this.$store.subscribe(function(e){if(e.payload)switch(e.type){case"ADD_PRODUCT_SUCCESS":t.$toast.success("新建产品成功！","消息"),t.$router.push({name:"AdminProducts"});break;case"UPDATE_PRODUCT_SUCCESS":t.$toast.success("修改产品成功！","消息"),t.$router.push({name:"AdminProducts"});break;case"REMOVE_PRODUCT_SUCCESS":t.$toast.warn("产品删除成功！","消息");break;case"ADD_MANUFACTURER_SUCCESS":t.$toast.success("新建品牌成功！","消息"),t.$router.push({name:"Manufacturers"});break;case"UPDATE_MANUFACTURER_SUCCESS":t.$toast.success("修改品牌成功！","消息"),t.$router.push({name:"Manufacturers"});break;case"REMOVE_MANUFACTURER_SUCCESS":t.$toast.warn("删除品牌成功！","消息");break;case"addCartItems":t.$route.params.id&&t.$router.push({name:"Cart"});break;case"ERROR":t.$toast.error(t.message,"消息")}})},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},Object(o.e)(["code","message"]),Object(o.c)(["cartItemsCount"]))},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("div",{staticClass:"container"},[n("ul",{staticClass:"nav-left"},[n("li",[n("router-link",{attrs:{to:{name:"Home"}}},[n("i",{staticClass:"iconfont icon-home"}),t._v(" 首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"Admin"}}},[n("i",{staticClass:"iconfont icon-admin"}),t._v(" 管理")])],1)]),t._v(" "),n("ul",{staticClass:"nav-right"},[n("li",[n("router-link",{attrs:{to:{name:"Cart"}}},[n("i",{staticClass:"iconfont icon-cart"}),t._v(" 购物车 ("+t._s(t.cartItemsCount)+")")])],1)])])]),t._v(" "),n("router-view",{directives:[{name:"show",rawName:"v-show",value:1===t.code,expression:"code === 1"}],staticClass:"main-view"}),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:-1===t.code,expression:"code === -1"}]})],1)},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("kyBQ")},"data-v-083b45c2",null).exports,d=n("/ocq"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p={name:"ProductItem",props:{product:{type:Object,default:function(){}}},computed:m({},Object(o.c)(["addedQuantity"]),{added:function(){return this.addedQuantity(this.product._id)}}),methods:Object(o.d)(["addCartItem"])},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},[n("div",{staticClass:"product"},[n("router-link",{staticClass:"product-link",attrs:{to:{name:"Detail",params:{id:t.product._id}}}},[n("div",{staticClass:"product-image"},[n("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),n("div",{staticClass:"product-description"},[n("div",{staticClass:"product-info"},[n("small",[t._v(t._s(t.product.manufacturer.name))]),t._v(" "),n("h4",[t._v(t._s(t.product.name))])]),t._v(" "),n("div",{staticClass:"product-price-cart"},[t._v("\n          "+t._s(t._f("currency")(t.product.price))+"\n        ")])])]),t._v(" "),n("div",{staticClass:"product-action"},[n("button",{staticClass:"button",attrs:{disabled:t.added>=t.product.inventory},on:{click:function(e){t.addCartItem(t.product)}}},[t._v("加入购物车")])])],1)])},staticRenderFns:[]};var f={name:"ProductList",components:{ProductItem:n("VU/8")(p,v,!1,function(t){n("q98h")},null,null).exports},props:{products:{type:Array,default:function(){}}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"products"},[e("div",{staticClass:"container"},[this._l(this.products,function(t){return[e("product-item",{attrs:{product:t}})]})],2)])])},staticRenderFns:[]};var _={name:"Home",components:{ProductList:n("VU/8")(f,h,!1,function(t){n("lyZ4")},"data-v-166b5977",null).exports},created:function(){this.getAllProducts()},computed:Object(o.e)(["products"]),methods:Object(o.b)(["getAllProducts"])},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title"},[e("h4",[this.products.length>0?e("div",{staticClass:"iconfont icon-sale"},[this._v("\n        热卖中...\n      ")]):e("div",[this._v("\n        产品还没上架，请在管理页面\n        "),e("router-link",{attrs:{to:{name:"Admin"}}},[this._v(" 添加")])],1)])]),this._v(" "),e("product-list",{attrs:{products:this.products}})],1)},staticRenderFns:[]};var g=n("VU/8")(_,C,!1,function(t){n("9HX0")},null,null).exports,b={name:"CartControl",props:{product:{type:Object,default:function(){}},needConfirmed:{type:Boolean,default:!1},added:{type:Number,default:0}},data:function(){return{count:this.product.quantity||1}},watch:{count:function(t){this.needConfirmed?this.$store.commit("willUpdateCartItem",t):this.$store.commit("updateCartItem",{id:this.product._id,count:t})}},methods:{increment:function(){var t=this.count;this.needConfirmed&&(t=this.count+this.added),t<this.product.inventory&&this.count++},decrement:function(){this.count>1&&this.count--},inputHandler:function(t){var e=t.target.value;/^[1-9]\d*$/.test(e)&&e<this.product.inventory?this.count=parseInt(e):event.target.value=this.count}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart-control"},[n("div",{staticClass:"cart-decrease",attrs:{title:"减"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.decrement(t.product)}}},[n("span",{staticClass:"iconfont icon-remove-circle"})]),t._v(" "),n("input",{staticClass:"cart-count",domProps:{value:t.count},on:{input:t.inputHandler}}),t._v(" "),n("div",{staticClass:"cart-add",attrs:{title:"加"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.increment(t.product)}}},[n("span",{staticClass:"iconfont icon-add-circle"})])])},staticRenderFns:[]};var O=n("VU/8")(b,y,!1,function(t){n("SbDK")},"data-v-3520e563",null).exports,E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},S={name:"CartItem",components:{CartControl:O},props:{product:{type:Object,default:function(){}}},computed:E({},Object(o.c)(["addedQuantity"]),{added:function(){return this.addedQuantity(this.product._id)}}),methods:Object(o.d)(["removeCartItem"])},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container product-details"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-xs-12"},[n("router-link",{attrs:{to:{name:"Detail",params:{id:t.product._id}}}},[n("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})])],1),t._v(" "),n("div",{staticClass:"col-lg-8 col-md-8 col-sm-6 col-xs-12"},[n("div",{staticClass:"product-details-description"},[n("h4",[t._v(t._s(t.product.name))])]),t._v(" "),n("div",{staticClass:"product-details-price-cart"},[n("div",[t._v(t._s(t._f("currency")(t.product.price)))]),t._v(" "),n("cart-control",{attrs:{product:t.product,added:t.added}}),t._v(" "),n("div",[t._v(t._s(t._f("currency")(t.product.price*t.product.quantity)))]),t._v(" "),n("span",{staticClass:"iconfont icon-delete",attrs:{title:"移除"},on:{click:function(e){t.removeCartItem(t.product)}}})],1)])])},staticRenderFns:[]},w={name:"Cart",components:{CartItem:n("VU/8")(S,P,!1,null,null,null).exports},created:function(){this.$store.commit(i)},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},Object(o.e)(["cart"]),Object(o.c)(["cartItemsCount","cartPriceSum"]),{title:function(){return this.cartItemsCount>0?"您的购物车":"购物车是空的"},priceSum:function(){var t=0;return this.cart.forEach(function(e){t+=e.price*e.quantity}),t}}),methods:{goPay:function(){this.$alert("功能有待添加")}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"cart-wrap"},[n("div",{staticClass:"title"},[n("h4",[n("i",{staticClass:"iconfont icon-superpowers"}),t._v(" "+t._s(t.title)+"\n      ")])]),t._v(" "),t._l(t.cart,function(t){return n("cart-item",{key:t._id,attrs:{product:t}})})],2),t._v(" "),t.cart.length>0?n("div",{staticClass:"cart-floatbar"},[n("div",{staticClass:"toolbar-wrap"},[n("div",{staticClass:"amount-sum"},[n("em",[t._v(t._s(t.cartItemsCount))]),t._v("件商品\n      ")]),t._v(" "),n("div",{staticClass:"price-sum"},[t._v("\n        总价："),n("em",[t._v(t._s(t._f("currency")(t.priceSum)))])]),t._v(" "),n("button",{staticClass:"button go-pay-button",on:{click:t.goPay}},[t._v(" 去结算")])])]):t._e()])},staticRenderFns:[]};var T=n("VU/8")(w,U,!1,function(t){n("5RcT")},"data-v-74883d47",null).exports,k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},R={name:"ProductDetail",components:{CartControl:O},props:{product:{type:Object,default:function(){}}},computed:k({},Object(o.c)(["addedQuantity"]),Object(o.e)(["count"]),{added:function(){return this.addedQuantity(this.$route.params.id)},inventoryInfo:function(){var t=this.product.inventory;return t>0?t+"件可售":"缺货"}}),methods:Object(o.d)(["addCartItems"])},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container product-details"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-xs-12"},[n("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),n("div",{staticClass:"col-lg-8 col-md-8 col-sm-6 col-xs-12"},[n("div",{staticClass:"product-details-description"},[n("small",[t._v(t._s(t.product.manufacturer&&t.product.manufacturer.name))]),t._v(" "),n("h4",[t._v(t._s(t.product.name))]),t._v(" "),n("h5",[t._v(t._s(t.inventoryInfo))]),t._v(" "),n("hr"),t._v(" "),n("div",[t._v("\n        "+t._s(t.product.description)+"\n      ")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"product-details-price-cart"},[n("div",[t._v(t._s(t._f("currency")(t.product.price)))]),t._v(" "),n("cart-control",{attrs:{product:t.product,added:t.added,"need-confirmed":!0}}),t._v(" "),n("button",{staticClass:"button",attrs:{disabled:t.added+t.count>t.product.inventory},on:{click:function(e){t.addCartItems(t.product)}}},[t._v("加入购物车\n      ")])],1)])])},staticRenderFns:[]},$=n("VU/8")(R,A,!1,null,null,null).exports,x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M={name:"Detail",components:{ProductDetail:$},created:function(){this.willUpdateCartItem(1),this.model.name||this.getProductById(this.$route.params.id)},computed:x({},Object(o.c)(["productById"]),{model:function(){return x({},this.productById(this.$route.params.id))}}),methods:x({},Object(o.b)(["getProductById"]),Object(o.d)(["willUpdateCartItem"]))},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("product-detail",{attrs:{product:this.model}})],1)},staticRenderFns:[]},I=n("VU/8")(M,j,!1,null,null,null).exports,D={name:"Index",computed:Object(o.e)(["manufacturers"])},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container admin"},[e("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 col-xs-12"},[e("ul",{staticClass:"admin-menu"},[e("li",[e("router-link",{attrs:{to:{name:"Manufacturers"}}},[this._v("品牌列表")])],1),this._v(" "),this.manufacturers.length>0?e("li",[e("router-link",{attrs:{to:{name:"AdminProducts"}}},[this._v("商品列表")])],1):this._e()])]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var F=n("VU/8")(D,N,!1,function(t){n("awq4")},"data-v-eeb04b08",null).exports,q={name:"ButtonGroup",props:{isEditing:{type:Boolean,default:!1}},methods:{goBack:function(){history.back()}}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group pull-right"},[e("button",{staticClass:"button grey",attrs:{type:"button"},on:{click:this.goBack}},[this._v("取消")]),this._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"}},[this._v(this._s(this.isEditing?"修改":"添加"))])])},staticRenderFns:[]};var B=n("VU/8")(q,H,!1,function(t){n("5CSe")},"data-v-4778f274",null).exports,V={name:"ProductForm",components:{ButtonGroup:B},props:{model:{type:Object,default:function(){}},manufacturers:{type:Array,default:function(){}},isEditing:{type:Boolean,default:!1}},methods:{saveProduct:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$emit("save-product",t.model):t.$toast.error("请确保表单填写正确")})},goBack:function(){history.back()}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.saveProduct(e)}}},[n("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 col-xs-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v("产品名")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("name")},attrs:{type:"text",placeholder:"产品名",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"small text-danger"},[t._v("产品名不能为空")])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("价格")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.price,expression:"model.price"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("price")},attrs:{type:"number",placeholder:"价格",name:"price"},domProps:{value:t.model.price},on:{input:function(e){e.target.composing||t.$set(t.model,"price",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("price"),expression:"errors.has('price')"}],staticClass:"small text-danger"},[t._v("价格不能为空")])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("库存")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.inventory,expression:"model.inventory"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("inventory")},attrs:{type:"number",placeholder:"库存",name:"inventory"},domProps:{value:t.model.inventory},on:{input:function(e){e.target.composing||t.$set(t.model,"inventory",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("inventory"),expression:"errors.has('inventory')"}],staticClass:"small text-danger"},[t._v("库存不能为空")])])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v("品牌")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.model.manufacturer,expression:"model.manufacturer"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("manufacturer")},attrs:{placeholder:"品牌",name:"manufacturer"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"manufacturer",e.target.multiple?n:n[0])}}},[t._l(t.manufacturers,function(e){return[n("option",{domProps:{value:e}},[t._v(t._s(e.name))])]})],2)]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("图片")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.image,expression:"model.image"},{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],staticClass:"form-control",class:{error:t.errors.has("image")},attrs:{type:"text",placeholder:"图片",name:"image"},domProps:{value:t.model.image},on:{input:function(e){e.target.composing||t.$set(t.model,"image",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("image"),expression:"errors.has('image')"}],staticClass:"small text-danger"},[t._v("图片不能为空且有效")])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("描述")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.description,expression:"model.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("description")},attrs:{type:"number",placeholder:"描述",rows:"5",name:"description"},domProps:{value:t.model.description},on:{input:function(e){e.target.composing||t.$set(t.model,"description",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("description"),expression:"errors.has('description')"}],staticClass:"small text-danger"},[t._v("描述不能为空")])]),t._v(" "),n("button-group",{attrs:{"is-editing":t.isEditing}})],1)])},staticRenderFns:[]},G=n("VU/8")(V,L,!1,null,null,null).exports,Q={name:"NewProduct",components:{ProductForm:G},created:function(){this.getAllManufacturers()},computed:Object(o.e)(["manufacturers"]),methods:Object(o.b)(["getAllManufacturers","addProduct"])},Y={render:function(){var t=this.$createElement;return(this._self._c||t)("product-form",{attrs:{model:{manufacturer:this.manufacturers[0]},manufacturers:this.manufacturers},on:{"save-product":this.addProduct}})},staticRenderFns:[]},J=n("VU/8")(Q,Y,!1,null,null,null).exports,K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X={name:"Products",computed:Object(o.e)(["products"]),created:function(){this.getAllProducts()},methods:K({},Object(o.b)(["getAllProducts","removeProduct"]),{deleteProduct:function(t){var e=this;this.$confirm("确定要删除该商品？").then(function(n){n&&e.removeProduct(t)})}})},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},[n("table",{staticClass:"table table-striped"},[n("thead",[n("tr",[t.products.length>0?[n("th",[t._v("商品名")]),t._v(" "),n("th",[t._v("价格")]),t._v(" "),n("th",[t._v("库存")]),t._v(" "),n("th",[t._v("品牌")])]:[n("th",{attrs:{colspan:"4"}},[t._v("产品列表为空")])],t._v(" "),n("th",{attrs:{colspan:"2"}},[n("router-link",{attrs:{to:{name:"NewProduct"}}},[t._v("添加")])],1)],2)]),t._v(" "),n("tbody",t._l(t.products,function(e){return n("tr",[n("td",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),n("td",{staticClass:"inventory"},[t._v(t._s(e.inventory))]),t._v(" "),n("td",{staticClass:"manufacturer"},[t._v(t._s(e.manufacturer.name))]),t._v(" "),n("td",[n("router-link",{attrs:{title:"编辑",to:{name:"EditProduct",params:{id:e._id}}}},[n("i",{staticClass:"iconfont icon-edit"})])],1),t._v(" "),n("td",[n("i",{staticClass:"iconfont icon-delete",attrs:{title:"删除"},on:{click:function(n){t.deleteProduct(e._id)}}})])])}))])])},staticRenderFns:[]};var Z=n("VU/8")(X,W,!1,function(t){n("i7ye")},"data-v-40397063",null).exports,z={name:"Edit",components:{ProductForm:G},created:function(){this.model.name||this.getProductById(this.$route.params.id),0===this.manufacturers.length&&this.getAllManufacturers()},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},Object(o.e)(["manufacturers"]),Object(o.c)(["productById"]),{model:function(){return this.productById(this.$route.params.id)}}),methods:Object(o.b)(["getProductById","updateProduct","getAllManufacturers"])},tt={render:function(){var t=this.$createElement;return(this._self._c||t)("product-form",{attrs:{model:this.model,manufacturers:this.manufacturers,isEditing:!0},on:{"save-product":this.updateProduct}})},staticRenderFns:[]},et=n("VU/8")(z,tt,!1,null,null,null).exports,nt={name:"ManufacturerForm",components:{ButtonGroup:B},props:{model:{type:Object,default:function(){}},isEditing:{type:Boolean,default:!1}},methods:{saveManufacturer:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$emit("save-manufacturer",t.model):t.$toast.error("请确保表单填写正确")})}}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.saveManufacturer(e)}}},[n("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 col-xs-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v("品牌名")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("name")},attrs:{type:"text",placeholder:"品牌名",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"small text-danger"},[t._v("品牌名不能为空")])]),t._v(" "),n("button-group",{attrs:{"is-editing":t.isEditing}})],1)])},staticRenderFns:[]},ot=n("VU/8")(nt,rt,!1,null,null,null).exports,at={name:"NewManufacturer",components:{ManufacturerForm:ot},methods:Object(o.b)(["addManufacturer"]),created:function(){this.$store.commit(i)}},st={render:function(){var t=this.$createElement;return(this._self._c||t)("manufacturer-form",{attrs:{model:{}},on:{"save-manufacturer":this.addManufacturer}})},staticRenderFns:[]},it=n("VU/8")(at,st,!1,null,null,null).exports,ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ut={name:"Manufacturers",computed:ct({},Object(o.e)(["manufacturers"]),{count:function(){return this.manufacturers.length}}),created:function(){this.getAllManufacturers()},methods:ct({},Object(o.b)(["getAllManufacturers","removeManufacturer"]),{deleteManufacturer:function(t){var e=this;this.$confirm("确定要删除该品牌？").then(function(n){n&&e.removeManufacturer(t)})}})},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},[n("table",{staticClass:"table table-striped"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.count>0?"品牌名":"品牌列表为空"))]),t._v(" "),n("th",{attrs:{colspan:"2"}},[n("router-link",{attrs:{to:{name:"NewManufacturer"}}},[t._v("添加")])],1)])]),t._v(" "),n("tbody",t._l(t.manufacturers,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[n("router-link",{attrs:{title:"编辑",to:{name:"EditManufacturer",params:{id:e._id}}}},[n("i",{staticClass:"iconfont icon-edit"})])],1),t._v(" "),n("td",[n("a",{attrs:{title:"删除"},on:{click:function(n){t.deleteManufacturer(e._id)}}},[n("i",{staticClass:"iconfont icon-delete"})])])])}))])])},staticRenderFns:[]};var dt=n("VU/8")(ut,lt,!1,function(t){n("kSqM")},"data-v-5c41283f",null).exports,mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pt={name:"Edit",components:{ManufacturerForm:ot},created:function(){this.model.name||this.getManufacturerById(this.$route.params.id)},computed:mt({},Object(o.c)(["manufacturerById"]),{model:function(){return mt({},this.manufacturerById(this.$route.params.id))}}),methods:Object(o.b)(["updateManufacturer","getManufacturerById"])},vt={render:function(){var t=this.$createElement;return(this._self._c||t)("manufacturer-form",{attrs:{model:this.model,isEditing:!0},on:{"save-manufacturer":this.updateManufacturer}})},staticRenderFns:[]},ft=n("VU/8")(pt,vt,!1,null,null,null).exports;r.a.use(d.a);var ht,_t,Ct,gt=new d.a({routes:[{path:"/",name:"Home",redirect:Z},{path:"/products",name:"Products",component:g},{path:"/admin",name:"Admin",component:F,redirect:dt,children:[{path:"products",name:"AdminProducts",component:Z},{path:"products/new",name:"NewProduct",component:J},{path:"products/edit/:id",name:"EditProduct",component:et},{path:"manufacturers",name:"Manufacturers",component:dt},{path:"manufacturers/new",name:"NewManufacturer",component:it},{path:"manufacturers/edit/:id",name:"EditManufacturer",component:ft}]},{path:"/products/:id",name:"Detail",component:I},{path:"/cart",name:"Cart",component:T}]}),bt={cartItemsCount:function(t,e){var n=0;return t.cart.forEach(function(t){n+=parseInt(t.quantity)}),n},cartPriceSum:function(t){return t.cart.items.reduce(function(t,e){return t+parseFloat(e.price)*parseInt(e.quantity)},0)},addedQuantity:function(t,e){return function(e){var n=t.cart.find(function(t){return t._id===e});return n?parseInt(n.quantity):0}}},yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Et=(Ot(ht={},"GET_ALL_PRODUCTS_SUCCESS",function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){return yt({},t,{quantity:1})});t.products=e}),Ot(ht,"GET_PRODUCT_BY_ID_SUCCESS",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.quantity=1,t.product=e}),Ot(ht,"ADD_PRODUCT_SUCCESS",function(t,e){t.products.push(e)}),Ot(ht,"UPDATE_PRODUCT_SUCCESS",function(t,e){}),Ot(ht,"REMOVE_PRODUCT_SUCCESS",function(t,e){var n=t.products.findIndex(function(t){return t._id===e});t.products.splice(n,1)}),ht),St=(Ot(_t={},"GET_ALL_MANUFACTURERS_SUCCESS",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.manufacturers=e}),Ot(_t,"GET_MANUFACTURER_BY_ID_SUCCESS",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.manufacturer=e}),Ot(_t,"ADD_MANUFACTURER_SUCCESS",function(t,e){t.manufacturers.push(e)}),Ot(_t,"UPDATE_MANUFACTURER_SUCCESS",function(t,e){}),Ot(_t,"REMOVE_MANUFACTURER_SUCCESS",function(t,e){var n=t.manufacturers.findIndex(function(t){return t._id===e});t.manufacturers.splice(n,1)}),_t);function Pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.cart.find(function(t){return t._id===e._id});r?r.quantity+=n?t.count:1:t.cart.push(yt({},e,{quantity:t.count})),localStorage.setItem("CART",JSON.stringify(t.cart))}var wt={addCartItems:function(t,e){Pt(t,e,!0)},addCartItem:function(t,e){Pt(t,e)},removeCartItem:function(t,e){var n=t.cart.findIndex(function(t){return t._id===e._id});t.cart.splice(n,1),localStorage.setItem("CART",JSON.stringify(t.cart))},updateCartItem:function(t,e){var n=t.cart.find(function(t){return t._id===e.id});n&&(n.quantity=e.count),localStorage.setItem("CART",JSON.stringify(t.cart))},willUpdateCartItem:function(t,e){t.count=e}},Ut=(Ot(Ct={},s,function(t){t.message="正在加载",t.code=-1}),Ot(Ct,i,function(t){t.message="加载成功",t.code=1}),Ot(Ct,"ERROR",function(t,e){t.message=e,t.code=0}),Ct),Tt=n("mtWM"),kt=n.n(Tt);kt.a.defaults.timeout=2e4,kt.a.defaults.baseURL="https://vue-shop-api.herokuapp.com/v1",kt.a.interceptors.response.use(function(t){return t},function(t){return Mt.commit("ERROR",t),Promise.reject(t)});var Rt=kt.a,At={getAllProducts:function(t){var e=t.commit;e(s),Rt.get("products").then(function(t){e(i),e("GET_ALL_PRODUCTS_SUCCESS",t.data)})},getProductById:function(t,e){var n=t.commit;n(s),Rt.get("products/"+e).then(function(t){n(i),n("GET_PRODUCT_BY_ID_SUCCESS",t.data)})},addProduct:function(t,e){var n=t.commit;n(s),Rt.post("products",e).then(function(t){n("ADD_PRODUCT_SUCCESS",t.data)})},updateProduct:function(t,e){var n=t.commit;n(s),Rt.put("products/"+e._id,e).then(function(t){n("UPDATE_PRODUCT_SUCCESS",t.data)})},removeProduct:function(t,e){var n=t.commit;n(s),Rt.delete("products/"+e).then(function(t){n(i),n("REMOVE_PRODUCT_SUCCESS",t.data)})}},$t={getAllManufacturers:function(t){var e=t.commit;e(s),Rt.get("manufacturers").then(function(t){e(i),e("GET_ALL_MANUFACTURERS_SUCCESS",t.data)})},getManufacturerById:function(t,e){var n=t.commit;n(s),Rt.get("manufacturers/"+e).then(function(t){n(i),n("GET_MANUFACTURER_BY_ID_SUCCESS",t.data)})},addManufacturer:function(t,e){var n=t.commit;n(s),Rt.post("manufacturers",e).then(function(t){n("ADD_MANUFACTURER_SUCCESS",t.data)})},updateManufacturer:function(t,e){var n=t.commit;n(s),Rt.put("manufacturers/"+e._id,e).then(function(t){n("UPDATE_MANUFACTURER_SUCCESS",t.data)})},removeManufacturer:function(t,e){var n=t.commit;n(s),Rt.delete("manufacturers/"+e).then(function(t){n(i),n("REMOVE_MANUFACTURER_SUCCESS",t.data)})}},xt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};r.a.use(o.a);var Mt=new o.a.Store({strict:!0,state:{cart:JSON.parse(localStorage.getItem("CART"))||[],code:-1,message:"",product:{},products:[],manufacturer:{},manufacturers:[],count:1},getters:xt({},{productById:function(t,e){return function(e){return t.products.length>1?t.products.find(function(t){return t._id===e}):t.product}}},{manufacturerById:function(t,e){return function(e){return t.manufacturers.length>0?t.manufacturers.find(function(t){return t._id===e}):t.manufacturer}}},bt),mutations:xt({},Ut,Et,St,wt),actions:xt({},At,$t)}),jt=n("sUu7"),It={name:"VueToast",props:["option"],created:function(){void 0!==this.option.timeout&&0!==this.option.timeout&&this.setTimeout()},methods:{onMouseOver:function(){void 0!==this.option.onMouseOver&&this.option.onMouseOver(),this.option.closeOnHover||clearInterval(this.option.intervalId)},onMouseOut:function(){void 0!==this.option.onMouseOut&&this.option.onMouseOut(),this.option.closeOnHover||this.setTimeout()},setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;this.option.intervalId=setTimeout(function(){t.close()},this.option.timeout)}),clicked:function(){void 0!==this.option.onClicked&&this.option.onClicked(),this.clickClose()},clickClose:function(){void 0!==this.option.clickClose&&!1===this.option.clickClose||this.close()},close:function(){null!==this.$parent&&this.$parent.removeToast(this.option)}}},Dt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"toast toast-"+t.option.type,on:{click:function(e){t.clicked()},mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[n("div",{staticClass:"toast-title",domProps:{innerHTML:t._s(t.option.title)}}),t._v(" "),n("div",{staticClass:"toast-message",domProps:{innerHTML:t._s(t.option.msg)}})])},staticRenderFns:[]},Nt=n("VU/8")(It,Dt,!1,null,null,null).exports,Ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qt={OPTIONS_TEMPLATE:{defaultPosition:"toast-top-right",defaultType:"success",defaultTimeout:3e3,defaultCloseOnHover:{}},name:"Notification",components:{VueToast:Nt},data:function(){return{positions:["toast-top-right","toast-bottom-right","toast-bottom-left","toast-top-left","toast-top-full-width","toast-bottom-full-width","toast-top-center","toast-bottom-center"],list:[]}},methods:{addToast:function(t){"object"===(void 0===t?"undefined":Ft(t))&&(this.list.push(t),void 0!==t.onCreated&&this.$nextTick(function(){t.onCreated()}))},removeToast:function(t){void 0!==t.onClosed&&t.onClosed(),this.list.splice(this.list.indexOf(t),1)},processObjectData:function(t){return"object"===(void 0===t?"undefined":Ft(t))&&void 0!==t.msg?(void 0===t.position&&(t.position=this.defaultPosition),void 0===t.type&&(t.type=this.defaultType),void 0===t.timeout&&(t.timeout=this.defaultTimeout),void 0===t.closeOnHover&&(t.closeOnHover=this.defaultCloseOnHover),t):{msg:t.toString(),position:this.defaultPosition,type:this.defaultType,timeout:this.defaultTimeout,closeOnHover:this.defaultCloseOnHover}},error:function(t,e){var n=this.processObjectData(t);return n.type="error",void 0!==e&&(n.title=e),this.addToast(n)},success:function(t,e){var n=this.processObjectData(t);return n.type="success",void 0!==e&&(n.title=e),this.addToast(n)},warning:function(t,e){var n=this.processObjectData(t);return n.type="warning",void 0!==e&&(n.title=e),this.addToast(n)},info:function(t,e){var n=this.processObjectData(t);return n.type="info",void 0!==e&&(n.title=e),this.addToast(n)}}},Ht={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"toast-container "+t.defaultPosition},t._l(t.list,function(e,r){return e.position===t.defaultPosition?n("vue-toast",{key:r,attrs:{option:e}}):t._e()}))},staticRenderFns:[]};var Bt=n("VU/8")(qt,Ht,!1,function(t){n("pu8X")},"data-v-871e183c",null).exports,Vt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign(Bt.OPTIONS_TEMPLATE,e),r=new(t.extend(Bt))({data:n});if(t.prototype.$toast={success:function(t,e){return r.success(t,e)},info:function(t,e){r.info(t,e)},warn:function(t,e){r.warning(t,e)},error:function(t,e){r.error(t,e)}},!r.$el){var o=r.$mount();document.body.appendChild(o.$el)}}};var Lt={id:"vue-dialog-default",className:"",maskColor:"rgba(40, 40, 40, 0.6)",override:!1,parent:"body",transition:"dialog-transition",duration:0,wide:!1,title:"",message:"",mode:"alert",forceStay:!0,defaultButton:"r",lbDanger:!1,rbDanger:!1,lbHide:!1,rbHide:!1,lbLabel:"取消",rbLabel:"确认",actionAlt:null,action:null},Gt=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.promise=new Promise(function(t,n){e.reject=n,e.resolve=t})},Qt={OPTIONS_TEMPLATE:Lt,props:[],components:{},computed:{options:function(){return Object.assign({},Lt,this.optionsData)}},data:function(){return{queue:[],optionsData:{},visible:!1,input:"",timeoutHandler:null,promiseHandler:null}},methods:{enqueue:function(t){var e=this.queue.length;return t.override?(this.queue=[t],this.transit()):(this.queue.push(t),0===e&&this.transit()),t.promiseHandler=new Gt,t.promiseHandler.promise},consume:function(t){switch(this.options.mode){case"alert":this.optionsData.promiseHandler.resolve();break;case"confirm":t?this.optionsData.promiseHandler.resolve(!1):this.optionsData.promiseHandler.resolve(!0);break;case"prompt":t?this.optionsData.promiseHandler.resolve(null):this.optionsData.promiseHandler.resolve(this.input);break;default:this.optionsData.promiseHandler.resolve()}this.timeoutHandler&&clearTimeout(this.timeoutHandler),this.timeoutHandler=null,this.input="",this.transit(),this.queue.shift()},transit:function(){var t=this;this.visible=!1,setTimeout(function(){t.queue.length&&(t.optionsData=t.queue[0],t.visible=!0,setTimeout(function(){"prompt"===t.options.mode?t.$refs.promptInput.focus():t.$refs.rbButton.focus()}),t.options.duration&&(t.timeoutHandler=setTimeout(function(){t.consume()},t.options.duration)))})},escape:function(){this.consume(!0)},maskClick:function(){!1===this.options.forceStay&&(this.consume(!0),"function"==typeof this.options.actionAlt&&this.options.actionAlt())},lbClick:function(){this.consume(!0),"function"==typeof this.options.actionAlt&&this.options.actionAlt()},rbClick:function(){this.consume(),"function"==typeof this.options.action&&this.options.action()}},mounted:function(){}},Yt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.options.transition}},[t.visible?n("div",{staticClass:"dialog-wrapper",attrs:{id:t.options.id},on:{click:function(e){return e.target!==e.currentTarget?null:t.maskClick(e)},keydown:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.escape(e):null}}},[n("div",{staticClass:"dialog-backdrop",style:{background:t.options.maskColor}}),t._v(" "),n("div",{ref:"dialogContent",staticClass:"dialog-content",class:{"dialog-wide":t.options.wide},attrs:{tabindex:"-1"}},[n("div",{staticClass:"dialog-header",class:{"with-body":t.options.message}},[n("p",[t._v(t._s(t.options.title))])]),t._v(" "),t.options.message?n("div",{staticClass:"dialog-body"},[n("p",[t._v(t._s(t.options.message))])]):t._e(),t._v(" "),"prompt"===t.options.mode?n("div",{staticClass:"dialog-body"},[n("div",{staticClass:"prompt-input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"promptInput",staticClass:"prompt-input",attrs:{type:"text"},domProps:{value:t.input},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.rbClick(e):null},input:function(e){e.target.composing||(t.input=e.target.value)}}})])]):t._e(),t._v(" "),n("div",{staticClass:"dialog-footer"},[t.options.lbHide?t._e():n("input",{ref:"lbButton",staticClass:"dialog-footer-button dialog-footer-button-alt",class:{red:t.options.lbDanger},attrs:{type:"button",value:t.options.lbLabel},on:{click:t.lbClick}}),t._v(" "),t.options.rbHide?t._e():n("input",{ref:"rbButton",staticClass:"dialog-footer-button dialog-footer-button-main",class:{red:t.options.rbDanger},attrs:{type:"button",value:t.options.rbLabel,tabindex:"-1"},on:{click:t.rbClick}})])])]):t._e()])],1)},staticRenderFns:[]};var Jt=n("VU/8")(Qt,Yt,!1,function(t){n("k/cS")},"data-v-feee2ee6",null).exports,Kt=(n("kYPp"),{install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.extend(Jt),r={},o=Object.assign(Jt.OPTIONS_TEMPLATE,e);t.alert=t.prototype.$alert=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a("alert",t)},t.confirm=t.prototype.$confirm=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a("confirm",t)},t.prompt=t.prototype.$prompt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a("prompt",t)};var a=function(t,e){"string"==typeof e&&(e={title:e});switch(e.mode=t||"alert",t){case"alert":e.lbHide=!0;break;case"confirm":case"prompt":break;default:e.lbHide=!0}var a=r[o.id]||(r[o.id]=new n);if(!a.$el){var s=a.$mount();document.querySelector(e.parent||"body").appendChild(s.$el)}return a.enqueue(e)}}}),Xt=(n("2bHb"),n("waKr"),/(\d{3})(?=\d)/g);r.a.config.productionTip=!1,r.a.use(jt.a),r.a.use(Vt),r.a.use(Kt),r.a.filter("currency",function(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"¥",n=null!=n?n:2;var r=Math.abs(t).toFixed(n),o=n?r.slice(0,-1-n):r,a=o.length%3,s=a>0?o.slice(0,a)+(o.length>3?",":""):"",i=n?r.slice(-1-n):"";return(t<0?"-":"")+e+s+o.slice(a).replace(Xt,"$1,")+i}),new r.a({el:"#app",router:gt,store:Mt,template:"<App/>",components:{App:l}})},SbDK:function(t,e){},awq4:function(t,e){},i7ye:function(t,e){},"k/cS":function(t,e){},kSqM:function(t,e){},kYPp:function(t,e){},kyBQ:function(t,e){},lyZ4:function(t,e){},pu8X:function(t,e){},q98h:function(t,e){},waKr:function(t,e){}},[0]);