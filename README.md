### Input and Output decorator in Angular

Input and Output properties are crucial for communication between parent and child components in Angular.

#### 1. Input Properties (@Input).

Purpose: Allow a parent component to pass data down to a child component.
Decorator: @Input()
Direction: Data flows from parent to child.

Example:

TypeScript
```typescript
// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Message from parent: {{ message }}</p>
    <p>User from parent: {{ user.name }} ({{user.age}})</p>
  `
})
export class ChildComponent {
  @Input() message: string = '';
  @Input() user: {name:string, age:number} = {name:'', age:0};
}

// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child message="Hello from parent!" [user]="userData"></app-child>
    <app-child message="Another message from parent" [user]="anotherUser"></app-child>
  `
})
export class ParentComponent {
  userData = {name: 'John Doe', age: 30};
  anotherUser = {name: 'Jane Smith', age: 25};
}
```
#### In this example:

@Input() message and @Input() user in ChildComponent declare input properties.

In ParentComponent's template:
message="Hello from parent!" sets the message input property using string literal.

[user]="userData" sets the user input property using property binding to the userData object.

#### 2. Output Properties (@Output and EventEmitter).

Purpose: Allow a child component to send data up to a parent component.
Decorator: @Output()
EventEmitter: Used to emit events with data.
Direction: Data flows from child to parent.
Example:

TypeScript
```typescript
// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="sendMessageToParent()">Send Message</button>
  `
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit('Message from child!');
  }
}

// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>Message received from child: {{ receivedMessage }}</p>
  `
})
export class ParentComponent {
  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
```
#### In this example:

@Output() messageEvent = new EventEmitter<string>() in ChildComponent declares an output property that emits string values.

this.messageEvent.emit('Message from child!') emits an event with the message.

(messageEvent)="receiveMessage($event)" in ParentComponent's template listens for the messageEvent and calls the receiveMessage() method, passing the emitted data ($event).

#### Key Differences and Summary:

```
Feature	      Input Property (@Input)	            Output Property (@Output & EventEmitter)
Purpose	       Pass data to child	                   Send data to parent
Decorator      @Input()                              @Output()
Data Flow	     Parent to Child	                     Child to Parent
Mechanism	     Property Binding	                     Event Binding
Usage	         [inputProperty]="parentValue"	       (outputEvent)="parentMethod($event)"
```
Input and Output properties are fundamental concepts for building modular and reusable components in Angular applications. They enable clear communication and data flow between components in a parent-child relationship.
