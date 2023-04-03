import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-page-application',
  template: `<div><label *ngIf="messageShown">{{text}}</label>
  <br>
  <button class="btn btn-danger" (click)="toggleMessage()">Show Message</button>
  </div>` ,
  styleUrls: ['./simple-page-application.component.css']
})
export class SimplePageApplicationComponent {
  title = 'My Awsome';
  text = 'Label text';
  messageShown = false;

  // toggleMessage(): void {
 // this.messageShown = this.messageShown == true ? false : true;
 // this.messageShown = !this.messageShown;
 // }

 toggleMessage = (): void => {this.messageShown = !this.messageShown;}
}

