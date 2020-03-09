export class User {
  constructor(
    public email: string,
    public id: string,
    public isDriver: boolean,  
    public isCustomer: boolean,
    public isBoth: boolean,
    private _token: string,
    private _tokenExpirationDate: Date
  ) { }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

// export interface User {
//   username: string;
//   email: string;
//   type: 'driver' | 'customer' | null;
// }