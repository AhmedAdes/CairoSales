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

export class rptMedRepWeekly {
    // UserID INT, UserName NVARCHAR(500), JobClass NVARCHAR(50), Day1 INT, Day2 INT, Day3 INT, Day4 INT, Day5 INT, Day6 INT, Day7 INT
    UserID: number;
    UserName: string;
    JobClass: string;
    Day1: number;
    Day2: number;
    Day3: number;
    Day4: number;
    Day5: number;
    Day6: number;
    Day7: number;
}