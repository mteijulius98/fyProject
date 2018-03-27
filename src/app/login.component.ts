import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { AlertService } from './alert.service';



@Component({
  selector: 'app-login',
  template: `
  
  <div class="login-page">
    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);"><b></b></a>
            
        </div>
        <div class="card">
            <div class="body">
                <form #f="ngForm" (ngSubmit)="onSignin(f)" role="form">
                <div class="msg">LOG IN TO<small>(FYPMS)</small></div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="text"  [(ngModel)]="user.userid" #userid="ngModel" class="form-control" name="student_id" placeholder="id number" maxlength="13" pattern="[0-9]{4}-[0-9]{2}-[0-9]{5}">
                             
                                                        
                                                
           
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" [(ngModel)]="user.pass" #pass="ngModel" class="form-control" class="form-control"  placeholder="Password" required  name="pass">
                            </div>
                            
                              
                             
                     </div>
                     
                    <div class="row">
                        <div class="col-xs-8 p-t-5">
                            <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">
                            <label for="rememberme">Remember Me</label>
                        </div>
                        <div class="col-xs-4">
                            <button type="submit" [disabled]="!f.valid" class="btn btn-block bg-pink waves-effect">SIGN IN</button>
                            

                            </div>

                    </div>
                    <div class="row m-t-15 m-b--20">
                        <div class="col-xs-6 align-right">
                           <a [routerLink]="['forgetpassword']">Forgot Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>    
 </div>

  `,
  styles: [
    `
  .logo,.msg{
      font-family: Courier New;
      font-size:25px;
  }

    `
        ],
        
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginServiceService,private router:Router,
     private loaderService: LoaderService,  private alertService: AlertService) { }
  user={
	userid:'',
	pass:'',
}

private loginStatus:any;

  ngOnInit() {
    this.loginService.logout();
    //http call starts
    this.loaderService.display(true);
    //http call ends
    this.loaderService.display(false);
  }
  onSignin(){
      
    this.loginService.signin(this.user.userid, this.user.pass)
    .subscribe(
        response => {
            this.router.navigate([response.role]);
            
        },
        error=>{
            alert("sorry u failed to login")
            this.alertService.error(error);
    
          }
       
     
    );
   
  }
}
