import {IShop} from '../../models/i.shop';
import {LOAD_SHOPS_COMPLETED, ShopActions, TOGGLE_FILTER} from './shop.action';
import {IFilter} from '../../models/i.filter';

export interface IShopState {
  filters: IFilter[];
  shops: Array<IShop[]>;
}

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
  shops: [],
};

export function shopReducer(state: IShopState = initialState, action: ShopActions): IShopState {

  switch (action.type) {
    case LOAD_SHOPS_COMPLETED: {
      return {
        ...state,
        shops: [...state.shops, action.payload]
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

      return {
        ...state,
        filters: newFilters
      };
    }
    default: {
      return state;
    }
  }
}

