!function(e){var o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(a,n,function(o){return e[o]}.bind(null,n));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=19)}({0:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){var e=function(e){var o=localStorage.getItem(e);if(null==o)o={},"web2b"==e&&(o.respuestas={});else try{o=JSON.parse(o)}catch(e){return o}return o};return{getObjFromLocalStorage:e,saveWeb2bJson:function(o){var t=JSON.stringify(o),a=e("web2b_userId"),n=e("web2b_templateId"),r=localStorage.getItem("web2b_template");!t||r==t||a instanceof Object||n instanceof Object||(localStorage.setItem("web2b_template",t),$.post("scripts/salvar_datos.php",{userId:a,idSitio:n,info:encodeURIComponent(t)}).done(function(e){e.ok||console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e.mensaje)}).fail(function(e){console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e)}))},saveSelected:function(e,o,t,a){var n=e.selections||{},r=!1;if(o.includes("@switch")){var i=o.split("@");o=i[0],r=!0}switch(n[o]=n[o]||{},a){case"image":r?n[o].active=t:n[o].img=t,n[o].type=a;break;case"text":r?n[o].active=t:n[o].text=t,n[o].type=a;break;case"config":n[o].value=t,n[o].type=a}e.selections=n},getPagesFromDB:function(){var o=e("web2b_userId");return $.get("scripts/getActualPages.php",{userId:o}).done(function(e){return e.ok||console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e.mensaje),e.paginas}).fail(function(e){return console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e),{}})},setDataObjects:function(e,o){localStorage.removeItem("web2b"),localStorage.setItem("web2b_templateId",e.idSitio),localStorage.setItem("web2b_userId",e.userId),localStorage.setItem("web2b_template",JSON.stringify(o)),localStorage.setItem("web2b_pages",JSON.stringify(e.paginas))},purgeTemplateData:function(){localStorage.removeItem("web2b_actualPage"),localStorage.removeItem("web2b_template"),localStorage.removeItem("web2b_templateId"),localStorage.removeItem("web2b_template"),localStorage.removeItem("web2b")}}}},1:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){var e=[],o=new a.default;return{setPaginasInfoFromExternal:function(o){e=o},getPaginas:function(){return o.getPagesFromDB().then(function(t){var a=o.getObjFromLocalStorage("web2b_templateId");e=t.paginas,localStorage.setItem("web2b_pages",JSON.stringify(t.paginas)),t.paginas.forEach(function(e){Number(e.idSitio)===a&&localStorage.setItem("web2b_actualPage",JSON.stringify(e))})})},fillModal:function(t,a){for(var n,r="",i=o.getObjFromLocalStorage("web2b_actualPage"),l=0;l<e.length;l++){var s=(n=JSON.parse(decodeURIComponent(e[l].info))).nombre||n.selections.siteName.text||"no name";e[l].idSitio===i.idSitio&&(s+="(Proyecto actual)"),r+='<option class="inserted" value="'+l+'">\n                '+s+"\n            </option>"}$(".proyectos-disponibles .inserted").remove(),$(".proyectos-disponibles").append(r),$(".ventana-login > form").hide(),$(".login-paginas").show(),$(".llevame").click({pags:e,userId:t},function(e){var o=$(".proyectos-disponibles option:selected").val(),t=e.data;""!=o?(localStorage.setItem("web2b_template",decodeURIComponent(t.pags[o].info)),localStorage.setItem("web2b_templateId",t.pags[o].idSitio),localStorage.setItem("web2b_userId",t.userId),localStorage.setItem("web2b_pages",JSON.stringify(t.pags)),localStorage.setItem("web2b_actualPage",JSON.stringify(t.pags[o])),a()):$(".login-paginas .form-error").css("display","block")})},hasPages:function(){return e.length>1}}};var a=function(e){return e&&e.__esModule?e:{default:e}}(t(0))},19:function(e,o,t){"use strict";var a=r(t(1)),n=r(t(2));function r(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){var e=new n.default;function o(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}e.init("#modal"),e.hide(),$("a[href^='#']").on("click",function(){var e=$($(this).attr("href")).offset().top;return console.log(e),$("html, body").stop().animate({scrollTop:e-55},500,"swing"),!1}),void 0!==localStorage.web2b_template&&void 0!==localStorage.web2b_pages&&($(".panel").show(),$(".login-btn").hide()),$(".login-btn").click(function(o){o.preventDefault(),$("#email").val(""),$("#password").val(""),e.show("#dialog-login")}),$("#form-login").submit(function(t){t.preventDefault(),e.hideErrorMessage(),""!=$("#email").val().trim()&&o($("#email").val())||e.showErrorMessage($("#dialog-login"),"#inp-email","#error-malformed-email"),$("#password").val().trim()?$.post("/landing/scripts/login.php",{correo:$("#email").val().trim(),password:$("#password").val()}).done(function(o){if(o.ok&&o.paginas.length>0)if(1==o.paginas.length)localStorage.setItem("web2b_template",decodeURIComponent(o.paginas[0].info)),localStorage.setItem("web2b_templateId",o.paginas[0].idSitio),localStorage.setItem("web2b_userId",o.userId),localStorage.setItem("web2b_actualPage",o.paginas[0]),window.location.href="/crea";else{console.log("Page Manager"),e.show("#dialog-project-switcher");var t=new a.default;t.setPaginasInfoFromExternal(o.paginas),t.fillModal(o.userId,function(){window.location.href="/crea"})}else e.showErrorMessage($("#dialog-login"),"#inp-password","#error-login",o.error)}).fail(function(e){console.log(e)}).always(function(){$(".login-content .form-error").hide()}):e.showErrorMessage($("#dialog-login"),"#inp-password","#error-malformed-password")}),$(".comingsoon").click(function(){var e=$("#input-email-subscribe").val();return o(e)?$.post("/landing/scripts/emailSubscriptions.php",{correo:e.trim()}).done(function(e){console.log(e)}).fail(function(e){console.log(e)}).always(function(){}):console.log("error"),!1})})},2:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){var e=null,o=null,t=function(){$("#modal-close"),$("body").on("click","#modal-close",function(){n()})},a=function(){o=$("#modal-overlay"),e.before(o)},n=function(){e.fadeOut(500).find(".dialog").hide(),o&&o.hide()};return{init:function(o){(e=$(o)).find("#modal-close").length>0&&t();e.find("#modal-overlay").length>0&&a()},hide:n,hideErrorMessage:function(){$(".dialog-error:visible").remove().detach()},showErrorMessage:function(e,o,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;0==e.find(t).length&&e.find(o).after($(t).clone()),void 0!=a&&e.find(t).html(a),e.find(t).hide().fadeIn("fast")},show:function(t){e.hide().fadeIn(500).find(".dialog").hide().filter(t).show(),o&&o.fadeIn(500)}}}}});
//# sourceMappingURL=landing.bundle.js.map