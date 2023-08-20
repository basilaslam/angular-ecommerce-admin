import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsChartComponent } from './new-products-chart.component';

describe('NewProductsChartComponent', () => {
  let component: NewProductsChartComponent;
  let fixture: ComponentFixture<NewProductsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
