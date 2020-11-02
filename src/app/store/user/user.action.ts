import {Action} from "@ngrx/store";

export const RECEIVE_USER_DATA_FROM_DB = '[User] User data from DB';
export const TOGGLE_FAV_SHOP = '[User] TOGGLE favorite shop';

export class ReceiveUserData implements Action {
  public readonly type = RECEIVE_USER_DATA_FROM_DB;

  constructor(public payload: string[]) {}
}

/// TODO make store file for user.
export class ToggleFavShop implements Action {
  public readonly type = TOGGLE_FAV_SHOP;

  constructor(public payload: string) {}
}

export type UserActions =
  ReceiveUserData
| ToggleFavShop;
