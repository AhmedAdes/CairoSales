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

export class rptMedicalRep {
    // UserID INT, UserName NVARCHAR(500), JobClass NVARCHAR(50), Planned INT, CommittedVisits INT, ComVisitPrcnt FLOAT, Customers INT, Logins INT
    UserID: number;
    UserName: string;
    JobClass: string;
    Planned: number;
    CommittedVisits: number;
    ComVisitPrcnt: number;
    Customers: number;
    Logins: number;
}