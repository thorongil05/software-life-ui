import { Component } from '@angular/core';
import {
  AcceptanceCriteriaGridEntry,
  AcceptanceCriteriaStatus,
} from '../model/acceptance-criteria';

@Component({
  selector: 'app-acceptance-criteria-grid',
  templateUrl: './acceptance-criteria-grid.component.html',
  styleUrls: ['./acceptance-criteria-grid.component.scss'],
})
export class AcceptanceCriteriaGridComponent {
  displayedColumns = ['name', 'status', 'version'];
  dataSource: AcceptanceCriteriaGridEntry[] = [
    {
      name: 'Acceptance Criteria 1',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
    },
    {
      name: 'Acceptance Criteria 2',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
    },
  ];
}
