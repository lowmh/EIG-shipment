(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8774],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(87462),r=n(63366),i=n(67294),o=n(86010),l=n(94780),s=n(90948),d=n(71657),c=n(1588),p=n(34867);function u(e){return(0,p.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var x=n(85893);let h=["className","component"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)},g=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=n,s=(0,r.Z)(n,h),c=(0,a.Z)({},n,{component:l}),p=m(c);return(0,x.jsx)(g,(0,a.Z)({as:l,className:(0,o.Z)(p.root,i),ownerState:c,ref:t},s))});var Z=f},78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var a=n(63366),r=n(87462),i=n(67294),o=n(86010),l=n(94780),s=n(15861),d=n(71657),c=n(90948),p=n(1588),u=n(34867);function x(e){return(0,u.Z)("MuiCardHeader",e)}let h=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var m=n(85893);let g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)},Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),j=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:l,className:c,component:p="div",disableTypography:u=!1,subheader:x,subheaderTypographyProps:h,title:j,titleTypographyProps:M}=n,C=(0,a.Z)(n,g),S=(0,r.Z)({},n,{component:p,disableTypography:u}),w=f(S),I=j;null==I||I.type===s.Z||u||(I=(0,m.jsx)(s.Z,(0,r.Z)({variant:l?"body2":"h5",className:w.title,component:"span",display:"block"},M,{children:I})));let z=x;return null==z||z.type===s.Z||u||(z=(0,m.jsx)(s.Z,(0,r.Z)({variant:l?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},h,{children:z}))),(0,m.jsxs)(Z,(0,r.Z)({className:(0,o.Z)(w.root,c),as:p,ref:t,ownerState:S},C,{children:[l&&(0,m.jsx)(v,{className:w.avatar,ownerState:S,children:l}),(0,m.jsxs)(b,{className:w.content,ownerState:S,children:[I,z]}),i&&(0,m.jsx)(y,{className:w.action,ownerState:S,children:i})]}))});var M=j},98102:function(e,t,n){"use strict";var a=n(63366),r=n(87462),i=n(67294),o=n(86010),l=n(94780),s=n(41796),d=n(98216),c=n(31618),p=n(44063),u=n(71657),x=n(90948),h=n(89755),m=n(85893);let g=["align","className","component","padding","scope","size","sortDirection","variant"],f=e=>{let{classes:t,variant:n,align:a,padding:r,size:i,stickyHeader:o}=e,s={root:["root",n,o&&"stickyHeader","inherit"!==a&&`align${(0,d.Z)(a)}`,"normal"!==r&&`padding${(0,d.Z)(r)}`,`size${(0,d.Z)(i)}`]};return(0,l.Z)(s,h.U,t)},Z=(0,x.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,d.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,d.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,d.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${h.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),v=i.forwardRef(function(e,t){let n;let l=(0,u.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:d,component:x,padding:h,scope:v,size:y,sortDirection:b,variant:j}=l,M=(0,a.Z)(l,g),C=i.useContext(c.Z),S=i.useContext(p.Z),w=S&&"head"===S.variant,I=v;"td"===(n=x||(w?"th":"td"))?I=void 0:!I&&w&&(I="col");let z=j||S&&S.variant,P=(0,r.Z)({},l,{align:s,component:n,padding:h||(C&&C.padding?C.padding:"normal"),size:y||(C&&C.size?C.size:"medium"),sortDirection:b,stickyHeader:"head"===z&&C&&C.stickyHeader,variant:z}),B=f(P),k=null;return b&&(k="asc"===b?"ascending":"descending"),(0,m.jsx)(Z,(0,r.Z)({as:n,ref:t,className:(0,o.Z)(B.root,d),"aria-sort":k,scope:I,ownerState:P},M))});t.Z=v},89755:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var a=n(1588),r=n(34867);function i(e){return(0,r.Z)("MuiTableCell",e)}let o=(0,a.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=o},31618:function(e,t,n){"use strict";var a=n(67294);let r=a.createContext();t.Z=r},44063:function(e,t,n){"use strict";var a=n(67294);let r=a.createContext();t.Z=r},67070:function(e,t,n){"use strict";n(67294);var a=n(82066),r=n(85893);t.Z=(0,a.Z)((0,r.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},56686:function(e,t,n){"use strict";n(67294);var a=n(82066),r=n(85893);t.Z=(0,a.Z)((0,r.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},48683:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice/list",function(){return n(3777)}])},56456:function(e,t,n){"use strict";var a=n(85893),r=n(67294),i=n(90948),o=n(50135);let l=(0,i.ZP)(o.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),s=(0,r.forwardRef)((e,t)=>{let{size:n="small",InputLabelProps:r,...i}=e;return(0,a.jsx)(l,{size:n,inputRef:t,...i,variant:"filled",InputLabelProps:{...r,shrink:!0}})});t.Z=s},3777:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(85893),r=n(67294),i=n(41664),o=n.n(i),l=n(87357),s=n(86886),d=n(66242),c=n(34386),p=n(90948),u=n(18972),x=n(78445),h=n(93946),m=n(15861),g=n(44267),f=n(58468),Z=n(63730),v=n(42298),y=n(9198),b=n.n(y),j=n(9473),M=n(83358),C=n(72990),S=n(50613),w=n(60155),I=n(81010),z=n(11057),P=n(56456);let B=e=>{let{value:t,selectedRows:n,handleFilter:r}=e;return(0,a.jsxs)(l.Z,{sx:{p:5,pb:3,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(P.Z,{select:!0,defaultValue:"Actions",sx:{mr:4,mb:2},SelectProps:{displayEmpty:!0,disabled:n&&0===n.length,renderValue:e=>(null==e?void 0:e.length)===0?"Actions":e},children:[(0,a.jsx)(u.Z,{disabled:!0,value:"Actions",children:"Actions"}),(0,a.jsx)(u.Z,{value:"Delete",children:"Delete"}),(0,a.jsx)(u.Z,{value:"Edit",children:"Edit"}),(0,a.jsx)(u.Z,{value:"Send",children:"Send"})]}),(0,a.jsxs)(l.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,a.jsx)(P.Z,{value:t,sx:{mr:4,mb:2},placeholder:"Search Invoice",onChange:e=>r(e.target.value)}),(0,a.jsx)(z.Z,{sx:{mb:2},component:o(),variant:"contained",href:"/apps/invoice/add",children:"Create Invoice"})]})]})};var k=n(82229);let R=(0,p.ZP)(o())(e=>{let{theme:t}=e;return{textDecoration:"none",fontSize:t.typography.body1.fontSize,color:"".concat(t.palette.primary.main," !important")}}),D={Sent:{color:"secondary",icon:"tabler:circle-check"},Paid:{color:"success",icon:"tabler:circle-half-2"},Draft:{color:"primary",icon:"tabler:device-floppy"},"Partial Payment":{color:"warning",icon:"tabler:chart-pie"},"Past Due":{color:"error",icon:"tabler:alert-circle"},Downloaded:{color:"info",icon:"tabler:arrow-down-circle"}},N=e=>e.avatar.length?(0,a.jsx)(w.Z,{src:e.avatar,sx:{mr:2.5,width:38,height:38}}):(0,a.jsx)(w.Z,{skin:"light",color:e.avatarColor||"primary",sx:{mr:2.5,width:38,height:38,fontWeight:500,fontSize:e=>e.typography.body1.fontSize},children:(0,C.Q)(e.name||"John Doe")}),A=[{flex:.1,field:"id",minWidth:100,headerName:"ID",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(m.Z,{component:R,href:"/apps/invoice/preview/".concat(t.id),children:"#".concat(t.id)})}},{flex:.1,minWidth:80,field:"invoiceStatus",renderHeader:()=>(0,a.jsx)(Z.Z,{icon:"tabler:trending-up"}),renderCell:e=>{let{row:t}=e,{dueDate:n,balance:r,invoiceStatus:i}=t,o=D[i]?D[i].color:"primary";return(0,a.jsx)(c.Z,{title:(0,a.jsxs)("div",{children:[(0,a.jsx)(m.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:i}),(0,a.jsx)("br",{}),(0,a.jsx)(m.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:"Balance:"})," ",r,(0,a.jsx)("br",{}),(0,a.jsx)(m.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:"Due Date:"})," ",n]}),children:(0,a.jsx)(w.Z,{skin:"light",color:o,sx:{width:"1.875rem",height:"1.875rem"},children:(0,a.jsx)(Z.Z,{icon:D[i].icon})})})}},{flex:.25,field:"name",minWidth:320,headerName:"Client",renderCell:e=>{let{row:t}=e,{name:n,companyEmail:r}=t;return(0,a.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[N(t),(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,a.jsx)(m.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:n}),(0,a.jsx)(m.Z,{noWrap:!0,variant:"body2",sx:{color:"text.disabled"},children:r})]})]})}},{flex:.1,minWidth:100,field:"total",headerName:"Total",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(m.Z,{sx:{color:"text.secondary"},children:"$".concat(t.total||0)})}},{flex:.15,minWidth:140,field:"issuedDate",headerName:"Issued Date",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(m.Z,{sx:{color:"text.secondary"},children:t.issuedDate})}},{flex:.1,minWidth:100,field:"balance",headerName:"Balance",renderCell:e=>{let{row:t}=e;return 0!==t.balance?(0,a.jsx)(m.Z,{sx:{color:"text.secondary"},children:t.balance}):(0,a.jsx)(S.Z,{rounded:!0,size:"small",skin:"light",color:"success",label:"Paid"})}}],H=(0,r.forwardRef)((e,t)=>{let n=null!==e.start?(0,v.default)(e.start,"MM/dd/yyyy"):"",r=null!==e.end?" - ".concat((0,v.default)(e.end,"MM/dd/yyyy")):null,i="".concat(n).concat(null!==r?r:"");null===e.start&&e.dates.length&&e.setDates&&e.setDates([]);let o={...e};return delete o.setDates,(0,a.jsx)(P.Z,{fullWidth:!0,inputRef:t,...o,label:e.label||"",value:i})}),W=()=>{let[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)(""),[p,m]=(0,r.useState)(""),[v,y]=(0,r.useState)(null),[C,S]=(0,r.useState)([]),[w,z]=(0,r.useState)(null),[R,D]=(0,r.useState)({page:0,pageSize:10}),N=(0,j.I0)(),W=(0,j.v9)(e=>e.invoice);(0,r.useEffect)(()=>{N((0,M.rQ)({dates:e,q:n,status:p}))},[N,p,n,e]);let T=e=>{i(e)},_=e=>{m(e.target.value)},$=e=>{let[n,a]=e;null!==n&&null!==a&&t(e),z(n),y(a)},E=[...A,{flex:.1,minWidth:140,sortable:!1,field:"actions",headerName:"Actions",renderCell:e=>{let{row:t}=e;return(0,a.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(c.Z,{title:"Delete Invoice",children:(0,a.jsx)(h.Z,{size:"small",sx:{color:"text.secondary"},onClick:()=>N((0,M.Wu)(t.id)),children:(0,a.jsx)(Z.Z,{icon:"tabler:trash"})})}),(0,a.jsx)(c.Z,{title:"View",children:(0,a.jsx)(h.Z,{size:"small",component:o(),sx:{color:"text.secondary"},href:"/apps/invoice/preview/".concat(t.id),children:(0,a.jsx)(Z.Z,{icon:"tabler:eye"})})}),(0,a.jsx)(I.Z,{menuProps:{sx:{"& .MuiMenuItem-root svg":{mr:2}}},iconButtonProps:{size:"small",sx:{color:"text.secondary"}},options:[{text:"Download",icon:(0,a.jsx)(Z.Z,{icon:"tabler:download",fontSize:20})},{text:"Edit",href:"/apps/invoice/edit/".concat(t.id),icon:(0,a.jsx)(Z.Z,{icon:"tabler:edit",fontSize:20})},{text:"Duplicate",icon:(0,a.jsx)(Z.Z,{icon:"tabler:copy",fontSize:20})}]})]})}}];return(0,a.jsx)(k.Z,{children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(x.Z,{title:"Filters"}),(0,a.jsx)(g.Z,{children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(P.Z,{select:!0,fullWidth:!0,label:"Invoice Status",SelectProps:{value:p,onChange:e=>_(e)},children:[(0,a.jsx)(u.Z,{value:"",children:"None"}),(0,a.jsx)(u.Z,{value:"downloaded",children:"Downloaded"}),(0,a.jsx)(u.Z,{value:"draft",children:"Draft"}),(0,a.jsx)(u.Z,{value:"paid",children:"Paid"}),(0,a.jsx)(u.Z,{value:"partial payment",children:"Partial Payment"}),(0,a.jsx)(u.Z,{value:"past due",children:"Past Due"}),(0,a.jsx)(u.Z,{value:"sent",children:"Sent"})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(b(),{isClearable:!0,selectsRange:!0,monthsShown:2,endDate:v,selected:w,startDate:w,shouldCloseOnSelect:!1,id:"date-range-picker-months",onChange:$,customInput:(0,a.jsx)(H,{dates:e,setDates:t,label:"Invoice Date",end:v,start:w})})})]})})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(B,{value:n,selectedRows:C,handleFilter:T}),(0,a.jsx)(f._,{autoHeight:!0,pagination:!0,rowHeight:62,rows:W.data,columns:E,checkboxSelection:!0,disableRowSelectionOnClick:!0,pageSizeOptions:[10,25,50],paginationModel:R,onPaginationModelChange:D,onRowSelectionModelChange:e=>S(e)})]})})]})})};var T=W},459:function(){}},function(e){e.O(0,[9198,3863,7693,8468,2229,9774,2888,179],function(){return e(e.s=48683)}),_N_E=e.O()}]);