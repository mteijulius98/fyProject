import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-supervisor',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <hr>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This is for view supervisors</h2>

                          </div>
      
  </div>
</section>
  `,
  styles: [
    `
    .block-body{
      background-color: #00BCD5;  
    }
    `
  ]
})
export class ViewSupervisorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
