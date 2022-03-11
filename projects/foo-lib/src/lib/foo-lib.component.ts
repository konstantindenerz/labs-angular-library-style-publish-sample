import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-foo-lib',
  template: `
    <p>
      foo-lib works!
    </p>
  `,
  styleUrls: ['foo-lib.component.scss']
})
export class FooLibComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
