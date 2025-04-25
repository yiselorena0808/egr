class tresNumeros<S extends number>{
    public a:S;
    public b:S;
    public c:S;
    constructor(aa:S,bb:S,cc:S){
        this.a=aa;
        this.b=bb;
        this.c=cc;
    }
    sumar():number{
         return this.a + this.b + this.c;
    }
}
let num= new tresNumeros(2,6,4);
console.log(num.sumar());