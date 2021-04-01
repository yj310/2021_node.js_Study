var Calc = require('./calc33');
var calc = new Calc();
calc.emit('start');

calc.emit('calc', '계산기');
calc.emit('vartrans', 'a', 'b');
var a = 20; var b = 10;
console.log('20 + 10 = ' + Calc.prototype.add(a, b));
console.log('20 - 10 = ' + Calc.prototype.sub(a, b));
console.log('20 * 10 = ' + Calc.prototype.mul(a, b));
console.log('20 / 10 = ' + Calc.prototype.mod(a, b));



console.log(Calc.title + '에 이벤트 종료됨');