import { Component, Input } from '@angular/core';
import { Kitten } from './kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toAdoptKitten: Kitten[] = [

    new Kitten("chat1", "race1", "12/06/2022", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),

    new Kitten("chat2", "race2", "12/06/2022", "https://images.pexels.com/photos/1056252/pexels-photo-1056252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),


  ]

  adoptedKittens: Kitten[] = [];


  title: any;

  

  sendToList(event: Kitten) {

    this.toAdoptKitten.push(event);
  }

  adoptKitten(event: number):void {

    this.adoptedKittens.push(this.toAdoptKitten[event]);
    this.toAdoptKitten.splice(event, 1);

  }
}
