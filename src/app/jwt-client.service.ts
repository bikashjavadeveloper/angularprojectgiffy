import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request){

  return this.http.post("http://localhost:8081/authenticate",request,{responseType : 'text' as 'json'});

  }

  public welcome(token){
    let tokenStr="Bearer "+token;
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8081/hello-world",{headers,responseType: 'text' as 'json' });
  }
}
