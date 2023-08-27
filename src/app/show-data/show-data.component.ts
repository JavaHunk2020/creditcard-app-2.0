import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../login.model';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  
  //This is used to pass data from parent to child
  @Input()
  bickey:Login[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
