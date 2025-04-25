class Animal {
    private _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(valor: string) {
        if (valor.trim() === "") {
            throw new Error("El nombre no puede estar vacío");
        }
        this._nombre = valor;
    }
}

class Perro extends Animal {
    raza: string;

    constructor(nombre: string, raza: string) {
        super(nombre);
        this.raza = raza;
    }

    ladrar(): string {
        return `${this.nombre} está ladrando`;
    }
}

const miPerro = new Perro("Firulais", "Labrador");
console.log(miPerro.ladrar());
