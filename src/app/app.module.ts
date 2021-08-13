import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms'
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';


import { RepeatTypeComponent } from './formly-types/repeat-type.formly.component'
import { NoRepeatTypeComponent } from './formly-types/no-repeat-type.formly.component'
import { FormlyFieldButton } from './formly-types//button-type.component'
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { GuardGuard } from './components/autentificacion/guard.guard';
import { SignOutComponent } from './components/autentificacion/sign-out/sign-out.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export function validateRequired(err, field: FormlyFieldConfig) {
	return `${field.key} es requerido`
}
export function validateMinLength(err, field: FormlyFieldConfig) {
	return `Mínimo ${field.templateOptions.minLength} caracteres son requeridos`
}
export function validateMaxLength(err, field: FormlyFieldConfig) {
	return `Máximo ${field.templateOptions.maxLength} caracteres son requeridos`
}
export function validateMin(err, field: FormlyFieldConfig) {
	return 'El valor mínimo es ' + field.templateOptions.min
}
export function validateMax(err, field: FormlyFieldConfig) {
	return `El valor máximo es ${field.templateOptions.max}`
}

// Custom validation
export function IpValidator(control: FormControl): ValidationErrors {
	return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}
export function IpValidatorMessage(err, field: FormlyFieldConfig) {
	return `"${field.formControl.value}" is not a valid IP Address`;
}

@NgModule({
	declarations: [AppComponent, RepeatTypeComponent, NoRepeatTypeComponent, 
		FormlyFieldButton, ConfirmDialogComponent, 
		SignInComponent,
		SignUpComponent,
		SignOutComponent,
		FormularioComponent
	],
	entryComponents: [ConfirmDialogComponent],
	imports: [
		CommonModule,
		BrowserModule,
		NgbModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		MatNativeDateModule,
		MatSliderModule,
		MatCardModule,
		FormlyBootstrapModule,
		FormlyMatDatepickerModule,
		FormlyMatToggleModule,

		FormlyModule.forRoot({
			validationMessages: [
				{ name: 'required', message: validateRequired },
				{ name: 'minlength', message: validateMinLength },
				{ name: 'maxlength', message: validateMaxLength },
				{ name: 'min', message: validateMin },
				{ name: 'max', message: validateMax },
				// Custom validation message
				{ name: 'ip', message: IpValidatorMessage },
			],
			validators: [
				{ name: 'ip', validation: IpValidator },
			],
			types: [
				{ name: 'repeat', component: RepeatTypeComponent },
				{ name: 'no repeat', component: NoRepeatTypeComponent },
				{ name: 'button', component: FormlyFieldButton },
			],
		}),
		FormlyMaterialModule,
		FormlyModule.forRoot({ extras: { lazyRender: true } }),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireAuthModule,
		NgbModule,
	],
	/* providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }

	], */
	providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, GuardGuard],

	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
