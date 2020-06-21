import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiffyserviceService {

constructor(private http:HttpClient) { }

public  getAllGiffy(){


  return this.http.get("http://api.giphy.com/v1/gifs/trending?api_key=ElYcdJcncekhA96T1MihNbIyJOXkl5bV").pipe(map((response: any) => {
    if (response.data.length > 0) {
      return response.data;
    } else {
      return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
    }
  }));


//return  this.http.get("http://api.giphy.com/v1/gifs/trending?api_key=ElYcdJcncekhA96T1MihNbIyJOXkl5bV",{responseType : 'text' as 'json' });
}

public searchGiffyById(){

}

}
