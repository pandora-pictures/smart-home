import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  selection: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: Http
  ) {

   }

  getBordStatus() {
    // return this.http.post('http://localhost:8080/checkname', { name: 'controller_1' }).pipe(
    //   map(res => res.json())
    // ).subscribe(response => {
    //     console.log('POST Response:', response);
    //     return response;
    //     // this.controller_status_1 = false;
    //   });
  }
}
