import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-control',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>System control is on fire</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class SystemControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
