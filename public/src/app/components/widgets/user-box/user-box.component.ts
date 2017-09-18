import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, VisitService, DestinationService, UserService } from '../../../services';
import { User, CurrentUser, NodeUrl } from '../../../Models';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  visCount: number;
  DestCount: number;
  public uploader: FileUploader = new FileUploader({ url: NodeUrl + `User/uploadPhoto/${this.currentUser.userID}`, itemAlias: 'photo' });

  photo: string

  constructor(private auth: AuthenticationService, private router: Router,
    private srvDest: DestinationService, private srvVis: VisitService) {
      // this.photo = this.currentUser.photo ? 'data:image/PNG;base64,' + this.currentUser.photo : './assets/img/avatar5.png'
  }

  public ngOnInit() {
    this.srvDest.getUserChainCount(this.currentUser.userID).subscribe(cont => {
      this.srvVis.getUserVisitsCount(this.currentUser.userID).subscribe(vis => {
        this.DestCount = cont[0].DestCount
        this.visCount = vis[0].visCount

        // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        // overide the onCompleteItem property of the uploader so we are
        // able to deal with the server response.
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          // this.currentUser.photo = item.file
          this.uploader.clearQueue()
        };
      })
    })
  }

  private logout = (): void => {
    // this.router.navigate(['/']);
    this.auth.logout();
  }
}
