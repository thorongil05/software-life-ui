import { Component } from '@angular/core';
import {
  AcceptanceCriteriaGridEntry,
  AcceptanceCriteriaStatus,
} from '../model/acceptance-criteria';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-acceptance-criteria-grid',
  templateUrl: './acceptance-criteria-grid.component.html',
  styleUrls: ['./acceptance-criteria-grid.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeigth: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AcceptanceCriteriaGridComponent {
  displayedColumns = ['name', 'status', 'version'];
  dataSource: AcceptanceCriteriaGridEntry[] = [
    {
      name: 'Acceptance Criteria 1',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
      content: 'Test',
    },
    {
      name: 'Acceptance Criteria 2',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
      content: 'test',
    },
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedRow: AcceptanceCriteriaGridEntry | null = null;

  expandRow(row: any) {
    if (this.expandedRow === row) {
      this.expandedRow = null;
    } else {
      this.expandedRow = row;
    }
  }
}
