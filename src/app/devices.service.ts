import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  pinstatus: BehaviorSubject<any> = new BehaviorSubject(null);

  pinstatus1: BehaviorSubject<any> = new BehaviorSubject(null);
  pinstatus2: BehaviorSubject<any> = new BehaviorSubject(null);
  pinstatus3: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: Http) {}

  getBordStatus() {
    this.http
      .get('http://192.168.1.109:8080/getstatus', '')
      .pipe(map(res => res.json()))
      .subscribe(response => {
        this.pinstatus.next(response);
      });
  }

  fetchPin(id) {
    this.http
      .get('http://192.168.1.109:8080/getstatus', id)
      .pipe(map(res => res.json()))
      .subscribe(response => {
        if (id === 1) {
          this.pinstatus1.next(response);
        } else if (id === 2) {
          this.pinstatus2.next(response);
        } else if (id === 3) {
          this.pinstatus3.next(response);
        }
      });
  }

  async togglePin(id: number) {
    this.http
      .post('http://192.168.1.109:8080/toggle' + id, '')
      .pipe(map(res => res.json()))
      .subscribe(async response => {
        if (response.pinId === 1) {
          this.pinstatus1.next(response.state);
        } else if (response.pinId === 2) {
          this.pinstatus2.next(response.state);
        } else if (response.pinId === 3) {
          this.pinstatus3.next(response.state);
        }
        this.getBordStatus();
        return response;
      });
  }
}
