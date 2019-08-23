export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    email: string;
    password: string;
    verifyPassword: string;
}
  
export interface TokenResponse {
    token: string;
}