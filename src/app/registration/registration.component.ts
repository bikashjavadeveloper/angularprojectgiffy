import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { GiffyserviceService } from '../giffyservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  userId: number;
  email: string;
  username: string;
  password: string;
  message: any;
  mediaSub: Subscription;
  deviceXs: boolean;


  constructor(public mediaobserver: MediaObserver) { }

  ngOnInit(){
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
         }
    );

   
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();

  }

  

}
