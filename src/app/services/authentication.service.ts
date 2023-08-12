import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth : Auth) { }

  currentUser$ = authState(this.auth);


  LogIn(params: LogIn): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.auth, params.email, params.password)
    );
  }

  Register(params: Register): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.auth, params.email, params.password)
    );
  }

  Logout() {
    return from(this.auth.signOut());
  }
}

type LogIn = {
  email: string;
  password: string;
};

type Register = {
  username: string;
  email: string;
  password: string;
};


