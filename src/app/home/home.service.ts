import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomeService {
    private baseUrl = environment.serverUrl;
    private url = 'content';
    
    constructor(private http: HttpClient) {}

    getContent(): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${this.url}`);
    }
}