const cipher = {
  encode: function (desloc, messageValue) {
    let messageCripto = "";

    if ( typeof desloc !== "number" || typeof messageValue !== "string" ) {
      throw new TypeError
    }

    for (let i = 0; i < messageValue.length; i++) {

      let code = messageValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        messageCripto += String.fromCharCode((code - 65 + desloc) % 26 + 65);
      }
      else if (code >= 33 && code <= 64) {
        messageCripto += String.fromCharCode((code - 33 + desloc) % 33 + 33);
      }
    }
    return messageCripto;
  },
  decode: function (desloc, messageValue) {
    let messageCripto = "";

    if ( typeof desloc !== "number" || typeof messageValue !== "string") {
      throw new TypeError;
    }

    for (let i = 0; i < messageValue.length; i++) {
      
      let code = messageValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        messageCripto += String.fromCharCode((code - 90 - desloc) % 26 + 90);
      }
      else if (code >= 33 && code <= 64) {
        messageCripto += String.fromCharCode((code - 64 - desloc) % 33 + 64);
      }
    }
    return messageCripto;
  }
}
export default cipher;






















