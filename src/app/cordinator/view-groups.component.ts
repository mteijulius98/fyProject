import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-groups',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Coodinator view groups</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class ViewGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
