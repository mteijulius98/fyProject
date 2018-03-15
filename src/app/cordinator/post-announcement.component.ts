import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-announcement',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Coodinator post</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class PostAnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
