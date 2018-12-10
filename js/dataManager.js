export default function dataManager () {
    var getObjFromLocalStorage = function (key){
		var jsonData = localStorage.getItem(key);
		if(jsonData == null) {
			jsonData = {};           
		} else {
			try{
				jsonData = JSON.parse(jsonData);
			} catch(e){
				return jsonData;
			}
		}
		return jsonData;
	};	
    var saveWeb2bJson = function(jd){
		let strJD = JSON.stringify(jd),
			userId = getObjFromLocalStorage("web2b_userId"),
			idSitio = getObjFromLocalStorage("web2b_templateId"),
			savedJD = localStorage.getItem("web2b_template");	
		if(strJD && savedJD != strJD && !(userId instanceof Object) && !(idSitio instanceof Object)){
			localStorage.setItem("web2b_template", strJD);
			$.post("scripts/salvar_datos.php",{
				userId: userId,
				idSitio: idSitio,
				info: strJD
			}).done(function(result){						
				if(!result.ok){
					console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result.mensaje);					
				}
			}).fail(function(result){
				console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result);					
			});		
		}
	};
	var saveSelected = function(jd, name, value,type) {
		let selections = jd.selections || {};
		selections[name] = selections[name] || {};
		selections[name].type = type;
		switch(type){
			case 'image':				
				selections[name].img = value;
			break;
			case 'text':
				selections[name].text = value;
			break;
			case 'config':
				selections[name].value = value;
			break;
		}
		//Save selection to object
		jd.selections = selections;		
	};
    return {
        getObjFromLocalStorage : getObjFromLocalStorage,
        saveWeb2bJson : saveWeb2bJson,
        saveSelected : saveSelected
    };
}