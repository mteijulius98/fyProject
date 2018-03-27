import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class LoginServiceService {

  constructor(private http:Http) { }
  
  signin(userid:any,pass:any){
    return this.http.get( "http://localhost:8000/api/auth?username="+userid+"&password="+pass )
   // http://localhost:8000/api/auth/?username=2015-04-02589&password=sabinusi12
   .map((response: Response) => {
    // login successful if there's a jwt token in the response
    let user = response.json();
    if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
   });

  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
getToken(){
  return localStorage.getItem('currentUser');
}

}
