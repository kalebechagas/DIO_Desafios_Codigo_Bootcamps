//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = {
    nome: gets(),
    item: gets(),
    preco: parseFloat(gets()),
};

// JSON do Cliente 2
const cliente2 = {
    nome: gets(),
    item: gets(),
    preco: parseFloat(gets()),
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.

const cliente1Str = JSON.stringify(cliente1);
const cliente2Str = JSON.stringify(cliente2);

//TODO: Imprimir a saída conforme o enunciado deste desafio.
if (cliente1Str === cliente2Str) {
    console.log(`Os pedidos são iguais`);
} else {
    console.log(`Os pedidos são diferentes`);
}
