import {Action} from '@ngrx/store';
import {IUser} from '../../models/i.user';

export const CHECK_USER_DATA = '[User] Check for user on state';
export const RECEIVE_USER_DATA = '[User] User data';
export const RECEIVE_USER_FAV_SHOPS = '[User] Received fav shops of User from DB';
export const TOGGLE_FAV_SHOP = '[User] Toggle favorite shop';
export const CLEAR_USER_DATA = '[User] Clear User Data';
export const UPLOAD_FAV_SHOPS = '[User] UploadFav Shops';
export const UPDATED_FAV_SHOPS = '[User] Uploaded Fav Shops';
export const DOWNLOAD_FAV_SHOPS = '[User] Download users favorite shops';



export class ReceiveUserFavShops implements Action {
  public readonly type = RECEIVE_USER_FAV_SHOPS;

  constructor(public payload: Set<string>) {}
}

export class CheckForUserData implements Action {
  public readonly type = CHECK_USER_DATA;
}

export class ReceiveUserData implements Action {
  public readonly type = RECEIVE_USER_DATA;

  constructor(public payload: IUser) {}
}

export class UploadFavShops implements Action {
  public readonly type = UPLOAD_FAV_SHOPS;

  constructor(public payload: IUser) {
  }
}

export class UpdatedFavShopsList implements Action {
  public readonly type = UPDATED_FAV_SHOPS;
}

export class DownloadUserFavShops implements Action {
  public readonly type = DOWNLOAD_FAV_SHOPS;

  constructor(public payload: string) {
  }
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
  | DownloadUserFavShops
  | ReceiveUserFavShops
  | ToggleFavShop
  | ReceiveUserData
  | ClearUserData
  | UploadFavShops
  | UpdatedFavShopsList
  | CheckForUserData;
