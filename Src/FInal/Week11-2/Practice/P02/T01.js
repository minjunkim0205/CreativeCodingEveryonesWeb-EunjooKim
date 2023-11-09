function Test(a, b){
    /*Field*/
    this.a = a;
    this.b = b;
    /*Method*/
    this.ans = function(){ // + 과 , 의 차이점과 사용법
        console.log(this.a+this.b);
        console.log(this.a,this.b);
        console.log(this.a+" "+this.b);
    }
}
let test = new Test(10, 2);
test.ans();