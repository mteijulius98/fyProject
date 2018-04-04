import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers} from '@angular/http';
import { LoginServiceService } from "../login-service.service";
@Injectable()
export class StudentServiceService {
  public token=localStorage.getItem("token")
  public currentUser=localStorage.getItem("currentUser")
  private snumber:string=this.currentUser["student_reg_no"]
  constructor(private http:Http,private loginService:LoginServiceService) { }
  public viewSuperVisors(){
  
     let headers=new Headers()
     headers.append('Authorization','jwt '+ this.token)
    return this.http.get('http://localhost:8000/api/student/view_supevisor token= '+ this.token,{headers:headers}).map(
  (res:Response)=>res.json(),
  

  // http://localhost:8000/api/auth/?username=2015-04-02589&password=sabinusi12
      );
  }
 public studentDetails(){
   let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token)
   return this.http.get('http://localhost:8000/api/student/details/'+this.snumber,{headers:headers}).map(
    (res:Response)=>res.json(),
    
  
    // http://localhost:8000/api/auth/?username=2015-04-02589&password=sabinusi12
        );
 }
}