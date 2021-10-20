import cipher from './cipher.js';

const btnCode = document.getElementById("criptografar");
btnCode.addEventListener("click", cipherMsg);

function cipherMsg(e) {
    e.preventDefault()
    let desloc = Number(document.getElementById("offset").value);
    if (desloc < 0) {
        desloc = Math.abs(desloc)
    }
    let messageValue = document.getElementById("msg").value;
    const cipherText = cipher.encode(desloc, messageValue);
    document.getElementById("textEnd").value = cipherText;
}

const btnDecode = document.getElementById("descriptografar");
btnDecode.addEventListener("click", decipherMsg);

function decipherMsg(e) {
    e.preventDefault()
    let desloc = Number(document.getElementById("offset").value);
    let messageValue = document.getElementById("msg").value;
    const decipherText = cipher.decode(desloc, messageValue);
    document.getElementById("textEnd").value = decipherText;
}
