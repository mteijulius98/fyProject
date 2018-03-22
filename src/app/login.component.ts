import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  template: `
  
  <div class="login-page">
    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);">LOG IN TO<small>(FYPMS)</small><b></b></a>
            
        </div>
        <div class="card">
            <div class="body">
                <form id="sign_in" #f="ngForm" (ngSubmit)="onSignin(f)">
                <div class="msg">Sign in to start your session</div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control"  placeholder="id number" maxlength="13" name="id" required  pattern="[0-9]{4}-[0-9]{2}-[0-9]{5}">
                             
                                                        
                                                
           
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" class="form-control" class="form-control"  placeholder="Password" required  name="pass">
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
  

    `
        ],
        
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginServiceService) { }
  user={
	id:'',
	pass:'',
}

private loginStatus:any;

  ngOnInit() {
  }
  onSignin(form: NgForm){
    this.loginService.signin(form.value.id, form.value.password)
    .subscribe(
      tokenData =>console.log(tokenData),
     // response =>alert(response),
      error=>alert('error')
    );
  }
}
