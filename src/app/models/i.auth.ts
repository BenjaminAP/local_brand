export interface IAuth {
  connected: boolean | null;
  token: string | null;
  signInProvider: string | null;
  claims: {[key: string]:  any} | null;
}
