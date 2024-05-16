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

let content = '10-10*10+10' //   ['8', '7', '4', '+', '9', '-']
const vFinal = filter(content)
console.log(vFinal)
console.log(operate(vFinal[0], vFinal[1]))




















// filtrado.forEach(elem => {
//     if (parseInt(elem) >= 0 || parseInt(elem) <= 9) {
//         soma += elem
//     } else if (elem === '+') {
//         sym.push(elem)
//         nums.push(parseInt(soma))
//         soma = 0
//     }
    
// });
// console.log(nums)
// function operar(nums, sym, i=0) {
//     let res = 0;
//     if (sym[0] === '+') {
//         res = nums[i] + nums[i+1]
//     }
//     return res
// }
// console.log(operar(nums, sym))