function filter(word) {
    let arr = word.split('')
    let soma = [];
    let nums = [];
    let sym = []
    for (let [i, valor] of arr.entries()) {
        if (!isNaN(valor)) {
            soma.push(valor)
        } else {
            //quando valor é simbolo, manda os n°s anteriores pro Nums com join()
            nums.push(soma.join())
            soma = []
            sym.push(valor)
        }
        //num puxa o ultimo numero
        if (i === arr.length -1 ) {
            nums.push(soma.join())
        }
    }
    return [transformNum(nums), sym]
}

function transformNum(values) {
    let soma=0;  
    let res = []
    for (let vl of values) {
        let aux = vl
        .split('')
        .forEach((elem) => {
            if (!isNaN(elem)) {  
                soma += elem
            }
        })
        res.push(parseInt(soma))
        soma=0
    }
    return res
}

function operate(vFinalNm, vFinalSy) {
    console.log(vFinalNm);  console.log(vFinalSy)
    
    let res = vFinalNm[0]

    for (let [i, value] of vFinalSy.entries()) {
        if (value === '+') {
            res += vFinalNm[i + 1]
            console.log(res)
        }
        if (value === '-') {
            res -= vFinalNm[i + 1]
        }
        if (value === '*') {
            res *= vFinalNm[i + 1]
        }
    }
    return res
}

// let content = '10-10*10+10' //   ['8', '7', '4', '+', '9', '-']
// const vFinal = filter(content)
// console.log(vFinal)
// console.log(operate(vFinal[0], vFinal[1]))


const display = document.querySelector('#content') //tela
const numbers = [...document.querySelectorAll('.num')]; //com numeros
const symbols = [...document.querySelectorAll('.sym')] //com sinais
const btnImp = [...document.querySelectorAll('.imp')]

console.log(numbers)
console.log(symbols)
console.log(btnImp)

numbers.forEach((n) => {
    n.addEventListener('click', () => display.innerHTML += `${n.value}`)
})

symbols.forEach((n) => {
    n.addEventListener('click', () => {
        display.innerHTML += `${n.value}`
    })
})

//btnImp[0]     //PONTO
//btnImp[1]     //PARÊNTESES

                //DELETE
btnImp[2].addEventListener('click', () => {
    let aux = display.innerHTML.split('')
    let aux2 = aux.splice(0, aux.length-1).join('')
    display.innerHTML = aux2
})

btnImp[3].addEventListener('click', () => {
    const content = display.innerHTML // Retorno do display
    console.log(content)
    const vFinal = filter(content)
    console.log(vFinal)
    display.innerHTML = operate(vFinal[0], vFinal[1])
})





