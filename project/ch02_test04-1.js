/*
    2장

    계산기 모듈
    더하기 함수가 들어있는 calc 모듈 중 add 함수를 분리한 경우

    방법1 : 함수 할당
*/



var calc = require('./calc');
console.log('방법1 : 모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
