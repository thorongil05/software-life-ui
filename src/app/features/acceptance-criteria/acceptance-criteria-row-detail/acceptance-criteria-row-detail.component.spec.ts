import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceCriteriaRowDetailComponent } from './acceptance-criteria-row-detail.component';

describe('AcceptanceCriteriaRowDetailComponent', () => {
  let component: AcceptanceCriteriaRowDetailComponent;
  let fixture: ComponentFixture<AcceptanceCriteriaRowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptanceCriteriaRowDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptanceCriteriaRowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
