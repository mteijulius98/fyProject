import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-messages',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
  <table  id="dtb" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
      <tr>
          <th>Title</th>
          <th>Sendername</th>
          <th>Message</th>
          <th>Reply</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let view_supervisor of supervisors">
          <td>view_supervisor</td>
          <td>view_supervisor</td>     
      </tr>                              
  </tbody>
</table>
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
