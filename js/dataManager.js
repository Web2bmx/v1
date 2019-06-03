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
	var getPagesFromDB = function() {
		let userId = getObjFromLocalStorage("web2b_userId");
		return $.get("scripts/getActualPages.php",{
			userId: userId
		}).done(function(result){						
			if(!result.ok){
				console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result.mensaje);					
			}
			return result.paginas;
		}).fail(function(result){
			console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result);					
			return {};
		});			
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
		switch(type){
			case 'image':				
				selections[name].img = value;				
				selections[name].type = type;			
			break;
			case 'text':
				selections[name].text = value;				
				selections[name].type = type;					
			break;
			case 'config':
				selections[name].value = value;				
				selections[name].type = type;					
			break;		
		}		
		//Save selection to object
		jd.selections = selections;		
	};
	var setDataObjects = function(data, jd){
		localStorage.removeItem("web2b");
		localStorage.setItem("web2b_templateId", data.idSitio);
		localStorage.setItem("web2b_userId", data.userId);		
		localStorage.setItem("web2b_template", JSON.stringify(jd));
		localStorage.setItem("web2b_pages", JSON.stringify(data.paginas));
	};
	return {
		getObjFromLocalStorage : getObjFromLocalStorage,
		saveWeb2bJson : saveWeb2bJson,
		saveSelected : saveSelected,
		getPagesFromDB: getPagesFromDB,
		setDataObjects: setDataObjects
	};
}