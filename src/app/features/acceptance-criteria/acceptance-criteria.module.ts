import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptanceCriteriaGridComponent } from './acceptance-criteria-grid/acceptance-criteria-grid.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AcceptanceCriteriaGridComponent],
  imports: [CommonModule, MatTableModule],
  exports: [AcceptanceCriteriaGridComponent],
})
export class AcceptanceCriteriaModule {}
