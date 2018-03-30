import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers} from '@angular/http';
import { LoginServiceService } from "../login-service.service";
@Injectable()
export class StudentServiceService {
   
  constructor(private http:Http,private loginService:LoginServiceService) { }
  public token=localStorage.getItem("token")
  
  public viewSuperVisors(){
  
     let headers=new Headers()
     headers.append('Authorization','jwt '+ this.token)
    return this.http.get('http://localhost:8000/api/student/view_supevisor token= '+ this.token,{headers:headers}).map(
  (res:Response)=>res.json(),
  

  // http://localhost:8000/api/auth/?username=2015-04-02589&password=sabinusi12
      );
  }

}