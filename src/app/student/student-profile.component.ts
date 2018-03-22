import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This for std-profile</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class StudentProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
