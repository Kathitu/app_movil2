import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicionperfilPage } from './edicionperfil.page';

describe('EdicionperfilPage', () => {
  let component: EdicionperfilPage;
  let fixture: ComponentFixture<EdicionperfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdicionperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
