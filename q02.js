const num = [, "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"]


const readHours = (_H_, _M_) => {
    let hour = '';
    if(_M_ > 59 || _H_ > 11 || _M_ < 0 || _H_ < 1){
        hour = 'hora invalida!';

    } else if(_M_ == 0){
        hour = num[_H_]+' horas em ponto';

    } else if(_M_ <= 20){
        hour = num[_H_]+' e '+num[_M_];

    } else if(_M_ > 20 && _M_ < 30){
        const partOneNumber = _M_ - (_M_ % 10);
        const partTwoNumber = _M_ % 10;
        hour = num[_H_]+' e '+num[partOneNumber]+' e '+num[partTwoNumber];

    } else if(_M_ == 30){
        hour = num[_H_]+' e meia';

    } else if(_M_ > 30 && _M_ < 40){
        const numSub = 60 - _M_;
        const partOneNumber = numSub - (numSub % 10);
        const partTwoNumber = numSub % 10;
        hour = num[partOneNumber]+' e '+num[partTwoNumber]+' para as '+num[_H_+1];

    }  else if(_M_ > 30){
        hour = num[(60 - _M_)]+' para as '+num[(_H_ + 1)];
    }

    return hour.charAt(0).toUpperCase() + hour.substring(1);
}

console.log(readHours(5,00))
console.log(readHours(5,01))
console.log(readHours(5,21))
console.log(readHours(5,30))
console.log(readHours(5,38))
console.log(readHours(5,45))
console.log(readHours(11,60))