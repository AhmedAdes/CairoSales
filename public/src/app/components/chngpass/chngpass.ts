import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User, CurrentUser } from '../../Models';
import { AuthenticationService, UserService } from '../../services';
import { matchingPasswords, matchFieldValue } from '../../pipes/validators';

@Component({
    selector: 'app-changePass',
    templateUrl: './chngpass.html'
})
export class ChngPassComponent implements OnInit {
    constructor(private srvuser: UserService, private auth: AuthenticationService,
        private router: Router, private fb: FormBuilder) {
        this.inputForm = fb.group({
            'OldPass': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
            'UserPass': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
            'ConfPass': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
        })
    }
    currentUser: CurrentUser = this.auth.getUser();
    inputForm: FormGroup;
    model: User = new User();
    errorMessage: string;

    ngOnInit() {
        this.srvuser.getuser(this.currentUser.userID).subscribe(usr => {
            this.model = usr[0]
            this.inputForm.setValidators([matchingPasswords('UserPass', 'ConfPass'), matchFieldValue('OldPass', this.model.UserPass)])
            this.model.UserPass = ''
        })
    }
    SavePassword(event) {
        event.preventDefault();
        this.model.UserPass = this.inputForm.controls['UserPass'].value
        
        this.srvuser.changePass(this.model).subscribe(ret => {
            if (ret.error) {
                this.errorMessage = ret.error.message;
            } else if (ret.affected > 0) {
                this.router.navigate(['login']);
            }
        })
    }
    Back(){
        this.router.navigate(['home/dashboard']);
    }
}