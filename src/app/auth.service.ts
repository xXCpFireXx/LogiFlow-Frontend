import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/users';

    register(user: any): Observable<any> {
        return this.http.post(this.apiUrl, user);
    }

    login(email: string, password: string): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
            map(users => {
                if (users.length > 0) {
                    return users[0];
                } else {
                    return null;
                }
            })
        );
    }

    logout() {
        localStorage.removeItem('user');
    }
}
