!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=function(e){var t=localStorage.getItem(e);if(null==t)t={},"web2b"==e&&(t.respuestas={});else try{t=JSON.parse(t)}catch(e){return t}return t};return{getObjFromLocalStorage:e,saveWeb2bJson:function(t){var n=JSON.stringify(t),o=e("web2b_userId"),a=e("web2b_templateId"),i=localStorage.getItem("web2b_template");!n||i==n||o instanceof Object||a instanceof Object||(localStorage.setItem("web2b_template",n),$.post("scripts/salvar_datos.php",{userId:o,idSitio:a,info:encodeURIComponent(n)}).done(function(e){e.ok||console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e.mensaje)}).fail(function(e){console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e)}))},saveSelected:function(e,t,n,o){var a=e.selections||{},i=!1;if(t.includes("@switch")){var r=t.split("@");t=r[0],i=!0}switch(a[t]=a[t]||{},o){case"image":i?a[t].active=n:a[t].img=n,a[t].type=o;break;case"text":i?a[t].active=n:a[t].text=n,a[t].type=o;break;case"config":a[t].value=n,a[t].type=o}e.selections=a},getPagesFromDB:function(){var t=e("web2b_userId");return $.get("scripts/getActualPages.php",{userId:t}).done(function(e){return e.ok||console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e.mensaje),e.paginas}).fail(function(e){return console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. "+e),{}})},setDataObjects:function(e,t){localStorage.removeItem("web2b"),localStorage.setItem("web2b_templateId",e.idSitio),localStorage.setItem("web2b_userId",e.userId),localStorage.setItem("web2b_template",JSON.stringify(t)),localStorage.setItem("web2b_pages",JSON.stringify(e.paginas))},purgeTemplateData:function(){localStorage.removeItem("web2b_actualPage"),localStorage.removeItem("web2b_template"),localStorage.removeItem("web2b_templateId"),localStorage.removeItem("web2b_template"),localStorage.removeItem("web2b")}}}},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=i(n(0)),a=i(n(18));function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=new o.default,t=new a.default,n=e.getObjFromLocalStorage("web2b"),i=0,r=($(".stage").length,function(){c("existing-session"),$(".iniciar").on("click",function(){e.purgeTemplateData(),n=e.getObjFromLocalStorage("web2b"),f()}),$(".continuar").on("click",function(){$("#dialog-existing-session").hide(),(i=Object.keys(n.respuestas).length+1)<4?(f(),u(i)):c("end")})}),l=function(){c("existing-project"),$(".continuar-proyecto").click(function(){location.href="/crea"}),$(".iniciar-proyecto").click(function(){e.purgeTemplateData(),f()})},s=function(){$("a[href*='#stage-']").on("click",function(){var e=$(this);return g(e.closest(".question").attr("id"))&&((i=1*e.attr("href").replace("#stage-",""))<4?u(i):c("end")),!1})},c=function(e){$("#modal").hide().fadeIn(500).find(".dialog").hide().filter("#dialog-"+e).show()},f=function(){$("#modal").fadeOut(500).find(".dialog").hide()},u=function(e){f();var t=0;1==e&&(t=500,$("#item-spaceman").animate({left:"50%",opacity:"0",width:"1rem"},300),$("#item-rocket").animate({bottom:"1rem"},300)),$("#item-rocket>img:last").animate({opacity:1},300),setTimeout(function(){$(".stage:visible").animate({top:"100%",bottom:"-100%"},1e3),d(),setTimeout(function(){$(".stage").hide().filter(":eq("+e+")").show().css({top:"-100%",bottom:"100%"}).animate({top:"0",bottom:0},1e3)},2e3),setTimeout(function(){c("question-"+i),$("#item-rocket>img:last").animate({opacity:0},300)},3e3)},t)},d=function(){for(var e=function(e){$(".stars"+e).animate({height:15*e+"px",opacity:.8-.2*e},1e3,function(){setTimeout(function(){$(".stars"+e).animate({height:e+"px",opacity:"1"},1e3)},1e3)})},t=1;t<4;t++)e(t)},g=function(e){if("undefined"==e)return!0;var t=$("#"+e);if(t.find("input:checked").length>0||""!=t.find("input.otra").val()){$(".dialog-error:visible").remove().detach();var n=t.find("h3").data("id"),o=t.find("h3").data("type"),a="",i="",r="";return t.find("input:checked").length>0&&(a=t.find("input:checked").val(),i=t.find("input:checked").attr("data-id"),r=t.find("input:checked").attr("data-loc-en")),""!=t.find("input.otra").val()&&(a=t.find("input.otra").val()),""==r&&6==o?m(n,o,a,r,i):p(n,o,a,r,i),!0}return 0==t.find(".dialog-error").length&&t.find("h3").after($(".dialog-error:last").clone()),t.find(".dialog-error").hide().fadeIn("fast"),!1},m=function(e,t,n,o,a){$.get("https://translate.yandex.net/api/v1.5/tr.json/translate",{key:"trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2",lang:"es-en",text:n,format:"plain"}).done(function(o){o&&p(e,t,n,decodeURIComponent(o.text[0]),a)})},p=function(e,t,o,a,i){n.respuestas[e]={tipo:t,respuesta:o,localizacion_en:a,resp_id:i},localStorage.setItem("web2b",JSON.stringify(n))};return{init:function(){t.init(".options-container",".options-group"),s(),f();var o=0==Object.keys(n.respuestas).length?"NEW":"IN PROCESS";"IN PROCESS"==(o=Object.keys(e.getObjFromLocalStorage("web2b_template")).length>0?"WITH PROJECT":o)&&r(),"WITH PROJECT"==o&&l()}}}$(document).ready(function(){(new r).init()})},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{init:function(e,t){$(t).hide(),$(e).find(".toggle").addClass("clickable").attr("data-state","off"),$(e).find(".show-less").hide(),$(e).find(".toggle").on("click",function(){var n=$(this),o=n.closest(e).find(".toggle").index(n);"off"==n.attr("data-state")?($(e).find(".toggle").attr("data-state","off").filter(":eq("+o+")").attr("data-state","on"),$(e).find(".toggle .show-less").hide(),$(e).find(".toggle .show-more").show(),n.find(".show-more").hide(),n.find(".show-less").show(),n.closest(e).find(t).hide().filter(t+":eq("+o+")").slideDown("fast"),n.closest(e).find(t+":eq("+o+") input:first").trigger("click")):(n.attr("data-state","off"),n.find(".show-less").hide(),n.find(".show-more").show(),n.closest(e).find(t+":eq("+o+")").slideUp("fast"))})}}}}});