import dataManager from '../../js/dataManager';

export default function userValidator () {
    var _ctrl = null;
    var new_dataManager = new dataManager();

	var init = function(_that) {
        _ctrl = _that;
    };

    var openLoginDialog = () => {
        $(".app-new-start.dialog").dialog("option", "width", 300);
        $(".app-new-start.dialog").dialog("open");
    };

    var setUserValidation = function() {
        $(".dialog").dialog({
            autoOpen: false,
            modal: true,
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            closeOnEscape: false
        }); 
        if(_ctrl.sessionStatus == "START SESSION"){
            var userId = new_dataManager.getObjFromLocalStorage("web2b_userId");
            if(typeof(userId) === 'string' && userId != ''){
                // crear nueva página
                $.post("scripts/crear_pagina.php", {
                    userid: userId,
                    info: encodeURIComponent(JSON.stringify(_ctrl.jd))
                }).done(function (result) {
                    if (!result.ok) {
                        openLoginDialog();
                    } else {
                        _ctrl.new_dataManager.setDataObjects(result, _ctrl.jd);
                        if(result.paginas.length > 1) {
                            $(".change-page").show();
                        }
                    }
                }).fail(function (result) {
                    openLoginDialog();
                });                
            } else {
                openLoginDialog();
            }					
        } else {
            _ctrl.new_PageManager.getPaginas().then(() => {
                if (_ctrl.new_PageManager.hasPages()) $(".change-page").show();
            });			
        }
        /* ON NEW PAGE */
        $(".app-new-start form").on("submit", function (e) {
            e.preventDefault();
            $(".form-error").hide();
            if ($("#nombrePagina").val().trim() == "" ||
                $("#correo").val().trim() == "" ||
                $("#password").val().trim() == "") {
                $(".empty-fields").css("display", "block");
            } else if (!_ctrl.new_validator.isValidDomain($("#nombrePagina").val().trim().toLowerCase())) {
                $(".name-invalid").show();
            } else if (!_ctrl.new_validator.isEmail($("#correo").val())) {
                $(".not-email").css("display", "block");
            } else if (!_ctrl.new_validator.validPassword($("#password").val())) {
                $(".password-invalid").css("display", "block");
            } else {
                let np = $("#nombrePagina").val().trim();
                _ctrl.new_dataManager.saveSelected(_ctrl.jd, 'inp-content-name', np, 'text');
                $("#inp-content-name").val(np);
                let npfmt = formatValue(np);
                $("#siteName").val(npfmt);
                $.post("scripts/crear_usuario.php", {
                    correo: $("#correo").val().trim(),
                    password: $("#password").val(),
                    info: encodeURIComponent(JSON.stringify(_ctrl.jd))
                }).done(function (result) {
                    if (!result.ok) {
                        $(".otherMsgs").html(result.error);
                        $(".otherMsgs").css("display", "block");
                    } else {
                        $(".app-new-start.dialog").dialog('close');
                        _ctrl.new_dataManager.setDataObjects(result, _ctrl.jd);
                        if(result.paginas.length > 1) {
                            $(".change-page").show();
                        }
                    }
                }).fail(function (result) {
                    response = JSON.parse(result.responseText);
                    $(".invalid-response").text("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + response.mensaje);
                    $(".invalid-response").css("display", "block");
                });

            }
        });
    };
    var formatValue = function (s) {
        s = s.toLowerCase();
        s= s.replace(/ /g, '');
        s= s.replace(/á/g, 'a');
        s= s.replace(/é/g, 'e');
        s= s.replace(/í/g, 'i');
        s= s.replace(/ó/g, 'o');
        s= s.replace(/ú/g, 'u');
        s= s.replace(/ñ/g, 'n');
        return s;
    };
    return {
        init : init,
        setUserValidation: setUserValidation
    };
}