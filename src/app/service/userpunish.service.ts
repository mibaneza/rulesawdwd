import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GLOBAL } from "./global";
@Injectable()
export class UserpunishService {
  public url : string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }
   getUsers() : Observable<any>{
    return this._http.get(this.url+'Gaaaaaa')
  }

}
