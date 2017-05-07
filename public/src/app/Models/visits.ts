export class Visits {
  VisitID: number;
  VisitDate: Date;
  VisitTime: Date;
  VisitType: string;
  DestID: number;
  UserID: number;
  Destination: string;
  DestType: string;
  Address: string;
  RegionID: number;
  RegionName: string;
  ProvinceID: string;
  SpecName: string;
  ImpName: string;
  VisitsNo: number;
  AccompanyID: number;
  GeneralComment: string;
  UserName: string;
}

export class VisitDrugs {
    VisitID: number;
    DrugID: number;
    DrugName: string;
    Comment: string;
    Gift: string;
}

export class VisitGifts {
    VisitID: number;
    DrugID: number;
    GiftID: number;
    GiftName: string;
    DrugName: string;
    ToolID: number;
    ToolName: string;
    Qty: number;
}

