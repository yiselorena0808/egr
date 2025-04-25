class Dispositivo {
    private _encendido: boolean = false;

    get encendido(): boolean {
        return this._encendido;
    }

    set encendido(valor: boolean) {
        this._encendido = valor;
    }
}

class Smartphone extends Dispositivo {
    nivelBateria: number;

    constructor(nivelBateria: number) {
        super();
        this.nivelBateria = nivelBateria;
    }

    necesitaCarga(): boolean {
        return this.nivelBateria < 20;
    }
}

const miTelefono = new Smartphone(15);
miTelefono.encendido = true;
console.log(miTelefono.necesitaCarga());
