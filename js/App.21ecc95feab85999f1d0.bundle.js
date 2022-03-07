"use strict";(self.webpackChunkurl_shortener_frontend=self.webpackChunkurl_shortener_frontend||[]).push([[768],{"217b3":(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a("8af19"),n=a("81133"),l=a("85b71"),s=a("0ca6c"),o=a("fc437"),i=a("346c3"),c=a("b5b7b"),d=a("2fd2d"),m=a("a11ea"),u=a("76e33");const h=(0,o.Z)((()=>(0,i.Z)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",margin:"25px",width:"60%",height:"90%"},subtitle:{fontWeight:300},entry:{border:"3px solid #bbb",width:"100%"},entryInvalid:{border:"3px solid #FF0000",width:"100%"},submission:{width:"100%",height:"100%"},helperText:{color:"#FF0000"}}))),f=({detailsLoading:e,value:t,handleChange:a,handleClick:o})=>{const i=h(),f=(0,r.useMemo)((()=>/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)),[t]);return r.createElement(c.Z,{className:i.root,elevation:2},r.createElement(l.Z,{className:i.subtitle,variant:"h4"},"Paste the url to be shortened"),r.createElement(n.Z,{container:!0,item:!0,spacing:1},r.createElement(n.Z,{item:!0,xs:9},r.createElement(d.Z,{className:t?f?i.entry:i.entryInvalid:i.entry,focused:!0,onChange:e=>a(e.target.value),value:t,InputProps:{disableUnderline:!0}})),r.createElement(n.Z,{item:!0,xs:3},r.createElement(m.Z,{className:i.submission,color:"primary",disabled:e||!t||!f,onClick:o,variant:"contained"},"Shorten URL"))),t&&!f&&r.createElement(u.Z,{className:i.helperText},"Invalid entry"),r.createElement(s.Z,{mt:2}),r.createElement(l.Z,{variant:"subtitle1"},"Use this URL Shortener tool to shorten your URL so it is easy to remember. Give it a try!"))};var g=a("95304"),p=a("cc128");const b=(0,o.Z)((e=>(0,i.Z)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px",width:"60%",height:"90%"},subtitle:{fontWeight:500,justifyContent:"start"},subTitleContainer:{width:"60%",marginLeft:e.spacing(-5)},shortenedUrl:{border:"3px solid #bbb",width:"100%"},copyUrl:{width:"100%",height:"100%"},errorMessage:{width:"60%"}}))),E=({loading:e,data:t,errorMessage:a})=>{const o=b();return r.createElement(r.Fragment,null,e&&r.createElement(g.Z,null),!e&&t&&r.createElement(r.Fragment,null,r.createElement(n.Z,{className:o.subTitleContainer,container:!0,item:!0,justifyContent:"flex-start"},r.createElement(l.Z,{className:o.subtitle,variant:"h5"},"Here is your shortened URL!")),r.createElement(c.Z,{className:o.root,elevation:2},r.createElement(n.Z,{alignItems:"center",container:!0,direction:"row",item:!0,justifyContent:"center"},r.createElement(n.Z,{item:!0,xs:8},r.createElement(d.Z,{className:o.shortenedUrl,disabled:!0,InputProps:{disableUnderline:!0},value:t.shortUrl})),r.createElement(n.Z,{item:!0,xs:4},r.createElement(m.Z,{className:o.copyUrl,color:"primary",variant:"contained"},"Copy URL"))),r.createElement(s.Z,{mt:2}))),!e&&a&&r.createElement(p.Z,{className:o.errorMessage,severity:"error"},a))};var Z=a("bd183"),y=a.n(Z);const v="/api/v1/shortenUrl",x={shortenUrl:e=>y().post(v,e)},C=(e,t=!0,a={})=>{const[n,l]=(0,r.useState)(!1),[s,o]=(0,r.useState)(null),[i,c]=(0,r.useState)(null),d=(0,r.useCallback)((async()=>{try{l(!0);const t=await e(a);l(!1),o(t.data.data)}catch(e){l(!1),c(e.response.data.error)}}),[l,e,o,c,a]);return(0,r.useEffect)((()=>{t&&d()}),[t]),{loading:n,data:s,error:i,fetch:d}},U=(0,o.Z)((e=>(0,i.Z)({root:{alignItems:"center",justifyContent:"center",width:"100%"},logo:{color:e.palette.primary.main,fontWeight:500,textShadow:"2px 2px #000000",fontStyle:"italic"}}))),w=()=>{const e=U(),[t,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(!1),{loading:c,data:d,error:m,fetch:u}=C(x.shortenUrl,!1,{url:t});(0,r.useEffect)((()=>{o&&u(),i(!1)}),[o,u]);const h=(0,r.useCallback)((e=>{a(e)}),[]),g=(0,r.useCallback)((()=>{i(!0)}),[]);return console.log(m),r.createElement(n.Z,{className:e.root,container:!0,direction:"column",spacing:3},r.createElement(l.Z,{className:e.logo,variant:"h1"},"URL Shortener"),r.createElement(f,{detailsLoading:c,handleChange:h,handleClick:g,value:t}),r.createElement(s.Z,{mt:2}),r.createElement(E,{data:d,errorMessage:null==m?void 0:m.message,loading:c}))}}}]);