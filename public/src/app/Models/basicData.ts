export class SalesLine {
  SalesLineID: number;
  LineName: string;
  UserID: number;
  UserName: string;
}

export class Gifts {
  GiftID: number;
  GiftName: string;
}

export class MedSpec {
  SpecID: number;
  SpecName: string;
}

export class VisitImportance {
  ImpID: number;
  ImpName: string;
  VisitsNo: number;
}

export class Drugs {
  DrugID: number;
  DrugName: string;
  Description: string;
  SalesLineID: number;
  LineName: string;
}

export class PromoTools {
  GiftID: number;
  GiftName: string;
  DrugID: number;
  DrugName: string;
  ToolID: number;
  ToolName: string;
}

export class ContactUs {
  ID: number;
  CreateDate: Date;
  UserID: number;
  UserName: string;
  IssueType: string;
  IDescription: string;
  Title: string;
  Solved: boolean;
  SolveDate: Date;
}

export class SurveyQuestion {
  QID: number;
  QText: string;
  Keyword: string;
}

export class SurveyAnswer {
  AnswerID: number;
  QID: number;
  AnswerText: string;
  QText: string;
}

export class VisitAnswers {
  VisitID: number;
  DrugID: number;
  AnswerID: number;
}
