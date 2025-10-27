function idade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}


function multiplo_tres(numero) {
    if (numero % 3 == 0) {
        console.log("Múltiplo de três")
    } else {
        console.log("Não é múltiplo de três")
    }
}

function maior(n1, n2) {
    if (n1 > n2) {
        console.log(`${n1} é maior que ${n2}`)
    } else if (n2 > n1) {
        console.log(`${n2} é maior que ${n1}`)
    } else {
        console.log("Os números têm o mesmo valor")
    }
}

function numero(n) {
    if (n > 0) {
        console.log(`O número ${n} é positivo`)
    } else if (n < 0) {
        console.log(`O número ${n} é negativo`)
    } else {
        console.log("O número é zero")
    }
}

function nota(n) {
    let variavel = n >= 6 ? "Aprovado" : "Reprovado"
    console.log(variavel)
}

function menu(escolha) {
    switch (escolha) {
        case "Início":
            console.log("Aqui está o início do programa")
            break
        case "Ajuda":
            console.log("Como posso ajudar?")
            break
        case "Saída":
            console.log("Saindo do programa")
            break
        default:
            console.log("Essa opção não está disponível")
            break
    }
}

function contar() {
    let i = 0
    while (i < 5) {
        i++
        console.log(i)
    }
}

function regressiva() {
    let i = 10
    do {
        console.log(i)
        i--
    } while (i >= 1)
}

function pares() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

function soma() {
    let tudo = 0
    for (let i = 1; i <= 100; i++) {
        tudo += i
    } console.log(`A soma de 1 até a 100 é: ${tudo}`)
}

function frutas(frutas) {
    frutas = ["Abacaxi", "Maçã", "Banana", "Melão"]
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i])
    }
}

function nomes(nomes) {
    nomes = ["Felipe", "Gustavo", "Guilherme", "Vinicius"]
    for (let nome of nomes) {
        console.log(nome)
    }
}

function objetos() {
    let pessoa = { nome: "Felipe", idade: 18, cidade: "Osasco" }
    for (let prop in pessoa) {
        console.log(`Objeto: ${prop} = ${pessoa[prop]}`)
    }
}

function pular() {
    let i = 0;
    while (i < 5) {
        i++;
        if (i === 3) {
            continue;
        }
        console.log(i)
    }
}

function parar() {
    let i = 0
    while (i < 10) {
        i++
        if (i === 7) {
            break
        }
        console.log(i)
    }
}

function faixa_etaria(idade) {
    if (idade <= 12) {
        console.log("Criança")
    } else if (idade <= 18) {
        console.log("Adolescente")
    } else if (idade <= 59) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }
}

function nomes_tamanho(nomes) {
    nomes = ["Felipe", "Gustavo", "Guilherme", "Vinicius"]
    for (let nome of nomes) {
        console.log(`O nome é: ${nome} e tem ${nome.length} letras`)
    }
}

function lista() {
    let pessoa = { nome: "Felipe", idade: 18, cidade: "Osasco" }
    for (let prop in pessoa) {
        console.log(`Objeto é: ${prop} e o tipo é: ${typeof pessoa[prop]}`)
    }
}

function ehIsograma(palavra) {
    palavra = palavra.toLowerCase();
    const contador = {};
    for (const letra of palavra) {
        if (contador[letra]) {
            return false;
        }
        contador[letra] = 1;
    }
    return true;

}
console.log(ehIsograma("amor"));
console.log(ehIsograma("arara"));
console.log(ehIsograma("Brasil"));


