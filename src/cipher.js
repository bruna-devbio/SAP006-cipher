
const cipher = {
  //1) Criar a function e iniciar os arrays:
  encode: function initCripto(messageValue, deslocValue) {
    let textArray = [];
    let deslocArray = [];
    let textEnd = '';

    /*2) Criar o FOR para percorrer a mensagem do usuário e dar um push com charCodeAt que irá
     devolver o caracter com o seu código(ASC):
    */
    for (let i = 0; msg < messageValue.length; i++) {
      textArray.push(messageValue.charCodeAt(i));
    }
    /*3) Depois de puxar o code, criar o FOR para percorrer esse code e 
    avaliar com IF se ele está entre 65 e 90 (A a Z)
    */
    for (j = 0; j < textArray.length; j++) {
      if (textArray[j] >= 65 && textArray[j] <= 90) {
        /*
        4) Se estiver nestas condições acima, então executa push
         que irá mandar o caracter com o code pra dentro do meu array "textArray" e a fórmula do Daniel será aplicada
        */
        deslocArray.push(((textArray[j] - 65 + deslocValue) % 26) + 65);
      } else if (textArray[j] >= 97 && textoArray[j] <= 122) {
        deslocArray.push((((textArray[j] - 97 + deslocValue) % 26) + 97));
      } else {
        deslocArray.push(textArray[j]);
      }

    }
    for (let h = 0; h < deslocArray.length; h++) {
      textEnd += String.fromCharCode(deslocArray[h]);
    }
    return textEnd;
 } }

export default cipher;






















//1) Fazer uma split(messageValue) e transformar em um array de letras;

//2) Fazer a função de encode;

//3) Fazer a função de decode;

/*
 Observações:
 Como cruzar as letras do alfabeto com as letras da message:
 a) utilizando o charCodeAt
 b) for
 c) if e else

 codigoDaLetraASC - cod1aletra + desloc) % tamDoAlfabeto) + cod1aLetra

 codigoASC => codigo0a25 => desloco => giro => codigoASC
*/




