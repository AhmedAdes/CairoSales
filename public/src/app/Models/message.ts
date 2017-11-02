// import { User } from './user';

export class Message {
  ID: number;
  content: string;
  title: string;
  authorID: number;
  authorName: string;
  // public destination: User;
  createDate: Date;
  expireDate: Date;

  // public constructor(data: any = {}) {
  //   this.content = data.content || '';
  //   this.title = data.title || '';
  //   this.author = data.author || null;
  //   this.destination = data.destination || null;
  //   this.date = data.date || Date.now();
  // }
}
