function saludar() {
    console.log("Hola")
    const name=(document.getElementById("nombre").value)
    const surname=(document.getElementById("apellido").value)
    
// I cal the function InsertHtml
insertarHtml(name, surname)
}
// I define a function with the name InsertarHtml
function insertarHtml(params1, params2){
document.getElementById('saludo').innerHTML = `<h2> Hola ${params1} ${params2}, bienvenid@ al mundo de las currencies! </h2>`
}


function convertirAusd(pesos) {
var res = document.getElementById('TC').value * document.getElementById("pesos_argentinos").value
document.getElementById('resultado').value = res
}