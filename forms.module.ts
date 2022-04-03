import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FormsComponent } from './forms.component';

@NgModule({
	imports: [
		CoreModule,
	],
	declarations: [
		FormsComponent
	],
	exports: [
		FormsComponent
	],
	providers: []

})

export class FormsModule { }
