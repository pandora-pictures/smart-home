import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  password: string;
  cpassword: string;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async Signup() {
    const { username , password , cpassword } = this;
    if (password !== cpassword) {
      return console.error('Password don\'t match');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password) ;
      console.log('User create correctly, ', res);
    } catch (error) {
      console.dir(error);
    }
  }

}
