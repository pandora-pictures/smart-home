import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  status1: boolean;
  status2: boolean;
  status3: boolean;

  obj: any;

  pin1: number;
  pin2: number;
  pin3: number;

  name: string;

  controller_status_1: boolean;
  controller_status_2: boolean;
  controller_status_3: boolean;

  constructor(
    private http: Http,
    private deviceService: DevicesService
  ) { }

  ngOnInit() {

    this.deviceService.selection.subscribe( selection => {
      this.obj = selection;


    });

    this.http.post('http://localhost:8080/getControllers1', '').pipe(
      map(res => res.json())
    ).subscribe(response => {
      this.pin1 = response['pin1'];
      if (this.pin1 === 1 ) {
        this.controller_status_1 = true;
        this.status1 = true;
      } else {
        this.controller_status_1 = false;
        this.status1 = false;
      }
    });

    this.http.post('http://localhost:8080/getControllers2', '').pipe(
      map(res => res.json())
      ).subscribe(response => {
        this.pin2 = response['pin2'];
        if (this.pin2 === 1 ) {
          this.controller_status_2 = true;
          this.status2 = true;
        } else {
          this.controller_status_2 = false;
          this.status2 = false;
      }
    });

    this.http.post('http://localhost:8080/getControllers3', '').pipe(
      map(res => res.json())
    ).subscribe(response => {
      this.pin3 = response['pin3'];
      if (this.pin3 === 1 ) {
        this.controller_status_3 = true;
        this.status3 = true;
      } else {
        this.controller_status_3 = false;
        this.status3 = false;
      }
    });

    }

    toggle( id ) {
      this.http.post('http://localhost:8080/toggle' + id , '').pipe(
        map(res => res.json())
      ).subscribe(response => {

        if (response['pinId'] === 1) {

          if ( response['value'] === 0 && this.controller_status_1 !== false ) {
            this.controller_status_1 = true;
            this.status1 = true;
          } else {
            this.controller_status_1 = false;
            this.status1 = false;
          }

        } else if (response['pinId'] === 2 && this.controller_status_2 !== false) {
          if ( response['value'] === 0 ) {
            this.controller_status_2 = true;
          } else {
            this.controller_status_2 = false;
          }
        } else if (response['pinId'] === 3  && this.controller_status_3 !== false) {
          if ( response['value'] === 0 ) {
            this.controller_status_3 = true;
          } else {
            this.controller_status_3 = false;
          }
        } else {

        }

      });

    this.http.post('http://localhost:8080/getControllers1', '').pipe(
      map(res => res.json())
    ).subscribe(response => {
      this.pin1 = response['pin1'];
      if (this.pin1 === 1 ) {
        this.controller_status_1 = true;
        this.status1 = true;
      } else {
        this.controller_status_1 = false;
        this.status1 = false;
      }
    });

    this.http.post('http://localhost:8080/getControllers2', '').pipe(
      map(res => res.json())
      ).subscribe(response => {
        this.pin2 = response['pin2'];
        if (this.pin2 === 1 ) {
          this.controller_status_2 = true;
          this.status2 = true;
        } else {
          this.controller_status_2 = false;
          this.status2 = false;
      }
    });

    this.http.post('http://localhost:8080/getControllers3', '').pipe(
      map(res => res.json())
    ).subscribe(response => {
      this.pin3 = response['pin3'];
      if (this.pin3 === 1 ) {
        this.controller_status_3 = true;
        this.status3 = true;
      } else {
        this.controller_status_3 = false;
        this.status3 = false;
      }
    });

  }
}
