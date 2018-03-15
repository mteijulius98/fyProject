import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted-report',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor report submitted</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class SubmittedReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
