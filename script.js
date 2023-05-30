function validar(){
    var text = document.getElementById("inputTexto").value;
    var claveInput = document.getElementById("inputClave").value;
    
    if((text == "") && (claveInput == "")){
        alert("Ingresa una clave y un texto");
    } else if (text == ""){
        alert("Ingresa un texto para comenzar");
    } else if (claveInput == ""){
        alert("Ingrese una clave para comenzar");
    }
}
function cifrar() {
    let text = document.getElementById("inputTexto").value;
    let claveInput = document.getElementById("inputClave").value;
    let nuevotext = "";
    let clave = parseInt(claveInput);
    for(let i = 0; i < text.length; i++){
        char = text.charCodeAt(i);
        char = char + clave;
        while (char > 127){
            char = char - 94;
        }
        nuevotext = nuevotext + String.fromCharCode(char); //Convierte un caracter a Cadena
    }
    document.getElementById("resultado").innerHTML=nuevotext;
}
function descifrar(){
    let text = document.getElementById("inputTexto").value;
    let claveInput = document.getElementById("inputClave").value;
    let nuevotext = "";
    let clave = parseInt(claveInput);
    for(let i = 0; i < text.length; i++){
        char = text.charCodeAt(i); // Convierte un caracter a ASCII
        char = char - clave;
        while (char < 32){
            char = char + 94;
        }
        nuevotext = nuevotext + String.fromCharCode(char);
    }
    document.getElementById("resultado").innerHTML=nuevotext;
}
function copiar(){
    let textoCopiar = document.querySelector('#resultado').innerText;
    console.log(textoCopiar);
    let imputElement = document.createElement('input');
    imputElement.setAttribute('value', textoCopiar);
    document.body.appendChild(imputElement);
    imputElement.select();
    document.execCommand("copy");
    imputElement.parentNode.removeChild(imputElement);
}
document.getElementById("boton-cifrar").addEventListener("click", function(){

// CODIGO
    validar();
    cifrar();
})
document.getElementById("boton-descifrar").addEventListener("click", function(){

 // CODIGO
    validar();
    descifrar();  
})
document.getElementById("btn-copiar").addEventListener("click", function(){
    copiar();
    })