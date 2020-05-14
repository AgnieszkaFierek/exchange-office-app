import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeChartsComponent } from './exchange-charts.component';

describe('ExchangeChartsComponent', () => {
  let component: ExchangeChartsComponent;
  let fixture: ComponentFixture<ExchangeChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
