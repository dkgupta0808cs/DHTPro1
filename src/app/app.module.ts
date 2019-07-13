import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';



// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	StudentListComponent,
	StudentDetailsComponent,
	StudentAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	PhonePipe,
	HighlightStudentDirective,
	HeaderComponent
	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({
		timeOut: 3000,
		positionClass:'toast-top-right',
		preventDuplicates: true
	    }),
	],
	providers: [AuthService,UserService,StudentService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
