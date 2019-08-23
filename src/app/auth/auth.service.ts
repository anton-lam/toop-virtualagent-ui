import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { TokenResponse, LoginCredentials, RegisterCredentials } from '../models/auth.model';
import { LocalStorageService } from '../storage/local-storage.service';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    private registerUrl = 'register';
    private allEmailsUrl = 'emails';
    private storageKey = 'access_token';
    
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

    login(credentials: LoginCredentials): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(environment.authUrl, credentials);
    }

    register(credentials: RegisterCredentials): Observable<Object> {
        return this.http.post<TokenResponse>(`${environment.serverUrl}/${this.registerUrl}`, credentials);
    }

    setAuthorizationToken(token: string): void {
        this.localStorage.setItem(this.storageKey, token);
    }
    
    getAuthorizationToken(): string {
        return this.localStorage.getItem(this.storageKey);
    }
    
    removeAuthorizationToken(): void {
        this.localStorage.removeItem(this.storageKey);
    }

    decodeToken(token: string): Object {
        return jwtDecode(token);
    }
    
    getDecodedToken(): Object | false {
        const token = this.getAuthorizationToken();
        return token ? this.decodeToken(token) : false;
    }

    // Checks if the user is logged in
    checkUserIsLoggedIn(): boolean {
        const token = this.getDecodedToken();
        return token ? true : false;
    }

    //gets all users; should really move to users.service.ts
    getAllUsers(): Observable<User[]> {
        return this.http.get<any>(`${environment.serverUrl}/${this.allEmailsUrl}`);
    }
}