import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ClientTable } from './clients-table/clients-table';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { CLIENTS_HEADER, CLIENTS_METRIC_CARDS } from './client.mock';
import { ClientsCard } from './clients-card/clients-card';
import { MetricCardClients, User } from '../models/Clients';
import { Card } from "../shared/card/card";
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  imports: [HeaderMainContent, ButtonGeneric, ClientsCard, Card, ClientTable],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client implements OnInit {

  private clientService = inject(ClientService);

  readonly header = signal(CLIENTS_HEADER);

  users = signal<User[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    this.loadUsers();
  }

  metrics = computed<MetricCardClients[]>(() => {
    const allUsers = this.users();
    const total = allUsers.length;

    // Evitamos división por cero si la lista está vacía
    if (total === 0) {
      return [
        { title: 'Total Clients', value: 0, percentage: 0, isNegative: false },
        { title: 'Active Now', value: 0, percentage: 0, isNegative: false },
        { title: 'Pending Approval', value: 0, percentage: 0, isNegative: false }
      ];
    }

    // 1. Contamos las partes
    const activeCount = allUsers.filter(u => u.status === 'Active').length;
    const pendingCount = allUsers.filter(u => u.status === 'Pending').length;

    // 2. Calculamos los porcentajes de composición
    const activePercent = Math.round((activeCount / total) * 100);
    const pendingPercent = Math.round((pendingCount / total) * 100);

    return [
      {
        title: 'Total Clients',
        value: total,
        percentage: 100, // El total siempre es el 100%
        isNegative: false,
      },
      {
        title: 'Active Now',
        value: activeCount,
        percentage: activePercent, // Ej: "45% del total son activos"
        isNegative: false, // Usualmente verde porque son clientes funcionales
      },
      {
        title: 'Pending Approval',
        value: pendingCount,
        percentage: pendingPercent,
        // Aquí podemos usar una lógica de negocio:
        // Si más del 20% están pendientes, ponlo en rojo (isNegative)
        isNegative: pendingPercent > 20,
      }
    ];
  });

  loadUsers() {
    this.isLoading.set(true);
    this.clientService.getAll().subscribe({
      next: (data) => {
        this.users.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading users', error);
        this.isLoading.set(false);
      }
    });
  }

  onSelectionChange(selected: User[]) {
    console.log('Usuarios seleccionados:', selected);
  }
}
