import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptanceCriteriaGridComponent } from './acceptance-criteria-grid/acceptance-criteria-grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AcceptanceCriteriaStatusPipe } from './model/acceptance-criteria-status-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceptanceCriteriaRowDetailComponent } from './acceptance-criteria-row-detail/acceptance-criteria-row-detail.component';

@NgModule({
  declarations: [AcceptanceCriteriaGridComponent, AcceptanceCriteriaStatusPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AcceptanceCriteriaRowDetailComponent,
  ],
  exports: [AcceptanceCriteriaGridComponent],
})
export class AcceptanceCriteriaModule {}
