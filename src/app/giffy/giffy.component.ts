import { Component, OnInit } from '@angular/core';
import { GiffyserviceService } from '../giffyservice.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-giffy',
  templateUrl: './giffy.component.html',
  styleUrls: ['./giffy.component.css']
})
export class GiffyComponent implements OnInit {
   responses:any=[];
   constructor(private giffyService:GiffyserviceService) { }

  ngOnInit(){
    this.getAlltrendingGiffy();
  }

  
  public getAlltrendingGiffy(){
      this.giffyService.getAllGiffy().subscribe(data => {
      this.responses = data;
     });





















    
  }

}
