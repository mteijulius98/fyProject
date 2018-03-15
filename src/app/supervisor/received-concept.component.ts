import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-concept',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor received concept</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class ReceivedConceptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
