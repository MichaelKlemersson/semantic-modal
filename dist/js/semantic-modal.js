!function(t){if("undefined"==typeof t)throw"jQuery is not defined";if("undefined"==typeof t.fn.modal)throw"Semantic Modal component is not defined";var e=function(e){if("undefined"==typeof e||e=={}||""===e)throw"Undefined options to modal";e=t.extend({title:"Modal Title",size:"normal",closable:!0,allowMultiple:!0,callback:function(t){},buttons:{Ok:{"class":"ui primary button",action:function(t){t.modal("hide")}}}},"object"==typeof e?e:{message:e});var a=t("<div/>",{id:"semantic-modal-instance-"+t(".ui.modal.semantic-modal").length+1,"class":"ui modal semantic-modal"});"undefined"!=typeof e.size&&t.inArray(e.size,["small","normal","large"])>-1&&a.addClass(e.size),typeof e.closable===!0&&a.append(t("<i/>",{"class":"icon close"}));var o="undefined"!=typeof e.type?e.type:"default",n="#ffffff";switch(o){case"info":n="#2185d0";break;case"primary":n="#1678c2";break;case"success":n="#21ba45";break;case"warning":n="#fbbd08";break;case"danger":n="#d01919"}a.append(t("<div/>",{"class":"header",text:"string"==typeof e.title?e.title:"Modal title"}).css("background-color",n).css("color","#ffffff"!=n?"white":"black"));var s="";if("string"==typeof e.message?s=e.message:"function"==typeof e.message&&(s=e.message.call()),a.append(t("<div/>",{"class":"content",html:s})),a.settings=e,"object"==typeof e.buttons){var i=t("<div/>",{"class":"actions"});t.each(e.buttons,function(o){var n=t("<button/>",{"class":"ui button "+("undefined"!=typeof this.className?this.className:""),text:o});"undefined"!=typeof this.icon&&"string"==typeof this.icon&&""!==t.trim(this.icon)&&n.append(t("<i/>",{"class":this.icon})),"function"==typeof this.action&&n.on("click",function(){e.buttons[o].action(a)}),i.append(n)}),a.append(i)}return a};window.semanticModal={_modal:null,alert:function(t){return this._modal=e(t),this._modal.modal("setting","closable",this._modal.settings.closable).modal("show"),this},confirm:function(t){return this._modal=e({message:"string"==typeof t?message:t.message,callback:"object"==typeof t?t.callback:function(t){},title:"object"==typeof t?t.title:"Modal Title",buttons:{Ok:{className:"primary",action:function(t){t.settings.callback(!0),t.modal("hide")}},Cancel:{className:"red",action:function(t){t.settings.callback(!1),t.modal("hide")}}}}),this._modal.modal("setting","closable",this._modal.settings.closable).modal("show"),this},prompt:function(a){return this._modal=e({callback:"object"==typeof a?a.callback:function(t){},title:"object"==typeof a?a.title:"Modal Title",message:function(){return t("<div/>",{"class":"ui one column grid container"}).append(t("<p/>",{text:"string"==typeof a?a:"Enter a value","class":"column",style:"margin-bottom: 0;"})).append(t("<div/>",{"class":"column"}).append(t("<div/>",{"class":"ui fluid input"}).append(t("<input/>",{"class":"prompt-input",autofocus:!0,placeholder:"Enter a value"}))))},buttons:{Ok:{className:"primary",action:function(t){t.settings.callback(t.find("input.prompt-input").val()),t.modal("hide")}},Cancel:{className:"red",action:function(t){t.settings.callback(""),t.modal("hide")}}}}),this._modal.modal("setting","closable",this._modal.settings.closable).modal("show"),this},dialog:function(t){return this._modal=e(t),this._modal.modal("setting","closable",this._modal.settings.closable).modal("show"),this}}}(jQuery);