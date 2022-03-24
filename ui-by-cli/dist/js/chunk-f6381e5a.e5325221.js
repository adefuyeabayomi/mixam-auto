(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6381e5a"],{a15b:function(t,e,o){"use strict";var a=o("23e7"),r=o("44ad"),s=o("fc6a"),i=o("a640"),n=[].join,c=r!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return n.call(s(this),void 0===t?",":t)}})},a640:function(t,e,o){"use strict";var a=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&a((function(){o.call(null,e||function(){throw 1},1)}))}},b4dc:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"create-product-showcase"}},[t._m(0),t._m(1),o("section",[o("form",{attrs:{enctype:"multipart/form-data",id:"product-showcase-form"}},[o("div",{staticClass:"product_name"},[o("p",{staticClass:"product_name"},[t._v("Product Name : ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.productname,expression:"productname"}],attrs:{type:"text"},domProps:{value:t.productname},on:{input:function(e){e.target.composing||(t.productname=e.target.value)}}})]),o("div",{staticClass:"product_cartegory"},[o("p",{staticClass:"product_cartegory"},[t._v("Product Cartegory")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.productcartegory,expression:"productcartegory"}],attrs:{type:"text",placeholder:"eg, child wears, wrist watch etc."},domProps:{value:t.productcartegory},on:{input:function(e){e.target.composing||(t.productcartegory=e.target.value)}}})]),o("div",{staticClass:"product_features"},[o("p",[t._v("Product Features : (Two Required)")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.productfeatures,expression:"productfeatures"}],attrs:{type:"text"},domProps:{value:t.productfeatures},on:{input:function(e){e.target.composing||(t.productfeatures=e.target.value)}}}),o("button",{staticClass:"add_feature_button",on:{click:function(e){return t.openPrompt()}}},[t._v("Add Feature")])])]),o("div",[o("p",{staticClass:"main_product_description"},[t._v("Describe your product briefly : (not more than 100 characters)")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.productdecscription,expression:"productdecscription"}],staticClass:"product_description",attrs:{type:"text"},domProps:{value:t.productdecscription},on:{input:function(e){e.target.composing||(t.productdecscription=e.target.value)}}})]),t._m(2),o("div",{staticClass:"choose_background"},[o("p",[t._v("Choose background: ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.background,expression:"background"}],attrs:{name:"background"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.background=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:""}},[t._v("Select A Background")]),o("option",{attrs:{value:"1"}},[t._v("background1")]),o("option",{attrs:{value:"2"}},[t._v("background2")]),o("option",{attrs:{value:"3"}},[t._v("Background3")]),o("option",{attrs:{value:"4"}},[t._v("Background4")]),o("option",{attrs:{value:"5"}},[t._v("Background5")]),o("option",{attrs:{value:"6"}},[t._v("Background6")])])]),o("div",{staticClass:"choose_theme"},[o("p",[t._v("Choose Theme: ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],attrs:{name:"theme"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.theme=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:""}},[t._v("Select a theme")]),o("option",{attrs:{value:"theme1"}},[t._v(" Theme1 ")]),o("option",{attrs:{value:"theme2"}},[t._v(" Theme2 ")]),o("option",{attrs:{value:"theme3"}},[t._v(" Theme3 ")]),o("option",{attrs:{value:"theme4"}},[t._v(" Theme4 ")]),o("option",{attrs:{value:"theme5"}},[t._v(" Theme5 ")])])])]),o("div",{staticClass:"functions"},[o("div",{staticClass:"preview_container"},[o("vs-button",{attrs:{block:""}},[t._v("Preview")])],1),o("div",{staticClass:"publish_container"},[o("vs-button",{attrs:{block:""},on:{click:function(e){return t.validatePost()}}},[t._v("Publish")])],1)])]),t._m(3)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-title-container"},[o("p",[t._v("Create Product Showcase")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-desc-container"},[o("p",[o("i",{staticClass:"fas fa-bulb"}),t._v("A new tool to show your products in a a more appealing way to customers.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product_image"},[o("p",[t._v("Upload an image of the product.")]),o("input",{attrs:{type:"file"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"preview_section"}},[o("p",[t._v("This is the preview section")])])}],s=(o("a15b"),{data:function(){return{productname:"",productcartegory:"",productdescription:"",productFeatures:[],productfeatures:"",theme:"",background:""}},computed:{},methods:{validatePost:function(){var t=this;""==this.productname?this.$modal.show("dialog",{title:"Product Name Missing",text:"Please a product name for your product showcase before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):""==this.productcartegory?this.$modal.show("dialog",{title:"Product Cartegory Missing",text:"Please add a cartegory for your product before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):""==this.productdescription?this.$modal.show("dialog",{title:"Product Decsciption Missing",text:"Please add a short description for your product before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):this.productFeatures.length<2?this.$modal.show("dialog",{title:"Please add at least two product features before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):""==this.theme?this.$modal.show("dialog",{title:"No theme chosen",text:"Please choose a theme product showcase before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):""==this.background?this.$modal.show("dialog",{title:"No background chosen",text:"Please choose a background for your product showcase before you can proceed",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}):(console.log("product-showcase-valid"),this.sendPublishRequest())},sendPublishRequest:function(){var t=this,e=window.localStorage.getItem("userlogindata").MID,o=window.localStorage.getItem("userlogindata").DID,a=this.productname,r=this.productcartegory,s=this.productdecscription,i=this.productFeatures.join("-"),n=this.theme,c=this.background,u=new FormData(document.getElementById("product-showcase-form"));u.append("params",JSON.stringify({MID:e,DID:o,productname:a,productcartegory:r,productdecscription:s,productfeatures:i,theme:n,background:c}));var d="http://localhost/publishproductshowcase/";window.axios.post(d,u,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){"success"==e.data.status?(console.log("response.data"),t.$modal.show("dialog",{title:"done",text:"Your product showcase has been published",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]}),t.$router.push("create-main")):t.$modal.show("dialog",{title:"Server Error",text:"Your showcase has not been published",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]})})).catch((function(e){t.$modal.show("dialog",{title:"Something Went Wrong",text:e.message,buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]})}))}}}),i=s,n=o("0c7c"),c=Object(n["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f6381e5a.e5325221.js.map