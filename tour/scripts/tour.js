/*
import dialogHandler from '../../js/dialog';

*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export default function tour() {    
    

    
    
    
    
    
    

    var back = (e) => {
        $(".dialog:visible").dialog("close");
        const back = $(e.currentTarget).data("back");
        const obj = e.data.obj;

        if(back == 0){
            paso1();
        } else{
            obj['paso' + back]();
        }
    };

    var init = (that) => {
        
        let winWidth = $(window).width(),    
            h = $(window).height();    
        
        dialogHandler(true);  
    
        // verify incomplete tour
        let tplData = new_dataManager.getObjFromLocalStorage("web2b");        
        if(Object.keys(tplData).length == 0) {
            tplData.respuestas = {};

            // verify existing project
            let existingData = new_dataManager.getObjFromLocalStorage('web2b_actualPage');
            if(Object.keys(existingData).length > 0) {
                $(".proyecto-existente").dialog( "open" );
            }                        
        }
        else {
            if(Object.keys(tplData.respuestas).length > 0){
                $(".datos-existentes").dialog( "open" ); 
            }            
        }
        
        $(".iniciar").click(function(){
            $(".datos-existentes").dialog( "close" );
            localStorage.removeItem("web2b");
            tplData = {};
        });
    
        $(".continuar").click(function(){
            $(".init").fadeOut(50);
            $(".datos-existentes").dialog( "close" );
            switch(Object.keys(tplData.respuestas).length + 1){
                case 2:
                    paso3();
                break;
                case 3:
                    paso4();
                break;
                case 4:
                    $(".fin").dialog( "open" );
                break;
            }
        });

        $(".iniciar-proyecto").click(function(){
            localStorage.removeItem('web2b_actualPage');
            localStorage.removeItem('web2b_template');
            localStorage.removeItem('web2b_templateId');
            localStorage.removeItem("web2b");
            $(".proyecto-existente").dialog( "close" );
        });       
        
        $(".continuar-proyecto").click(function(){
            location.href = "/crea";
        });             
        
        

        $(".back").on('click', {obj: that}, that.back);

        /*GRUPOS DE RESPUESTAS */
        $(".group_answers").hide();
        $(".cont_answers>label>input[type='radio']").change(function() {
            var $this = $(this);
            $this.parent().parent().parent().find(".group_answers").hide();
            $this.parent().parent().parent().find(".cont_answers>label").show();
            $this.parent().next(".group_answers").show().find("input:first").trigger("click");
            //$this.parent().hide();
            return false;
        });
               
    };

    return {
        init: init,
        paso1: paso1,
        paso2: paso2,
        paso3: paso3,
        paso4: paso4,
        paso5: paso5,
        paso6: paso6,
        paso7:paso7,
        back: back
    };
}
/*
    var t = new tour();
    t.init(t);
    */
import dataManager from '../../js/dataManager';
$(document).ready(function(){
    var new_dataManager = new dataManager(); 
    var current_step = 0;
    var total_steps = $(".stage").length;
   $(".stage:not(#stage-" + current_step + ")").hide();

   $("#modal .dialog").hide();
   $("#modal").hide();
   
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
            $(".stars1").animate({"height" : "5px"}, 1000, function() {
                setTimeout(function() {
                    $(".stars1").animate({"height" : "1px"}, 1000);
                }, 1000);
            });
            $(".stars2").animate({"height" : "5px"}, 1000, function() {
                setTimeout(function() {
                    $(".stars2").animate({"height" : "2px"}, 1000);
                }, 1000);
            });
            $(".stars3").animate({"height" : "5px"}, 1000, function() {
                setTimeout(function() {
                    $(".stars3").animate({"height" : "3px"}, 1000);
                }, 1000);
            });
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
   var checkAnswer = function (s){
       var $question = $("#" + s) 
        var tplData = new_dataManager.getObjFromLocalStorage("web2b");
        var resp = "";
        var resp_id = "";
        var loc_en = "";
        var answer_exists = ($question.find("input:checked").length) || ($question.find("input.otra").val() != "");
        if (answer_exists) {
            $(".dialog-error:visible").remove().detach();
            
            let id = $question.find("h3").data("id");
            if($question.attr("id") == "#dialog-question-1"){
                localStorage.removeItem("web2b");
            }
            if(Object.keys(tplData).length == 0) {
                    tplData.respuestas = {};                
            }

            if($question.find("textarea").length != 0){
                resp = $question.find("textarea").val();
            } else {            
                resp = $question.find("input:checked").val();
                loc_en = $question.find("input:checked[data-loc-en!='']").length > 0 ? $question.find("input:checked[data-loc-en!='']").attr("data-loc-en") : "";
                resp_id = $question.find("input:checked[data-id!='']").length > 0 ? $question.find("input:checked[data-id!='']").attr("data-id") : "";            
                if($question.find("input.otra").val() != "") {
                    resp = $question.find("input.otra").val();
                    loc_en = "";
                }
            }
            
            
            if (loc_en == '' && $question.find("h3").data("type") == 6) {
                $.get("https://translate.yandex.net/api/v1.5/tr.json/translate",
                    {
                        key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',
                        lang: 'es-en',
                        text: resp,
                        format: 'plain'
                    }
                ).done(function(data) {
                    if(data){
                        tplData.respuestas[id] = {
                            "tipo": $question.find("h3").data("type"),
                            "respuesta" : resp,
                            "localizacion_en" : decodeURIComponent(data.text[0]),
                            "resp_id" : resp_id
                        };
            
                        localStorage.setItem("web2b", JSON.stringify(tplData));
                    }
                });	
            } else {
                tplData.respuestas[id] = {
                    "tipo": $question.find("h3").data("type"),
                    "respuesta" : resp,
                    "localizacion_en" : loc_en,
                    "resp_id" : resp_id
                };

                localStorage.setItem("web2b", JSON.stringify(tplData));
            }
            return true;
        } else{
            if ($question.find(".dialog-error").length == 0) {
                $question.find("h3").after($(".dialog-error:last").clone());
            }
            $question.find(".dialog-error").hide().fadeIn("fast");
            return false;
            
        }
        
    };    
   /*Options*/
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
}); 