import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {


  ShowContantsList() {
    console.log('some text');
  }

  showContacts(ev:any) {
    console.log(ev.target)
    console.log(ev.target.value) //в данном случае undefined
    console.log(ev.keyCode) //в данном случае undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
