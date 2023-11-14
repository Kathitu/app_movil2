import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMipublicacionPage } from './detalle-mipublicacion.page';

describe('DetalleMipublicacionPage', () => {
  let component: DetalleMipublicacionPage;
  let fixture: ComponentFixture<DetalleMipublicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleMipublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
