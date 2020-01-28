import dataManager from '../../js/dataManager';
import menuSingleSelection from '../../js/menuSingleSelection';
export default function Tour() {
    var new_dataManager = new dataManager(); 
    var new_menuSingleSelection = new menuSingleSelection(); 
    var _tplData = new_dataManager.getObjFromLocalStorage("web2b");
    var current_step = 0;
    var total_steps = $(".stage").length;
    var init = function (){
        new_menuSingleSelection.init(".options-container", ".options-group");
        setTourNavigation();
        hideDialog();

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
    var setDialogInProcess = function() {
        showDialog("existing-session");
        $(".iniciar").on("click", function() {
            new_dataManager.purgeTemplateData();
            _tplData = new_dataManager.getObjFromLocalStorage("web2b")
            hideDialog();
        });
        $(".continuar").on("click", function() {
            $("#dialog-existing-session").hide();
            current_step = Object.keys(_tplData.respuestas).length + 1;
            if (current_step < 4) {
                hideDialog();
                showStep(current_step);
            } else {
                showDialog("end");
            }
        });
    };
    var setDialogWithProject = function() {
        showDialog("existing-project");
        $(".continuar-proyecto").click(function(){ location.href = "/crea"; }); 
        $(".iniciar-proyecto").click(function(){
            new_dataManager.purgeTemplateData();
            hideDialog();
        });  
    };
    var setTourNavigation = function() {
        $("a[href*='#stage-']").on("click", function() {
            let $this = $(this);
            if (checkAnswer($this.closest(".question").attr("id"))) {
                current_step = $this.attr("href").replace("#stage-", "") * 1;
                if (current_step < 4) {
                    showStep(current_step);
                } else {
                    showDialog("end");
                }
            }
            return false;
        });
    };
    var showDialog = function(ide) {
        $("#modal").hide().fadeIn(500).find(".dialog").hide().filter("#dialog-" + ide).show();
    }
    var hideDialog = function() {
        $("#modal").fadeOut(500).find(".dialog").hide();
    }
    var showStep = function(step) {
        hideDialog();
        var delay = 0;
        if(step == 1) {
            delay = 500;
            $("#item-spaceman").animate({"left" : "50%", "opacity" : "0", "width" : "1rem"}, 300);
            $("#item-rocket").animate({ "bottom" : "1rem" }, 300);
        }
        $("#item-rocket>img:last").animate({ "opacity" : 1 }, 300);
        setTimeout(function() {
            $(".stage:visible").animate({"top" : "100%", "bottom" : "-100%"}, 1000);
            animateBackground();
            setTimeout(function() {
                $(".stage").hide().filter(":eq(" + step + ")").show().css({ "top" : "-100%", "bottom" : "100%" }).animate({ "top" : "0", "bottom" : 0 }, 1000);
            }, 2000);
            setTimeout(function() {
                showDialog("question-" + current_step);
                $("#item-rocket>img:last").animate({ "opacity" : 0 }, 300);
            }, 3000);
        }, delay);        
    }
    var animateBackground = function (){
        for (let i = 1; i < 4; i++) {
            $(".stars" + i).animate({"height" : ((i * 15) + "px"), "opacity" : (.8 - (i * .2))}, 1000, function() {
                setTimeout(function() {
                    $(".stars" + i).animate({"height" : (i + "px"), "opacity" : "1"}, 1000);
                }, 1000);
            });
        }
    };
    var checkAnswer = function (s){
        if (s == 'undefined') {
            return true;
        } else {
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
    return {
		init: init
	};
};
$(document).ready(function(){
    var new_tour = new Tour();
    new_tour.init();
}); 