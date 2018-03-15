import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-concept-note',
  template: `
  <app-cordinator-header></app-cordinator-header>
  <app-cordinator-left></app-cordinator-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Coordinator view concept note</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class ViewConceptNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
