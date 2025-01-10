import { Component } from '@angular/core';
import { OutputchildComponent } from '../outputchild/outputchild.component';

@Component({
  selector: 'app-outputparent',
  imports: [OutputchildComponent],
  templateUrl: './outputparent.component.html',
  styleUrl: './outputparent.component.css'
})
export class OutputparentComponent {
  childemessage:string='';
  receiveMessage(mesage:string)
  {
    this.childemessage=mesage;
  }
}
