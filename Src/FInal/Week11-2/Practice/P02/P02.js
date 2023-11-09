function User(name, age){
    /*Field*/
    this.name = name
    this.age = age
    /*Method*/
    this.sayName = function(){
        console.log(this.name+" : "+this.age);
        console.log(this.name,":",this.age);
        console.log(`백틱을 이용한 출력문 : ${this.name} -> ${this.age}`);
    }
}
let user1 = new User("김민준", 20);
user1.sayName();