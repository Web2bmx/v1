/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var winWidth;
var spanError = '<span class="error">Aún no has respondida esta pregunta</span>';

function muestraPregunta(pregunta){
    $(".rocket img + img").animate({
        opacity: 0
    }, 100, function(){
        $("." + pregunta).dialog( "open" );                        
    });        
}


function darSalto(selector, pregunta){
    selOffset = $(selector).offset();
    selHeight = $(selector).height();
    selWidth = $(selector).width();
    dheight = $(document).height();
    dif = dheight-selWidth;
    rocketHeight = $(".rocket > img").height();
    rocketWidth = $(".rocket > img").width();
    containerBottom = $('.main-container > div').css("bottom").replace("px","");
    
    selPos = $(selector).position();

    $(".rocket").animate({
        top: selPos.top + ((selHeight/2)-(rocketHeight/2)),
        left: selPos.left + ((selWidth/2)-(rocketWidth/2)),
        margin: 0
    }, 2000, function(){
        muestraPregunta(pregunta);
    });    
    $('.main-container > div').animate({
          'bottom': (containerBottom*1)+selOffset.top-(dif > 0 ? dif/2 : 0)
    }, 2000);    
}

function preguntaValida(selector){
    if( ($(selector + " textarea").length != 0 && $.trim($(selector + " textarea").val()) == "") ||
    ($(selector + " input").length != 0 && $(selector + " input:checked").length == 0)){
        if($(selector + " p span").length == 0){
            $(selector + " p").append(spanError); 
        }
        return false;
    } else{
        if($(selector + " p").data("type") == "1"){
            localStorage.removeItem("web2b");
        }
        var jsonData = localStorage.getItem("web2b"),
            resp = "";

        if(jsonData == null)
            {
                jsonData = {};
                jsonData.respuestas = [];                
            }
        else{
            jsonData = JSON.parse(jsonData);
        }
        if($(selector + " textarea").length != 0){
            resp = $(selector + " textarea").val();
        } else {
            resp = $(selector + " input:checked").val();
        }
        jsonData.respuestas.push({
            "tipo": $(selector + " p").data("type"),
            "Id" : $(selector + " p").data("id"),
            "respuesta" : resp,            
        });
        localStorage.setItem("web2b", JSON.stringify(jsonData))
    }
    return true;
}

function paso2(){
    $(".rocket img + img").animate({
            opacity: 1
        }, 50);  
    if(winWidth < 660){
        $(".space-man").animate({
            width: '35px',
            bottom: '55px',
            marginLeft: '-73px',
            opacity: '0'                         
        }, 2000, function(){
            darSalto(".sun > img","segunda-pregunta");            
        });
    }
    else if(winWidth < 1040){
        $(".space-man").animate({
            width: '50px',
            marginLeft: '-112px',
            bottom: '111px',
            opacity: '0'                         
        }, 2000, function(){
            darSalto(".sun > img","segunda-pregunta");           
        });                        
    } else{            
        $(".space-man").animate({
            width: '50px',
            marginLeft: '172px',
            opacity: '0'                         
        }, 2000, function(){
            darSalto(".sun > img","segunda-pregunta");           
        });            
    }    
}

function paso3(){
    $(".rocket img + img").animate({
        opacity: 1
    }, 50);        
    darSalto(".planet-blue","tercera-pregunta");       
}

function paso4(){
    $(".rocket img + img").animate({
        opacity: 1
    }, 50);        
        darSalto(".earth","cuarta-pregunta");      
}

function paso5(){
    $(".rocket img + img").animate({
        opacity: 1
    }, 50);            
        darSalto(".full_moon > img","quinta-pregunta");       
}

function paso6(){
    $(".rocket img + img").animate({
        opacity: 1
    }, 50);         
        darSalto(".planet_ring > img","sexta-pregunta");      
}

function paso7(){
    $(".rocket img + img").animate({
        opacity: 1
    }, 50);          
        darSalto(".planet_red > img","septima-pregunta");    
}

$(document).ready(function(){
    winWidth = $(window).width();
    
    h = $(window).height();    
    
    $(".dialog").dialog({
      autoOpen: false,
      modal: true,
      width: winWidth,
      height: h,
      show: {
        effect: "fade",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      }
    });  

    var jsonData = localStorage.getItem("web2b");

    if(jsonData == null)
        {
            jsonData = {};
            jsonData.respuestas = [];                
        }
    else{
        jsonData = JSON.parse(jsonData);
    }

    if(jsonData.respuestas.length > 0){
        $(".datos-existentes").dialog( "open" ); 
    } 

    $(".iniciar").click(function(){
        $(".datos-existentes").dialog( "close" );
        $(".init").click();
    });

    $(".continuar").click(function(){
        $(".init").fadeOut(500);
        $(".datos-existentes").dialog( "close" );
        switch(jsonData.respuestas.length + 1){
            case 2:
                paso2();
            break;
            case 3:
                paso3();
            break;
            case 4:
                paso4();
            break;
            case 5:
                paso5();
            break;
            case 6:
                paso6();
            break; 
            case 7:
                paso7();
            break;
            case 8:
                $(".fin").dialog( "open" );
            break;                                                                      
        }
    });    
    
    $(window).resize(function(){
        winWidth = $(window).width();
    });   
    
    $(".init").click(function(e){
        $(e.target).fadeOut(500);
        muestraPregunta("primera-pregunta");
    });
    
    $(".res_1").click(function(){
        if(preguntaValida(".primera-pregunta")){  
            $(".primera-pregunta").dialog( "close" );
            $( ".primera-pregunta" ).on( "dialogclose", function() {
                paso2();
            });
        }
    });
    
    //segundo
    $(".res_2").click(function(){
        if(preguntaValida(".segunda-pregunta")){
            $(".segunda-pregunta").dialog( "close" );
            $( ".segunda-pregunta" ).on( "dialogclose", function() {            
                paso3();         
            } );
        }
    });    
    
    //segundo
    $(".res_3").click(function(){
        if(preguntaValida(".tercera-pregunta")){
            $(".tercera-pregunta").dialog( "close" );
            $( ".tercera-pregunta" ).on( "dialogclose", function() {            
                paso4();
            } );
        }
    });
    
    //tercero
    $(".res_4").click(function(){
        if(preguntaValida(".cuarta-pregunta")){
            $(".cuarta-pregunta").dialog( "close" );
            $( ".cuarta-pregunta" ).on( "dialogclose", function() {           
                paso5();
            });
        }
    });
    
    //cuarto
    $(".res_5").click(function(){
        if(preguntaValida(".quinta-pregunta")){
            $(".quinta-pregunta").dialog( "close" );
            $( ".quinta-pregunta" ).on( "dialogclose", function() {          
                paso6();
            });
        }
    }); 
    
     //quinto
    $(".res_6").click(function(){
        if(preguntaValida(".sexta-pregunta")){
            $(".sexta-pregunta").dialog( "close" );
            $( ".sexta-pregunta" ).on( "dialogclose", function() {         
                paso7();
            });
        }
    });    
    
    $(".res_7").click(function(){
        if(preguntaValida(".septima-pregunta")){
            $(".septima-pregunta").dialog( "close" );
            $( ".septima-pregunta" ).on( "dialogclose", function() {  
                $(".fin").dialog( "open" );
            });
        }
    });
    
});

