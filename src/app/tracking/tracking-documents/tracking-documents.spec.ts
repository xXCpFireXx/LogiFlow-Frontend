import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackingDocuments } from './tracking-documents';
import { By } from '@angular/platform-browser';

describe('TrackingDocuments', () => {
  let component: TrackingDocuments;
  let fixture: ComponentFixture<TrackingDocuments>;

  const mockDocs = [
    { name: 'Bill of Lading', format: 'PDF', size: '2.4 MB' },
    { name: 'Invoice', format: 'PDF', size: '1.1 MB' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingDocuments],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingDocuments);
    component = fixture.componentInstance;
    component.docs = mockDocs;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar la cantidad correcta de documentos en el HTML', () => {
    const documentRows = fixture.debugElement.queryAll(By.css('.group'));
    expect(documentRows.length).toBe(2);
  });

  it('debería emitir el evento download cuando se hace clic en un documento', () => {
    // Usamos vi.spyOn porque estamos en Vitest
    const emitSpy = vi.spyOn(component.download, 'emit');

    const firstDocRow = fixture.debugElement.query(By.css('.group'));
    firstDocRow.nativeElement.click();

    // Verificamos que se llamó con los datos correctos
    expect(emitSpy).toHaveBeenCalledWith(mockDocs[0]);
  });
});
