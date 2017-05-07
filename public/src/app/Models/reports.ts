export class rptSpecVisits {
    SpecID: number;
    SpecName: string;
    visCount: number;
    IMS: string;
    FromDate: Date;
    ToDate: Date;
}

export class rptdrugAnalysis {
    UserID: number;
    UserName: string;
    VisitID: number;
    VisitDate: Date;
    DrugID: number;
    DestID: number;
    Destination: string;
    DestType: string;
    Address: string;
    IMSID: number;
    IMS: string;
    ImpName: string;
    SpecName: string;
    RegionProvince: string;
    Comment: string;
    GiftID: number;
    GiftName: string;
    ToolID: number;
    ToolName: string;
    Qty: number;
}