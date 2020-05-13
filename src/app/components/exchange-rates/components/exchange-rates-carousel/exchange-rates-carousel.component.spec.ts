import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesCarouselComponent } from './exchange-rates-carousel.component';

describe('ExchangeRatesCarouselComponent', () => {
  let component: ExchangeRatesCarouselComponent;
  let fixture: ComponentFixture<ExchangeRatesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRatesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
