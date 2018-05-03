import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChanged = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('USER: ', user);
        this.isAuthenticated = true;
        this.authChanged.next(true);
        this.router.navigate(['/training']);
      } else {
        console.log('NO USER');
        this.authChanged.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    const { email, password } = authData;
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(err.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    const { email, password } = authData;
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(err.message, null, 3000);
      });

  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
