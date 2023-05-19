import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Characters list :)
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Jaime",
      power: 100,
    },
    {
      id: uuid(),
      name: "Maider",
      power: 200,
    },
    {
      id: uuid(),
      name: "Anther one",
      power: 300,
    }
  ];

  public onNewCharacter(character: Character): void {
    console.log("Main Page");
    console.log(character);

    //Add id
    const newCharacter: Character = {id: uuid(), ...character}; //... get all the attributes

    this.characters.push(newCharacter);
  }

  public onDeleteCharacter(index: number): void {
    console.log("Main Page");
    this.characters.splice(index, 1);
  }

  public deleteCharacterById(id: string | undefined): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
