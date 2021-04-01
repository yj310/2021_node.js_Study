/*
    2장 test 5

    계산기 모듈
    더하기 함수를 모듈로 분리한 calc2.js 모듈 파일을 불러들임
    방법2 : 객체 할당
*/


var calc2 = require('./calc2');
console.log('방법2: 모듈로 분리한 후 - calc2.add 함수 호출 결과: %d', calc2.add(20, 20));
