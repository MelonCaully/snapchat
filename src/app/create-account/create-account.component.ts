import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase, private router: Router) {}

  async createAccount(
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
  ) {
    if (password !== confirmPassword) {
      alert("Password does not match.");
      return;
    }

    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if(result.user) {
        await result.user.updateProfile({ displayName: username});

        await this.database.collection('users').doc(result.user.uid).set({
          email: email,
          username: username,
        });
      }
      this.router.navigate(['']);
    } catch (error: any) {
      alert(`Error: ${error.message`)
    }
  }
    
}
