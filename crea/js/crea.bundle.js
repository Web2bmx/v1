/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./crea/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./crea/js/creator.js":
/*!****************************!*\
  !*** ./crea/js/creator.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = creator;\n\nfunction creator() {\n  /*GLOBAL VARIABLES*/\n  var windowObjectReference = null,\n      image_types = [\"hero\", \"item-1\"],\n      template_id = \"\",\n      sample_images_ready = false,\n      current_step = 0,\n      number_of_items = 1,\n      sample_colors_ready = false,\n      $images = null,\n      $palettes = null,\n      lastKeyPressed = 0,\n      jd = null,\n      winWidth = $(window).width(),\n      winHeigth = $(window).height(),\n      isNew = false;\n\n  var validation = function validation() {\n    jd = getObjFromLocalStorage(\"web2b\");\n    /* check data validation */\n\n    checkDataValidation();\n  };\n\n  var init = function init() {\n    /*SET UP TEMPLATE*/\n    updateTemplate();\n    /*EO SET UP TEMPLATE*/\n\n    /*SET UP APP*/\n\n    setAppNavigation();\n    setAppSteps();\n    /*EO SET UP APP*/\n  };\n  /*APPLICATION FUNCTIONS*/\n\n\n  var checkDataValidation = function checkDataValidation() {\n    if (jd.respuestas && jd.respuestas.length < 7) {//location.href = \"/tour\";\n    } else {\n      isNew = true;\n    }\n  };\n\n  var setAppSteps = function setAppSteps() {\n    $(\".dialog\").dialog({\n      autoOpen: false,\n      modal: true,\n      show: {\n        effect: \"fade\",\n        duration: 1000\n      },\n      hide: {\n        effect: \"fade\",\n        duration: 1000\n      },\n      closeOnEscape: false\n    });\n\n    if (isNew) {\n      $(document).ready(function () {\n        $(\".app-new-start.dialog\").dialog(\"option\", \"width\", 400);\n        $(\".app-new-start.dialog\").dialog(\"open\");\n      });\n    }\n\n    $(document.body).on(\"change\", \"[name^='inp-'][type!='text']\", function () {\n      updateTemplate();\n    });\n    $(document.body).on(\"keyup\", \"[name^='inp-'][type='text'],textarea[name^='inp-']\", function (e) {\n      lastKeyPressed = e.keyCode || e.which;\n\n      if ($(this).attr(\"name\").indexOf(\"-contact-\") > -1 || $(this).attr(\"name\").indexOf(\"-item-\") > -1) {\n        goToByScroll($(document), 800);\n      } else {\n        goToByScroll($(document), 0);\n      }\n\n      if ($(this).attr(\"name\").indexOf(\"-contact-\") > -1) {\n        $(\"#app-control\").addClass(\"top\");\n      } else {\n        $(\"#app-control\").removeClass(\"top\");\n      }\n\n      updateTemplate();\n    });\n    /*ADD ITEMS*/\n\n    $(\"#inp-content-item-add-y\").on(\"click\", function () {\n      var $this = $(this);\n      var index = $(\".app-control-step\").index($this.closest(\".app-control-step\"));\n      $(\"#control-view-index\").prepend($(\".control-view-index-item.current\").clone().removeClass(\"current\")).append($(\".control-view-index-item.current\").clone().removeClass(\"current\"));\n      addItems(number_of_items);\n      number_of_items++;\n      var $i_t = $(\".app-control-step:eq(\" + (current_step - 2) + \")\").clone();\n      $i_t.find(\"p\").html(\"Tu producto o servicio\");\n      $i_t.find(\"input\").attr(\"id\", \"inp-content-title-item-\" + number_of_items);\n      $i_t.find(\"input\").attr(\"name\", \"inp-content-title-item-\" + number_of_items);\n      $i_t.find(\"input\").attr(\"placeholder\", \"Tu producto o servicio\");\n      $i_t.find(\"input\").val(\"\");\n      $i_t.find(\"textarea\").attr(\"id\", \"inp-content-item-\" + number_of_items);\n      $i_t.find(\"textarea\").attr(\"name\", \"inp-content-item-\" + number_of_items);\n      $i_t.find(\"textarea\").attr(\"placeholder\", \"Tu producto o servicio\");\n      $i_t.find(\"textarea\").val(\"\");\n      var $i_i = $(\".app-control-step:eq(\" + (current_step - 1) + \")\").clone();\n      $i_i.find(\"p\").html(\"Elige una imagen para tu producto o servicio\");\n      $i_i.find(\"#app-control-images-item-\" + (number_of_items - 1)).attr(\"id\", \"app-control-images-item-\" + number_of_items);\n      $i_i.find(\"input\").each(function () {\n        if ($(this).attr(\"type\") != \"file\" && $(this).attr(\"type\") != \"submit\") {\n          $(this).attr(\"name\", \"inp-img-item-\" + number_of_items);\n        }\n\n        if ($(this).attr(\"type\") == \"file\") {\n          $(this).attr(\"name\", \"item-\" + number_of_items);\n        }\n      });\n      $this.closest(\".app-control-step\").before($i_t).before($i_i);\n      current_step = index;\n      goToStep(current_step);\n      $this.prop('checked', false);\n      $(\"#inp-content-item-add-n\").trigger(\"click\");\n    });\n    /*TOOLTIPS*/\n\n    $(\".app-control-step-tooltip-info\").prev(\"*\").append($(\".app-control-step-tooltip.template\").clone().removeClass(\"template\"));\n    $(\".app-control-step-tooltip\").click(function () {\n      var $target = $(this).parent().next(\".app-control-step-tooltip-info\");\n\n      if ($target.is(\":visible\")) {\n        $target.removeClass(\"active\");\n      } else {\n        $target.addClass(\"active\");\n      }\n    });\n    /*EO TOOLTIPS*/\n\n    $.ajax({\n      url: \"xml/sample_colors.xml\",\n      dataType: \"xml\",\n      success: function success(data) {\n        var $xml = $(data),\n            $palettes = $xml.find(\"palette\"),\n            t = $palettes.length;\n\n        for (var i = 0; i < $palettes.length; i++) {\n          var $control_color = $(\".template.control-color\").clone();\n\n          if (i == 0) {\n            $control_color.find(\"input\").attr(\"checked\", \"checked\");\n            $control_color.find(\".control-color-thumb\").addClass(\"thumb-selected\");\n          }\n\n          var $palette = $palettes.filter(\":eq(\" + i + \")\");\n          $control_color.removeClass(\"template\");\n          $control_color.find(\"h4\").html($palette.find(\"name\").html()).remove();\n          $control_color.find(\"input\").attr(\"id\", \"inp-palette-\" + i);\n          $control_color.find(\"input\").attr(\"value\", i);\n          $control_color.find(\".control-color-thumb\").css({\n            \"background-color\": $palette.find(\"bg>back\").html()\n          });\n          var blocks = [\"top\", \"middle\", \"bottom\"];\n\n          for (var k = 0; k < 3; k++) {\n            $control_color.find(\".control-color-thumb-bg:eq(\" + k + \")\").css({\n              \"background-color\": $palette.find(blocks[k] + \">back\").html()\n            });\n            $control_color.find(\".control-color-thumb-content:eq(\" + k + \")\").css({\n              \"background-color\": $palette.find(blocks[k] + \">fore\").html()\n            });\n          }\n\n          $(\"#app-control-palettes\").append($control_color);\n        }\n\n        $(\".control-color-thumb\").on('click', function () {\n          var $this = $(this);\n          $this.closest(\"#app-control-palettes\").find(\".control-color-thumb\").removeClass(\"thumb-selected\");\n          $this.next(\"input\").trigger(\"click\");\n          $this.addClass(\"thumb-selected\");\n        });\n        sample_colors_ready = true;\n      }\n    });\n    /*IMAGENES*/\n\n    $(\"#inp-business-type\").on(\"change\", function () {\n      setImageSelection($(this).val());\n    });\n    /*DESIGN*/\n\n    $(\".control-design-thumb img\").on('click', function () {\n      var $this = $(this);\n      $this.closest(\".control-desing-cont\").find(\".control-design-thumb img\").removeClass(\"thumb-selected\");\n      $this.next(\"input\").trigger(\"click\");\n      $this.addClass(\"thumb-selected\");\n    }).filter(\":first\").addClass(\"thumb-selected\");\n    /* Upload image*/\n\n    var that = this;\n    $('.file-upload').on('submit', uploadImage);\n    /* manage dialog */\n\n    $(\"#ok_btn\").click(function () {\n      $(\".alert.dialog\").dialog(\"close\");\n    });\n  };\n\n  var setImageSelection = function setImageSelection(ide) {\n    $(\".photo-container\").html(\"\"); //Check if there are already images upload from user\n\n    var imagenes = jd.imagenes;\n\n    if (imagenes) {\n      for (var k in imagenes) {\n        var arr = imagenes[k].split(\"#\");\n\n        for (var i = 0; i < arr.length; i++) {\n          var $img_thumb = $(\".img-thumb.template\").clone();\n          $img_thumb.removeClass(\"template\").find(\".img-thumb-cont\").css({\n            \"background-image\": \"url(/crea/client_images/\" + arr[i] + \")\"\n          });\n          $img_thumb.find(\"input\").attr(\"value\", \"/crea/client_images/\" + arr[i]);\n          var $this_img_thumb = $img_thumb.clone();\n          $this_img_thumb.find(\"input\").attr(\"name\", \"inp-img-\" + k);\n          $(\"#app-control-images-\" + k + \" .photo-container\").append($this_img_thumb);\n        }\n      }\n    }\n\n    $.getJSON(\"https://api.unsplash.com/photos/search\", {\n      client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',\n      query: ide,\n      page: 1,\n      per_page: 20,\n      orientation: 'landscape'\n    }).done(function (data) {\n      for (var x = 0; x < data.length; x++) {\n        var $img_thumb = $(\".img-thumb.template\").clone();\n        $img_thumb.removeClass(\"template\").find(\".img-thumb-cont\").css({\n          \"background-image\": \"url(\" + data[x][\"urls\"][\"regular\"] + \")\"\n        });\n        $img_thumb.find(\"input\").attr(\"value\", data[x][\"urls\"][\"regular\"]);\n\n        for (var _i = 0; _i < image_types.length; _i++) {\n          var $this_img_thumb = $img_thumb.clone();\n          $this_img_thumb.find(\"input\").attr(\"name\", \"inp-img-\" + image_types[_i]);\n          $(\"#app-control-images-\" + image_types[_i] + \" .photo-container\").append($this_img_thumb);\n        }\n      }\n\n      $(document.body).on('click', '.img-thumb-cont', function () {\n        var $this = $(this);\n        $this.closest(\"[id^='app-control-images']\").find(\".img-thumb\").removeClass(\"thumb-selected\");\n        $this.next(\"input\").trigger(\"click\");\n        $this.parent().addClass(\"thumb-selected\");\n      });\n      randomizeTemplate();\n    }).fail(function () {});\n  };\n\n  var randomizeTemplate = function randomizeTemplate() {\n    var $color = $(\"[name^='inp-palette']\");\n    $color.removeAttr(\"checked\").filter(\":eq(\" + Math.floor(Math.random() * $color.length) + \")\").attr(\"checked\", \"checked\");\n    updateContent();\n  };\n\n  var setAppNavigation = function setAppNavigation() {\n    $(\".app-control-step:gt(0)\").hide();\n    $(\"#control-view-nav>a\").on(\"click\", function () {\n      if (!$(this).hasClass(\"disabled\")) {\n        var inc = $(this).attr(\"href\") == \"#next\" ? 1 : -1;\n        current_step += inc;\n\n        switch (current_step) {\n          case 0:\n            $(\"#control-view-nav>a:eq(0)\").addClass(\"disabled\");\n            break;\n\n          case 1:\n            $(\"#control-view-nav>a:eq(0)\").removeClass(\"disabled\");\n            break;\n\n          case $(\"#app-control>.app-control-step\").length:\n            //showAppCover();\n            break;\n        }\n\n        goToStep(current_step);\n        updateContent();\n      }\n    });\n\n    for (var i = 0; i < $(\"#app-control>.app-control-step\").length - 1; i++) {\n      $(\"#control-view-index\").append($(\".control-view-index-item.current\").clone().removeClass(\"current\"));\n    }\n\n    $(\".control-view-nav-display-mark:eq(\" + current_step + \")\").addClass(\"control-view-nav-display-mark-active\");\n    $(\"[name='start']\").on(\"click\", function () {\n      // $(\"#app-cover\").hide();\n      // $(\"#app-cover-start\").hide();\n      // $(\"#app-cover-finish\").show();\n      if ($(\"#nombre\").val().trim() == \"\" || $(\"#correo\").val().trim() == \"\" || $(\"#password\").val().trim() == \"\") {\n        $(\".empty-fields\").css(\"display\", \"block\");\n      } else if (!isValidDomain($(\"#nombre\").val().trim().toLowerCase())) {\n        $(\".name-invalid\").show();\n      } else if (!isEmail($(\"#correo\").val())) {\n        $(\".not-email\").css(\"display\", \"block\");\n      }\n      /*else if(!validPassword($(\"#password\").val())){\r\n      \t$(\".password-invalid\").css(\"display\",\"block\");\r\n      }*/\n      else {\n          $.post(\"scripts/crear_usuario.php\", {\n            nombre: $(\"#nombre\").val().trim(),\n            correo: $(\"#correo\").val().trim(),\n            password: $(\"#password\").val(),\n            info: JSON.stringify(jd)\n          }).done(function (result) {\n            if (!result.ok) {\n              $(\".alert.dialog p\").html(result.error);\n              $(\".alert.dialog\").dialog(\"open\");\n              $(\"#ok_btn\").on(\"click.exists\", function () {\n                $(\"#ok_btn\").off(\"click.exists\");\n              });\n            } else {\n              startTemplateProcess(result);\n            } //translate data\n\n\n            translateData(jd);\n          }).fail(function (result) {\n            response = JSON.parse(result.responseText);\n            $(\".invalid-response\").text(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + response.mensaje);\n            $(\".invalid-response\").css(\"display\", \"block\");\n          });\n        }\n    });\n    $(\"[name='finish']\").on(\"click\", function () {\n      current_step--;\n      $(\"#app-cover\").hide();\n    });\n    /*NAV BUTTONS*/\n\n    /*APP SWITCH*/\n\n    var $appControl_h = $(\"#app-control\").css(\"height\");\n    $(\"[id^='switch-']\").on('click', function () {\n      if ($(this).attr(\"id\").indexOf(\"view\") > -1) {\n        $(\"#switch-view\").hide();\n        $(\"#switch-edit\").show();\n        $(\"#control-view-nav\").hide();\n        $(\"#app-control>.app-control-step\").hide();\n        $(\"#app-control\").addClass(\"view\");\n      } else {\n        $(\"#switch-view\").show();\n        $(\"#switch-edit\").hide();\n        $(\"#control-view-nav\").show();\n        $(\"#app-control>.app-control-step:eq(\" + current_step + \")\").show();\n        $(\"#app-control\").removeClass(\"view\");\n      }\n    });\n    /*EO APP SWITCH*/\n  };\n\n  var startTemplateProcess = function startTemplateProcess(data) {\n    $(\"#app-cover\").hide();\n    $(\"#app-cover-start\").hide();\n    $(\"#app-cover-finish\").show(); //localStorage.removeItem(\"web2b\");\n\n    localStorage.setItem(\"web2b_templateId\", data.idSitio);\n    localStorage.setItem(\"web2b_userId\", data.userId);\n    localStorage.setItem(\"web2b_template\", JSON.stringify(jd)); //load previous content\n\n    var selections = jd.selections;\n\n    if (selections) {\n      for (var key in selections) {\n        if (selections[key].type == \"image\") {\n          $(key).attr(\"class\", \"img-cont img-MC img-L\").css({\n            \"background-image\": \"url(\" + selections[key].img + \")\"\n          });\n        }\n      }\n    }\n  };\n\n  var goToStep = function goToStep(step) {\n    if (step < $(\".app-control-step\").length) {\n      $(\".app-control-step\").hide().filter(\":eq(\" + step + \")\").show();\n      $(\".control-view-index-item\").removeClass(\"current\").filter(\":eq(\" + step + \")\").addClass(\"current\");\n    }\n\n    goToByScroll($(\"#app-control\"), 0);\n  };\n\n  var showAppCover = function showAppCover() {\n    $(\"#app-cover\").show();\n  };\n\n  var updateContent = function updateContent() {\n    var $this = $(this);\n    var $template = $(\"#template\");\n    /*Colores*/\n\n    if (sample_colors_ready) {\n      var $palette = $palettes.filter(\":eq(\" + $(\"[name='inp-palette']:checked\").val() + \")\");\n      var c1 = $palette.find(\"top>back\").html();\n      var col_hero_content = HexColorToRGBA(c1, .6);\n      var c2 = $palette.find(\"middle>back\").html();\n      var col_items = HexColorToRGBA(c2, .6);\n      $template.css({\n        \"background-color\": $palette.find(\"bg>back\").html()\n      });\n      $template.find(\"#hero\").css({\n        \"background-color\": $palette.find(\"top>back\").html(),\n        \"color\": $palette.find(\"top>fore\").html()\n      });\n      $template.find(\"#hero-content\").css({\n        \"background-color\": $palette.find(\"top>back\").html(),\n        \"color\": $palette.find(\"top>fore\").html()\n      });\n      $template.find(\"#hero-content h1, #hero-content h2\").css({\n        \"color\": $palette.find(\"top>fore\").html()\n      });\n      $template.find(\".items\").css({\n        \"background-color\": \"transparent\",\n        \"color\": $palette.find(\"middle>fore\").html()\n      });\n      $template.find(\".items .item-content\").css({\n        \"background-color\": $palette.find(\"middle>back\").html(),\n        \"color\": $palette.find(\"middle>fore\").html()\n      });\n      $template.find(\"footer\").css({\n        \"background-color\": $palette.find(\"bottom>back\").html(),\n        \"color\": $palette.find(\"bottom>fore\").html()\n      });\n    }\n    /*Content & Contacto*/\n\n\n    $(\"[id^='inp-contact-'], [id^='inp-content-']\").each(function () {\n      var $this = $(this);\n      var i_id = $this.attr(\"id\");\n      var v_id = i_id.replace(\"inp\", \"val\");\n\n      if ($this.val() != \"\") {\n        $template.find(\"#\" + v_id).show().closest(\".footer-column\").show();\n\n        switch (i_id) {\n          case \"inp-contact-email\":\n            $template.find(\"#val-contact-email\").html(\"<a href='mailto:\" + $this.val() + \"'>\" + $this.val() + \"</a>\");\n            break;\n\n          case \"inp-contact-map\":\n            $template.find(\"#val-contact-map\").html($this.val());\n            break;\n\n          case \"inp-contact-facebook\":\n            $template.find(\"#val-contact-facebook\").html('<span class=\"font-icon\">g</span> <a href=\"' + $this.val() + '\">' + $this.val() + '</a>');\n            break;\n\n          case \"inp-contact-twitter\":\n            $template.find(\"#val-contact-twitter\").html('<span class=\"font-icon\">t</span> <a href=\"' + $this.val() + '\">' + $this.val() + '</a>');\n            break;\n\n          default:\n            $template.find(\"#\" + v_id).html($this.val());\n            break;\n        }\n      } else {\n        if ($this.hasClass(\"optional\")) {\n          if ($(\".app-control-step:eq(\" + current_step + \")\").has($this).length > 0) {\n            if (lastKeyPressed == 8) {\n              $template.find(\"#\" + v_id).html($this.val());\n            }\n          }\n\n          if ($(\".app-control-step:eq(\" + (current_step - 1) + \")\").has($this).length > 0) {\n            $template.find(\"#\" + v_id).hide();\n          }\n        } else {\n          $template.find(\"#\" + v_id).html($this.attr(\"placeholder\"));\n        }\n      }\n    });\n    $template.find(\".footer-column:not(:has(li:visible))\").hide();\n    /*Images*/\n\n    $(\"[name^='inp-img-']:checked\").each(function () {\n      var $this = $(this);\n      var img_src = $this.val();\n      var n_name = $this.attr(\"name\").replace(\"inp-\", \"#\");\n      $template.find(n_name).attr(\"class\", \"img-cont img-MC img-L\").css({\n        \"background-image\": \"url(\" + img_src + \")\"\n      }); //Save selection to object\n\n      var selections = jd.selections || {};\n      selections[n_name] = selections[n_name] || {};\n      selections[n_name].type = \"image\";\n      selections[n_name].img = img_src;\n      jd.selections = selections;\n      saveWeb2bJson();\n    });\n  };\n\n  var updateTemplate = function updateTemplate() {\n    var id = $(\"[name^='inp-design']:checked\").val().replace(\"inp-design-\", \"\");\n\n    if (template_id != id) {\n      template_id = id;\n      $(\"#template\").html(\"\");\n      var src = \"Templates/Template-\" + template_id + \"/index.php?t=\" + Math.floor(Math.random() * 4);\n      $(\"#template-cont\").load(src + \" #template\", function () {\n        var $template = $(\"#template\");\n        $template.find(\"link[href^='css/styles.css']\").attr(\"href\", \"Templates/Template-\" + id + \"/css/styles.css\");\n        $template.find(\".img-cont\").removeAttr(\"style\").attr(\"style\", \"background-image: url('Templates/Images/placeholder.png')\");\n\n        for (var i = 1; i < number_of_items; i++) {\n          addItems(i);\n        }\n\n        updateContent();\n        $.ajax({\n          url: \"Templates/Template-\" + id + \"/js/scripts.js\",\n          dataType: \"script\",\n          success: function success() {}\n        });\n      });\n    } else {\n      updateContent();\n    }\n  };\n\n  var addItems = function addItems(i) {\n    if ($(\"#template .items:last .item\").length == 3) {\n      $(\"#template .items:last\").after(\"<div class='items'></div>\");\n    }\n\n    var $item_copy = $(\".item:last\").clone();\n    $item_copy.find(\"#img-item-\" + i).attr(\"id\", \"img-item-\" + (i + 1));\n    $item_copy.find(\"#val-content-title-item-\" + i).attr(\"id\", \"val-content-title-item-\" + (i + 1));\n    $item_copy.find(\"#val-content-item-\" + i).attr(\"id\", \"val-content-item-\" + (i + 1));\n    $(\"#template .items:last\").append($item_copy);\n    var c = \"\";\n\n    switch ($(\"#template .items:last .item\").length % 3) {\n      case 0:\n        c = \"three\";\n        break;\n\n      case 1:\n        c = \"one\";\n        break;\n\n      case 2:\n        c = \"two\";\n        break;\n    }\n\n    $(\"#template .items:last\").attr(\"class\", \"items\").addClass(c);\n  };\n  /*EO APPLICATION FUNCTIONS*/\n\n  /*GENERAL FUNCTIONS*/\n\n\n  function isEmail(email) {\n    var regex = /^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$/;\n    return regex.test(email);\n  }\n\n  function isValidDomain(name) {\n    var regex = /([a-z0-9])/;\n    return regex.test(name);\n  }\n\n  function validPassword(password) {\n    var regex = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/;\n    return regex.test(password);\n  }\n\n  function openRequestedPopup(strUrl, strWindowName) {\n    if (windowObjectReference == null || windowObjectReference.closed) {\n      windowObjectReference = window.open(strUrl, strWindowName, \"resizable,scrollbars,status\");\n      windowObjectReference.focus();\n    } else {\n      windowObjectReference.focus();\n    }\n  }\n\n  function goToByScroll($element, target) {\n    $element.scrollTop(target);\n  }\n\n  var getObjFromLocalStorage = function getObjFromLocalStorage(key) {\n    var jsonData = localStorage.getItem(\"web2b\");\n\n    if (jsonData == null) {\n      jsonData = {};\n    } else {\n      jsonData = JSON.parse(jsonData);\n    }\n\n    return jsonData;\n  };\n\n  function HexColorToRGBA(c, a) {\n    var s = \"rgba(\" + parseInt(c.substr(1, 2), 16) + \",\" + parseInt(c.substr(3, 2), 16) + \",\" + parseInt(c.substr(5, 2), 16) + \", \" + a + \")\";\n    return s;\n  }\n\n  var translateData = function translateData(data) {\n    $.ajax({\n      url: \"https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en\",\n      headers: {\n        'Ocp-Apim-Subscription-Key': 'facf28fe7a39442883ab1970bc9348ac',\n        'Content-Type': 'application/json'\n      },\n      data: JSON.stringify([{\n        'Text':\n        /*data.respuestas[0].respuesta*/\n        \"Abarrotes\"\n      }]),\n      method: 'POST'\n    }).done(function (data) {\n      if (data) {\n        setImageSelection(data[0].translations[0].text);\n      }\n    });\n  };\n\n  var uploadImage = function uploadImage(e) {\n    e.preventDefault();\n    var f = $(\"input[type=file]\", e.currentTarget),\n        formData = new FormData(),\n        ide = f.data(\"ide\"),\n        name = f.attr(\"name\");\n    formData.append(f.attr(\"name\"), f[0].files[0]);\n    $.ajax({\n      url: \"scripts/uploadImage.php\",\n      type: \"post\",\n      data: formData,\n      cache: false,\n      contentType: false,\n      processData: false\n    }).done(function (res) {\n      if (res.upload == 1) {\n        var imagenes = jd.imagenes || {};\n        imagenes[name] = imagenes[name] ? imagenes[name] + \"#\" + res.texto : res.texto;\n        var $img_thumb = $(\".img-thumb.template\").clone();\n        $img_thumb.removeClass(\"template\").find(\".img-thumb-cont\").css({\n          \"background-image\": \"url(/crea/client_images/\" + res.texto + \")\"\n        });\n        $img_thumb.find(\"input\").attr(\"value\", \"/crea/client_images/\" + res.texto);\n        var $this_img_thumb = $img_thumb.clone();\n        $this_img_thumb.find(\"input\").attr(\"name\", \"inp-img-\" + name);\n        $(\"#app-control-images-\" + name + \" .photo-container\").prepend($this_img_thumb);\n        jd.imagenes = imagenes;\n        saveWeb2bJson();\n      }\n    });\n  };\n\n  var saveWeb2bJson = function saveWeb2bJson() {\n    var strJD = JSON.stringify(jd),\n        userId = getObjFromLocalStorage(\"web2b_userId\"),\n        idSitio = getObjFromLocalStorage(\"web2b_templateId\");\n    localStorage.setItem(\"web2b_template\", strJD); //ONLY FOR TESTING PURPOSES\n\n    localStorage.setItem(\"web2b\", strJD); // PENDIENTE ---> salvar en la BD\n\n    if (strJD && Object.keys(userId).length && Object.keys(idSitio).length) {\n      $.post(\"scripts/salvar_datos.php\", {\n        userId: $(\"#nombre\").val().trim(),\n        idSitio: $(\"#correo\").val().trim(),\n        info: JSON.stringify(jd)\n      }).done(function (result) {\n        if (!result.ok) {\n          console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + response.mensaje);\n        }\n      }).fail(function (result) {\n        console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + result);\n      });\n    }\n  };\n  /*EO GENERAL FUNCTIONS*/\n\n\n  return {\n    validation: validation,\n    init: init\n  };\n}\n\n//# sourceURL=webpack:///./crea/js/creator.js?");

/***/ }),

/***/ "./crea/js/scripts.js":
/*!****************************!*\
  !*** ./crea/js/scripts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _creator = __webpack_require__(/*! ./creator */ \"./crea/js/creator.js\");\n\nvar _creator2 = _interopRequireDefault(_creator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar new_template = new _creator2.default();\nnew_template.validation();\n$(document).ready(function () {\n  new_template.init();\n});\n\n//# sourceURL=webpack:///./crea/js/scripts.js?");

/***/ })

/******/ });