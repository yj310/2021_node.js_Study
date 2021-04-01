
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다. ');
}

Person.prototype.eat = function(food) {
    console.log(food + '를 맛있게 먹습니다. ');
}

Person.prototype.study = function(time) {
    console.log(time + '시간 동안 공부를 합니다. ');
}

var lyj = new Person('3114이연지', 19);
var kim = new Person('김이름', 17);
var park = new Person('박성함', 31);

console.log(lyj.name + ' 객체의 walk(10)을 호출합니다. ');
lyj.walk(10);

console.log(kim.name + ' 객체의 eat("cake")을 호출합니다. ');
kim.eat("cake");

console.log(park.name + ' 객체의 study(2)을 호출합니다. ');
park.study(2);