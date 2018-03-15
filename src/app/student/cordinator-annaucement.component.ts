import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../Layout/header.component';

@Component({
  selector: 'app-cordinator-annaucement',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This is for Announcements</h2> 
      </div>
  </div>
</section>
  `,
  styles: [
    `
    `
  ]
})
export class CordinatorAnnaucementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
