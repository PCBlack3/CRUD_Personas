export class Persona {

    nombre: string
    apellido: string
    edad: number

    constructor(nombre: string = "", apellido: string = "", edad: number =0){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    cumplirAnios(): void {
        this.edad++
    }

    reducirAnios(): void {
        this.edad--
    }
}