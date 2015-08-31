function combineUrl(baseUrl, params) {
 if( !_isEmpty(params) && baseUrl) {
     var combinedUrl = baseUrl + "?";
     var combinedArray = [];
     for( var key in params ){
         combinedArray.push(key + "=" + params[key]);
         
     }
     combinedUrl += combinedArray.join("&");
     return combinedUrl;
 }
}

function _isEmpty(obj){
    return Object.keys(obj).length === 0;
}

alert(combineUrl("http://www.google.com", {x: "a", y: "b"}));