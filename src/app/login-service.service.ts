import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class LoginServiceService {

  constructor(private http:Http) { }
  
  signin(userid:any,pass:any){
    return this.http.get( "http://localhost:8000/api/auth?/username="+userid+"&password="+pass )
   // http://localhost:8000/api/auth/?username=2015-04-02589&password=sabinusi12
  .map(
    (response:Response)=>{
      const token = response.json().token;
      const base64Url=token.split('.')[1];
      const base64=base64Url.replace('-', '+').replace('-', '/');
      return {token: token, decoded: JSON.parse(window.atob(base64))};
    }
  )
  .do(
    tokenData=> {
      localStorage.setItem('token', tokenData.token);
    }
  );
  }
  getToken(){
    return localStorage.getItem('token');
  }

}
