export class Region {
  RegionID: number;
  RegionName: string;
  ProvinceID: string;
}

export class UserRegion {
  RegionID: number;
  UserID: number;
}

export class Schedule {
  DestID: number;
  Destination: string;
  DestType: string;
  Address: string;
  RegionID: number;
  MedSpecID: number;
  VisitImpID: number;
  CreateUser: number;
  ApproveUser: number;
  Approved: boolean;
  RegionName: string;
  ProvinceID: string;
  SpecName: string;
  ImpName: string;
  VisitsNo: number;
  VisitDate: string;
  visCount: number;
  RemVisits: number;
  visLossPercent: number;
  DistManVisits: number;
}

export class WorkRate{
  DayDate: Date;
  visCount: number;
}

export class IMSData {
  IMSID: number;
  IMS: string; 
}