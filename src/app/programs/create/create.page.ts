import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  WeekDay = [
    {'value' : 'monday'},
    {'value' : 'tusday'},
    {'value' : 'wendday'},
    {'value' : 'thursday'},
    {'value' : 'friday'},
    {'value' : 'saturday'},
    {'value' : 'sunnday'}
  ];
  ProgramsType = [
    {
      'id' : 'stufa',
      'value' : 'stufa',
      'label' : 'Stufa',
      'name' : 'stufa'
    },
    {
      'id' : 'giardino',
      'value' : 'giardino',
      'label' : 'Giardino',
      'name' : 'giardino'
    },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['']);
  }

}
