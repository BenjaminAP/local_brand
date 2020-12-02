import {IShopState} from './shop.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {IFilter2} from "../../models/i.filter";

export const shopFeaturesSelector = createFeatureSelector<IShopState>('shops');

export const allShops = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.shops,
);

export const allShopsMatrix = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => {
    const stateShopsList = Object.assign([], state.shops);
    const shopMatrix: IShop[][] = [];

    while (stateShopsList != null && stateShopsList.length > 0) {
      shopMatrix.push(stateShopsList.splice(0, 10));
    }

    return shopMatrix;
  },
);

// export const filteredShops = createSelector(
//   shopFeaturesSelector,
// (state : IShopState) => {
//
//       const activeFilters: Array<string> = [];
//       const filteredShopsList = new Set<IShop>();
//
//       state.filters.forEach(f => {
//         if (f.active) {
//           activeFilters.push(f.type);
//         }
//       });
//
//       if (activeFilters.length !== 0) {
//         state.shops.forEach(shop => {
//           activeFilters.forEach(filterType => {
//             if (filterType === shop.store_type || shop.attire_type.find((attire: string) => filterType === attire)) {
//               filteredShopsList.add(shop);
//             }
//           });
//         });
//
//         return filteredShopsList;
//       }
//
//       return state.shops;
//   },
// );

// @ts-ignore
export const totalShopCount = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.totalCount,
);

// @ts-ignore
export const allFilters = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.filters,
);

export const filterTemp = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => {
    //
    // if(state.shops === null){return null}
    //
    // const filterType: IFilter2 = {
    //   attire_type: new Set<string>(),
    //   city: new Set<string>(),
    //   country: new Set<string>(),
    //   state: new Set<string>(),
    //   store_type: new Set<string>()
    // }
    //
    // state.shops.map((shop: IShop) => {
    //   shop.attire_type.forEach(a => (a !== null && a !== '')? filterType.attire_type.add(a) : null);
    //   shop.city.forEach(c => (c !== null && c !== '') ? filterType.city.add(c) : null);
    //   shop.country.forEach(cy => (cy !== null && cy !== '') ? filterType.country.add(cy) : null);
    //   filterType.store_type.add(shop.store_type);
    //   filterType.state.add(shop.state);
    // });

    return state.filters2;
  }
);
