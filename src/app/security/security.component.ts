import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest : any ={
      "userName":"bikash",
      "password":"bikash"
      }
  
response :any;

  constructor(private service:JwtClientService) { }

  ngOnInit(){
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>console.log("Token : "+ data));
    resp.subscribe(data=>this.showMessage(data));

  }

  public showMessage(token){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data);
    console.log(this.response);

  }

}
