import { Component, computed, input, output, signal } from '@angular/core';
import { User } from '../../models/Clients';
import { Card } from "../../shared/card/card";
import { CommonModule } from '@angular/common';
import { StatusBadge } from '../../shared/status-badge/status-badge';
import { AppAvatar } from '../../shared/app-avatar/app-avatar';

@Component({
  selector: 'app-clients-table',
  imports: [CommonModule, Card, StatusBadge, AppAvatar],
  templateUrl: './clients-table.html',
})
export class ClientTable {

  users = input.required<User[]>();
  selectionChange = output<User[]>();

  searchTerm = signal('');
  selectedUserIds = signal<Set<string>>(new Set());
  activeDropdownId = signal<string | null>(null);

  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.users().filter(user =>
      user.fullName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.id.toLowerCase().includes(term)
    );
  });

  isAllSelected = computed(() => {
    const visible = this.filteredUsers();
    return visible.length > 0 && visible.every(u => this.selectedUserIds().has(u.id));
  });

  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  toggleSelection(userId: string) {
    this.selectedUserIds.update(set => {
      const newSet = new Set(set);
      newSet.has(userId) ? newSet.delete(userId) : newSet.add(userId);
      return newSet;
    });
    this.emitSelection();
  }

  toggleAll() {
    const allVisible = this.filteredUsers();
    this.selectedUserIds.update(set => {
      const newSet = new Set(set);
      if (this.isAllSelected()) {
        allVisible.forEach(u => newSet.delete(u.id));
      } else {
        allVisible.forEach(u => newSet.add(u.id));
      }
      return newSet;
    });
    this.emitSelection();
  }

  emitSelection() {
    this.selectionChange.emit(this.users().filter(u => this.selectedUserIds().has(u.id)));
  }

  toggleDropdown(id: string, event: Event) {
    event.stopPropagation();
    this.activeDropdownId.update(c => c === id ? null : id);
  }
}
