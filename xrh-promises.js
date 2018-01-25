

var httpRequest = (function(){

var url=null;

function setUrl(url){
//?????
}



function xrqRequest(url, method, data){
  return new Promise(function(resolve, reject){

  var xrq = new XMLHttpRequest();
  xrq.open(method, url, true);
  xrq.onreadystatechange = function(){
    if(xrq.readyState == 4){
      if(xrq.status ==200){
        resolve(xrq.responseText)
      }
      else {
        reject("error")
      }
    }
  }
  xrq.send(null);
  })

}



function get(url){
  // xrqRequest retorna una promesa la cual utilizamos para manejar los metodos asincronicos del moduloñ
  return xrqRequest(url, 'GET', null);
}

function post(url, data){
  return xrqRequest(url, 'POST', data);
}

function put(url, data){
  return xrqRequest(url, 'POST', data);
}

function dele(url){
  return xrqRequest(url, 'POST', data);
}

  return {
      get:get,
      post:post,
      put:put,
      delete:dele,
  }


})()
