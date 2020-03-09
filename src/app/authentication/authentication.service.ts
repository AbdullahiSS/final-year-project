import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';

export interface AuthenticationResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authChange = new Subject<boolean>();
  user = new Subject<User>();
  private isAuthenticated = false;
  

  constructor(private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) { }
  
 
  registerUser(authData: AuthData) {

    //console.log(this.db.collection("users", ref => ref.where('username', '==', authData.username) ))


    if(authData.isDriver == false && authData.isCustomer == false ){
      console.log('error: choose at least one account type')
      this.isAuthenticated = false;
    }else{
      this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {




        // console.log(this.db.collection("users", ref => ref.where('username', '==', authData.username) ))
      
  
        if(authData.isDriver == true && authData.isCustomer == true ){
          authData.isBoth = true
        }else{authData.isBoth = false}

      this.db.collection('users').doc(authData.username).set({
          username: authData.username,
          email: authData.email,
          isDriver: authData.isDriver,
          isCustomer: authData.isCustomer,
          isBoth: authData.isBoth
      })
      .then(function(d) {
          console.log("Document successfully written!", d);
          console.log()

      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
          this.authSuccessfully();

      })
      .catch(error => {
        console.log(error);
      });
      
    }
    
    
  }


  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.user = null; 
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }


  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/main'])
  }

  // register(email: string, password: string) {
  //   //return the observable so that we know the state of the request
  //   return this.http.
  //   post<AuthenticationResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwqMR0teHe0XZhxQ_Jl97PXDLDuARDoHM' +
  //     environment.firebaseAPIKey,
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     }
  //   ).pipe(
  //     catchError(this.handleError),
  //     tap(resData => {
  //       this.handleAuthentication(
  //         resData.email,
  //         resData.localId,
  //         resData.idToken,
  //         +resData.expiresIn
  //       );
  //     })
  //   );
  // }
  // login(email: string, password: string) {
  //   return this.http
  //     .post<AuthenticationResponseData>(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwqMR0teHe0XZhxQ_Jl97PXDLDuARDoHM' + 
  //       environment.firebaseAPIKey,
  //       {
  //         email: email,
  //         password: password,
  //         returnSecureToken: true
  //       }
  //     )
  //     .pipe(
  //       catchError(this.handleError),
  //       tap(resData => {
  //         this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  // }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // ) 
  // {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   this.user.next(user);
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occurred!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email does not exist.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //       break;
  //   }
  //   return throwError(errorMessage);
  // }
}