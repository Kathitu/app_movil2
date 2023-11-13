import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarPage } from './publicar.page';

describe('PublicarPage', () => {
  let component: PublicarPage;
  let fixture: ComponentFixture<PublicarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
