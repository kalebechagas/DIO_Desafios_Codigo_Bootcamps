const pedidos = [
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets()),
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets()),
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets()),
    },
];

//TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570

const pedidoProximo = pedidos.reduce((maiorDistancia, pedidoAtual) => {
    if (pedidoAtual.distancia < maiorDistancia.distancia) {
        return pedidoAtual;
    } else {
        return maiorDistancia;
    }
});

//TODO: Imprima a saída de acordo com o enunciado deste desafio.

print(
    `O pedido mais próximo é o de ${pedidoProximo.nome}, do tipo ${pedidoProximo.tipo}`
);
