import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses()">
      {{ displayStatus() }}
    </span>
  `,
  styleUrl: './status-badge.css',
})
export class StatusBadge {
  status = input.required<string>();

  displayStatus = computed(() => {
    return this.status().replace(/_/g, ' ');
  });

  badgeClasses = computed(() => {
    const base = 'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ';
    const colors: Record<string, string> = {
      // Shipments
      'PENDING': 'bg-amber-100 text-amber-600 border-amber-600',
      'CREATED': 'bg-purple-100 text-purple-600 border-purple-600',
      'AT_WAREHOUSE': 'bg-cyan-100 text-cyan-600 border-cyan-600',
      'IN_TRANSIT': 'bg-blue-100 text-blue-600 border-blue-600',
      'OUT_FOR_DELIVERY': 'bg-orange-100 text-orange-600 border-orange-600',
      'DELIVERED': 'bg-emerald-100 text-emerald-600 border-emerald-600',
      'INCIDENT': 'bg-red-100 text-red-600 border-red-600',

      // Users
      'Active': 'bg-emerald-100 text-emerald-600 border-emerald-600',
      'Inactive': 'bg-red-100 text-red-600 border-red-600',
    };
    return base + (colors[this.status()] || 'bg-gray-50 text-gray-600 border-gray-100');
  });
}
