import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <p>
      shared lib works!
    </p>
  `,
  styles: [
  ]
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
