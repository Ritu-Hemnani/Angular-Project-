import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexExecutionProfitComponent } from './index-execution-profit.component';

describe('IndexExecutionProfitComponent', () => {
  let component: IndexExecutionProfitComponent;
  let fixture: ComponentFixture<IndexExecutionProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexExecutionProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexExecutionProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
