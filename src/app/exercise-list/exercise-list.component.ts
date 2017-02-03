import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  template: `
    <ul>
  <li *ngFor = "let name of _itemList" appUppercase>{{name}}</li>
</ul>
  `,
  inputs:['itemList'],
  styles: []
})
export class ExerciseListComponent implements OnInit {
  _itemList:string[];

  set itemList(itemList:string[]){
       this._itemList=itemList;
  }
  constructor() {
     
   }

  ngOnInit() {
  }

}
