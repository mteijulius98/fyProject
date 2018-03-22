import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted-report',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
  <table class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
      <tr>
          <th>Group Number</th>
          <th>Tittle</th>
          <th>Sem1Prog</th>
          <th>Sem1Final</th>
          <th>Sem2Prog</th>
          <th>Sem2Final</th>
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
export class SubmittedReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
