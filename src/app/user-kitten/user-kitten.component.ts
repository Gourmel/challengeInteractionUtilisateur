import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input() adoptData: Kitten[] = [];

  adoptedKittens: Kitten[] = [];

  ngOnInit() {
    this.adoptedKittens = this.adoptData;
    console.log(this.adoptedKittens);
    console.log(this.adoptData);
  }

}
