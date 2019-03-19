export default function userValidator () {
	var _ctrl = null;
	var init = function(_that) {
        _ctrl = _that;
    }
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
            $(".app-new-start.dialog").dialog("option", "width", 400);
            $(".app-new-start.dialog").dialog("open");
        } else {
            _ctrl.new_PageManager.getPaginas().then(() => {
                if (_ctrl.new_PageManager.hasPages()) $(".change-page").show();
            });			
        }
        $("#single-modal i").on("click", function() {
            $("#single-modal").fadeOut();
        });
        /* ON NEW PAGE */
        $("[name='start']").on("click", function () {
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
                _ctrl.new_dataManager.saveSelected(_ctrl.jd, 'inp-content-name', $("#nombrePagina").val().trim(), 'text');
                $.post("scripts/crear_usuario.php", {
                    correo: $("#correo").val().trim(),
                    password: $("#password").val(),
                    info: JSON.stringify(_ctrl.jd)
                }).done(function (result) {
                    if (!result.ok) {
                        $(".otherMsgs").html(result.error);
                        $(".otherMsgs").css("display", "block");
                    } else {
                        $(".app-new-start.dialog").dialog('close');
                        _ctrl.new_templateManager.startTemplateProcess(result);
                    }
                }).fail(function (result) {
                    response = JSON.parse(result.responseText);
                    $(".invalid-response").text("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + response.mensaje);
                    $(".invalid-response").css("display", "block");
                });

            }
        });
    }    
    return {
        init : init,
        setUserValidation: setUserValidation
    };
}