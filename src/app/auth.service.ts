import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';

  currentUser = signal<any>(JSON.parse(localStorage.getItem('user') || 'null'));

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map((users) => {
        if (users.length > 0) {
          const user = users[0];

          this.currentUser.set(user);
          localStorage.setItem('user', JSON.stringify(user));

          return user;
        } else {
          return null;
        }
      }),
    );
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }
}
