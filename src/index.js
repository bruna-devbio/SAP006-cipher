
import cipher from './cipher.js';
const btnCode = document.getElementById("criptografar");
function cipherMsg(e) {
    e . preventDefault ( )
    let desloc = Number(document.getElementById("offset").value);
    if (desloc < 0) {
        desloc = Math.abs(desloc)
    }
    let messageValue = document.getElementById("msg").value;
    const cipherText = cipher.encode(desloc, messageValue);
    document.getElementById("textEnd").value = cipherText;
}
btnCode.addEventListener("click", cipherMsg);

const btnDecode = document.getElementById("descriptografar");
function decipherMsg(e) {
    e . preventDefault ( )
    let desloc = Number(document.getElementById("offset").value);
    let messageValue = document.getElementById("msg").value;
    const decipherText = cipher.decode(desloc, messageValue);
    document.getElementById("textEnd").value = decipherText;
}
btnDecode.addEventListener("click", decipherMsg);

//console.log(cipher);
