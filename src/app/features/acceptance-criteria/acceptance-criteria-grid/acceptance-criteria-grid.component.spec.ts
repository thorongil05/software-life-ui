import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceCriteriaGridComponent } from './acceptance-criteria-grid.component';

describe('AcceptanceCriteriaGridComponent', () => {
  let component: AcceptanceCriteriaGridComponent;
  let fixture: ComponentFixture<AcceptanceCriteriaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptanceCriteriaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptanceCriteriaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
