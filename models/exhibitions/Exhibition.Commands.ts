export interface AddConsultantCommand {
  role: ConsultantRole;
  periodTime: PeriodTime;
  advertisementCount: number;
  nardebanCount: number;
  name: string;
  family: string;
  phoneNumber: string;
}
export interface EditConsultantCommand {
  consultantId: string;
  role: ConsultantRole;
  periodTime: PeriodTime;
  advertisementCount: number;
  nardebanCount: number;
  name: string;
  family: string;
}
export enum ConsultantRole {
  manager = "manager",
  employee = "employee",
}

export enum PeriodTime {
  daily = "daily",
  monthly = "monthly",
}

export interface ConsultantDto {
  id: string;
  creationDate: Date;
  role: ConsultantRole;
  userId: string;
  phoneNumber: string;
  exhibitonId: string;
  name: string;
  family: string;
  period: PeriodTime;
  advertisementCount: number;
  nardebanCount: number;
}
