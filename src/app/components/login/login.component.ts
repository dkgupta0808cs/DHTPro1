
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { ValidationService } from '../../services/config/config.service';
import { UserService } from '../../services/user/user.service';
import { routerTransition } from '../../services/config/config.service';
import { ToastrService } from 'ngx-toastr';
import { toastMessageUtil } from 'src/app/utils/toast.message';
import { TOAST_SUCCESS, LOGIN_SUCCESS_MSG, TOAST_ERROR, LOGIN_ERROR_MSG } from 'src/app/constant/config.constant';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {
	private loginForm : FormGroup;
	constructor(private formBuilder: FormBuilder,private router: Router,
		        private toastr: ToastrService,
		        private userService:UserService) { 
		this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ValidationService.emailValidator]],
			password: ['',[Validators.required, ValidationService.passwordValidator]]
		});
	}

	// Check if user already logged in
	ngOnInit() {
		if(localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	// Initicate login
	doLogin(){
		let login = this.userService.doLogin(this.loginForm.value);
		this.success(login);
	}

	// Login success function
	success(data){
		if (data.code == 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			toastMessageUtil.showToastMessage(this.toastr, TOAST_SUCCESS, LOGIN_SUCCESS_MSG);
		}else{
			toastMessageUtil.showToastMessage(this.toastr, TOAST_ERROR, LOGIN_ERROR_MSG);
		}
	}

}
