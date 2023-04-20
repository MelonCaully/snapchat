import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentsComponent } from './enviroment.component';

describe('EnviromentsComponent', () => {
  let component: EnviromentsComponent;
  let fixture: ComponentFixture<EnviromentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviromentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
