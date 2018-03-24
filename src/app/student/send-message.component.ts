import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-send-message',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
 
  <div class="container-fluid">

      <div *ngIf="!hide" style="text-align: center;" class="alert alert-info">
      <p>sorry can't acces the service without submit ConceptNote</p>
    </div>
    
     <div class="row" *ngIf="hide">
     <!-- write message -->
       <div class="col-md-5 write " >
            
            <div style="background-color: #dfe3ee;"class="status" >
            <h4 style="text-align: center;padding-top: 5px;height: 30px;"  >message to supervisor</h4>
            
            </div>
       
         <form class="form" style="margin-top: 2px;"  #for="ngForm" (ngSubmit)="sendMessage(for.value)"  >
         <div class="form-group">
         <div class="form-line">
             <textarea rows="5" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
         </div>
     </div>
             <button type="submit" class="btn btn-primary form-control" style="text-align: center;margin-bottom: 5px;color: red;" [disabled]="!for.valid">send</button>
           </form>
           
       </div>
  
       <!-- write message -->
          <!-- free area -->
          <div class="col-md-1"></div>
          <!-- free area -->
       <!-- see message -->
       <div class="col-md-6">
       
          
      </div>
       <!-- see message -->
     </div>
   
  
  
  </div>
</section>
  `,
  styles: [`
  .form{
    margin:5% auto;
  }
  .write{
    box-shadow: 0 0 10px grey;
  }
  .status{
    box-shadow: 0 10px 5px 1px #dfe3ee;
    box-shadow: 0 7px 0 -5px #8A42FF;
    box-shadow: 0 6px 0 -4px #8A42FF;
  }
  `]
})
export class SendMessageComponent implements OnInit {
  private hide:boolean=true;
  private message:any;
  private Studentmessage:any;
  private supervisorname:string;
  constructor(private service:StudentServiceService) { }

  ngOnInit() {
   
 
}
     
 }
 

  


