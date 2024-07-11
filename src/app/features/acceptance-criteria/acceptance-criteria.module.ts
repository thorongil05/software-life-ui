import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptanceCriteriaGridComponent } from './acceptance-criteria-grid/acceptance-criteria-grid.component';
import { MatTableModule } from '@angular/material/table';
import { AcceptanceCriteriaStatusPipe } from './model/acceptance-criteria-status-pipe';

@NgModule({
  declarations: [AcceptanceCriteriaGridComponent, AcceptanceCriteriaStatusPipe],
  imports: [CommonModule, MatTableModule],
  exports: [AcceptanceCriteriaGridComponent],
})
export class AcceptanceCriteriaModule {}
