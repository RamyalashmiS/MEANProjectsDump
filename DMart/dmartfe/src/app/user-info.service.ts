import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http:HttpClient,private router : Router) {}

  getUserDetails(data: object):Observable<any>{
   return this.http.post<Observable<any>>("http://localhost:1050/login",data);
  }
}
