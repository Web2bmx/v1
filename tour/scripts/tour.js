import dataManager from '../../js/dataManager';
export default function Tour() {
    var new_dataManager = new dataManager(); 
    var _tplData = new_dataManager.getObjFromLocalStorage("web2b");
    var current_step = 0;
    var total_steps = $(".stage").length;
    var init = function (){
        setOptions();
        setTourNavigation();
        setTour();

        /*
        ESTATUS:
        Tour nuevo
        Tour en proceso
        Proyecto en proceso
        */
       var status = Object.keys(_tplData.respuestas).length == 0 ? "NEW" : "IN PROCESS";
       status = Object.keys(new_dataManager.getObjFromLocalStorage('web2b_template')).length > 0 ? "WITH PROJECT" : status;
       if (status == "IN PROCESS") { setDialogInProcess(); }   
       if(status == "WITH PROJECT") { setDialogWithProject(); }
    }
    var setTour = function() {
        $(".stage:not(#stage-" + current_step + ")").hide();
        $("#modal .dialog").hide();
        $("#modal").hide();
    }
    var setDialogInProcess = function() {
        $("#dialog-existing-session").show();
            $("#modal").fadeIn(500);
            $(".iniciar").on("click", function() {
                new_dataManager.purgeTemplateData();
                _tplData = new_dataManager.getObjFromLocalStorage("web2b")
                $("#modal").fadeOut(500);
                $("#dialog-existing-session").hide();
            });
            $(".continuar").on("click", function() {
                $("#dialog-existing-session").hide();
                current_step = Object.keys(_tplData.respuestas).length + 1;
                console.log(current_step);
                if (current_step < 4) {
                    $("#modal").fadeOut(500);
                    showStep(current_step);
                } else {
                    $("#modal").show();
                    $("#modal .dialog").hide();
                    $("#dialog-end").show();
                }
            });
    };
    var setDialogWithProject = function() {
        $("#dialog-existing-project").show();
        $("#modal").fadeIn(500);
        $(".continuar-proyecto").click(function(){
            location.href = "/crea";
        }); 
        $(".iniciar-proyecto").click(function(){
            new_dataManager.purgeTemplateData();
            $("#modal").fadeOut(500);
            $("#dialog-existing-project").hide();
        });  
    };
    var setTourNavigation = function() {
        $("a[href*='#stage-']").on("click", function() {
            var $this = $(this);
            if ($this.attr("href") == "#stage-1") {
                current_step = 1;
                showStep(current_step);
            }
            if ($this.attr("href") == "#stage-2") {
                if (checkAnswer($this.closest(".question").attr("id"))) {
                    current_step = 2;
                    showStep(current_step);
                }
                    
            }
            if ($this.attr("href") == "#stage-3") {
                if (checkAnswer($this.closest(".question").attr("id"))) {
                    current_step = 3;
                    showStep(current_step);
                }
            }
            if ($this.attr("href") == "#stage-end") {
                if (checkAnswer($this.closest(".question").attr("id"))) {
                    $("#modal").show();
                    $("#modal .dialog").hide();
                    $("#dialog-end").show();
                }
            }
            return false;
        });
    };
    var showStep = function(step) {
        var delay = 0;
        if(step == 1) {
            delay = 500;
            $("#item-spaceman").animate({"left" : "50%", "opacity" : "0", "width" : "1rem"}, 300);
            $("#item-rocket").animate({ "bottom" : "1rem" }, 300);
        }
        $("#modal").fadeOut(300);
        $("#item-rocket>img:last").animate({ "opacity" : 1 }, 300);
        setTimeout(function() {
            $(".stage:visible").animate({"top" : "100%", "bottom" : "-100%"}, 1000);
            animateBackground();
            setTimeout(function() {
                $(".stage").hide().filter(":eq(" + step + ")").show().css({ "top" : "-100%", "bottom" : "100%" }).animate({ "top" : "0", "bottom" : 0 }, 1000);
            }, 2000);
            setTimeout(function() {
                $("#modal .dialog.question").hide();
                $("#modal .dialog.question:eq(" + (current_step - 1) + ")").show();
                $("#modal").fadeIn(500);
                $("#item-rocket>img:last").animate({ "opacity" : 0 }, 300);
            }, 3000);
        }, delay);        
    }
    var animateBackground = function (){
        $(".stars1").animate({"height" : "15px"}, 1000, function() {
            setTimeout(function() {
                $(".stars1").animate({"height" : "1px"}, 1000);
            }, 1000);
        });
        $(".stars2").animate({"height" : "15px", "opacity" : ".2"}, 1000, function() {
            setTimeout(function() {
                $(".stars2").animate({"height" : "2px", "opacity" : "1"}, 1000);
            }, 1000);
        });
        $(".stars3").animate({"height" : "15px", "opacity" : ".2"}, 1000, function() {
            setTimeout(function() {
                $(".stars3").animate({"height" : "3px", "opacity" : "1"}, 1000);
            }, 1000);
        });
    };
    var checkAnswer = function (s){
        var $question = $("#" + s) 
        var answer_exists = ($question.find("input:checked").length > 0) || ($question.find("input.otra").val() != "");
        if (answer_exists) {
            $(".dialog-error:visible").remove().detach();
            
            let id = $question.find("h3").data("id");
            let q_type = $question.find("h3").data("type");
            
            let resp = "";
            let resp_id = "";
            let loc_en = "";

            if ($question.find("input:checked").length > 0) {
                resp = $question.find("input:checked").val();
                resp_id = $question.find("input:checked").attr("data-id");
                loc_en = $question.find("input:checked").attr("data-loc-en");
            }    
            if($question.find("input.otra").val() != "") { resp = $question.find("input.otra").val(); }
            if (loc_en == '' && q_type == 6) {
                translateAnswer(id, q_type, resp, loc_en, resp_id);
            } else {
                saveData(id, q_type, resp, loc_en, resp_id);
            }
            return true;
        } else{
            if ($question.find(".dialog-error").length == 0) { $question.find("h3").after($(".dialog-error:last").clone()); }
            $question.find(".dialog-error").hide().fadeIn("fast");
            return false;
            
        }
        
    };
    var translateAnswer = function(id, q_type, resp, loc_en, resp_id) {
        $.get("https://translate.yandex.net/api/v1.5/tr.json/translate",
            {
                key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',
                lang: 'es-en',
                text: resp,
                format: 'plain'
            }
        ).done(function(data) {
            if(data){
                saveData(id, q_type, resp, decodeURIComponent(data.text[0]), resp_id);
            }
        });	
    }
    var saveData = function (id, q_type, resp, loc_en, resp_id){
        _tplData.respuestas[id] = {
            "tipo": q_type,
            "respuesta" : resp,
            "localizacion_en" : loc_en,
            "resp_id" : resp_id
        };
        localStorage.setItem("web2b", JSON.stringify(_tplData));
    };
    var setOptions = function (){
        $(".options-group").hide();
        $(".options h4").addClass("clickable").attr("data-state", "off");
        $(".options i.fa-minus-circle").hide();
        $(".options h4").on("click", function() {
                var $this = $(this);
                let index = $this.closest(".options").find("h4").index($this);
                
                if ($this.attr("data-state") == "off") {
                    $(".options h4").attr("data-state", "off").filter(":eq(" + index + ")").attr("data-state", "on");
                    $(".options h4 i.fa-minus-circle").hide();
                    $(".options h4 i.fa-plus-circle").show();
                    $this.find("i.fa-plus-circle").hide();
                    $this.find("i.fa-minus-circle").show();
                    $this.closest(".options").find(".options-group").hide().filter(".options-group:eq(" + index + ")").show();
                    $this.closest(".options").find(".options-group:eq(" + index + ") input:first").trigger("click");
                } else {
                    $this.attr("data-state", "off");
                    $this.find("i.fa-minus-circle").hide();
                    $this.find("i.fa-plus-circle").show();
                    $this.closest(".options").find(".options-group:eq(" + index + ")").hide();
                }
        });
    }
    return {
		init: init
	};
};
$(document).ready(function(){
    var new_tour = new Tour();
    new_tour.init();
}); 