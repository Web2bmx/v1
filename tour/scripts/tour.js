import dataManager from '../../js/dataManager';
import menuSingleSelection from '../../js/menuSingleSelection';
import modal from '../../js/modal';
export default function Tour() {
    var new_dataManager = new dataManager(); 
    var new_menuSingleSelection = new menuSingleSelection(); 
    var new_modal = new modal(); 
    var _tplData = new_dataManager.getObjFromLocalStorage("web2b");
    var current_step = 0;
    var total_steps = $(".stage").length;
    const key = 'AIzaSyBR5kBWFTVAecBoW4IKDSjttophb4BC6fg';
    var init = function (){
        new_menuSingleSelection.init(".options-container", ".options-group");
        new_modal.init("#modal");
        setTourNavigation();
        new_modal.hide();
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
    };
    var setDialogInProcess = function() {
        new_modal.show("#dialog-existing-session");
        $(".iniciar").on("click", function() {
            new_dataManager.purgeTemplateData();
            _tplData = new_dataManager.getObjFromLocalStorage("web2b")
            new_modal.hide();
        });
        $(".continuar").on("click", function() {
            new_modal.hide();
            current_step = Object.keys(_tplData.respuestas).length + 1;
            if (current_step < 4) {
                new_modal.hide();
                showStep(current_step);
            } else {
                new_modal.show("#dialog-end");
            }
        });
    };
    var setDialogWithProject = function() {
        new_modal.show("#dialog-existing-project");
        $(".continuar-proyecto").click(function(){ location.href = "/crea"; }); 
        $(".iniciar-proyecto").click(function(){
            new_dataManager.purgeTemplateData();
            new_modal.hide();
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
                    new_modal.show("#dialog-end");
                }
            }
            return false;
        });
    };
    var showStep = function(step) {
        new_modal.hide();
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
                new_modal.show("#dialog-question-" + current_step);
                $("#item-rocket>img:last").animate({ "opacity" : 0 }, 300);
            }, 3000);
        }, delay);        
    };
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
                new_modal.hideErrorMessage();
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
                new_modal.showErrorMessage($question, "h3", "#error-no-answer");
                return false;
            }
        }
    };
    var translateAnswer = function(id, q_type, resp, loc_en, resp_id) {

        $.ajax({
            url: 'https://translation.googleapis.com/language/translate/v2?key=' + key,
            type: 'post',
            data: {
                q: resp,
                source: "es",
                target: "en",
                format: "text"
            },
            dataType: 'json'
        }).
        done(function (response) {
            saveData(id, q_type, resp, response.data.translations[0].translatedText, resp_id);
        }).
        fail(function(){
            saveData(id, q_type, resp, resp, resp_id);
        });

    };
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
}

$(document).ready(function(){
    var new_tour = new Tour();
    new_tour.init();
}); 