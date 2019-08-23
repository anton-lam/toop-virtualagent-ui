import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenResponse, LoginCredentials, RegisterCredentials } from '../models/auth.model';

@Injectable()
export class AuthService {
    private registerUrl = 'register';
    
    constructor(private http: HttpClient) {}

    login(credentials: LoginCredentials): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(environment.authUrl, credentials);
    }

    register(credentials: RegisterCredentials): Observable<Object> {
        return this.http.post<TokenResponse>(`${environment.serverUrl}/${this.registerUrl}`, credentials);
    }
}