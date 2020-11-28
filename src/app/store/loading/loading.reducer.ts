import {LoadingActions} from './loading.action';

export interface ILoadingState {
  is_loading: boolean;
}

export const initialState: ILoadingState = {
  is_loading: false
};


export function loadingReducer(state: ILoadingState = initialState, action: LoadingActions): ILoadingState {

  switch (action.type) {

    case '[load] Begin Loading': {
      return {
        ...state,
        is_loading: true
      };
    }

    case '[load] Stop Loading': {
      return {
        ...state,
        is_loading: false
      };
    }

    default:
      return state;

  }
}
