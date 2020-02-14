import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthenticationResponseData {
  kind: string;
  idToken: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  register(email: string, password: string) {
    //return the observable so that we know the state of the request
    return this.http.post<AuthenticationResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBwqMR0teHe0XZhxQ_Jl97PXDLDuARDoHM',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );

  }
}
