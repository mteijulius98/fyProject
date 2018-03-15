import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>This is for sendong messages</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class SendMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
