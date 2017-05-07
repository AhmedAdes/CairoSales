import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactUsService, AuthenticationService } from '../../services';
import { ContactUs, MessageTypes, CurrentUser } from '../../Models';

@Component({
    selector: 'app-cntct',
    templateUrl: './contact.component.html'
})
export class ContactUsComponent implements OnInit {
    inFrm: FormGroup;
    constructor(private srvCont: ContactUsService, private auth: AuthenticationService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'Title': [null, Validators.required],
            'Type': [null, Validators.required],
            'Description': [null, Validators.required]
        })
    }

    currentUser: CurrentUser = this.auth.getUser();
    collection: ContactUs[] = [];
    msgTypeList = MessageTypes
    srchObj: ContactUs = new ContactUs();
    model: ContactUs;
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";

    ngOnInit() {
        if (this.currentUser.jobClass < 1) {
            this.srvCont.getContactUs().subscribe(cols => {
                this.collection = cols;
                this.TableBack();
            })
        } else {
            this.srvCont.getUserContactUs(this.currentUser.userID).subscribe(cols => {
                this.collection = cols;
                this.TableBack();
            })
        }
    }

    CreateNew() {
        this.model = new ContactUs();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Message';
    }

    EditThis(id: number) {
        this.loadDetails(id, 'Edit');
    }
    ShowDetails(id: number) {
        this.loadDetails(id, 'Details');
    }
    Delete(id: number) {
        this.loadDetails(id, 'Delete');
    }
    loadDetails(id, state) {
        this.srvCont.getContactUs(id).subscribe(ret => {
            this.model = ret[0];
            this.showTable = false;
            this.Formstate = state;
            this.headerText = state == 'Details' ? 'Message ' + state : state + ' Message';
        }, err => this.errorMessage = err.message)
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.inFrm.reset();
        this.headerText = 'Contact Us';
        this.errorMessage = null;
    }
    HandleForm(event) {
        event.preventDefault();
        this.model.UserID = this.currentUser.userID
        switch (this.Formstate) {
            case 'Create':
                this.srvCont.InsertContactUs(this.model).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvCont.UpdateContactUs(this.model.ID, this.model).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvCont.DeleteContactUs(this.model.ID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    }
    SortTable(column: string) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        } else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        } else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    }
}