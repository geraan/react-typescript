(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6UXO":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n,r=a("mXGw"),l=a("mBK0"),i=a("qgEq"),c=a("H15f"),o=a("H4M2"),s=a("fRgM"),u=a("fkL1"),m=a("GCqQ"),d=a("2//r"),f=a("Oi5Q"),p=a("J+xt"),v=a("p4b1");function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=i.a.Item,g=Object(l.b)("apiLogStore")(n=Object(l.c)(n=function(e){function t(){var e,a;!function(e,a){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=h(t)).call.apply(e,[this].concat(l)))).state={modalTitle:"参数详情",visible:!1,modalTxt:"",visibleLog:!1,detailInfo:{}},a.columns=[{title:"ID",dataIndex:"id",width:"12%"},{title:"Url",dataIndex:"url",width:"120px",render:function(e,t,n){return r.createElement("div",{onClick:function(){return a.showParamsDetail(t.url,"url")},className:"textflow-4"}," ",e," ")}},{title:"请求方式",dataIndex:"method",width:"60px"},{title:"参数",dataIndex:"params",render:function(e,t,n){return r.createElement("div",{onClick:function(){return a.showParamsDetail(t.params,"params")},className:"textflow-4"}," ",Object(v.a)(e)," ")}},{title:"状态",dataIndex:"status",width:"60px",render:function(e,t,n){return r.createElement(c.a,{status:a.getStatus(e),text:e})}},{title:"创建时间",width:"120px",dataIndex:"createdAt",sorter:!0},{title:"耗时(ms)",dataIndex:"time",width:"60px"},{title:"操作",dataIndex:"",width:"80px",render:function(e,t,n){return r.createElement(o.a,{size:"small",type:"primary",onClick:function(){return a.viewDetail(t)}},"详情")}}],a.object2Str=function(e){return"string"==typeof e?e:JSON.stringify(e)},a.showParamsDetail=function(e,t){e?a.setState({modalTitle:"url"===t?"Url详情":"参数详情",visible:!a.state.visible,modalTxt:Object(v.a)(e)}):a.setState({visible:!1})},a.viewDetail=function(e){e?a.setState({visibleLog:!0,detailInfo:e}):a.setState({visibleLog:!1})},a.formatHeader=function(e){var t=typeof e;if("string"!==t)return"object"===t?Object.keys(e).map(function(t){return r.createElement("div",{key:t},t," : ",e[t])}):"";var a="";try{a=JSON.parse(e)}catch(t){return 10240<e.length?e.substr(0,1024)+"...":e}return Object.keys(a).map(function(e){return r.createElement("div",{key:e},e," : ",a[e])})},a.wrapHtml=function(e){return null!==e&&0<Object.keys(e).length?r.createElement(r.Fragment,null,r.createElement("div",{className:"row"},r.createElement("div",null,"ID："),r.createElement("div",null,e.id)),r.createElement("div",{className:"row"},r.createElement("div",null,"IP："),r.createElement("div",null,e.ip)),r.createElement("div",{className:"row"},r.createElement("div",null,"Url："),r.createElement("div",null,e.url)),r.createElement("div",{className:"row"},r.createElement("div",null,"Path："),r.createElement("div",null,e.path)),r.createElement("div",{className:"row"},r.createElement("div",null,"参数："),r.createElement("div",null,Object(v.a)(e.params))),r.createElement("div",{className:"row"},r.createElement("div",null,"请求头："),r.createElement("div",null,a.formatHeader(e.headers))),r.createElement("div",{className:"row"},r.createElement("div",null,"响应头："),r.createElement("div",null,a.formatHeader(e.resHeaders||e.responseHeaders))),r.createElement("div",{className:"row"},r.createElement("div",null,"响应参数："),r.createElement("div",null,Object(v.a)(e.resData))),r.createElement("div",{className:"row"},r.createElement("div",null,"创建时间："),r.createElement("div",null,e.createdAt)),r.createElement("div",{className:"row"},r.createElement("div",null,"状态："),r.createElement("div",null,e.status)),r.createElement("div",{className:"row"},r.createElement("div",null,"耗时："),r.createElement("div",null,e.time,"ms"))):""},a.getStatus=function(e){var t="default";switch(e){case 200:case 201:t="success";break;case 400:case 401:case 403:case 404:case 405:case 406:t="warning";break;case 500:case 501:case 502:case 503:case 504:case 505:t="error";break;default:t="default"}return t},a}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),a=t,(n=[{key:"componentDidMount",value:function(){this.props.apiLogStore.search()}},{key:"render",value:function(){var e=this,t=this.state,a=t.modalTitle,n=t.visible,l=t.modalTxt,c=t.visibleLog,v=t.detailInfo,E=this.props.apiLogStore,h=E.value,b=E.loading,g=E.list,y=E.meta,k=E.inputChange,O=E.search,x=E.clear;return r.createElement(r.Fragment,null,r.createElement(s.a,{title:a,keyboard:!0,visible:n,onOk:function(){return e.showParamsDetail("")},onCancel:function(){return e.showParamsDetail("")}}," ",l," "),r.createElement(s.a,{className:"large-modal",title:"日志详情",style:{top:40},keyboard:!0,visible:c,onOk:function(){return e.viewDetail("")},onCancel:function(){return e.viewDetail("")}}," ",this.wrapHtml(v)," "),r.createElement(i.a,{className:"search-form"},r.createElement("h3",null,"API请求日志"),r.createElement(u.a,{gutter:24},r.createElement(m.a,{span:6},r.createElement(w,null,r.createElement(d.a,{placeholder:"path",onChange:function(e){return k(e.target.value,"path")},value:h.path}))),r.createElement(m.a,{span:6},r.createElement(w,null,r.createElement(d.a,{placeholder:"url",onChange:function(e){return k(e.target.value,"url")},value:h.url}))),r.createElement(m.a,{span:6},r.createElement(w,null,r.createElement(f.a.RangePicker,{onChange:function(e){return k(e,"createdAt")}}))),r.createElement(m.a,{span:6},r.createElement(w,null,r.createElement(f.a.RangePicker,null)))),r.createElement(u.a,{className:"search-btn-w"},r.createElement(m.a,{span:24},r.createElement(o.a,{onClick:x},"清空"),r.createElement(o.a,{type:"primary",onClick:O},"搜索")))),r.createElement(p.a,{bordered:!0,className:"table-list",columns:this.columns,rowKey:function(e){return e.id},dataSource:g,pagination:y,loading:b,onChange:O}))}}])&&E(a.prototype,n),t}())||n)||n}}]);