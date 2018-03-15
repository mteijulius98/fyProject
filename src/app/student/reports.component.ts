import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This is for reports</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
