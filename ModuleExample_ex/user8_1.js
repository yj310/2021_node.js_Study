// 생성자 함수
function User(id, name, mail) {
    this.id = id;
    this.name = name;
    this.mail = mail;
}

User.prototype.getUser = function() {
    return { id: this.id, name: this.name, mail: this.mail };
}

User.prototype.group = {id: 'group1', name: '친구'};

User.prototype.printUser = function() {
    console.log('user 이름: %s, group 이름: %s', this.name, this.group.name);
}

User.prototype.printUserMailAdd = function() {
    console.log('user 이름: %s, group 이름: %s, user 메일: %s 입니다. ', this.name, this.group.name, this.mail);
}

module.exports = new User('3114', '3114이연지', 'yoenjii310@gmail.com');