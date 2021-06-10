
import cipher from './cipher.js';

const index = {};
// 1)Pegar valor de entrada no inputs (texto e offset):

let message = document.getElementById('msg');
message.addEventListener('keypress', event => {
    let messageValue = message.value;
    console.log(messageValue)
    document.getElementById("textend").innerHTML = initCripto(messageValue, deslocValue);
    
})

let desloc = document.querySelector('#offset');
desloc.addEventListener('keypress', event => {
    let deslocValue = desloc.value; 
    console.log(deslocValue);
})

/*
2) Validar os valores dos inputs por meio de funções:
a) input message: verificar se está vazio e verificar
 o tipo(string); 
b) input desloc: verificar se está vazio
 e verificar o tipo(number);
*/ 

//3) Tornar buttons encode e decode funcionais:

// Encode
const buttonEncode = document.getElementById('criptografar');
buttonEncode.addEventListener('click', function() {
initCripto()
})

// Decode
const buttonDecode = document.getElementById('descriptografar');
buttonDecode.addEventListener('click', function(){
    console.log('desclick')//Substituir pela função de decode
})

//4) Imprimir resultado(texto criptografado) no input "results":






export default index;





 