import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTestimonialComponent } from './index-testimonial.component';

describe('IndexTestimonialComponent', () => {
  let component: IndexTestimonialComponent;
  let fixture: ComponentFixture<IndexTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
