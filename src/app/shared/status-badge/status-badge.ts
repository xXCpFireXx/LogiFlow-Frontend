import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses()">
      {{ status() }}
    </span>
  `,
  styleUrl: './status-badge.css',
})
export class StatusBadge {
  status = input.required<string>();

  badgeClasses = computed(() => {
    const base = 'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ';
    const colors: Record<string, string> = {
      // Shipments
      'In Transit': 'bg-blue-100 text-blue-600 border-blue-600',
      'Pending': 'bg-amber-100 text-amber-600 border-amber-600',
      'Delivered': 'bg-emerald-100 text-emerald-600 border-emerald-600',
      'Incident': 'bg-red-100 text-red-600 border-red-600',

      // Users
      'Active': 'bg-emerald-100 text-emerald-600 border-emerald-600',
      'Inactive': 'bg-red-100 text-red-600 border-red-600',
    };
    return base + (colors[this.status()] || 'bg-gray-50 text-gray-600 border-gray-100');
  });
}
