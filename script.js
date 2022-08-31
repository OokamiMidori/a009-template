// const nome = prompt("Qual é o seu nome?")
// const cor = prompt("Qual a sua cor favorita?")
// const citacao = prompt("Qual a sua citação favorita?")
// const nomeMaiusculo = nome.toUpperCase()

// console.log ("A cor favorita de " + nomeMaiusculo + " é " + cor + " e a sua citação favorita é \"" + citacao + "\".")

// //console.log (`A cor favorita de ${nome} é ${cor}`)

// console.log (`Nome:${nomeMaiusculo} \nCor Favorita:${cor}`)

// console.log (`Quantidade de caractéres é: ${nome.length}`)
// const verificarLetra = nomeMaiusculo.includes("A")
// console.log ("O nome da pessoa tem letra a?: " + verificarLetra)

const nome = prompt("Qual é o seu nome?")
const eMail = prompt("Qual é o seu e-mail?")
const frase = (`O e-mail ${eMail} foi adicionado com sucesso. Seja bem vindo ${nome}!\nO nome de ${nome} tem ${nome.length} letras.`)
const novaFrase =  frase.replaceAll("r","l")
const temCaracter = eMail.includes("@")

console.log (frase)
console.log (`O e-mail de ${nome} possui @? ${temCaracter}`)
console.log (novaFrase)