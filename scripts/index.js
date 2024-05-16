class Calculadora {
    constructor(numero1, numero2) {
        if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
            console.log(typeof numero1, typeof numero2)
            throw new Error('Digite apenas numeros')
        }
        this._n1 = numero1;
        this._n2 = numero2;
        this._status = false;
    }

    get status() {
        return this._status
    }

    ligarCalc() {
        this._status = true
        console.log('----calculadora ligada----')
    }

    desligarCalc() {
        this._status = false
        console.log('----calculadora desligada----')
    }

    somar() {
        if (this._status) {
            return this._n1 + this._n2
        }
        return `Calculadora desligada`
    }

    subtrair() {
        if (this._status) {
            return this._n1 - this._n2
        } 
        return `Calculadora desligada`
    }

    multiplicar() {
        if (this._status) {
            return this._n1 * this._n2
        } 
        return `Calculadora desligada`
    }

    dividir() {
        if (this._status) {
            return this._n1 / this._n2
        } 
        return `Calculadora desligada`
    }
}

const calc = new Calculadora(10, 4)
console.log(calc)
calc.ligarCalc()
console.log(calc.dividir())