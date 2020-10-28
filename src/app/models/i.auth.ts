export interface IAuth {
  isNewUser: boolean;
  verified_email: boolean;
  access_token: string;
  provider_id: string;
  refresh_token: string;
}
