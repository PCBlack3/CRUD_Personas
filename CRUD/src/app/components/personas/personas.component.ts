import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonas();
    //let persona1 = new Persona("Hernan","Borre", 28)
    //this.personas.push(persona1)
    //this.personas.push(new Persona("Alejandro", "Fantino", 33))
    //this.personas.push(new Persona("Ramiro", "Peralta", 35))
  }

  getAllPersonas():void {
    this.personas = this.personaService.getAllPersonas();
  }

  borrarPersonaDeLista(personaParaBorrar:Persona){
    this.personas = this.personaService.removePersona(this.personas, personaParaBorrar)
  }

  agregarPersonaALaLista(persona: Persona): Persona[] {
   this.personas.push(new Persona("persona"))
   return this.personas
  }
}
