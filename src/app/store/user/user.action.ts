import {Action} from '@ngrx/store';
import {IUser} from '../../models/i.user';

export const RECEIVE_USER_DATA = '[User] User data';
export const RECEIVE_USER_FAV_SHOPS = '[User] Received fav shops of User from DB';
export const TOGGLE_FAV_SHOP = '[User] Toggle favorite shop';
export const CLEAR_USER_DATA = '[User] Clear User Data';
export const UPLOAD_FAV_SHOPS = '[User] UploadFav Shops';
export const INIT_LOGIN = '[User] Login';
export const LOGIN_COMPLETED = '[User] Login Completed';
export const LOGOUT = '[User] Logout';
export const LOGOUT_COMPLETED = '[User] Logout Completed';

export class Login implements Action {
  public readonly type = INIT_LOGIN;
}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IUser) {
  }
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export class LogoutCompleted implements Action {
  public readonly type = LOGOUT_COMPLETED;
}

export class ReceiveUserFavShops implements Action {
  public readonly type = RECEIVE_USER_FAV_SHOPS;

  constructor(public payload: Set<string>) {}
}

export class ReceiveUserData implements Action {
  public readonly type = RECEIVE_USER_DATA;

  constructor(public payload: IUser) {}
}

export class UploadFavShops implements Action {
  public readonly type = UPLOAD_FAV_SHOPS;
}

export class ClearUserData implements Action {
  public readonly type = CLEAR_USER_DATA;
}

/// TODO make store file for user.
export class ToggleFavShop implements Action {
  public readonly type = TOGGLE_FAV_SHOP;

  constructor(public payload: string) {}
}

export type UserActions =
  Login
  | LoginCompleted
  | Logout
  | LogoutCompleted
  | ReceiveUserFavShops
  | ToggleFavShop
  | ReceiveUserData
  | ClearUserData
  | UploadFavShops;
