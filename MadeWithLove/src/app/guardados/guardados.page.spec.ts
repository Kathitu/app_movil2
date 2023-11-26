import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardadosPage } from './guardados.page';

describe('GuardadosPage', () => {
  let component: GuardadosPage;
  let fixture: ComponentFixture<GuardadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
