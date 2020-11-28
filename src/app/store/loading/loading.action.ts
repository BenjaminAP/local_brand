import {Action} from '@ngrx/store';

export const BEGIN_LOADING = '[load] Begin Loading';
export const STOP_LOADING = '[load] Stop Loading';


export class BeginLoading implements Action {
  public readonly type = BEGIN_LOADING;
}

export class StopLoading implements Action {
  public readonly type = STOP_LOADING;
}

export type LoadingActions =
  BeginLoading
| StopLoading;
