const primeiroNome = ""
const sobrenome = ""
const apelido = "Super Mario"

const nomeParaExibicao = apelido || (sobrenome && `${primeiroNome} ${sobrenome}`) || primeiroNome
console.log(nomeParaExibicao)