import { Component, Input } from '@angular/core';
import { AcceptanceCriteriaGridEntry } from '../model/acceptance-criteria';

@Component({
  selector: 'app-acceptance-criteria-row-detail',
  standalone: true,
  imports: [],
  templateUrl: './acceptance-criteria-row-detail.component.html',
  styleUrl: './acceptance-criteria-row-detail.component.scss',
})
export class AcceptanceCriteriaRowDetailComponent {
  @Input()
  acceptanceCriteriaRow?: AcceptanceCriteriaGridEntry;
}
