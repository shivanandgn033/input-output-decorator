import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outputchild',
  imports: [CommonModule],
  templateUrl: './outputchild.component.html',
  styleUrl: './outputchild.component.css'
})
export class OutputchildComponent {
 @Output() messageEmts=new EventEmitter<string>();
 
  clieckEvent()
  {
   this.messageEmts.emit("message from child");
  }

}
