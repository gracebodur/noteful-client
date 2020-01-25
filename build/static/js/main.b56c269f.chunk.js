(this["webpackJsonpnoteful-client"]=this["webpackJsonpnoteful-client"]||[]).push([[0],{199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(75),c=n.n(r),l=n(18),i=n(19),s=n(208),u=(n(89),n(90),n(38)),m=n(3),d=n(4),h=n(6),f=n(5),p=n(7),v=n(79),N=n(37),b=n(8),E=n(207),j=n(76),O=n(80);n(93);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){e.tag,e.className,e.children;var t=Object(O.a)(e,["tag","className","children"]);return o.a.createElement(e.tag,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:["NavCircleButton",e.className].join(" ")},t),e.children)}g.defaultProps={tag:"a"};var k=o.a.createContext({notes:[],folders:[],addfolder:function(){},addNote:function(){},deleteNote:function(){}}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return e.id===t}))},_=(n(94),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,n=void 0===t?[]:t,a=e.notes,r=void 0===a?[]:a;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},n.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(E.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return e.folderId===t})).length}(r,e.id)),e.name))}))),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(g,{tag:N.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(o.a.Component));_.contextType=k;n(96);var D=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.context,n=t.notes,a=t.folders,r=this.props.match.params.noteId,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return e.id===t}))}(a,(P(n,r)||{}).folderId);return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(g,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(b.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),c&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},c.name))}}]),t}(o.a.Component);D.defaultProps={history:{goBack:function(){}},match:{params:{}}},D.contextType=k;var C=n(78),I={API_ENDPOINT:"http://localhost:9090"},x=(n(199),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.id;fetch("".concat(I.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){n.context.deleteNote(t),n.props.onDeleteNote(t)})).catch((function(e){console.error({error:e})}))},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,a=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(N.a,{to:"/note/".concat(n)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(b.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(C.format)(a,"Do MMM YYYY")))))}}]),t}(o.a.Component));x.defaultProps={onDeleteNote:function(){}},x.contextType=k;n(200);var S=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.match.params.folderId,t=this.context.notes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter((function(e){return e.folderId===t})):e}(void 0===t?[]:t,e);return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,n.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(x,{id:e.id,name:e.name,modified:e.modified}))}))),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(g,{tag:N.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}}]),t}(o.a.Component);S.defaultProps={match:{params:{}}},S.contextType=k;var T=n(2),w=n.n(T),A=(n(201),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e){n.props.history.push("/")},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e,n=this.props.match.params.noteId,a=P(t,n)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(x,{id:a.id,name:a.name,modified:a.modified,onDeleteNote:this.handleDeleteNote}),o.a.createElement("div",{className:"NotePageMain__content"},a.content.split(/\n \r|\n/).map((function(e,t){return o.a.createElement("p",{key:t},e)}))))}}]),t}(o.a.Component));A.defaultProps={match:{params:{}}},A.contextType=k,A.ppropTypes={history:w.a.object,location:w.a.object,match:w.a.object};var F=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!0},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h2",null,"Something went wrong, please try again"):this.props.children}}],[{key:"getDerivedStatedfromError",value:function(){return{hasError:!1}}}]),t}(o.a.Component);function M(e){return e.message?o.a.createElement("div",{className:"error"},e.message):o.a.createElement(o.a.Fragment,null," ")}n(202);var L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={folderName:{value:"",touched:!0}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"updateFolderName",value:function(e){this.setState({folderName:{value:e,touched:!1}})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={name:this.state.folderName.value};fetch("".concat(I.API_ENDPOINT,"/folders"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){var n=t.context.folders;n.push(e),t.context.folders=n,t.props.history.push("/")})).catch((function(e){console.error(e)}))}},{key:"validateFolderName",value:function(){var e=this.state.folderName.value.trim();return 0===e.length?"Folder name is required":e.length>20?"Folder name must be less 20 characters":void 0}},{key:"render",value:function(){var e=this,t=this.validateFolderName();return o.a.createElement("section",null,o.a.createElement("form",{className:"add-folder",onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("h2",null,"Create Folder"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"folder-name"},"Name"),o.a.createElement("input",{type:"text",className:"folder-input",name:"folder-name",id:"folder-name",onChange:function(t){return e.updateFolderName(t.target.value)}}),this.state.folderName.touched&&o.a.createElement(M,{message:t}),o.a.createElement("button",{type:"submit",className:"add-folder-button",disabled:this.validateFolderName()},"Add Folder"))))}}]),t}(a.Component);L.contextType=k;n(203);var B=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).state={title:{value:"",touched:!1},content:{value:"",touched:!1},folder:{value:"",touched:!1}},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"updateNoteName",value:function(e){this.setState({title:{value:e,touched:!0}})}},{key:"updateNoteContent",value:function(e){this.setState({content:{value:e,touched:!0}})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.title,o=n.content,r=n.folder,c={name:a.value,content:o.value,folderId:r.value,modified:new Date};fetch("".concat(I.API_ENDPOINT,"/notes"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){var n=t.context.notes;console.log(c),n.push(e),t.context.notes=n,t.props.history.push("/")})).catch((function(e){console.log(e)}))}},{key:"validateNoteName",value:function(){var e=this.state.title.value.trim();return 0===e.length?"Note is required":e.length>150?"Note name must be less than 150 characters.":void 0}},{key:"validateContentName",value:function(){var e=this.state.content.value.trim();return 0===e.length?"Content i required":e.length>500?"Content must be less than 500 characters.":void 0}},{key:"render",value:function(){var e=this,t=this.validateNoteName,n=this.validateContentName;return o.a.createElement("section",null,o.a.createElement("form",{className:"add-note",onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("h2",null,"Create Note"),o.a.createElement("div",null,o.a.createElement("label",{html:!0,for:"note-name"},"Name"),o.a.createElement("input",{type:"text",name:"note-name",id:"note-name",onChange:function(t){return e.updateNoteName(t.target.value)}}),this.state.title.touched&&o.a.createElement(M,{message:t})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"content-name"},"Content"),o.a.createElement("textarea",{name:"content-name",id:"content-name",onChange:function(t){return e.updateNoteContent(t.target.value)}}),this.state.content.touched&&o.a.createElement(M,{message:n}))))}}]),t}(o.a.Component);B.contextType=k;var J=B,R=(n(204),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},n.handleDeleteNote=function(e){n.setState({notes:n.state.notes.filter((function(t){return t.id!==e}))})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(I.API_ENDPOINT,"/notes")),fetch("".concat(I.API_ENDPOINT,"/folders"))]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(u.a)(t,2),a=n[0],o=n[1];e.setState({notes:a,folders:o})})).catch((function(e){console.error({error:e})}))}},{key:"renderNavRoutes",value:function(){return o.a.createElement(F,null,["/","/folder/:folderId"].map((function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:_})})),o.a.createElement(v.a,{path:"/note/:noteId",component:D}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(F,null,["/","/folder/:folderId"].map((function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:S})})),o.a.createElement(v.a,{path:"/note/:noteId",component:A}),o.a.createElement(v.a,{path:"/add-folder",component:L}),o.a.createElement(v.a,{path:"/add-note",component:J}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote};return o.a.createElement(k.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(N.a,{to:"/"},"Noteful")," ",o.a.createElement(b.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes())))}}]),t}(a.Component));l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(s.a,null,o.a.createElement(R,null)),document.getElementById("root"))},81:function(e,t,n){e.exports=n(205)},90:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.b56c269f.chunk.js.map