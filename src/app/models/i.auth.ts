export interface IAuth {
  isNewUser: boolean;
  verified_email: boolean;
  provider_id: string;
  connected: boolean;
}
