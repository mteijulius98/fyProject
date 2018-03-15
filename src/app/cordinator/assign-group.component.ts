import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-group',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Coodinator assign groups</h2>
      </div>
  </div>
</section>
  `,
  styles: [``]
})
export class AssignGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
