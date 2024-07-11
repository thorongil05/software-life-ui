import { Pipe, PipeTransform } from '@angular/core';
import { AcceptanceCriteriaStatus } from './acceptance-criteria';

/**
 * Transforms Acceptance Criteria status into string
 */
@Pipe({ name: 'acceptancecriteriastatus' })
export class AcceptanceCriteriaStatusPipe implements PipeTransform {
  transform(value: AcceptanceCriteriaStatus) {
    if (value == AcceptanceCriteriaStatus.DEFINED) return 'Defined';
    if (value == AcceptanceCriteriaStatus.APPROVED) return 'Approved';
    if (value == AcceptanceCriteriaStatus.DEPLOYED) return 'Deployed';
    if (value == AcceptanceCriteriaStatus.TESTED) return 'Tested';
    return 'Not defined';
  }
}
