import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor panel</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
