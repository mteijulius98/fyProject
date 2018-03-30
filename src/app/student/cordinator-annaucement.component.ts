import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { ICordinator } from '../cordinator/cordinator';

@Component({
  selector: 'app-cordinator-annaucement',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
  <div class="container-fluid">
     
      <div class="row">
  	<div class="col-md-6 col-md-offset-3 col-xs-12 col-sm-12 tile" >
  		<h3><img src="./../../assets/systemImages/annaucement.jpg" class="img-thumbnail" alt=""></h3>
  	</div>
  </div>
    <!-- row for message datas -->
    
    <!-- end row for message datas -->
  </div>
</section>
  `,
  styles: [
    `
    
    .tile h3 img{
      border:blue 1px groove;
      width: 300px;
      
      max-height: 100%;
      
      }
      .tile h3{
        background-color: blue;
        height: 35px;
  
      }
  
    `
  ]
})
export class CordinatorAnnaucementComponent implements OnInit {
  cordinators:  ICordinator[];
    errorMessage:string;
  constructor(private stService:StudentServiceService) { }

  ngOnInit() {
    
  
} 

}
