import { Injectable } from '@angular/core';
import * as admin from 'firebase-admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly serviceAccount = require('../../localbrands-966b6-firebase-adminsdk-sx76t-2a2500ba4a.json');
  constructor() {

    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
      databaseURL: 'https://localbrands-966b6.firebaseio.com'
    });
  }
}
