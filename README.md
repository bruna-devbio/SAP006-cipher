# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Definição de layout](#3-definição-de-layout)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Este projeto tem como objetivo o fornecimento de uma aplicação em que, numa situação distópica, membros do partipo opositor ao regime totalitário do Grande Irmão, presente no livro "1984", comunicam-se entre si por meio de mensagens cifradas. Visto que, na distopia o único meio de comunicação permitido pelo governo era o idioma "novafala" que excluia expressões poderosas que poderiam ser utilizadas para questionar o totalitarismo, visando sanar a liberdade de expressão do povo. 

### Interface do usuário (UI)

A interface permite ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

## 3. Definição de layout

Foi definido como plano de fundo, utilizar uma imagem temática. Como escrito, uma frase do livro foi adicionada, com o intuito de recordar o usuário sobre a intenção do regime totálitário atuante. O formulário foi baseado em outras aplicações de Cifra de César.

![layout](https://ik.imagekit.io/dqzqulyog87g/layout-cifra_iHIi7t6kJ.png)






