import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  template: `
  <div class="container-fluid">
  <div class="fp-page">
  <div class="fp-box">
      <div class="logo">
          <a href="javascript:void(0);"></a>
      </div>
      <div class="card">
          <div class="body">
              <form id="forgot_password" method="POST">
                  <div class="msg">
                  RECOVER PASSWORD FROM<small>(FYPMS)</small>
                  </div>
                  <div class="input-group">
                      <span class="input-group-addon">
                          <i class="material-icons">email</i>
                      </span>
                      <div class="form-line">
                          <input type="email" class="form-control" name="email" placeholder="Email" required autofocus>
                      </div>
                  </div>

                  <button class="btn btn-block btn-lg bg-pink waves-effect" type="submit">RESET MY PASSWORD</button>

                  <div class="row m-t-20 m-b--5 align-center">
                      <a [routerLink]="['']">Sign In!</a>
                  </div>
              </form>
          </div>
      </div>
  </div>
  </div>
  </div>
  `,
  styles: [`
  .msg{
    font-family: Courier New;
    font-size:25px;
}
  
  `]
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
