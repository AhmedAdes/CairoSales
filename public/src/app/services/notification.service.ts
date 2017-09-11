import { Injectable } from '@angular/core';
import { ToastrService, Toast } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToastrService) { }

  public success = (body: string, title = 'Operation successful'): void => {
    this.toastr.success( body, title );
  }

  public error = (body: string, title = 'An error occured'): void => {
    this.toastr.error( body, title );
  }

  public warning = (body: string, title = 'Something went wrong'): void => {
    this.toastr.warning( body, title );
  }
}
