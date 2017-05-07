export class MonthPlan {
    PlanID: number;
    PlanName: string;
    FromDate: Date;
    ToDate: Date;
    SalesLineID: number;
    LineName: string;
    SpecID: number;
    SpecName: string;
    DrugID: number;
    DrugName: string;
    ImpID: number;
    ImpName: string;
    VisitsNo: number;
}

export class PlanSpecs {
    PlanID: number;
    SpecID: number;
    SpecName: string;
    Checked: boolean;
}

export class PlanDrugs {
    PlanID: number;
    DrugID: number;
    SalesLineID: number;
    DrugName: string;
    Checked: boolean;
}

export class PlanImps {
    PlanID: number;
    ImpID: number;
    ImpName: string;
    Checked: boolean;
}