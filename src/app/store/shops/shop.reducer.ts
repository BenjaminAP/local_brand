import {IShop} from '../../models/i.shop';
import {
  LOAD_FILTER_TYPE_COMPLETED,
  LOAD_SHOPS_COMPLETED,
  ShopActions,
  TOGGLE_FILTER,
  TOTAL_SHOP_COUNT_LOADED
} from './shop.action';
import {IFilter, IFilter2} from '../../models/i.filter';

export interface IShopState {
  filters: IFilter[];
  filters2: IFilter2;
  shops: IShop[];
  totalCount: number;
}

/// TODO: add shops list size in DB for pagination purposes.

export const initialState: IShopState = {
  filters: [
    {type: 'Boutique', active: false},
    {type: 'Brand', active: false},
    {type: 'Shoes', active: false},
    {type: 'Beachwear', active: false},
    {type: 'Store', active: false},
    {type: 'Lingerie', active: false},
    {type: 'Jewelry', active: false},
    {type: 'Designer', active: false},
    {type: 'Clothing', active: false},
    {type: 'Swimwear', active: false}
  ],
  filters2: null,
  shops: null,
  totalCount: 0,
};

export function shopReducer(state: IShopState = initialState, action: ShopActions): IShopState {

  switch (action.type) {


    case LOAD_FILTER_TYPE_COMPLETED: {

      return {
        ...state,
        filters2: action.payload
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

      const newFilters = state.filters.map((filter: IFilter) => {
        if (filter.type === action.payload) {
          return {
            type: filter.type,
            active: !filter.active
          };
        }

        return filter;
      });

      localStorage.setItem('activeFilters', JSON.stringify(newFilters));

      return {
        ...state,
        filters: newFilters
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

