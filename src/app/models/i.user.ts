export interface IUser {
  email: string;
  full_name: string;
  picture: string;
  uid: string;
  fav_shops_ids: Set<string>;
}
