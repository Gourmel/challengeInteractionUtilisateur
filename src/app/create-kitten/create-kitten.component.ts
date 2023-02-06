import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kitten } from '../kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  @Output() dataCats: EventEmitter<Kitten> = new EventEmitter();


  //Formulaire réactif de création  de chats à adopter
  addCats: FormGroup = new FormGroup({

    name: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),

  })


  addKittenToApp(): void {

    let kitten = new Kitten(this.addCats.value.name, this.addCats.value.race, this.addCats.value.date, this.addCats.value.image)

    this.dataCats.emit(kitten);
    console.log(this.addCats);
  }

}
