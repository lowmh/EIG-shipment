(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{69368:function(e,t,o){"use strict";o.d(t,{Z:function(){return S}});var r=o(63366),n=o(87462),a=o(67294),i=o(86010),l=o(94780),s=o(41796),d=o(21964),p=o(82066),c=o(85893),u=(0,p.Z)((0,c.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,p.Z)((0,c.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,p.Z)((0,c.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=o(98216),g=o(71657),f=o(90948),b=o(1588),Z=o(34867);function v(e){return(0,Z.Z)("MuiCheckbox",e)}let y=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],M=e=>{let{classes:t,indeterminate:o,color:r}=e,a={root:["root",o&&"indeterminate",`color${(0,h.Z)(r)}`]},i=(0,l.Z)(a,v,t);return(0,n.Z)({},t,i)},C=(0,f.ZP)(d.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t[`color${(0,h.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),w=(0,c.jsx)(m,{}),k=(0,c.jsx)(u,{}),I=(0,c.jsx)(x,{}),B=a.forwardRef(function(e,t){var o,l;let s=(0,g.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=w,color:p="primary",icon:u=k,indeterminate:m=!1,indeterminateIcon:x=I,inputProps:h,size:f="medium",className:b}=s,Z=(0,r.Z)(s,j),v=m?x:u,y=m?x:d,B=(0,n.Z)({},s,{color:p,indeterminate:m,size:f}),S=M(B);return(0,c.jsx)(C,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":m},h),icon:a.cloneElement(v,{fontSize:null!=(o=v.props.fontSize)?o:f}),checkedIcon:a.cloneElement(y,{fontSize:null!=(l=y.props.fontSize)?l:f}),ownerState:B,ref:t,className:(0,i.Z)(S.root,b)},Z,{classes:S}))});var S=B},73700:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return o(73664)}])},56456:function(e,t,o){"use strict";var r=o(85893),n=o(67294),a=o(90948),i=o(50135);let l=(0,a.ZP)(i.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),s=(0,n.forwardRef)((e,t)=>{let{size:o="small",InputLabelProps:n,...a}=e;return(0,r.jsx)(l,{size:o,inputRef:t,...a,variant:"filled",InputLabelProps:{...n,shrink:!0}})});t.Z=s},73664:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(67294),a=o(41664),i=o.n(a),l=o(11057),s=o(67720),d=o(69368),p=o(15861),c=o(93946),u=o(87357),m=o(98396),x=o(90948),h=o(2734),g=o(87109),f=o(50480),b=o(56456),Z=o(63730),v=o(16310),y=o(87536),j=o(47533),M=o(67218),C=o(23918),w=o(66204),k=o(67340),I=o(42374);let B=(0,x.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:2,maxHeight:680,marginTop:t.spacing(12),marginBottom:t.spacing(12),[t.breakpoints.down(1540)]:{maxHeight:550},[t.breakpoints.down("lg")]:{maxHeight:500}}}),S=(0,x.ZP)(u.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:450},[t.breakpoints.up("lg")]:{maxWidth:600},[t.breakpoints.up("xl")]:{maxWidth:750}}}),z=(0,x.ZP)(i())(e=>{let{theme:t}=e;return{textDecoration:"none",color:"".concat(t.palette.primary.main," !important")}}),L=(0,x.ZP)(f.Z)(e=>{let{theme:t}=e;return{"& .MuiFormControlLabel-label":{color:t.palette.text.secondary}}}),R=v.Ry().shape({email:v.Z_().email().required(),password:v.Z_().min(5).required()}),P={password:"",email:"menghornglow99@gmail.com"},_=()=>{let[e,t]=(0,n.useState)(!0),[o,a]=(0,n.useState)(!1),x=(0,M.a)(),f=(0,h.Z)(),{settings:v}=(0,C.r)(),k=(0,m.Z)(f.breakpoints.down("md")),{skin:_}=v,{control:H,setError:D,handleSubmit:N,formState:{errors:E}}=(0,y.cI)({defaultValues:P,mode:"onBlur",resolver:(0,j.X)(R)}),T=t=>{let{email:o,password:r}=t;x.login({email:o,password:r,rememberMe:e},()=>{D("email",{type:"manual",message:"Email or Password is invalid"})})};return(0,r.jsxs)(u.Z,{className:"content-right",sx:{backgroundColor:"background.paper"},children:[k?null:(0,r.jsxs)(u.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",borderRadius:"20px",justifyContent:"center",backgroundColor:"customColors.bodyBg",margin:e=>e.spacing(8,0,8,8)},children:[(0,r.jsx)(B,{alt:"login-illustration",src:"/images/pages/".concat("bordered"===_?"auth-v2-login-illustration-bordered":"auth-v2-login-illustration","-").concat(f.palette.mode,".png")}),(0,r.jsx)(I.Z,{})]}),(0,r.jsx)(S,{children:(0,r.jsx)(u.Z,{sx:{p:[6,12],height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(u.Z,{sx:{width:"100%",maxWidth:400},children:[(0,r.jsxs)("svg",{width:34,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:f.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,r.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:f.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,r.jsxs)(u.Z,{sx:{my:6},children:[(0,r.jsx)(p.Z,{variant:"h3",sx:{mb:1.5},children:"Welcome to ".concat(w.Z.templateName,"! \uD83D\uDC4B\uD83C\uDFFB")}),(0,r.jsx)(p.Z,{sx:{color:"text.secondary"},children:"Please sign-in to your account and start the adventure"})]}),(0,r.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:N(T),children:[(0,r.jsx)(u.Z,{sx:{mb:4},children:(0,r.jsx)(y.Qr,{name:"email",control:H,rules:{required:!0},render:e=>{let{field:{value:t,onChange:o,onBlur:n}}=e;return(0,r.jsx)(b.Z,{fullWidth:!0,autoFocus:!0,label:"Email",value:t,onBlur:n,onChange:o,placeholder:"admin@vuexy.com",error:!!E.email,...E.email&&{helperText:E.email.message}})}})}),(0,r.jsx)(u.Z,{sx:{mb:1.5},children:(0,r.jsx)(y.Qr,{name:"password",control:H,rules:{required:!0},render:e=>{let{field:{value:t,onChange:n,onBlur:i}}=e;return(0,r.jsx)(b.Z,{fullWidth:!0,value:t,onBlur:i,label:"Password",onChange:n,id:"auth-login-v2-password",error:!!E.password,...E.password&&{helperText:E.password.message},type:o?"text":"password",InputProps:{endAdornment:(0,r.jsx)(g.Z,{position:"end",children:(0,r.jsx)(c.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:()=>a(!o),children:(0,r.jsx)(Z.Z,{fontSize:"1.25rem",icon:o?"tabler:eye":"tabler:eye-off"})})})}})}})}),(0,r.jsxs)(u.Z,{sx:{mb:1.75,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(L,{label:"Remember Me",control:(0,r.jsx)(d.Z,{checked:e,onChange:e=>t(e.target.checked)})}),(0,r.jsx)(p.Z,{component:z,href:"/forgot-password",children:"Forgot Password?"})]}),(0,r.jsx)(l.Z,{fullWidth:!0,type:"submit",variant:"contained",sx:{mb:4},children:"Login"}),(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,r.jsx)(p.Z,{sx:{color:"text.secondary",mr:2},children:"New on our platform?"}),(0,r.jsx)(p.Z,{href:"/register",component:z,children:"Create an account"})]}),(0,r.jsx)(s.Z,{sx:{color:"text.disabled","& .MuiDivider-wrapper":{px:6},fontSize:f.typography.body2.fontSize,my:e=>"".concat(e.spacing(6)," !important")},children:"or"}),(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(c.Z,{href:"/",component:i(),sx:{color:"#497ce2"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(Z.Z,{icon:"mdi:facebook"})}),(0,r.jsx)(c.Z,{href:"/",component:i(),sx:{color:"#1da1f2"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(Z.Z,{icon:"mdi:twitter"})}),(0,r.jsx)(c.Z,{href:"/",component:i(),onClick:e=>e.preventDefault(),sx:{color:e=>"light"===e.palette.mode?"#272727":"grey.300"},children:(0,r.jsx)(Z.Z,{icon:"mdi:github"})}),(0,r.jsx)(c.Z,{href:"/",component:i(),sx:{color:"#db4437"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(Z.Z,{icon:"mdi:google"})})]})]})]})})})]})};_.getLayout=e=>(0,r.jsx)(k.Z,{children:e}),_.guestGuard=!0,t.default=_},42374:function(e,t,o){"use strict";var r=o(85893),n=o(98396),a=o(90948),i=o(2734);let l=(0,a.ZP)("img")(e=>{let{theme:t}=e;return{bottom:0,height:300,width:"100%",position:"absolute",[t.breakpoints.down(1540)]:{height:250}}}),s=e=>{let{image:t,height:o,className:a}=e,s=(0,i.Z)(),d=(0,n.Z)(s.breakpoints.down("md"));return d?null:(0,r.jsx)(r.Fragment,{children:t?"string"==typeof t?(0,r.jsx)(l,{alt:"mask",src:t,className:a,...o&&{height:o}}):t:(0,r.jsx)(l,{alt:"mask",className:a,...o&&{height:o},src:"/images/pages/auth-v2-mask-".concat(s.palette.mode,".png")})})};t.Z=s}},function(e){e.O(0,[7536,2216,9774,2888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);