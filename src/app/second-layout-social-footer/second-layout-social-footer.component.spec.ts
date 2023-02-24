import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayoutSocialFooterComponent } from './second-layout-social-footer.component';

describe('SecondLayoutSocialFooterComponent', () => {
  let component: SecondLayoutSocialFooterComponent;
  let fixture: ComponentFixture<SecondLayoutSocialFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLayoutSocialFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLayoutSocialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
