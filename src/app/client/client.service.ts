import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/Clients";

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Obtener uno por ID
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
