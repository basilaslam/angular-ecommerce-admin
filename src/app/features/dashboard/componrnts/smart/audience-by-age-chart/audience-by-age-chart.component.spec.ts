import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceByAgeChartComponent } from './audience-by-age-chart.component';

describe('AudienceByAgeChartComponent', () => {
  let component: AudienceByAgeChartComponent;
  let fixture: ComponentFixture<AudienceByAgeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceByAgeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceByAgeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
