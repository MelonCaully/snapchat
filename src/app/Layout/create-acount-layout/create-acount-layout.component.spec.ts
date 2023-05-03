import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcountLayoutComponent } from './create-acount-layout.component';

describe('CreateAcountLayoutComponent', () => {
  let component: CreateAcountLayoutComponent;
  let fixture: ComponentFixture<CreateAcountLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcountLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
