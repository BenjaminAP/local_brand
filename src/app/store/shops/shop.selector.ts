import {IShopState} from './shop.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IShop} from '../../models/i.shop';

export const shopFeaturesSelector = createFeatureSelector<IShopState>('shops');

export const allShops = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.shops,
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

export const totalShopCount = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.totalCount,
)

export const allFilters = createSelector(
  shopFeaturesSelector,
  (state: IShopState) => state.filters,
);
