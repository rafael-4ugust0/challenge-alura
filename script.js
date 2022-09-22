const inputTexto = document.querySelector(".input-texto");
const retorno = document.querySelector(".retorno");
const btnCopia = document.querySelector(".copiar");
btnCopia.style.display = "none";

// Codificar texto

function btnEncriptar(){
    const textoCodificado = codificar(inputTexto.value);
    retorno.value = textoCodificado;
    retorno.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopia.style.display = "block"
    }

function codificar(stringCodificada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCodificada = stringCodificada.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringCodificada.includes(matrizCodigo[i][0])){
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringCodificada;
}

// Decodificar terxto

function btnDesencriptar(){
    const textoDecodificado = decodificar(inputTexto.value);
    retorno.value = textoDecodificado;
    retorno.style.backgroundImage="none";
    inputTexto.value = ""
}

function decodificar(stringDecodificada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecodificada = stringDecodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDecodificada.includes(matrizCodigo[i][1])){
            stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDecodificada;
}

// Botão copiar

function copiar() {
    
    retorno.select();
    navigator.clipboard.writeText(retorno.value)
    retorno.value = "";
    alert("Texto Copiado")
}