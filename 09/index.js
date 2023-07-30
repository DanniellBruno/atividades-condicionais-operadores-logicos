// tipo de pagamento (dinheiro, credito, debito, cheque)
const tipoDePagamento = "cheque"
// valor da mercadoria (em centavos)
const valorDoProduto = 2500

if (tipoDePagamento === "credito"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log("Valor a ser pago R$", valorFinal.toFixed(2))
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.10)
    console.log("Valor a ser pago R$", valorFinal.toFixed(2))
} else if (tipoDePagamento === "cheque"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log("Valor a ser pago R$", valorFinal.toFixed(2))
}