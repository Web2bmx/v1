!function(e){var o={};function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(r,t,function(o){return e[o]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=16)}({1:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){var e=null,o=null,n=function(){$("#modal-close"),$("body").on("click","#modal-close",function(){t()})},r=function(){o=$("#modal-overlay"),e.before(o)},t=function(){e.fadeOut(500).find(".dialog").hide(),o&&o.hide()};return{init:function(o){(e=$(o)).find("#modal-close").length>0&&n();e.find("#modal-overlay").length>0&&r()},hide:t,hideErrorMessage:function(){$(".dialog-error:visible").remove().detach()},showErrorMessage:function(e,o,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;0==e.find(n).length&&e.find(o).after($(n).clone()),void 0!=r&&e.find(n).html(r),e.find(n).hide().fadeIn("fast")},show:function(n){e.hide().fadeIn(500).find(".dialog").hide().filter(n).show(),o&&o.fadeIn(500)}}}},16:function(e,o,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));$(document).ready(function(){var e=new r.default;e.init("#modal"),e.hide(),$("a[href^='#']").on("click",function(){var e=$($(this).attr("href")).offset().top;return console.log(e),$("html, body").stop().animate({scrollTop:e-55},500,"swing"),!1}),$(".login-btn").click(function(o){o.preventDefault(),$("#email").val("contacto@web2b.mx"),$("#password").val(""),e.show("#dialog-login")}),$("#form-login").submit(function(o){o.preventDefault(),e.hideErrorMessage(),""!=$("#email").val().trim()&&function(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}($("#email").val())||e.showErrorMessage($("#dialog-login"),"#inp-email","#error-malformed-email"),$("#password").val().trim()?$.post("/landing/scripts/login.php",{correo:$("#email").val().trim(),password:$("#password").val()}).done(function(o){o.ok&&o.paginas.length>0?1==o.paginas.length?(console.log("1"),console.log(o)):console.log("Page Manager"):o.ok?(console.log("0"),console.log(o)):e.showErrorMessage($("#dialog-login"),"#inp-password","#error-login",o.error)}).fail(function(e){console.log(e)}).always(function(){$(".login-content .form-error").hide()}):e.showErrorMessage($("#dialog-login"),"#inp-password","#error-malformed-password")})})}});