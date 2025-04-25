class Usuario {
    private _nombree: string;
    private _correoo: string;

    constructor(nombre: string, correo: string) {
        this._nombree = nombre;
        this._correoo = correo;
    }

    get correo(): string {
        return this._correoo;
    }

    set correo(nuevoCorreo: string) {
        if (!nuevoCorreo.includes("@")) {
            throw new Error("Correo inválido");
        }
        this._correoo = nuevoCorreo;
    }
}

class Administrador extends Usuario {
    nivelAcceso: number;

    constructor(nombre: string, correo: string, nivelAcceso: number) {
        super(nombre, correo);
        this.nivelAcceso = nivelAcceso;
    }

    mostrarPermisos(): string {
        if (this.nivelAcceso >= 5) {
            return "Permisos: puede crear, editar, eliminar usuarios.";
        } else {
            return "Permisos: acceso limitado.";
        }
    }
}

const admin = new Administrador("Ana", "ana@correo.com", 5);
console.log(admin.mostrarPermisos()); 
