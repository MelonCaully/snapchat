import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBody3Component } from './carousel-body3.component';

describe('CarouselBody3Component', () => {
  let component: CarouselBody3Component;
  let fixture: ComponentFixture<CarouselBody3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBody3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBody3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
