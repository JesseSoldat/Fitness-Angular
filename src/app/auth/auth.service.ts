import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthData } from './auth-data.model';


@Injectable()
export class AuthService {

  constructor() {}

  registerUser(authData: AuthData) {

  }

  login(authData: AuthData) {
    console.log(authData);

  }

  logout() {

  }

}
