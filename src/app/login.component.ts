import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';



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
                <form #f="ngForm" (ngSubmit)="onSignin(f)" role="form">
                <div class="msg">Sign in to start your session</div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="text"  [(ngModel)]="user.userid" class="form-control" name="student_id" placeholder="id number" maxlength="13" pattern="[0-9]{4}-[0-9]{2}-[0-9]{5}">
                             
                                                        
                                                
           
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" [(ngModel)]="user.password" class="form-control" class="form-control"  placeholder="Password" required  name="pass">
                            </div>
                            
                              
                             
                     </div>
                     
                    <div class="row">
                        <div class="col-xs-8 p-t-5">
                            <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">
                            <label for="rememberme">Remember Me</label>
                        </div>
                        <div class="col-xs-4">
                            <button type="submit" [disabled]="!f.valid" class="btn btn-block bg-pink waves-effect">SIGN IN</button>
                            <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />

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

  constructor(private loginService:LoginServiceService,private router:Router) { }
  user={
	userid:'',
	pass:'',
}

private loginStatus:any;

  ngOnInit() {
  }
  onSignin(){
    this.loginService.signin(this.user.userid, this.user.pass)
    .subscribe(
        
      tokenData =>console.log(tokenData),
     response =>this.router.navigate(['student'])
     
      
     // this.router.navigate(['student'])
    );
  }
}
