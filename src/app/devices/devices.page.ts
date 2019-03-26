import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  status = true;

  name: string;

  controller_status_1: any;
  controller_status_2: any;
  controller_status_3: any;

  constructor(
    private http: Http
  ) { }

  toogle(e, id) {
    if ( this.controller_status_1 === true) {
      const status = 'off';
      return this.http.post('http://localhost:8080/checkname', { name: 'controller_' + id + '_' + status }).pipe(
        map(res => res.json())
      ).subscribe(response => {
          console.log('POST Response:', response);
          this.controller_status_1 = false;
        });
      } else {
        const status = 'on';
        return this.http.post('http://localhost:8080/checkname', { name: 'controller_' + id + '_' + status }).pipe(
          map(res => res.json())
          ).subscribe(response => {
            console.log('POST Response:', response);
            this.controller_status_1 = true;
      });
    }
  }

  ngOnInit() {

    this.http.get('http://localhost:8080/checkname/' + 'controller_1' ).pipe(
      map(res => res.json())
    ).subscribe(response => {
      console.log( 'response', response);
      if (response === 1) {
        this.controller_status_1 = false;
      } else {
        this.controller_status_1 = true;
      }
      console.dir('GET Response:', response);
    });
    this.http.get('http://localhost:8080/checkname/' + 'controller_2' ).pipe(
      map(res => res.json())
    ).subscribe(response => {
      console.log( 'response', response);
      if (response === 1) {
        this.controller_status_2 = false;
      } else {
        this.controller_status_2 = true;
      }
      console.dir('GET Response:', response);
    });
  }

  runTimeChange(e) {
    console.log(e);
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
    if ( this.controller_status_1 === true) {
      const status = 'off';
      return this.http.post('http://localhost:8080/checkname', { name: 'controller_1_off' }).pipe(
        map(res => res.json())
      ).subscribe(response => {
          console.log('POST Response:', response);
          this.controller_status_1 = false;
        });
      } else {
        const status = 'on';
        return this.http.post('http://localhost:8080/checkname', { name: 'controller_1_on' }).pipe(
          map(res => res.json())
          ).subscribe(response => {
            console.log('POST Response:', response);
            this.controller_status_1 = true;
      });
    }
  }
}
