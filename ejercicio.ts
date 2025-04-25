class Caja<O>{
    public contenido: O;
    constructor(contenido:O){
        this.contenido=contenido;
    }
    obtenerCntenido():O{
        return this.contenido;
    }

}
const cajita= new Caja<string>("hola");
cajita.obtenerCntenido();