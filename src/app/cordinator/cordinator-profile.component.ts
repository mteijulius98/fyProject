import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cordinator-profile',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Coodinator Profile</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class CordinatorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
