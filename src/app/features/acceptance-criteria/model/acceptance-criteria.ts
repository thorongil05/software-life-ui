export interface AcceptanceCriteriaGridEntry {
  name: string;
  status: AcceptanceCriteriaStatus;
  version: string;
  content: string;
}

export enum AcceptanceCriteriaStatus {
  DEFINED,
  APPROVED,
  TESTED,
  DEPLOYED,
}
