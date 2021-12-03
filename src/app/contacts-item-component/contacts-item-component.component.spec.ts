import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsItemComponentComponent } from './contacts-item-component.component';

describe('ContactsItemComponentComponent', () => {
  let component: ContactsItemComponentComponent;
  let fixture: ComponentFixture<ContactsItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
