import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-profile',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor Profile</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class SupervisorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
