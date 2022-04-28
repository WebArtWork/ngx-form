import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	imports: [
		CoreModule,
	],
	declarations: [
		ModalComponent,
		FormComponent,
	],
	exports: [
		ModalComponent,
		FormComponent,
	],
	providers: []
})

export class FormsModule { }
