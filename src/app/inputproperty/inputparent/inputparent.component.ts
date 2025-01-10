import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputchildComponent } from '../inputchild/inputchild.component';

@Component({
  selector: 'app-inputparent',
  imports: [CommonModule,InputchildComponent], 

  templateUrl: './inputparent.component.html',
  styleUrl: './inputparent.component.css'
})
export class InputparentComponent  {
  messageParent:string='parent meeage';
  userparent:{name:string,age:number}={name: 'John Doe', age: 30};

}
