import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-messages',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor std messages</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class StdMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
