class Coleccion<C extends number>{
    public elementos: C[]=[];
    agregar(valor:C):void{
        this.elementos.push(valor)
    }
    obtener(a:C):C{
        return this.elementos[a];
    }
    obtenerArreglo():C[]{
        return this.elementos;
    }
}
const datos = new Coleccion();
datos.agregar(2);
datos.agregar(3);
datos.agregar(4);
datos.obtener(0);
console.log(datos.obtenerArreglo());