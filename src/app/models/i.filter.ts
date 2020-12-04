
export interface IFilter {
  type: string;
  active: boolean;
}

export interface IFilter2 {
  store_type: Set<string>;
  attire_type: Set<string>;
  country: Set<string>;
  state: Set<string>;
  city: Set<string>;
}

export interface IFilter3 {
  store_type: IFilter[];
  attire_type: IFilter[];
  country: IFilter[];
  state: IFilter[];
  city: IFilter[];
}

