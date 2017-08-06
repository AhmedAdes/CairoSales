export class rptIDIStillinProd {
    SemiCode: number;
    CompanyCode: string;
    Company: string;
    ProductName: string;
    BatchNo: string;
    RequiredBox: number;
    RequiredTab: number;
}

export class rptFinishedBalance {
    FinishedCode: number;
    FinProductName: string;
    BatchNo: string;
    SQ: number;
    Unit: string;
    TabPerBlister: number;
    BlisterPerBox: number;
    ManfDate: Date;
    ExpireDate: Date;
    CompanyCode: string;
    Company: string;
}
export class rptQuarantineBalance {
    FinishedCode: number;
    FinProductName: string;
    BatchNo: string;
    ManfDate: Date;
    ExpireDate: Date;
    ProductionType: string;
    SQ: number;
    Unit: string;
    TabPerBlister: number;
    BlisterPerBox: number;
    CompanyCode: string;
    CompanyName: string;
    RequiredBox: number;
}