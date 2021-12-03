import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdashboardComponent } from './blogdashboard.component';

describe('BlogdashboardComponent', () => {
  let component: BlogdashboardComponent;
  let fixture: ComponentFixture<BlogdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
