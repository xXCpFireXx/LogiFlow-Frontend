import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-alerts',
  imports: [],
  templateUrl: './recent-alerts.html',
  styleUrl: './recent-alerts.css',
})
export class RecentAlerts {
  public alerts = [
    {
      type: 'Delay',
      typeClass : 'bg-red-100 text-red-600',
      icon : '🔴',
      shipmentId : 'SHP-2991',
      message : 'Customs clearance hold in Rotterdam',
      date : '2 hours ago',
      action : 'Resolve'
    },
    {
      type: 'Exception',
      typeClass: 'bg-orange-100 text-orange-600',
      icon: '⚠️',
      shipmentId: 'SHP-3022',
      message: 'Address verification failed for recipient',
      date: '5 hours ago',
      action: 'Resolve'
    },
    {
      type: 'Update',
      typeClass: 'bg-blue-100 text-blue-600',
      icon: 'ℹ️',
      shipmentId: 'SHP-1004',
      message: 'Carrier rerouted due to weather',
      date: '1 day ago',
      action: 'Dismiss'
    }
  ]

}
