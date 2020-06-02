import { Component, OnInit } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { JwtClientService } from '../jwt-client.service';
import {FormControl,FormGroup} from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username:string;
  password:string;
  message:any;
  response :any;
  

    login= new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    });

    authRequest : any ={
      "userName":"bikash",
      "password":"bikash"
      }

    

  constructor(private service:JwtClientService) { }

  ngOnInit(){
    }

  loginGiffy(){
    console.log("login giffy"+this.authRequest);
    console.log(this.login.value.username);
    console.log(this.login.value.password);

    let req=new HttpParams();
    req=req.set("username",this.login.value.username);
    req=req.set("password",this.login.value.password);
    console.log(req);
    this.generateToken(this.authRequest);
         
  }

  public generateToken(authRequest){
    let resp=this.service.generateToken(authRequest);
    //resp.subscribe(data=>console.log(data))
    resp.subscribe(data=>this.welcomeGiffy(data));

  }
  public welcomeGiffy(token){

    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data);

  }

   showValues(){
    console.log(this.login.value.username);
  }

}
