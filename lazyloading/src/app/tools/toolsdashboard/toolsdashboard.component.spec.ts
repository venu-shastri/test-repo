import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsdashboardComponent } from './toolsdashboard.component';

describe('ToolsdashboardComponent', () => {
  let component: ToolsdashboardComponent;
  let fixture: ComponentFixture<ToolsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
