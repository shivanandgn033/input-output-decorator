import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inputchild',
  imports: [CommonModule,FormsModule],
  templateUrl: './inputchild.component.html',
  styleUrl: './inputchild.component.css'
})
export class InputchildComponent {

  @Input() message:string='';
  @Input() userdetails:{name:string,age:number}={name:'',age:0};
  
}
