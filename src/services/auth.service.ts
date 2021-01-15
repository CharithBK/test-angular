import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$: Observable<User>;
  constructor(
  private afAuth: AngularFireAuth,
  private afs: AngularFirestore,
  private router: Router
  )
  {
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user){
    //       return this.afs.doc<User>('users/${user.uid}').valueChanges();
    //     }
    //     else{
    //       return of(null);
    //     }
    //   })
    // );
  }


  authGoogleLogin(): Promise<firebase.auth.UserCredential> {

    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  googleLogout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

}
