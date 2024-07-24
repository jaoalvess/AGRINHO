function comprar() {

const width = 800;
const height = 600;
const left = (screen.width/2) - (width/2)
const top = (screen.height/2) - (height/2)
window.open('pagamento.html', 'Pagamento', `width = $ {width}, height = $ {hight}, top = $ {top}, left =$ {left}`);

 

}
const baseProdutos = [

    { id: 1, name: 'Product 1', price: 10 },

];

function adicionar(produtoId) {
    const produto = baseProdutos.find(p => p.id === produtoId);
    if (produto) {
    let pagar = JSON.parse(localStorage.getItem('pagar')) ||
    
    [];
    
    pagar.push(produto);
    localStorage.setItem('pagar', JSON.stringify(pagar));
    alert('Produto adicionado ao carrinho!');
    }
    }

    function submeter() {
        const nome = document.getElementByld('nome').value;
        const email = document.getElementByld('email').value;
    const telefone = document.getElementByld('telefone').value;
    const endereco = document.getElementByld('endereco').value;
    const cartao = document.getElementByld('cartao').value;
    const cpf = document.getElementByld('cpf').value;
    
      alert(`Obrigado, ${nome}! Seu pagamento com o cartão ${cartao} foi processado.`);  
    
    //window.close(); //rediciona para a pagina inicial
    } 

