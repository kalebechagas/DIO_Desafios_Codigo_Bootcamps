// Desafio
// O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na promoção com 70% de desconto. Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente calculado e repassado para os vendedores. Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse desconto.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let desconto = parseInt(gets());
let precoSemDesconto = parseInt(gets());

// TODO: Calcular e imprimir (print) o preço com desconto considerando os valores de entrada.

let precoDescontado = parseInt(precoSemDesconto);

let precoComDesconto = parseInt(precoDescontado * (1 - desconto / 100));

console.log(precoComDesconto);
