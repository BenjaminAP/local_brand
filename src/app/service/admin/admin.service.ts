import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {auth} from 'firebase';
import {Store} from "@ngrx/store";
import {SaveFiltersType} from "../../store/shops";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private afAuth: AngularFireAuth, private store: Store) { }

    isAdmin(): Observable<boolean> {
      return this.afAuth.idTokenResult.pipe(
        map((tokenData: auth.IdTokenResult) => {

          if (tokenData === null || !tokenData.claims['admin']) {
            return false;
          }

          return tokenData.claims['admin'];
        })
      );
    }

    updateFilterTypes(): void {
    this.store.dispatch(new SaveFiltersType())
    }
}
