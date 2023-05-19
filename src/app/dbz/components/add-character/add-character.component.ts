import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();


  public character: Character = {
    name: "",
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name === "") return; //Validation

    console.log("Add-character emit a event");

    this.onNewCharacter.emit(this.character); //Emit an event?

    this.character = {name: "" , power: 0};
  }
}

