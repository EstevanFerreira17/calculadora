const display = document.querySelector('#content')
const btn = [...document.querySelectorAll('input')];

const impBtn = btn.splice(16, 17)
const signal = btn.splice(10)
console.log(btn)
console.log(impBtn)
console.log(signal)

btn.forEach((elem) => {
    elem.addEventListener('click', function() {
        display.innerHTML += elem.value
    })
})

signal.forEach((n) => {
    n.addEventListener('click', function() {
        
        display.innerHTML += n.value
    })
})

var n1;
var n2;



//APAGAR
impBtn[0].addEventListener('click', () => display.innerHTML = "")


function tratarStr(word) {
    let aux = word.split('')
    console.log(aux)
    let sym = [];
    let nums = aux.filter((n) => {
        if (parseInt(n) >= 0 && parseInt(n) <= 9) {
            return n
        } else {
            sym.push(n)
        }
    })
    console.log(nums)
    
    // for (let [e, i] of aux.entries()) {
    //     if (typeof aux[i+1] === '') 
    // }
}

//EXECUTAR  
let content;
impBtn[1].addEventListener('click', function() {
    let aux = display.innerHTML
    content = tratarStr(aux)
    display.innerHTML //exibir resultado no display
})



