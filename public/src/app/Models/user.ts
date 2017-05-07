export class User {
  UserID: number;
  UserName: string;
  LoginName: string;
  UserPass: string;
  JobClass: string;
  RequestDate: Date;
  DirectManager: number;
  Approved: boolean;
  ApproveUser: number;
  Email: string;
  Phone: string;
  SalesLineID: number;
  LineName: string;
  DirectManagerName: string;
  IMS: string;
}

export class CurrentUser {
  userID: number;
  UserName: string;
  loginName: string;
  jobClass: number;
  token: string;
  photo: string;
}

export class DestinationUser {
  UserID: number;
  UserName: string;
  SalesLineID: number;
  LineName: string;
  selected: boolean;
}

export class ReplaceUser {
  user1ID: number;
  User1Name: string;
  user2ID: number;
  SalesLineID: number;
}

export class Vacation {
  //VacID, v.FromDate, v.ToDate, v.UserID, u.UserName, u.JobClass, v.VacType, v.Notes, IMS
  VacID: number;
  FromDate: Date;
  ToDate: Date;
  UserID: number;
  UserName: string;
  JobClass: string;
  VacType: string;
  Notes: string;
  IMS: string;
}