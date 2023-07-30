const idade = 18
const possuiProbCardiaco = 'não'
const altura = 170
const estudante = 'não'

if ((idade < 12 && idade > 65) || possuiProbCardiaco === "sim" || altura < 150){
    console.log("Acesso Negado!")
} else if (idade >= 18 && estudante === "sim"){
    console.log("Acesso permitiado: 10 Reais")
} else {
    console.log("Acesso permitiado: 20 Reais")
}