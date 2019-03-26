import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  status = true;

  constructor() { }

  ngOnInit() {
  }

  runTimeChange(e) {
    console.log(e);
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
