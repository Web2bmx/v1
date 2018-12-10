

import dataManager from "./dataManager";

export default function pageManager(){
    let paginas = [],
        new_Datamanager = new dataManager();

    let setPaginasInfoFromExternal = function(p){
        paginas = p;
    };

    let getPaginasFromLS = function(){
        let p = new_Datamanager.getObjFromLocalStorage("web2b_pages");
        paginas = p;
    };

    let fillModal = function(userId, callback){
        // manejar varias paginas de un solo usuario??
        let html = "";
        for(let i=0, jd; i < paginas.length; i++){
            jd = JSON.parse(paginas[i].info);
            let name = jd.nombre || jd.selections.siteName.text || "no name";
            html += 
            `<option class="inserted" value="${i}">
                ${name}
            </option>`;
        }						
        $(".proyectos-disponibles .inserted").remove();									
        $(".proyectos-disponibles").append(html);
        $(".ventana-login > div").hide();
        $(".login-paginas").show();
        $(".llevame").click({
            pags: paginas,
            userId: userId
        },function(e){
            let pagina = $(".proyectos-disponibles option:selected" ).val(),
                d = e.data;
            if(pagina != ""){
                localStorage.setItem("web2b_template", d.pags[pagina].info);
                localStorage.setItem("web2b_templateId", d.pags[pagina].idSitio);
                localStorage.setItem("web2b_userId", d.userId);
                localStorage.setItem("web2b_pages", JSON.stringify(d.pags));
                callback();
            } else {
                $(".login-paginas .form-error").css("display","block");
            }
        });
    };

    let hasPages = function(){
        return paginas.length > 1 ? true : false;
    };

    return{
        setPaginasInfoFromExternal: setPaginasInfoFromExternal,
        getPaginasFromLS: getPaginasFromLS,
        fillModal: fillModal,
        hasPages: hasPages
    };
}