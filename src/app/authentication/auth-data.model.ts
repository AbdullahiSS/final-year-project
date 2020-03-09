export interface AuthData {
    username?: string;
    email: string;
    password: string;
    isDriver: boolean;
    isCustomer: boolean;
    isBoth?: boolean;
}