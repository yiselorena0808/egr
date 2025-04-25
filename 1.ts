interface Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number;
    imprima(): void;
}

class Informac implements Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number|undefined;

    constructor(titulo: string, director: string, año: number) {
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = año;
    }

    imprima(): void {
        if (this.añoEstreno === undefined) {
            console.log(`Título: ${this.titulo}, Director: ${this.director}, Año de estreno: No hay información disponible.`);
        } else {
            console.log(`Título: ${this.titulo}, Director: ${this.director}, Año de estreno: ${this.añoEstreno}`);
        }
    }
}

const peliculita = new Informac("Rosa", "Romeos",2006);
peliculita.imprima(); 

console.log(peliculita); 

