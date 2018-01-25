

/*ANIDANDO VARIAS LLAMADAS CON PROMISES*/

var divResultado = document.querySelector("#resultado")
var urlEndoint = document.querySelector("#urlEndpoint")

console.log(divResultado);
var url='https://jsonplaceholder.typicode.com/users';


httpRequest.get(url)
.then(function(result){
  urlEndoint.innerHTML= url;
  divResultado.innerHTML= result;
  console.log("result1");
  return "result2"
})

.then(function(result){
  console.log(result);
  return "result3"
})

.then(function(result){
  console.log(result);
  return "result4"
})
.catch(function(err){
  console.log(err)
})


//PROMISE.ALL
var arrRequest = [
  httpRequest.get(url),
  httpRequest.get(url),
  httpRequest.get(url),
  httpRequest.get(url),
]

Promise.all(arrRequest)
.then(function(arrResult){
  console.log(arrResult)
})


/*HACIENDO VARIAS LLAMADAS ASINCRONAS POR MEDIO DE PROMISES ALL*/
