var translateData = function(info){
    let text = '',
        arr = Object.keys(info.respuestas);
    for(let i = 0; i < arr.length; i++){
        if(info.respuestas[arr[i]].tipo == 6){
            text = info.respuestas[arr[i]].respuesta;
        }
    }
    $.get("https://translate.yandex.net/api/v1.5/tr.json/translate",
        {
            key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',
            lang: 'es-en',
            text: text,
            format: 'plain'
        }
      ).done(function(data) {
        if(data){
            setImageSelection(decodeURIComponent(data.text[0]));	
        }
      });	
};
function openRequestedPopup(strUrl, strWindowName) {
    let windowObjectReference = null;
    if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(strUrl, strWindowName,
            "resizable,scrollbars,status");
    windowObjectReference.focus();
    } else {
    windowObjectReference.focus();
    }
}