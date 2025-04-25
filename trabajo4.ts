//4.Implementa una clase Repositorio<T> que almacene elementos de cualquier tipo y tenga métodos para agregar, buscar por índice y eliminar elementos.

class Repositorio<T> {
    private elementos: T[] = [];
    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }
    obtener(indice: number): T | undefined {
        return this.elementos[indice];
    }
    eliminar(indice: number): void {
        if (indice >= 0 && indice < this.elementos.length) {
            this.elementos.splice(indice, 1);
        } else {
            console.log("Índice inválido.");
        }
    }
}

const repo = new Repositorio<string>();
repo.agregar("hola");
repo.agregar("mundo");
console.log(repo.obtener(1));
console.log(repo.eliminar(1));


