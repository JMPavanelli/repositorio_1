let carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    exibirCarrinho();
}

function exibirCarrinho() {
    const listaCarrinho = document.getElementById('carrinho-lista');
    const totalElement = document.getElementById('total');

    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    // Aqui você pode adicionar a lógica para processar a compra
    alert('Compra finalizada! Obrigado por comprar conosco.');
    carrinho = [];
    exibirCarrinho();
}
