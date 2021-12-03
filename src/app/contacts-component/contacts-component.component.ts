import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  template: `
  <app-contacts-item-component
    (saveContactPerson)="catchCustomEvent($event)"
  ></app-contacts-item-component>
`,
  styleUrls: ['./contacts-component.component.scss']
})
export class ContactsComponentComponent implements OnInit {
  catchCustomEvent(ev: any) {
    console.log(ev)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
