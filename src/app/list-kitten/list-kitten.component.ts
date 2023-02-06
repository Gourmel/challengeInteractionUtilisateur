import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from 'src/app/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  @Input() kittenData: any;
  @Input() adoptedKittens: Kitten[] = [];
  @Output() adoptedKitten: EventEmitter<any> = new EventEmitter();



  adoptKitten(index: number): void {
    this.adoptedKitten.emit(index);
  }


  constructor() {

  }


}
