const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')

const isPangram = (_S_) => {

    if(_S_ > 1000){
        return 'texto invalido!'
    }

    const textArray = _S_.toLowerCase().split('').filter((element)=> element != ' ')

    const result = alfabeto.filter((item)=>textArray.indexOf(item) == -1)

    console.log(result)

    return !result.length ? 'pongram' : 'not pangram'
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('The quick brown fox jumps over the'))