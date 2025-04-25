class Persona<E,N>{
    public nombre:E;
    public edad:N;
    constructor(nombres:E,edades:N){
        this.nombre=nombres;
        this.edad=edades;
    }
    imprimir():string{
        return `${this.nombre} tiene la edad de: ${this.edad}`;
    }
}
const per= new Persona("lorena",18);
console.log(per.imprimir());
