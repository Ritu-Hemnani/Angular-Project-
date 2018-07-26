import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTypesFundingComponent } from './index-types-funding.component';

describe('IndexTypesFundingComponent', () => {
  let component: IndexTypesFundingComponent;
  let fixture: ComponentFixture<IndexTypesFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTypesFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTypesFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
