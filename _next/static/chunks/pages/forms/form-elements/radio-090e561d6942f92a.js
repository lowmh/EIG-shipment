(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3331],{66485:function(e){function o(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw o();return navigator.clipboard.writeText(e)}async function a(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let a=window.getSelection(),l=window.document.createRange();a.removeAllRanges(),l.selectNode(n),a.addRange(l);let r=!1;try{r=window.document.execCommand("copy")}finally{a.removeAllRanges(),window.document.body.removeChild(n)}if(!r)throw o()}async function l(e){try{await n(e)}catch(n){try{await a(e)}catch(e){throw e||n||o()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=l},13724:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/radio",function(){return n(24432)}])},92223:function(e,o,n){"use strict";n.d(o,{Z:function(){return w}});var a=n(85893),l=n(67294),r=n(87357),t=n(66242),i=n(34386),s=n(67720),d=n(57922),m=n(93946),c=n(78445),u=n(44267),p=n(96420),h=n(98396),x=n(33454),b=n(63730),j=n(15660),R=n.n(j),g=n(86501),v=n(66485),C=n.n(v);let f=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,l.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&f(o.current)&&o.current.select()},a=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&f(o.current)&&o.current.select()},r=e=>{C()(e).then(n).catch(a)},t=(0,l.useCallback)(e=>{"string"==typeof e?r(e):o.current&&r(o.current.value)},[]);return{copy:t,target:o}};let Z=e=>{let{id:o,sx:n,code:j,title:v,children:C,className:f}=e,[Z,w]=(0,l.useState)(!1),[L,G]=(0,l.useState)(null!==j.tsx?"tsx":"jsx"),y=F(),S=(0,h.Z)(e=>e.breakpoints.down("md"));(0,l.useEffect)(()=>{R().highlightAll()},[Z,L]);let k=()=>null!==j.tsx&&"tsx"===L?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===L?j.jsx.props.children.props.children:"",I=()=>{y.copy(k()),g.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,a.jsxs)(t.Z,{className:f,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:o||"card-snippet--".concat(v.toLowerCase().replace(/ /g,"-")),children:[(0,a.jsx)(c.Z,{title:v,...S?{}:{action:(0,a.jsx)(m.Z,{onClick:()=>w(!Z),children:(0,a.jsx)(b.Z,{icon:"tabler:code",fontSize:20})})}}),(0,a.jsx)(u.Z,{children:C}),S?null:(0,a.jsxs)(d.Z,{in:Z,children:[(0,a.jsx)(s.Z,{sx:{my:"0 !important"}}),(0,a.jsxs)(u.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,a.jsx)(r.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,a.jsxs)(x.Z,{exclusive:!0,size:"small",color:"primary",value:L,onChange:(e,o)=>null!==o?G(o):null,children:[null!==j.tsx?(0,a.jsx)(p.Z,{value:"tsx",children:(0,a.jsx)(b.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==j.jsx?(0,a.jsx)(p.Z,{value:"jsx",children:(0,a.jsx)(b.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,a.jsx)(i.Z,{title:"Copy the source",placement:"top",children:(0,a.jsx)(m.Z,{onClick:I,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,a.jsx)(b.Z,{icon:"tabler:copy",fontSize:20})})}),(0,a.jsx)("div",{children:null!==j[L]?j[L]:null})]})]})]})};var w=Z},24432:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return H}});var a=n(85893),l=n(86886),r=n(15861),t=n(92223),i=n(67294),s=n(49033),d=n(68061),m=n(94054),c=n(50480);let u=()=>{let[e,o]=(0,i.useState)("checked"),n=e=>{o(e.target.value)};return(0,a.jsxs)(m.Z,{sx:{flexWrap:"wrap",flexDirection:"row"},children:[(0,a.jsxs)(d.Z,{row:!0,value:e,name:"simple-radio",onChange:n,"aria-label":"simple-radio",children:[(0,a.jsx)(c.Z,{value:"checked",control:(0,a.jsx)(s.Z,{}),label:"Checked"}),(0,a.jsx)(c.Z,{value:"unchecked",control:(0,a.jsx)(s.Z,{}),label:"Unchecked"})]}),(0,a.jsxs)(d.Z,{row:!0,value:"disabled-checked",name:"simple-disabled-radio","aria-label":"simple-disabled-radio",children:[(0,a.jsx)(c.Z,{disabled:!0,value:"disabled-checked",label:"Disabled Checked",control:(0,a.jsx)(s.Z,{})}),(0,a.jsx)(c.Z,{disabled:!0,value:"disabled-unchecked",label:"Disabled Unchecked",control:(0,a.jsx)(s.Z,{})})]})]})},p=()=>(0,a.jsxs)(d.Z,{row:!0,"aria-label":"colored",name:"colored",defaultValue:"primary",children:[(0,a.jsx)(c.Z,{value:"primary",control:(0,a.jsx)(s.Z,{}),label:"Primary"}),(0,a.jsx)(c.Z,{value:"secondary",control:(0,a.jsx)(s.Z,{color:"secondary"}),label:"Secondary"}),(0,a.jsx)(c.Z,{value:"success",label:"Success",control:(0,a.jsx)(s.Z,{color:"success"})}),(0,a.jsx)(c.Z,{value:"error",label:"Error",control:(0,a.jsx)(s.Z,{color:"error"})}),(0,a.jsx)(c.Z,{value:"warning",label:"Warning",control:(0,a.jsx)(s.Z,{color:"warning"})}),(0,a.jsx)(c.Z,{value:"info",label:"Info",control:(0,a.jsx)(s.Z,{color:"info"})})]}),h=()=>(0,a.jsxs)(d.Z,{row:!0,"aria-label":"sizes",name:"sizes",defaultValue:"small",children:[(0,a.jsx)(c.Z,{value:"small",label:"Small",control:(0,a.jsx)(s.Z,{size:"small",sx:{"& svg":{height:16,width:16}}})}),(0,a.jsx)(c.Z,{value:"default",control:(0,a.jsx)(s.Z,{}),label:"Default"})]});var x=n(11057),b=n(40476),j=n(56815);let R=()=>{let[e,o]=(0,i.useState)(""),[n,l]=(0,i.useState)(!1),[r,t]=(0,i.useState)("Choose wisely"),u=e=>{l(!1),t(" "),o(e.target.value)},p=o=>{o.preventDefault(),"best"===e?(l(!1),t("You got it!")):"worst"===e?(l(!0),t("Sorry, wrong answer!")):(l(!0),t("Please select an option."))};return(0,a.jsx)("form",{onSubmit:p,children:(0,a.jsxs)(m.Z,{error:n,children:[(0,a.jsx)(b.Z,{component:"legend",children:"Pop quiz: MUI is..."}),(0,a.jsxs)(d.Z,{"aria-label":"quiz",name:"quiz",value:e,onChange:u,children:[(0,a.jsx)(c.Z,{value:"best",control:(0,a.jsx)(s.Z,{}),label:"The best!"}),(0,a.jsx)(c.Z,{value:"worst",control:(0,a.jsx)(s.Z,{}),label:"The worst."})]}),(0,a.jsx)(j.Z,{sx:{mx:0,fontSize:e=>e.typography.body2.fontSize},children:r}),(0,a.jsx)(x.Z,{type:"submit",variant:"outlined",sx:{mt:3},children:"Check Answer"})]})})},g=()=>{let[e,o]=(0,i.useState)("a"),n=e=>{o(e.target.value)};return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{value:"a",onChange:n,name:"radio-button-demo",checked:"a"===e,inputProps:{"aria-label":"A"}}),(0,a.jsx)(s.Z,{value:"b",onChange:n,name:"radio-button-demo",checked:"b"===e,inputProps:{"aria-label":"B"}})]})},v=e=>(0,a.jsx)(s.Z,{...e,disableRipple:!0,sx:{"& svg":{height:18,width:18}},checkedIcon:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})}),icon:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{fill:"currentColor",d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})})}),C=()=>(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(b.Z,{component:"legend",children:"Gender"}),(0,a.jsxs)(d.Z,{row:!0,defaultValue:"female","aria-label":"gender",name:"customized-radios",children:[(0,a.jsx)(c.Z,{value:"female",control:(0,a.jsx)(v,{}),label:"Female"}),(0,a.jsx)(c.Z,{value:"male",control:(0,a.jsx)(v,{}),label:"Male"}),(0,a.jsx)(c.Z,{value:"other",control:(0,a.jsx)(v,{}),label:"Other"}),(0,a.jsx)(c.Z,{value:"disabled",disabled:!0,control:(0,a.jsx)(v,{}),label:"Disabled"})]})]}),f=()=>(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(d.Z,{row:!0,"aria-label":"position",name:"vertical",defaultValue:"top",children:[(0,a.jsx)(c.Z,{value:"top",label:"Top",labelPlacement:"top",sx:{mr:8.8},control:(0,a.jsx)(s.Z,{})}),(0,a.jsx)(c.Z,{value:"bottom",control:(0,a.jsx)(s.Z,{}),label:"Bottom",labelPlacement:"bottom"})]}),(0,a.jsxs)(d.Z,{row:!0,"aria-label":"position",name:"horizontal",defaultValue:"start",sx:{mt:4},children:[(0,a.jsx)(c.Z,{value:"start",label:"Start",labelPlacement:"start",sx:{mr:4},control:(0,a.jsx)(s.Z,{})}),(0,a.jsx)(c.Z,{value:"end",control:(0,a.jsx)(s.Z,{}),label:"End"})]})]}),F=()=>{let[e,o]=(0,i.useState)("controlled-checked"),n=e=>{o(e.target.value)};return(0,a.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,a.jsxs)(l.ZP,{item:!0,xs:12,sm:6,children:[(0,a.jsx)(r.Z,{children:"Controlled"}),(0,a.jsxs)(d.Z,{row:!0,"aria-label":"controlled",name:"controlled",value:e,onChange:n,children:[(0,a.jsx)(c.Z,{value:"controlled-checked",control:(0,a.jsx)(s.Z,{}),label:"Checked"}),(0,a.jsx)(c.Z,{value:"controlled-unchecked",control:(0,a.jsx)(s.Z,{}),label:"Unchecked"})]})]}),(0,a.jsxs)(l.ZP,{item:!0,xs:12,sm:6,children:[(0,a.jsx)(r.Z,{children:"Uncontrolled"}),(0,a.jsxs)(d.Z,{row:!0,"aria-label":"uncontrolled",name:"uncontrolled",defaultValue:"uncontrolled-checked",children:[(0,a.jsx)(c.Z,{value:"uncontrolled-checked",control:(0,a.jsx)(s.Z,{}),label:"Checked"}),(0,a.jsx)(c.Z,{value:"uncontrolled-unchecked",control:(0,a.jsx)(s.Z,{}),label:"Unchecked"})]})]})]})},Z=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioColor = () => {\n  return (\n    <RadioGroup row aria-label='colored' name='colored' defaultValue='primary'>\n      <FormControlLabel value='primary' control={<Radio />} label='Primary' />\n      <FormControlLabel value='secondary' control={<Radio color='secondary' />} label='Secondary' />\n      <FormControlLabel value='success' label='Success' control={<Radio color='success' />} />\n      <FormControlLabel value='error' label='Error' control={<Radio color='error' />} />\n      <FormControlLabel value='warning' label='Warning' control={<Radio color='warning' />} />\n      <FormControlLabel value='info' label='Info' control={<Radio color='info' />} />\n    </RadioGroup>\n  )\n}\n\nexport default RadioColor\n"})}),w=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport MuiRadio from '@mui/material/Radio'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst Radio = props => {\n  return (\n    <MuiRadio\n      {...props}\n      disableRipple={true}\n      sx={{ '& svg': { height: 18, width: 18 } }}\n      checkedIcon={\n        <svg width='24' height='24' viewBox='0 0 24 24'>\n          <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />\n        </svg>\n      }\n      icon={\n        <svg width='24' height='24' viewBox='0 0 24 24'>\n          <path\n            fill='currentColor'\n            d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'\n          />\n        </svg>\n      }\n    />\n  )\n}\n\nconst RadioCustomized = () => {\n  return (\n    <FormControl>\n      <FormLabel component='legend'>Gender</FormLabel>\n      <RadioGroup row defaultValue='female' aria-label='gender' name='customized-radios'>\n        <FormControlLabel value='female' control={<Radio />} label='Female' />\n        <FormControlLabel value='male' control={<Radio />} label='Male' />\n        <FormControlLabel value='other' control={<Radio />} label='Other' />\n        <FormControlLabel value='disabled' disabled control={<Radio />} label='Disabled' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioCustomized\n"})}),L=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioGroupComponent = () => {\n  // ** State\n  const [value, setValue] = useState('checked')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>\n      <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>\n        <FormControlLabel value='checked' control={<Radio />} label='Checked' />\n        <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />\n      </RadioGroup>\n\n      <RadioGroup row value='disabled-checked' name='simple-disabled-radio' aria-label='simple-disabled-radio'>\n        <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />\n        <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioGroupComponent\n"})}),G=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\nimport Radio from '@mui/material/Radio'\nimport Typography from '@mui/material/Typography'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioControlledUncontrolled = () => {\n  // ** State\n  const [value, setValue] = useState('controlled-checked')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <Grid container spacing={6}>\n      <Grid item xs={12} sm={6}>\n        <Typography>Controlled</Typography>\n        <RadioGroup row aria-label='controlled' name='controlled' value={value} onChange={handleChange}>\n          <FormControlLabel value='controlled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='controlled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n      <Grid item xs={12} sm={6}>\n        <Typography>Uncontrolled</Typography>\n        <RadioGroup row aria-label='uncontrolled' name='uncontrolled' defaultValue='uncontrolled-checked'>\n          <FormControlLabel value='uncontrolled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='uncontrolled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n    </Grid>\n  )\n}\n\nexport default RadioControlledUncontrolled\n"})}),y=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport Button from '@mui/material/Button'\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormHelperText from '@mui/material/FormHelperText'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioShowError = () => {\n  // ** States\n  const [value, setValue] = useState('')\n  const [error, setError] = useState(false)\n  const [helperText, setHelperText] = useState('Choose wisely')\n\n  const handleRadioChange = event => {\n    setError(false)\n    setHelperText(' ')\n    setValue(event.target.value)\n  }\n\n  const handleSubmit = event => {\n    event.preventDefault()\n    if (value === 'best') {\n      setError(false)\n      setHelperText('You got it!')\n    } else if (value === 'worst') {\n      setError(true)\n      setHelperText('Sorry, wrong answer!')\n    } else {\n      setError(true)\n      setHelperText('Please select an option.')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <FormControl error={error}>\n        <FormLabel component='legend'>Pop quiz: MUI is...</FormLabel>\n        <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>\n          <FormControlLabel value='best' control={<Radio />} label='The best!' />\n          <FormControlLabel value='worst' control={<Radio />} label='The worst.' />\n        </RadioGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>{helperText}</FormHelperText>\n        <Button type='submit' variant='outlined' sx={{ mt: 3 }}>\n          Check Answer\n        </Button>\n      </FormControl>\n    </form>\n  )\n}\n\nexport default RadioShowError\n"})}),S=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioLabelPlacement = () => {\n  return (\n    <FormControl>\n      <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8.8 }} control={<Radio />} />\n        <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />\n      </RadioGroup>\n      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Radio />} />\n        <FormControlLabel value='end' control={<Radio />} label='End' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioLabelPlacement\n"})}),k=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioSizes = () => {\n  return (\n    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>\n      <FormControlLabel\n        value='small'\n        label='Small'\n        control={<Radio size='small' sx={{ '& svg': { height: 16, width: 16 } }} />}\n      />\n      <FormControlLabel value='default' control={<Radio />} label='Default' />\n    </RadioGroup>\n  )\n}\n\nexport default RadioSizes\n"})}),I=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\n\nconst RadioStandalone = () => {\n  // ** State\n  const [selectedValue, setSelectedValue] = useState('a')\n\n  const handleChange = event => {\n    setSelectedValue(event.target.value)\n  }\n\n  return (\n    <div>\n      <Radio\n        value='a'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'a'}\n        inputProps={{ 'aria-label': 'A' }}\n      />\n      <Radio\n        value='b'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'b'}\n        inputProps={{ 'aria-label': 'B' }}\n      />\n    </div>\n  )\n}\n\nexport default RadioStandalone\n"})}),T=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioColor = () => {\n  return (\n    <RadioGroup row aria-label='colored' name='colored' defaultValue='primary'>\n      <FormControlLabel value='primary' control={<Radio />} label='Primary' />\n      <FormControlLabel value='secondary' control={<Radio color='secondary' />} label='Secondary' />\n      <FormControlLabel value='success' label='Success' control={<Radio color='success' />} />\n      <FormControlLabel value='error' label='Error' control={<Radio color='error' />} />\n      <FormControlLabel value='warning' label='Warning' control={<Radio color='warning' />} />\n      <FormControlLabel value='info' label='Info' control={<Radio color='info' />} />\n    </RadioGroup>\n  )\n}\n\nexport default RadioColor\n"})}),E=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport MuiRadio, { RadioProps } from '@mui/material/Radio'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst Radio = (props: RadioProps) => {\n  return (\n    <MuiRadio\n      {...props}\n      disableRipple={true}\n      sx={{ '& svg': { height: 18, width: 18 } }}\n      checkedIcon={\n        <svg width='24' height='24' viewBox='0 0 24 24'>\n          <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />\n        </svg>\n      }\n      icon={\n        <svg width='24' height='24' viewBox='0 0 24 24'>\n          <path\n            fill='currentColor'\n            d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'\n          />\n        </svg>\n      }\n    />\n  )\n}\n\nconst RadioCustomized = () => {\n  return (\n    <FormControl>\n      <FormLabel component='legend'>Gender</FormLabel>\n      <RadioGroup row defaultValue='female' aria-label='gender' name='customized-radios'>\n        <FormControlLabel value='female' control={<Radio />} label='Female' />\n        <FormControlLabel value='male' control={<Radio />} label='Male' />\n        <FormControlLabel value='other' control={<Radio />} label='Other' />\n        <FormControlLabel value='disabled' disabled control={<Radio />} label='Disabled' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioCustomized\n"})}),A=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioGroupComponent = () => {\n  // ** State\n  const [value, setValue] = useState<string>('checked')\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue((event.target as HTMLInputElement).value)\n  }\n\n  return (\n    <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>\n      <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>\n        <FormControlLabel value='checked' control={<Radio />} label='Checked' />\n        <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />\n      </RadioGroup>\n\n      <RadioGroup row value='disabled-checked' name='simple-disabled-radio' aria-label='simple-disabled-radio'>\n        <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />\n        <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioGroupComponent\n"})}),P=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioLabelPlacement = () => {\n  return (\n    <FormControl>\n      <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8.8 }} control={<Radio />} />\n        <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />\n      </RadioGroup>\n      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Radio />} />\n        <FormControlLabel value='end' control={<Radio />} label='End' />\n      </RadioGroup>\n    </FormControl>\n  )\n}\n\nexport default RadioLabelPlacement\n"})}),z=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, FormEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport Button from '@mui/material/Button'\nimport FormLabel from '@mui/material/FormLabel'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControl from '@mui/material/FormControl'\nimport FormHelperText from '@mui/material/FormHelperText'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioShowError = () => {\n  // ** States\n  const [value, setValue] = useState<string>('')\n  const [error, setError] = useState<boolean>(false)\n  const [helperText, setHelperText] = useState<string>('Choose wisely')\n\n  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setError(false)\n    setHelperText(' ')\n    setValue((event.target as HTMLInputElement).value)\n  }\n\n  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault()\n\n    if (value === 'best') {\n      setError(false)\n      setHelperText('You got it!')\n    } else if (value === 'worst') {\n      setError(true)\n      setHelperText('Sorry, wrong answer!')\n    } else {\n      setError(true)\n      setHelperText('Please select an option.')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <FormControl error={error}>\n        <FormLabel component='legend'>Pop quiz: MUI is...</FormLabel>\n        <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>\n          <FormControlLabel value='best' control={<Radio />} label='The best!' />\n          <FormControlLabel value='worst' control={<Radio />} label='The worst.' />\n        </RadioGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>{helperText}</FormHelperText>\n        <Button type='submit' variant='outlined' sx={{ mt: 3 }}>\n          Check Answer\n        </Button>\n      </FormControl>\n    </form>\n  )\n}\n\nexport default RadioShowError\n"})}),M=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Radio from '@mui/material/Radio'\n\nconst RadioStandalone = () => {\n  // ** State\n  const [selectedValue, setSelectedValue] = useState<string>('a')\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setSelectedValue(event.target.value)\n  }\n\n  return (\n    <div>\n      <Radio\n        value='a'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'a'}\n        inputProps={{ 'aria-label': 'A' }}\n      />\n      <Radio\n        value='b'\n        onChange={handleChange}\n        name='radio-button-demo'\n        checked={selectedValue === 'b'}\n        inputProps={{ 'aria-label': 'B' }}\n      />\n    </div>\n  )\n}\n\nexport default RadioStandalone\n"})}),N=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\nimport Radio from '@mui/material/Radio'\nimport Typography from '@mui/material/Typography'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioControlledUncontrolled = () => {\n  // ** State\n  const [value, setValue] = useState<string>('controlled-checked')\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue((event.target as HTMLInputElement).value)\n  }\n\n  return (\n    <Grid container spacing={6}>\n      <Grid item xs={12} sm={6}>\n        <Typography>Controlled</Typography>\n        <RadioGroup row aria-label='controlled' name='controlled' value={value} onChange={handleChange}>\n          <FormControlLabel value='controlled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='controlled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n      <Grid item xs={12} sm={6}>\n        <Typography>Uncontrolled</Typography>\n        <RadioGroup row aria-label='uncontrolled' name='uncontrolled' defaultValue='uncontrolled-checked'>\n          <FormControlLabel value='uncontrolled-checked' control={<Radio />} label='Checked' />\n          <FormControlLabel value='uncontrolled-unchecked' control={<Radio />} label='Unchecked' />\n        </RadioGroup>\n      </Grid>\n    </Grid>\n  )\n}\n\nexport default RadioControlledUncontrolled\n"})}),U=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Radio from '@mui/material/Radio'\nimport RadioGroup from '@mui/material/RadioGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst RadioSizes = () => {\n  return (\n    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>\n      <FormControlLabel\n        value='small'\n        label='Small'\n        control={<Radio size='small' sx={{ '& svg': { height: 16, width: 16 } }} />}\n      />\n      <FormControlLabel value='default' control={<Radio />} label='Default' />\n    </RadioGroup>\n  )\n}\n\nexport default RadioSizes\n"})}),V=()=>(0,a.jsxs)(l.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,a.jsx)(l.ZP,{item:!0,xs:12,children:(0,a.jsxs)(t.Z,{title:"RadioGroup",code:{tsx:A,jsx:L},children:[(0,a.jsxs)(r.Z,{sx:{mb:2},children:[(0,a.jsx)("code",{children:"RadioGroup"})," is a helpful wrapper used to group ",(0,a.jsx)("code",{children:"Radio"})," components that provides an easier API, and proper keyboard accessibility to the group."]}),(0,a.jsx)(u,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,children:(0,a.jsxs)(t.Z,{title:"Controlled and Uncontrolled",code:{tsx:N,jsx:G},children:[(0,a.jsxs)(r.Z,{sx:{mb:4},children:["Manage ",(0,a.jsx)("code",{children:"value"})," prop with ",(0,a.jsx)("code",{children:"RadioGroup"})," component with the help of a state for controlled radio and ",(0,a.jsx)("code",{children:"defaultValue"})," prop with ",(0,a.jsx)("code",{children:"RadioGroup"})," component for uncontrolled radio."]}),(0,a.jsx)(F,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Standalone Radio Buttons",code:{tsx:M,jsx:I},children:[(0,a.jsxs)(r.Z,{sx:{mb:2},children:[(0,a.jsx)("code",{children:"Radio"})," can also be used standalone, without the RadioGroup wrapper."]}),(0,a.jsx)(g,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Colors",code:{tsx:T,jsx:Z},children:[(0,a.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,a.jsx)("code",{children:"color"})," prop with ",(0,a.jsx)("code",{children:"Radio"})," component for different colored radio button."]}),(0,a.jsx)(p,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Sizes",code:{tsx:U,jsx:k},children:[(0,a.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,a.jsx)("code",{children:"color"})," prop with ",(0,a.jsx)("code",{children:"Radio"})," component for different colored radio button."]}),(0,a.jsx)(h,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Customized Radio",code:{tsx:E,jsx:w},children:[(0,a.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,a.jsx)("code",{children:"styled"})," hook to customize your radio button."]}),(0,a.jsx)(C,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Label Placement",code:{tsx:P,jsx:S},children:[(0,a.jsxs)(r.Z,{sx:{mb:4},children:["You can change the placement of the label with ",(0,a.jsx)("code",{children:"FormControlLabel"})," component's"," ",(0,a.jsx)("code",{children:"labelPlacement"})," prop."]}),(0,a.jsx)(f,{})]})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(t.Z,{title:"Show Error",code:{tsx:z,jsx:y},children:[(0,a.jsx)(r.Z,{sx:{mb:4},children:"In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted."}),(0,a.jsx)(R,{})]})})]});var H=V}},function(e){e.O(0,[5511,9774,2888,179],function(){return e(e.s=13724)}),_N_E=e.O()}]);