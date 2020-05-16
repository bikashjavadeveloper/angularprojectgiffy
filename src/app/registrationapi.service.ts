import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationapiService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){

    this.http.get('http:/localhost:8080/');

  }
public accountManagerRegistration(userId: number, email: string,username: string,password: string){

}

}
