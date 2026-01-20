import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSelect } from './input-select';

describe('InputSelect', () => {
  let component: InputSelect;
  let fixture: ComponentFixture<InputSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe emitir toggle cuando se hace click en el menú', () => {
    const toggleSpy = vi.spyOn(component.toggle, 'emit');
    component.toggleMenu();
    expect(toggleSpy).toHaveBeenCalled();
  });

  it('debe emitir la opción seleccionada y cerrar el menú', () => {
    const selectionSpy = vi.spyOn(component.optionSelected, 'emit');
    const opcion = 'Spanish (ES)';

    component.selectOption(opcion);

    expect(component.value).toBe(opcion);
    expect(selectionSpy).toHaveBeenCalledWith(opcion);
  });

  it('debe cerrar el menú si se hace click fuera (HostListener)', () => {
    const toggleSpy = vi.spyOn(component.toggle, 'emit');
    component.isOpen = true;

    // Simulamos un click en el documento fuera del componente
    document.dispatchEvent(new MouseEvent('click'));

    expect(toggleSpy).toHaveBeenCalled();
  });
});
