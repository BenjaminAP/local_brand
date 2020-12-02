
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

