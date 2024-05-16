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
    let res = vFinalNm[0]
    for (let [i, value] of vFinalSy.entries()) {
        if (value === '+') {
            res += vFinalNm[i+1]
            console.log(res)
        }
        if (value === '-') {
            res -= vFinalNm[i+1]
        }
        if (value === 'x') {
            res *= vFinalNm[i+1]
        }
        if (value === '/') {
            res /= vFinalNm[i+1]
        }
    }
    return res
}

const display = document.querySelector('#content') //tela
const numbers = [...document.querySelectorAll('.num')]; //com numeros
const symbols = [...document.querySelectorAll('.sym')] //com sinais
const btnImp = [...document.querySelectorAll('.imp')]

numbers.forEach((n) => {
    n.addEventListener('click', () => {
        display.innerHTML += `${n.value}`
    })
})

symbols.forEach((s) => {
    s.addEventListener('click', () => { 
        display.innerHTML += s.value
        let a = display.innerHTML.split('')
        let ant = a.length-2
        if (a[ant]==='+'||a[ant]==='-'||a[ant]==='x'||a[ant]==='%') {
            display.innerHTML = a.splice(0, a.length-1).join('')
        }
    })
})
//btnImp[0]//POINT
//CLEAR
btnImp[1].addEventListener('click', () => display.innerHTML='')
//DELETE
btnImp[2].addEventListener('click', () => {
    let aux = display.innerHTML.split('')
    let aux2 = aux.splice(0, aux.length-1).join('')
    display.innerHTML = aux2
})
//EXECUTE (=)
btnImp[3].addEventListener('click', () => {
    const content = display.innerHTML // Retorno do display
    console.log(content)
    const vFinal = filter(content)
    console.log(vFinal)
    display.innerHTML = operate(vFinal[0], vFinal[1])
})




