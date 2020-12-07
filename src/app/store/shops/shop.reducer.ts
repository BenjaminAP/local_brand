import {IShop} from '../../models/i.shop';
import {
  LOAD_FILTER_TYPE_COMPLETED, LOAD_SHOPS_COMPLETED,
  ShopActions, TOGGLE_FILTER, TOTAL_SHOP_COUNT_LOADED,
} from './shop.action';
import {IFilter, IFilter2, IFilter3} from '../../models/i.filter';

export interface IShopState {
  filters: IFilter[];
  filters3: IFilter3;
  shops: IShop[];
  totalCount: number;
}

/// TODO: add shops list size in DB for pagination purposes.

export const initialState: IShopState = {
  filters: null,
  filters3: null,
  shops: null,
  totalCount: 0,
};

export function shopReducer(state: IShopState = initialState, action: ShopActions): IShopState {

  switch (action.type) {

    case LOAD_FILTER_TYPE_COMPLETED: {

      return {
          ...state,
        filters3: action.payload
        };
      }

    case LOAD_SHOPS_COMPLETED: {
      localStorage.setItem('shops', JSON.stringify(action.payload));

      return {
        ...state,
        shops: action.payload
      };
    }

    case TOGGLE_FILTER: {

      // const newFiltersTemp =  state.filters3[`${action.payload}`].

      console.log('payload', action.payload);
      console.log('Filters', state.filters3);
      // const newFilters = state.filters.map((filter: IFilter) => {
      //   if (filter.type === action.payload) {
      //     return {
      //       type: filter.type,
      //       active: !filter.active
      //     };
      //   }
      //
      //   return filter;
      // });


    /// TODO: action for every filter section for less computation;

      return {
        ...state,
        filters3: {
          country: state.filters3.country,
          state: state.filters3.state,
          city: state.filters3.city,
          attire_type: state.filters3[action.payload.section].map((data: IFilter) => {
            if (data.type === action.payload.filter.type) {
              return {
                type: action.payload.filter.type,
                active: !action.payload.filter.active
              };
            }

            return data;
          }),
          store_type: state.filters3.store_type
        }
      };
    }

    case TOTAL_SHOP_COUNT_LOADED: {
      return {
        ...state,
        totalCount: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
