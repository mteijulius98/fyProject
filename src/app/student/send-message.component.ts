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
       
         <form class="" style="margin-top: 2px;"  #for="ngForm" (ngSubmit)="sendMessage(for.value)"  >
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
          <!-- heading  -->
  
           <div style="background-color: #dfe3ee;"class="status" >
              <h4 style="text-align: center;padding-top: 5px;height: 30px;overflow: auto;" >message from supervisor &emsp; <b style="text-decoration: underline; font-style: italic;font-size: 14px;">{{supervisorname}}</b></h4>
              
              
          </div>
          <!-- heading  -->
          <div *ngFor="let item of message,let i=index">
            <div style="box-shadow: 0 0 2px 2px grey;">
              <h5>
                <a type="button" class="badge badge-pill" style="text-align: left;font-style: italic;" data-toggle="collapse" [attr.data-target]="'#'+i" >view
                </a>
                
  
                <b class="pull-right" style="text-align: right;">{{item.creted_at | date : 'shortDate'}}</b>
  
                
              </h5>
              <p [attr.id]="i" class="collapse">{{item.message_from_supervisor}}</p>
              
              
            </div>
          </div>
          
      </div>
       <!-- see message -->
     </div>
   
  
  
  </div>
</section>
  `,
  styles: [`
  
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
 

  


