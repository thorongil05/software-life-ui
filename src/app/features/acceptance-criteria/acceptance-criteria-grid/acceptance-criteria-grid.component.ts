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
      name: 'Row Detail',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
      preCondition: 'the table with all the acceptance criteria',
      action: 'a user click on a row',
      result: 'the system shows the detail',
    },
    {
      name: 'Acceptance Criteria Modal',
      status: AcceptanceCriteriaStatus.APPROVED,
      version: '0.0.1',
      preCondition: 'the detail row opened',
      action: 'a user click on update button',
      result: 'the system opens a modal to update the criteria',
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
