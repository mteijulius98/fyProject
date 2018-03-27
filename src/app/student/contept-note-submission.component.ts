import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contept-note-submission',
  template: `
  <app-header></app-header>
  <app-left></app-left>

  <section class="content">
  
  <div class="container-fluid">
      <div class='panel panel-primary' align="center">
    <div  class='panel-heading'>
        {{pageTitle}}
    </div>
    <div class='panel-body'>
     <form>
     <div class="form-group ">
          <div class="row">
          <div class="col-md-8 col-sm-12 ">
            <h5  style="" align="left">working with group ? </h5>
            </div>
            
            <div class='col-md-4 col-sm-6 ' align="right">
            <button type="button" class="btn btn-success waves-effect" data-toggle="modal" data-target="#mdModal">YES</button>
          <span >
          <button type="button" class="btn btn-danger waves-effect ">No</button>
           </span>
           </div>
          
        </div>
     </div>
     <div class="form-group">
     <div class="input-group">
     <label for="proposed title">WRITE YOUR PRPOSED TITLE HERE</label>
     <div class="form-line">
         <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
     </div>
 </div>
 <div class="form-group">
 <label for="proposed title">SELECT YOUR CONCEPT NOTE</label>
 <form action="/" id="frmFileUpload" class="dropzone">
     <div class="dz-message">
         <div class="drag-icon-cph">
             <i class="material-icons">touch_app</i>
         </div> 
     </div>
     <div class="fallback">
         <input name="file" maxFiles=1 type="file" />
     </div>
 </form>
</div>
</div>
 <div class="form-group">
 <label for="email" style="font-size:16px; text-transform: uppercase;word-spacing: 2px;">propose-Supervisor </label>

     <div class="input-group">
       <!-- #supervisor=ngForm -->
          <span class="input-group-addon glyphicon glyphicon-user"></span>
          
          <select class="form-control show-tick" data-show-subtext="true">
          <option data-subtext="French's">Mustard</option>
          <option data-subtext="Heinz">Ketchup</option>
          <option data-subtext="Sweet">Relish</option>
          <option data-subtext="Miracle Whip">Mayonnaise</option>
          <option data-divider="true"></option>
          <option data-subtext="Honey">Barbecue Sauce</option>
          <option data-subtext="Ranch">Salad Dressing</option>
          <option data-subtext="Sweet &amp; Spicy">Tabasco</option>
          <option data-subtext="Chunky">Salsa</option>
      </select>
              <span class="input-group-addon glyphicon glyphicon-user"></span>
       </div>
 </div>
 <button type="submit" class="btn btn-primary center-block"  >Submit</button>
     </form>
   </div>
</div>
<!--Modal Start -->
<div class="modal fade" id="mdModal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 style="text-align: center">CHOOSE 2 GROUP MEMBERS <span class="pull-right"><button type="button" class="close" data-dismiss="modal">&times;</button></span></h5>
        </div>
        <div class="modal-body">
        <table  id="dtb" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Surname</th>
                <th>Registration no</th>
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
        <div class="modal-footer">
            <button type="button" class="btn btn-link waves-effect">SAVE CHANGES</button>
            <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">CLOSE</button>
        </div>
    </div>
</div>
</div>

<!-- Modal End -->

  </div>
</section>
  `,
  styles: [
    `
    .form-group, .txt-area{
    border: 1px solid #ccc;
      padding: 5px;
      border-radius: 5px;
    }
    .dz-message .dropzone{
      height:15px;

    }

           .panel-heading{
      background-color: rgb(45, 163, 218);
    }
    
    `
  ]
})
export class ConteptNoteSubmissionComponent implements OnInit {
  pageTitle = ' OPTIONS TO YOUR CONCEPTNOTE';
  constructor() { }

  ngOnInit() {
  }
}
