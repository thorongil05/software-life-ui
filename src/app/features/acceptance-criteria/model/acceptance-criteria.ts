export interface AcceptanceCriteriaGridEntry {
  name: string;
  status: AcceptanceCriteriaStatus;
  version: string;
  preCondition: string;
  action: string;
  result: string;
}

export enum AcceptanceCriteriaStatus {
  DEFINED,
  APPROVED,
  TESTED,
  DEPLOYED,
}
