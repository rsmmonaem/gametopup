(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{3227:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topup/[id]",function(){return a(913)}])},6495:function(e,r,a){"use strict";var s=a(5893),t=a(7516),n=a(8604),l=a(1907);r.Z=function(e){var r=e.data,a=e.error,c=e.loading,o=e.className,i=e.errorMsg,d=(0,n.Mg)(r),u=c||!c&&!a&!r||!1;return u?(0,s.jsx)("div",{className:"_flex_center py-6 ".concat(o||""),children:(0,s.jsx)("div",{className:"w-[30px] h-[30px]",children:(0,s.jsx)(l.Z,{className:"text-primary-500"})})}):d||u||a?a&&!u?(0,s.jsxs)("div",{className:"_flex_center py-7 flex-col gap-3 ".concat(o||""),children:[(0,s.jsx)(t.I2T,{size:55}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h3",{className:"_h3 font-extrabold mb-1.5",children:"Opps"}),(0,s.jsx)("p",{className:"_body2",children:i||(0,n.FU)(a)})]})]}):null:(0,s.jsxs)("div",{className:"_flex_center py-7 flex-col gap-3 ".concat(o||""),children:[(0,s.jsx)(t.wTD,{size:55}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h3",{className:"_h3 font-extrabold mb-1.5",children:"Sorry"}),(0,s.jsx)("p",{className:"_body2",children:"We found nothing for you."})]})]})}},4950:function(e,r,a){"use strict";var s=a(5893),t=a(155),n=a(7516),l=a(3750);r.Z=function(e){var r=e.type,a=void 0===r?"warning":r,c=e.title,o=void 0===c?"Alert title":c,i=e.action,d=e.className,u="error"===a?n.Cw1:"success"===a?l.nRB:t.SZZ;return(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2.5 items-stretch justify-between rounded-md overflow-hidden p-1.5 border _alert ".concat(a," ").concat(d||""),children:[(0,s.jsxs)("div",{className:"flex items-stretch flex-grow",children:[(0,s.jsx)("div",{className:"min-h-[32px] min-w-[32px] max-h-[50] max-w-[50px] flex-shrink-0 rounded-md overflow-hidden p-1.5 _flex_center text-white _alert_icon_wrapper",style:{aspectRatio:"1/1"},children:(0,s.jsx)(u,{className:"w-full h-full"})}),(0,s.jsx)("div",{className:"px-2.5 flex items-center",children:(0,s.jsx)("h6",{className:"_h6 font-medium text-sm",children:o})})]}),i&&(0,s.jsx)("div",{className:"flex flex-shrink-0 justify-end sm:justify-start items-center",children:i})]})}},485:function(e,r,a){"use strict";var s=a(5893),t=a(7516);r.Z=function(e){var r=e.onClick,a=e.topComponent,n=e.bottomComponent,l=e.isSelected,c=e.isError,o=e.disabled,i=e.outOfStock,d=e.isShadow;return(0,s.jsxs)("div",{className:"rounded ".concat(d?"shadow-md":""," cursor-pointer select-none duration-200 border relative flex items-stretch\n    ").concat(!c||i||o?"border-gray-200 hover:border-gray-400":"border-red-500","\n    ").concat(l?"!border-primary-500":"","\n     justify-center ").concat(o||i?"pointer-events-none":""),children:[i&&(0,s.jsx)("span",{className:"absolute top-0 right-1.5 px-2 py-0 text-[11px] text-white bg-yellow-500 z-[5] rounded-full -translate-y-1/2",children:"Out of stock"}),l&&(0,s.jsx)("div",{className:"absolute top-[-1px] rounded-tl-[4px] rounded-br-md left-[-1px] bg-primary-500 text-white p-1 py-0.5 z-10",children:(0,s.jsx)(t.hXj,{})}),(0,s.jsx)("div",{onClick:r&&r,className:"px-1 md:px-2 flex items-center w-full ".concat(o||i?"opacity-50 pointer-events-none":"","\n        "),children:(0,s.jsx)("div",{className:"flex ".concat(l?"!text-primary-500":""," justify-center gap-2 items-center w-full"),children:(0,s.jsxs)("span",{className:"_body2 ".concat(l?"!text-primary-500":""," !text-sm md:!text-base font-semibold text-center"),children:[a,(0,s.jsx)("span",{className:"!text-xs !font-normal text-primary-500",children:n})]})})})]})}},4817:function(e,r,a){"use strict";var s=a(5893),t=a(8604),n=a(4950);r.Z=function(e){var r=e.errors,a=e.touched,l=e.initialValues,c=e.className,o=Object.keys(r).length;return(0,s.jsx)(s.Fragment,{children:(0,t.Mg)(r)&&Object.keys(a).length===Object.keys(l).length&&(0,s.jsx)(n.Z,{className:"mb-4 ".concat(c||""),type:"error",title:"You have ".concat(o," error").concat(o>1?"s":"",". Please check again\n                          and resubmit your form")})})}},9264:function(e,r,a){"use strict";var s=a(5893),t=a(2175);r.Z=function(e){var r=e.name,a=e.showError,n=e.msg,l=(0,t.u6)(),c=l.errors,o=l.touched;return a||c[r]&&o[r]?(0,s.jsxs)("div",{className:"flex items-center space-x-1.5 text-red-600 text-xs mt-1.5",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,s.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})})}),(0,s.jsx)("span",{children:n||c[r]})]}):null}},2082:function(e,r,a){"use strict";var s=a(5893),t=a(2175),n=a(9264);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function c(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(r){l(e,r,a[r])}))}return e}function o(e,r){if(null==e)return{};var a,s,t=function(e,r){if(null==e)return{};var a,s,t={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}r.Z=function(e){var r=e.name,a=(e.className,e.type),l=void 0===a?"text":a,d=e.disabledErrorMessage,u=o(e,["name","className","type","disabledErrorMessage"]),m=(0,t.u6)(),p=m.errors,h=m.touched;if(!r)throw new Error("name is required");var x=p[r]&&h[r];return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.gN,c({name:r,type:l},u,{isError:x,component:i})),!d&&(0,s.jsx)(n.Z,{name:r})]})};var i=function(e){var r=e.field,a=(e.form,e.className),t=e.label,n=e.isError,l=e.isTextArea,i=o(e,["field","form","className","label","isError","isTextArea"]);return(0,s.jsxs)("label",{className:"inline-block w-full",children:[t&&(0,s.jsx)("label",{htmlFor:r.name,className:"_subtitle2 mb-1.5 block",children:t}),l?(0,s.jsx)("textarea",c({id:r.name,className:"_input ".concat(a||""," ").concat(n?"!border-red-500":"")},r,i)):(0,s.jsx)("input",c({id:r.name,className:"_input ".concat(a||""," ").concat(n?"!border-red-500":"")},r,i))]})}},913:function(e,r,a){"use strict";a.r(r);var s=a(5893),t=a(2175),n=a(9008),l=a(1664),c=a(1163),o=a(7294),i=a(3854),d=a(8767),u=a(6455),m=a.n(u),p=a(4231),h=a(3513),x=a(6495),f=a(4950),j=a(2077),_=a(9264),b=a(2082),v=a(485),y=a(4817),g=a(4811),N=a(1367),w=a(7537),k=a(8604),Z=a(8313);function O(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function C(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(r){O(e,r,a[r])}))}return e}r.default=function(){var e=(0,o.useState)(null),r=e[0],a=e[1],u=(0,o.useState)(null),O=u[0],S=u[1],E=(0,o.useState)("pay"),P=E[0],M=E[1],F=(0,o.useState)(null),z=F[0],A=F[1],T=(0,o.useContext)(Z.globalContext),q=T.isAuth,I=T.updateAuthUserInfo,B=T.authUser,V=(0,c.useRouter)(),D=V.query.id,R=(0,d.useQuery)("user-profile",h.et,C({},N.Z,{enabled:!!q})).data;(0,o.useEffect)((function(){R&&I(R)}),[R,I]);var X=null===B||void 0===B?void 0:B.wallet,Y=(0,d.useQuery)("get-topup-product",(function(){return(0,h.FV)(D)}),C({},N.Z,{enabled:!!D})),H=Y.data,U=Y.isLoading,G=Y.error,L=Y.isError,W=null===H||void 0===H?void 0:H.product,Q=null===H||void 0===H?void 0:H.packages,J="gmail"===r,K=1===(null===W||void 0===W?void 0:W.is_idcode),$=C({playerid:"",selectedpackage:null,payment_mathod:"pay"},!K&&{accounttype:"",ingamepassword:"",securitycode:""}),ee=p.Ry().shape(C({playerid:p.Z_().required(K?"Player id is requierd":"Facebook or Gmail is required").trim(),selectedpackage:p.Ry().nullable().required("Select a package"),payment_mathod:p.Z_().required().trim().label("Payment method")},!K&&{accounttype:p.Z_().required().label("Account type").trim(),ingamepassword:p.Z_().required().trim().label("Password"),securitycode:p.Z_().required().trim().label("Account backup code")}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{children:(0,s.jsxs)("title",{children:[null===W||void 0===W?void 0:W.name," ",g.OA]})}),(0,s.jsx)("section",{className:"py-7 bg-gray-50 ".concat((0,k.Mg)(H)?"":"flex-grow items-center flex justify-center flex-col"),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(x.Z,{data:H,loading:U,errorMsg:"Topup product not found",error:L?G:void 0}),(0,k.Mg)(H)&&(0,s.jsxs)("div",{className:"w-full md:w-[750px] md:mx-auto",children:[(0,s.jsx)("h1",{className:"_h3 mb-4",children:null===W||void 0===W?void 0:W.name}),(0,s.jsxs)("div",{className:"relative",children:[z&&(0,s.jsx)(f.Z,{className:"mb-4",type:"error",title:z}),(0,s.jsx)(t.J9,{initialValues:$,validationSchema:ee,onSubmit:function(e,r){var a=r.setSubmitting,s=!1;a(!1),A(null);var t=e.accounttype,n=e.playerid,l=e.ingamepassword,c=e.securitycode,o=e.selectedpackage;m().fire({title:!1,html:'\n                            <div class="_confirm_order_body">\n                              <h4 class="_h4">Confirm Order</h4>\n                              <p className="modal_sub_title">Your current wallet is <span class="_bold_it">\u09f3'.concat(X,'</span></p>\n                              <p className="modal_sub_title">You need <span class="_bold_it">\u09f3').concat(o.price,"</span> to purchase this product.</p>\n                            </div>"),customClass:{popup:"_confirm_order_modal_popup",cancelButton:"_cancel_btn",confirmButton:"_confirm_btn"},cancelButtonText:"Cancel",confirmButtonText:"Confirm order",showCancelButton:!0,cancelButtonColor:"red"}).then((function(e){e.isConfirmed&&!s?(s=!0,a(!0),h.ZP.post("/packageorder",{topuppackage_id:o.id,product_id:o.product_id,name:o.name,accounttype:t,playerid:n,ingamepassword:K?"IDCODE":l,securitycode:K?"IDCODE":c,payment_mathod:1}).then((function(){(0,k.XV)("Your order has been placed successfully."),V.push(w.Z.myOrder.name)})).catch((function(e){a(!1);var r=(0,k.FU)(e);A(r),(0,k.ZO)()}))):s=!1}))},children:function(e){var r,t=e.setFieldValue,n=e.setFieldTouched,c=e.handleChange,o=e.errors,d=e.touched,u=e.values,m=e.initialValues,p=e.isSubmitting,h=e.handleSubmit,x=o.accounttype&&d.accounttype,f=o.selectedpackage&&d.selectedpackage,g=o.payment_mathod&&d.payment_mathod,N=(null===(r=u.selectedpackage)||void 0===r?void 0:r.price)>(null===B||void 0===B?void 0:B.wallet);return(0,s.jsxs)("div",{children:[p&&(0,s.jsx)("div",{className:"_absolute_full z-50"}),(0,s.jsxs)("div",{className:"_order_box_wrapper",children:[(0,s.jsxs)("div",{className:"_order_box_header",children:[(0,s.jsx)("div",{className:"_order_header_step_circle",children:"1"}),(0,s.jsx)("h5",{className:"_order_header_title",children:"Account Info"})]}),(0,s.jsx)("div",{className:"order_box_body",children:K?(0,s.jsx)("div",{className:"_grid_2",children:(0,s.jsx)(b.Z,{label:"Player Id",placeholder:"Enter player id",className:"small",name:"playerid"})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"accounttype",className:"_subtitle2 mb-1.5 block ".concat(x?"text-red-500":""),children:"Account Type"}),(0,s.jsxs)("select",{className:"_input small !rounded-full !py-2 ".concat(x?"!border-red-500":""),name:"accounttype",onChange:function(e){return a(e.target.value),c("accounttype")(e)},onBlur:function(){return n("accounttype")},children:[(0,s.jsx)("option",{value:"",children:"Select an option"}),(0,s.jsx)("option",{value:"facebook",children:"Facebook"}),(0,s.jsx)("option",{value:"gmail",children:"Gmail"})]}),(0,s.jsx)(_.Z,{name:"accounttype"})]}),(0,s.jsx)(b.Z,{label:J?"Your email":"Facebook number",placeholder:J?"Enter email":"Enter number",className:"small",name:"playerid"}),(0,s.jsx)(b.Z,{label:"Password",placeholder:"Enter password",className:"small",name:"ingamepassword"})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(b.Z,{label:"".concat(J?"Gmail":"Facebook"," backup code"),placeholder:"Enter backup code",className:"small",name:"securitycode"}),(0,s.jsx)("p",{className:"flex justify-end _body2 mt-1.5",children:(0,s.jsxs)("a",{target:"_blank",rel:"noreferrer",href:J?"https://www.youtube.com/watch?v=xhhnEiX4y48":"https://www.youtube.com/watch?v=corqX0agw2I",className:"_link flex gap-2",children:[(0,s.jsx)(i.Hi9,{size:18,className:"flex-shrink-0"})," How to get backup code. "]})})]})})]})})]}),(0,s.jsxs)("div",{className:"_order_box_wrapper",children:[(0,s.jsxs)("div",{className:"_order_box_header",children:[(0,s.jsx)("div",{className:"_order_header_step_circle",children:"2"}),(0,s.jsx)("h5",{className:"_order_header_title",children:"Select Recharge"})]}),(0,s.jsxs)("div",{className:"order_box_body",children:[(0,s.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2.5",children:Q.map((function(e,r){return(0,s.jsx)(v.Z,{outOfStock:0===parseInt(null===e||void 0===e?void 0:e.in_stock),onClick:function(){S(r),t("selectedpackage",e)},isError:f,isSelected:parseInt(O)===r,topComponent:(0,s.jsx)("span",{className:"px-1 py-2.5 inline-block",children:null===e||void 0===e?void 0:e.name}),bottomComponent:"\u09f3 ".concat(null===e||void 0===e?void 0:e.price)},r)}))}),(0,s.jsx)(_.Z,{name:"selectedpackage"}),(0,s.jsx)(_.Z,{showError:N,msg:(0,s.jsxs)("p",{children:["You do not have enough money to order this package, Please"," ",(0,s.jsx)(l.default,{href:w.Z.addMoney.name+(0,k.j_)(V),children:(0,s.jsx)("a",{className:"_link",children:"Add Money"})})," ","or choose another package."]})})]})]}),(0,s.jsxs)("div",{className:"_order_box_wrapper",children:[(0,s.jsxs)("div",{className:"_order_box_header",children:[(0,s.jsx)("div",{className:"_order_header_step_circle",children:"3"}),(0,s.jsx)("h5",{className:"_order_header_title",children:"Select Payment"})]}),(0,s.jsxs)("div",{className:"order_box_body",children:[(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3",children:(0,s.jsx)(v.Z,{bottomComponent:"SiziShop Wallet",topComponent:(0,s.jsx)("div",{className:"p-1.5 bg-white pb-2.5",children:(0,s.jsx)("img",{className:"w-full h-auto",src:"../logo.png"})}),isSelected:"pay"===P,isError:g,onClick:function(){M("pay"),t("payment_mathod","pay")}})}),(0,s.jsx)(_.Z,{name:"payment_mathod"})]})]}),(0,s.jsx)(y.Z,{errors:o,initialValues:m,touched:d}),(0,s.jsxs)("div",{className:"flex justify-end gap-3",children:[!q&&(0,s.jsx)(l.default,{href:w.Z.login.name+(0,k.j_)(V),children:(0,s.jsx)("a",{children:(0,s.jsx)(j.Z,{type:"button",className:"outlined",children:"Login"})})}),(q&&!X||N)&&(0,s.jsx)(l.default,{href:w.Z.addMoney.name+(0,k.j_)(V),children:(0,s.jsx)("a",{children:(0,s.jsx)(j.Z,{type:"button",className:"outlined",children:"Add Money"})})}),(0,s.jsx)(j.Z,{disabled:!q||!X||N,onClick:h,type:"submit",loading:p,children:"Buy Now"})]}),(0,s.jsxs)("div",{className:"_order_box_wrapper",children:[(0,s.jsxs)("div",{className:"_order_box_header",children:[(0,s.jsx)("div",{className:"_order_header_step_circle",children:"4"}),(0,s.jsx)("h5",{className:"_order_header_title",children:"Rules & Conditions"})]}),(0,s.jsx)("div",{className:"order_box_body",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:H.product.rules}})})]})]})}})]})]})]})})]})}}},function(e){e.O(0,[556,141,455,774,888,179],(function(){return r=3227,e(e.s=r);var r}));var r=e.O();_N_E=r}]);