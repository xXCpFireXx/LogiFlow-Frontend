import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card as CardGeneric } from '../../shared/card/card';

@Component({
  selector: 'app-tracking-documents',
  standalone: true,
  imports: [CommonModule, CardGeneric],
  templateUrl: './tracking-documents.html',
  styleUrl: './tracking-documents.css',
})
export class TrackingDocuments {
  @Input() docs: any[] = [];
  @Output() download = new EventEmitter<any>();

  onDownloadClick(doc: any) {
    this.download.emit(doc); // "Gritamos" el objeto hacia el padre
  }
}
