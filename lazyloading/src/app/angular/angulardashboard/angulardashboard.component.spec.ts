import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardashboardComponent } from './angulardashboard.component';

describe('AngulardashboardComponent', () => {
  let component: AngulardashboardComponent;
  let fixture: ComponentFixture<AngulardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulardashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
