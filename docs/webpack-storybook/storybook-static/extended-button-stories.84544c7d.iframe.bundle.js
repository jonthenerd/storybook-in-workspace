/*! For license information please see extended-button-stories.84544c7d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack_storybook=self.webpackChunkwebpack_storybook||[]).push([[649],{"../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js")},"../../packages/ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js");function Button({label,onClick}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",onClick,children:label})}},"./src/extended-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>extended_button_stories});var dist=__webpack_require__("../../node_modules/.pnpm/@storybook+test@8.6.4_storybook@8.6.4/node_modules/@storybook/test/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),ui_dist=__webpack_require__("../../packages/ui/dist/index.js");function ExtendedButton(props){return(0,jsx_runtime.jsx)("div",{title:props.title,children:(0,jsx_runtime.jsx)(ui_dist.$,{...props})})}ExtendedButton.__docgenInfo={description:"",methods:[],displayName:"ExtendedButton",props:{title:{required:!0,tsType:{name:"string"},description:"This is a title (from extended button)"}},composes:["ButtonProps"]};const extended_button_stories={title:"Example/ExtendedButton",component:ExtendedButton,tags:["autodocs"],args:{onClick:(0,dist.fn)()}},Primary={args:{label:"LocalButton",title:"Title goes here"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'LocalButton',\n    title: \"Title goes here\"\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);