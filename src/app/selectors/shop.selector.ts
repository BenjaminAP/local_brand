import {ShopState} from "../reducers/stores.reducer";
import {createSelector} from "@ngrx/store";
import {IShop} from "../models/i.shop";

export const selectShops = (state: ShopState) => state.shops;

export const selectAllShops = createSelector(
  selectShops,
  (allShops: IShop[]) => {
    return allShops;
  }

)
