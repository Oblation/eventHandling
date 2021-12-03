import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts-item-component',
  templateUrl: './contacts-item-component.component.html',
  template: `
  <button (click)="showContactPerson()">Show</button>
`,
  styleUrls: ['./contacts-item-component.component.scss']
})
export class ContactsItemComponentComponent implements OnInit {
  contactPerson = 'Peter'

  @Output() saveContactPerson = new EventEmitter<String>()

  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
