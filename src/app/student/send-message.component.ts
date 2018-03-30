import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-send-message',
  template: `
  <app-header></app-header>
  <app-left></app-left>
  <section class="content">
 
  <div class="container-fluid">
  <div class='panel panel-primary' align="center">
  <div class='panel-heading'>
      {{pageTitle}}
  </div>
  <div class="panel-body">
  <form>
  <div class="form-group">
  <div class="form-line">
      <textarea rows="10" class="form-control no-resize auto-growth" placeholder="Please type what you want... And please don't forget the ENTER key press multiple times :)"></textarea>
  </div>
</div>
<button  class="btn btn-primary" type ="submit" style="text-align: center;margin-bottom: 5px;color: red;" [disabled]="!f.valid">Send Message</button>
</form>
     
   </div>
   </div>
  
  
  </div>
</section>
  `,
  styles: [`
  
  
  `]
})
export class SendMessageComponent implements OnInit {
  private hide:boolean=true;
  pageTitle='FOR SENDING MESSAGE';
  private message:any;
  private Studentmessage:any;
  private supervisorname:string;
  constructor(private service:StudentServiceService) { }

  ngOnInit() {
   
 
}
     
 }
 

  


