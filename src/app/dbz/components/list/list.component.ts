import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteObjectList: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Character[] = [];

  onDeleteCharacter(id: string | undefined): void {
    console.log({id});
    this.onDeleteObjectList.emit(id); //Emit an event?
  }
}
