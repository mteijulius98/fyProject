import { Component, OnInit,ElementRef,AfterViewInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { ISupervisor } from '../supervisor/supervisor';
// var $ = require('jquery');
// var dt = require('datatables.net');

@Component({
  selector: 'app-view-supervisor',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <hr>
  <section class="content">
  <div class="container-fluid">
  <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>
                                VIEW SUPERVISORS
                            </h2>
                            
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table  id="dtb" class="table table-striped table-bordered" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Experties</th>
                                            <th>Email</th>
                                            <th>Phonenumber</th>
                                            <th>Officenumber</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let view_supervisor of supervisors">
                                            <td>{{view_supervisor.name}}</td>
                                            <td>{{view_supervisor.experties}}</td>
                                            <td>{{ view_supervisor.email}}</td>
                                            <td>{{ view_supervisor.phone_number}}</td>
                                            <td>{{ view_supervisor.ofice_number}}</td>      
                                        </tr> 
                                        <tr>
                                            <td>Bruno Nash</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>38</td>
                                            <td>2011/05/03</td>
                                        </tr>                             
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</section>
  `,
  styles: [
    `
    `
  ]
})
export class ViewSupervisorComponent implements OnInit {
    supervisors:  ISupervisor[];
    errorMessage:string;

    public constructor(private service:StudentServiceService) {
    
    }

  ngOnInit():void {
    this.service.viewSuperVisors().subscribe(
        supervisors => this.supervisors = supervisors,
        error => this.errorMessage = <any>error);
    
  } 
  

  
  }


