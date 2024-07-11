export interface AcceptanceCriteriaGridEntry {
  name: string;
  status: AcceptanceCriteriaStatus;
  version: string;
}

export enum AcceptanceCriteriaStatus {
  DEFINED,
  APPROVED,
  TESTED,
  DEPLOYED,
}
