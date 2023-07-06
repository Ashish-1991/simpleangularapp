import { HttpClient,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UservalidationserviceService {

  constructor(private http:HttpClient) { }

  login(){
    return this.http.get('/api/login');
  }
}
