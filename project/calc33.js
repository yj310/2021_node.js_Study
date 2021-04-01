var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Calc = function() {
    /* var self = this; */

    this.on('start', function(){
        console.log('Calc에 start event 전달됨.');
    });

    this.on('calc', function(a){
        console.log('계산기 이벤트 발생함 : ' + a);
    });

    this.on('vartrans', function(a, b){
        console.log('계산기 이벤트 발생함 : ' + a + ', ' + b);
    });


};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
    return a + b;
}
Calc.prototype.sub = function(a, b) {
    return a - b;
}
Calc.prototype.mul = function(a, b) {
    return a * b;
}
Calc.prototype.mod = function(a, b) {
    return a / b;
}

module.exports = Calc;
module.exports.title = 'calculator';

