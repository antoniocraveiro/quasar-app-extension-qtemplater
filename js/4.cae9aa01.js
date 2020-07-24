(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{"inline-label":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"website",label:"Website"}}),a("q-tab",{attrs:{name:"css",label:"css"}}),a("q-tab",{attrs:{name:"landingPage",label:"Landing page"}}),a("q-tab",{attrs:{name:"about",label:"About"}}),a("q-tab",{attrs:{name:"contact",label:"Contact"}}),a("q-tab",{attrs:{name:"route",label:"Route"}}),a("q-tab",{attrs:{name:"pages",label:"Pages"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"website"}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Name"},model:{value:t.configuration.website.name,callback:function(e){t.$set(t.configuration.website,"name",e)},expression:"configuration.website.name"}})],1),a("q-tab-panel",{attrs:{name:"css"}},[a("a",{attrs:{href:"https://color.adobe.com/create"}},[t._v("https://color.adobe.com/create")]),t._l(t.configuration.css,(function(e,n){return a("q-input",{key:n,staticStyle:{"max-width":"350px"},attrs:{label:n},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-color",{model:{value:t.configuration.css[n],callback:function(e){t.$set(t.configuration.css,n,e)},expression:"configuration.css[key]"}})],1)],1)]},proxy:!0}],null,!0),model:{value:t.configuration.css[n],callback:function(e){t.$set(t.configuration.css,n,e)},expression:"configuration.css[key]"}})}))],2),a("q-tab-panel",{attrs:{name:"landingPage"}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Page title"},model:{value:t.configuration.landingPage.title,callback:function(e){t.$set(t.configuration.landingPage,"title",e)},expression:"configuration.landingPage.title"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Header"},model:{value:t.configuration.landingPage.header,callback:function(e){t.$set(t.configuration.landingPage,"header",e)},expression:"configuration.landingPage.header"}}),a("q-input",{staticClass:"fit q-pa-sm",class:{"text-white bg-dark":t.$q.dark.isActive},staticStyle:{"max-width":"350px"},attrs:{type:"textarea",label:"Content",rows:"20"},model:{value:t.configuration.landingPage.content,callback:function(e){t.$set(t.configuration.landingPage,"content",e)},expression:"configuration.landingPage.content"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Call to action message"},model:{value:t.configuration.landingPage.CTA.message,callback:function(e){t.$set(t.configuration.landingPage.CTA,"message",e)},expression:"configuration.landingPage.CTA.message"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Call to action route"},model:{value:t.configuration.landingPage.CTA.route,callback:function(e){t.$set(t.configuration.landingPage.CTA,"route",e)},expression:"configuration.landingPage.CTA.route"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"SEO meta description"},model:{value:t.configuration.landingPage.meta.description,callback:function(e){t.$set(t.configuration.landingPage.meta,"description",e)},expression:"configuration.landingPage.meta.description"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"SEO meta keywords"},model:{value:t.configuration.landingPage.meta.keywords,callback:function(e){t.$set(t.configuration.landingPage.meta,"keywords",e)},expression:"configuration.landingPage.meta.keywords"}})],1),a("q-tab-panel",{attrs:{name:"about"}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.about.label,callback:function(e){t.$set(t.configuration.about,"label",e)},expression:"configuration.about.label"}}),a("q-splitter",{scopedSlots:t._u([{key:"before",fn:function(){return[a("div",{staticClass:"q-pa-md"},[a("q-input",{staticClass:"fit q-pa-sm",class:{"text-white bg-dark":t.$q.dark.isActive},attrs:{type:"textarea",label:"Content",hint:"https://www.markdownguide.org/",rows:"20"},model:{value:t.configuration.about.content,callback:function(e){t.$set(t.configuration.about,"content",e)},expression:"configuration.about.content"}})],1)]},proxy:!0},{key:"after",fn:function(){return[a("div",{staticClass:"q-pa-md",staticStyle:{height:"467px"}},[a("q-markdown",{staticClass:"fit bordered q-pa-sm",attrs:{src:t.configuration.about.content}})],1)]},proxy:!0}]),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1),a("q-tab-panel",{attrs:{name:"contact"}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.contact.label,callback:function(e){t.$set(t.configuration.contact,"label",e)},expression:"configuration.contact.label"}}),a("q-list",{staticStyle:{"max-width":"300px"},attrs:{separator:"",bordered:""}},[a("q-item",{attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("Email")])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"add",color:"green"},on:{click:function(e){return t.configuration.contact.email.addresses.push({email:"",label:""})}}})],1)],1),t._l(t.configuration.contact.email.addresses,(function(e,n){return a("q-item",{key:n},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.contact.email.addresses[n].label,callback:function(e){t.$set(t.configuration.contact.email.addresses[n],"label",e)},expression:"configuration.contact.email.addresses[key].label"}})],1),a("q-item-label",[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Email"},model:{value:t.configuration.contact.email.addresses[n].email,callback:function(e){t.$set(t.configuration.contact.email.addresses[n],"email",e)},expression:"configuration.contact.email.addresses[key].email"}})],1)],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"remove",color:"red"},on:{click:function(e){return t.configuration.contact.email.addresses.splice(n,1)}}})],1)],1)}))],2),a("q-list",{staticStyle:{"max-width":"300px"},attrs:{bordered:"",separator:""}},[a("q-item",{attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("Phone")])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"add",color:"green"},on:{click:function(e){return t.configuration.contact.phone.numbers.push({number:"",label:"",icon:""})}}})],1)],1),t._l(t.configuration.contact.phone.numbers,(function(e,n){return a("q-item",{key:n},[a("q-item-section",{attrs:{avatar:""}},[a("q-btn-dropdown",{attrs:{icon:e.icon}},[a("q-input",{staticClass:"q-ma-md",attrs:{label:"Filter",outlined:"",clearable:""},model:{value:t.iconPickerFilter,callback:function(e){t.iconPickerFilter=e},expression:"iconPickerFilter"}}),a("q-icon-picker",{staticStyle:{height:"300px",width:"300px"},attrs:{"icon-set":"material-icons",tooltips:"",filter:t.iconPickerFilter,pagination:t.iconPagination},on:{"update:pagination":function(e){t.iconPagination=e}},model:{value:t.configuration.contact.phone.numbers[n].icon,callback:function(e){t.$set(t.configuration.contact.phone.numbers[n],"icon",e)},expression:"configuration.contact.phone.numbers[key].icon"}})],1)],1),a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.contact.phone.numbers[n].label,callback:function(e){t.$set(t.configuration.contact.phone.numbers[n],"label",e)},expression:"configuration.contact.phone.numbers[key].label"}})],1),a("q-item-label",[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Number"},model:{value:t.configuration.contact.phone.numbers[n].number,callback:function(e){t.$set(t.configuration.contact.phone.numbers[n],"number",e)},expression:"configuration.contact.phone.numbers[key].number"}})],1)],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"remove",color:"red"},on:{click:function(e){return t.configuration.contact.phone.numbers.splice(n,1)}}})],1)],1)}))],2),a("q-list",{staticStyle:{"max-width":"300px"},attrs:{bordered:"",separator:""}},[a("q-item",{attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("Additional info")])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"add",color:"green"},on:{click:function(e){return t.configuration.contact.additionalInfo.fields.push({value:"",label:""})}}})],1)],1),t._l(t.configuration.contact.additionalInfo.fields,(function(e,n){return a("q-item",{key:n},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.contact.additionalInfo.fields[n].label,callback:function(e){t.$set(t.configuration.contact.additionalInfo.fields[n],"label",e)},expression:"configuration.contact.additionalInfo.fields[key].label"}})],1),a("q-item-label",[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Value"},model:{value:t.configuration.contact.additionalInfo.fields[n].value,callback:function(e){t.$set(t.configuration.contact.additionalInfo.fields[n],"value",e)},expression:"configuration.contact.additionalInfo.fields[key].value"}})],1)],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"remove",color:"red"},on:{click:function(e){return t.configuration.contact.additionalInfo.fields.splice(n,1)}}})],1)],1)}))],2)],1),a("q-tab-panel",{attrs:{name:"route"}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label"},model:{value:t.configuration.route.label,callback:function(e){t.$set(t.configuration.route,"label",e)},expression:"configuration.route.label"}}),a("q-list",{staticStyle:{"max-width":"300px"},attrs:{separator:"",bordered:""}},[a("q-item",{attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("Addresses")])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"add",color:"green"},on:{click:function(e){return t.configuration.route.addresses.push(t.address)}}})],1)],1),t._l(t.configuration.route.addresses,(function(e,n){return a("q-item",{key:n},[a("q-item-section",[a("q-item-label",{attrs:{overline:""}},[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Name"},model:{value:t.configuration.route.addresses[n].name,callback:function(e){t.$set(t.configuration.route.addresses[n],"name",e)},expression:"configuration.route.addresses[key].name"}})],1),a("q-item-label",[a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Address"},model:{value:t.configuration.route.addresses[n].address,callback:function(e){t.$set(t.configuration.route.addresses[n],"address",e)},expression:"configuration.route.addresses[key].address"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Postal code"},model:{value:t.configuration.route.addresses[n].postalCode,callback:function(e){t.$set(t.configuration.route.addresses[n],"postalCode",e)},expression:"configuration.route.addresses[key].postalCode"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"City"},model:{value:t.configuration.route.addresses[n].city,callback:function(e){t.$set(t.configuration.route.addresses[n],"city",e)},expression:"configuration.route.addresses[key].city"}})],1)],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",flat:"",icon:"remove",color:"red"},on:{click:function(e){return t.configuration.route.addresses.splice(n,1)}}})],1)],1)}))],2)],1),a("q-tab-panel",{attrs:{name:"pages"}},[a("q-splitter",{attrs:{value:t.$q.screen.lt.md?20:10},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-tabs",{staticClass:"bg-orange text-white",attrs:{vertical:""},model:{value:t.pagesTab,callback:function(e){t.pagesTab=e},expression:"pagesTab"}},[a("q-tab",{attrs:{icon:"add",color:"green"},on:{click:function(e){return t.configuration.pages.push(Object.assign({},t.page))}}}),t._l(t.configuration.pages,(function(t,e){return a("q-tab",{key:e,attrs:{name:e,label:t.title}})}))],2)]},proxy:!0},{key:"after",fn:function(){return[a("q-tab-panels",{attrs:{animated:""},model:{value:t.pagesTab,callback:function(e){t.pagesTab=e},expression:"pagesTab"}},t._l(t.configuration.pages,(function(e,n){return a("q-tab-panel",{key:n,attrs:{name:n}},[a("div",{staticClass:"row"},[a("q-btn-dropdown",{staticClass:"q-mr-lg",attrs:{icon:t.configuration.pages[n].icon}},[a("q-input",{staticClass:"q-ma-md",attrs:{label:"Filter",outlined:"",clearable:""},model:{value:t.iconPickerFilter,callback:function(e){t.iconPickerFilter=e},expression:"iconPickerFilter"}}),a("q-icon-picker",{staticStyle:{height:"300px",width:"300px"},attrs:{"icon-set":"material-icons",tooltips:"",filter:t.iconPickerFilter,pagination:t.iconPagination},on:{"update:pagination":function(e){t.iconPagination=e}},model:{value:t.configuration.pages[n].icon,callback:function(e){t.$set(t.configuration.pages[n],"icon",e)},expression:"configuration.pages[key].icon"}})],1),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Title"},model:{value:t.configuration.pages[n].title,callback:function(e){t.$set(t.configuration.pages[n],"title",e)},expression:"configuration.pages[key].title"}})],1),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Description (for landing page)"},model:{value:t.configuration.pages[n].description,callback:function(e){t.$set(t.configuration.pages[n],"description",e)},expression:"configuration.pages[key].description"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Call to action (for landing page)"},model:{value:t.configuration.pages[n].cta,callback:function(e){t.$set(t.configuration.pages[n],"cta",e)},expression:"configuration.pages[key].cta"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"Label (for menu)"},model:{value:t.configuration.pages[n].label,callback:function(e){t.$set(t.configuration.pages[n],"label",e)},expression:"configuration.pages[key].label"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"URL",placeholder:"/url"},model:{value:t.configuration.pages[n].url,callback:function(e){t.$set(t.configuration.pages[n],"url",e)},expression:"configuration.pages[key].url"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"SEO meta description"},model:{value:t.configuration.pages[n].meta.description,callback:function(e){t.$set(t.configuration.pages[n].meta,"description",e)},expression:"configuration.pages[key].meta.description"}}),a("q-input",{staticStyle:{"max-width":"350px"},attrs:{label:"SEO meta keywords"},model:{value:t.configuration.pages[n].meta.keywords,callback:function(e){t.$set(t.configuration.pages[n].meta,"keywords",e)},expression:"configuration.pages[key].meta.keywords"}}),a("q-splitter",{scopedSlots:t._u([{key:"before",fn:function(){return[a("div",{staticClass:"q-pa-md"},[a("q-input",{staticClass:"fit q-pa-sm",class:{"text-white bg-dark":t.$q.dark.isActive},attrs:{type:"textarea",label:"Content",hint:"https://www.markdownguide.org/",rows:"20"},model:{value:t.configuration.pages[n].content,callback:function(e){t.$set(t.configuration.pages[n],"content",e)},expression:"configuration.pages[key].content"}})],1)]},proxy:!0},{key:"after",fn:function(){return[a("div",{staticClass:"q-pa-md",staticStyle:{height:"467px"}},[a("q-markdown",{staticClass:"fit bordered q-pa-sm",attrs:{src:t.configuration.pages[n].content}})],1)]},proxy:!0}],null,!0),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}}),a("q-btn",{attrs:{color:"red",label:"Delete page"},on:{click:function(e){return t.configuration.pages.splice(n)}}})],1)})),1)]},proxy:!0}])})],1)],1),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[50,50]}},[a("q-fab",{attrs:{icon:"more_vert",direction:"up",color:"accent"}},[a("q-fab-action",{attrs:{color:"primary",label:"Download",icon:"file_download"},on:{click:t.downloadJson}}),a("q-fab-action",{attrs:{label:"Upload",color:"primary",icon:"file_upload"},on:{click:t.uploadJson}})],1)],1),a("q-file",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"filePicker",on:{input:t.onFileUploaded},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)},i=[],o=a("e4fd"),l=a("a357"),s={name:"Generator",setup(){const t=Object(o["ref"])(null),e=Object(o["ref"])("website"),a=Object(o["ref"])(""),n=Object(o["ref"])(50),i=Object(o["ref"])({itemsPerPage:35,page:0}),s={website:{name:"Website name"},css:{primary:"#839be3",secondary:"#26a69a",accent:"#9c27b0",dark:"#1D1D1D",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"},landingPage:{title:"Home",header:"Welcome message",content:"A brief description",meta:{description:"",keywords:""},CTA:{message:"A call to action!",route:"/callToActionUrl"}},about:{label:"About",content:"\n# About #\nAbout page content"},contact:{label:"Contact",email:{label:"Email",addresses:[{email:"acme@acme.org",label:"For general questions."}]},phone:{label:"Phone number",numbers:[{number:"+44 12 34 56 78",label:"Landline",icon:"phone"},{number:"071 23 45 67 89",label:"Mobile",icon:"smartphone"}]},additionalInfo:{label:"Additional info",fields:[{label:"crc",value:"23123"},{label:"IBAN",value:"324234"}]}},route:{label:"Route",addresses:[{name:"Headquarters",address:"Main street",postalCode:"1234 AA",city:"New York"}],content:"Click on the link to open Google maps"},pages:[]},c=Object(o["ref"])(s),r=Object(o["ref"])({name:"",address:"",postalCode:"",city:""}),u=Object(o["ref"])({title:"New",description:"",cta:"",label:"",icon:"",content:"",url:"",meta:{description:"",keywords:""}}),d=Object(o["ref"])(),p=Object(o["ref"])("");function b(){Object(l["a"])("qtemplater.json",JSON.stringify(c.value,null,2))}function f(){(null===d||void 0===d?void 0:d.value)&&d.value.pickFiles()}function g(t){const e=new FileReader;e.onload=t=>{var e;(null===(e=t.target)||void 0===e?void 0:e.result)&&("string"===typeof t.target.result?c.value=JSON.parse(t.target.result):c.value=JSON.parse(t.target.result.toString()))},e.readAsText(t)}return{file:t,tab:e,pagesTab:a,splitter:n,iconPagination:i,configuration:c,address:r,page:u,uploadJson:f,downloadJson:b,onFileUploaded:g,filePicker:d,iconPickerFilter:p}}},c=s,r=a("2877"),u=a("9989"),d=a("429b"),p=a("7460"),b=a("adad"),f=a("823b"),g=a("27f9"),m=a("0016"),q=a("7cbe"),x=a("b498"),k=a("8562"),y=a("1c1c"),w=a("66e5"),h=a("4074"),v=a("0170"),P=a("9c40"),S=a("f20b"),C=a("de5e"),$=a("c294"),A=a("72db"),T=a("7d53"),_=a("eebe"),F=a.n(_),O=Object(r["a"])(c,n,i,!1,null,null,null);e["default"]=O.exports;F()(O,"components",{QPage:u["a"],QTabs:d["a"],QTab:p["a"],QTabPanels:b["a"],QTabPanel:f["a"],QInput:g["a"],QIcon:m["a"],QPopupProxy:q["a"],QColor:x["a"],QSplitter:k["a"],QList:y["a"],QItem:w["a"],QItemSection:h["a"],QItemLabel:v["a"],QBtn:P["a"],QBtnDropdown:S["a"],QPageSticky:C["a"],QFab:$["a"],QFabAction:A["a"],QFile:T["a"]})}}]);