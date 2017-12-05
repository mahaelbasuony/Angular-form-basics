import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  languages=['English','Dutch','Other'];
  model =new Employee('maha','elbasuony',true,'w2','English');
   lastNameToUperCase(value:string){
    if(value.length>0){
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    }else
    this.model.lastName = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
