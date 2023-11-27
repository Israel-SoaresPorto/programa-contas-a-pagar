const conta = document.querySelector("#conta")
const valor = document.querySelector("#valor")

const form = document.querySelector("form")
const resultado = document.querySelector("#resultado")
const total = document.querySelector("#total")

let resposta = ""
let numContas = 0
let valorTotal = 0

form.addEventListener( 'submit', e => {

    e.preventDefault()

    const nomeConta = conta.value
    const valorConta = parseFloat(valor.value)

    if(nomeConta === "" || valorConta == 0 || isNaN(valorConta)) {
        alert("por favor, digite o nome da conta ou o valor.")
        conta.focus()
        return
    }
    
    numContas++
    valorTotal += valorConta
    
    resposta += `<p class="result-field">
    ${nomeConta} = ${valorConta.toLocaleString("pt-br", {style : "currency" , currency : "BRL"})}</p>`
    resultado.innerHTML = resposta 
    
    total.innerHTML = `<p class="result-field">${numContas} conta(s) - Total: ${valorTotal.toLocaleString("pt-br", {style : "currency" , currency : "BRL"})}</p>`

    conta.value = ""
    valor.value = ""
    conta.focus()
})