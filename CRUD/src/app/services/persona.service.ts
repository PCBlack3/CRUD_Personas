import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [];

  constructor() { }

  getAllPersonas(): Persona[] {
    let persona1 = new Persona("Hernan","Borre", 28)
    this.personas.push(persona1)
    this.personas.push(new Persona("Alejandro", "Fantino", 33))
    this.personas.push(new Persona("Ramiro", "Peralta", 35))

    return this.personas
  }

  removePersona(listDePersonas: Persona[], personaToDelete: Persona): Persona[] {
    return listDePersonas.filter(p => p.nombre!== personaToDelete.nombre);
  }

  agregarPersona(persona: Persona){
    this.personas.push(persona);
  } 
    
    
  
}
