import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMeComponent } from './description-me.component';

describe('DescriptionMeComponent', () => {
  let component: DescriptionMeComponent;
  let fixture: ComponentFixture<DescriptionMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
