// require() 메소드는 exports 객체를 리턴함
var user = require('./user4');

function showUser() {
    return user.getUser().name + ', ' + 'No Group';
}

console.log('사용자 정보: %s', showUser());