import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-mygroup',
  template: `
   <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor group</h2>
      </div>
  </div>
</section>
  `,
  styles: []
})
export class MygroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
