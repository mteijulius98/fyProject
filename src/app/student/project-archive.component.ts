import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-archive',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This is project archive</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class ProjectArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
