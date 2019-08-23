import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenResponse, LoginCredentials, RegisterCredentials } from '../models/auth.model';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable()
export class AuthService {
    private registerUrl = 'register';
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
}