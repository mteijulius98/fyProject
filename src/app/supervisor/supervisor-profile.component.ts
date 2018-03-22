import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-profile',
  template: `
  <app-supervisor-header></app-supervisor-header>
  <app-supervisor-left></app-supervisor-left>
  <section class="content">
  <div class="container-fluid">
      <div class="block-header">
          <h2>Supervisor Profile</h2>
      </div>
      <!-- Pie Chart -->
      <div class="col-md-1"></div>
      <div class="col-md-4" style="box-shadow: 0 0 10px grey;">
       <ul class="list-group">
         <li class="list-group-item" style="background-color: #dfe3ee;text-align: center;">MY PROFILE</li>
         <li class="list-group-item" style="text-align: center;">
           <img src="./assets/systemImages/st.jpg" class="center-block img-rounded" width="100" height="100" *ngIf="!picUrl" alt="" (click)="imageClick()">
           <img src="{{picUrl}}" alt="" class="center-block "  width="100" height="100" *ngIf="picUrl" (click)="imageClick()">
           </li>
           
           <table class="table-bordered" width="100%" style="text-align: center;">
             
               <tr>
               <td><p>name</p></td>
               <td>
                 <p class="nam" *ngIf="!showForm">{{name}}</p>
                 <form action="" style="display: inline-flex;" #mi="ngForm" (ngSubmit)="updateName(mi.value)" *ngIf="showForm">
                   <input type="text"   required="" placeholder="{{name}}" name="firstname" class="bo inp" ngModel><span><button type="submit" class="bo inp" >UPDATE</button></span>
                 </form>
                 
               </td>
               </tr>
               
               <tr>
                 <td><p>email</p></td>
                 <td>
                   <p class="nam"  *ngIf="!showForm">{{email}}</p>
                   
                   <form #f="ngForm" (ngSubmit)="updateMail(f.value)" style="display: inline-flex;" *ngIf="showForm">
                      
                     <input type="email" class="bo inp"  placeholder="{{email}}" name="email" required ngModel >
                     <button [disabled]="!f.valid" class="bo inp" type="submit" >UPDATE</button>
                   </form>
                 </td>
               </tr>
               <tr>
                 <td><p>phone number</p></td>
                 <td>
                   <p class="nam"  *ngIf="!showForm">{{phoneNO}}</p>
                   
                   <form #f="ngForm" (ngSubmit)="updatePhone(f.value)" style="display: inline-flex;" *ngIf="showForm">
                      
                     <input type="phone" class="bo inp"  placeholder="{{phoneNO}}" name="phoneN" required ngModel >
                     <button [disabled]="!f.valid" class="bo inp" type="submit" >UPDATE</button>
                   </form>
                 </td>
               </tr>
             <tr>
               <td>
                 <p>experties</p>
               </td>
               <td>
              
                <p class="nam"   *ngIf="!showForm" >{{experties}}</p>
                
                <form #f="ngForm" (ngSubmit)="updateExpert(f.value)" style="display: inline-flex;" *ngIf="showForm">
                   
                  <input type="text" class="bo inp"  placeholder="{{experties}}" name="expert" required ngModel >
                  <button [disabled]="!f.valid" class="bo inp" type="submit" >UPDATE</button>
                </form>
              
             </td>
           </tr>
             <tr>
               <td>
                 <p>officeNumber</p>
               </td>
               <td>
              
                <p class="nam"    *ngIf="!showForm" >{{officeNo}}</p>
                
                <form #f="ngForm" (ngSubmit)="updateOfficeNumber(f.value)" style="display: inline-flex;" *ngIf="showForm">
                   
                  <input type="text" class="bo inp"  placeholder="{{officeNo}}" name="officeNo" required ngModel >
                  <button [disabled]="!f.valid" class="bo inp" type="submit" >UPDATE</button>
                </form>
              
             </td>
           </tr>
             
           </table>
         
         <li class="list-group-item">
           <a (click)="changePass()"> <i>change password?</i></a> 
           <img class="pull-right" src="./assets/systemImages/pen.jpg" width="50" height="18" alt="edit" (click)="changeDisplay()">
 
         </li>
       </ul>
      </div>
    
                <!-- #END# Pie Chart -->
  </div>
</section>
  `,
  styles: []
})
export class SupervisorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
