import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private _http:HttpClient) { }
  createUser(user:any){
    return this._http.post(" http://localhost:3000/users",user)

  }
}
