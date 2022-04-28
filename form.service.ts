import { Injectable } from '@angular/core';
import { ModalComponent } from 'wacom';
import { FormComponent } from 'src/app/modules/forms/form/form.component';
import { ModalService} from 'wacom';
@Injectable({
	providedIn: 'root'
})
export class FormService {
	public forms: any =[];
	public doc: any = {};
	public config = {
		title : 'title',
		class : 'webart.work',
		components: [{
			type: 'email',
			label: 'E-mail',
			placeholder: 'fill your email',
			input: 'email'
		},
		{
			type: 'password',
			label: 'Password',
			placeholder: 'fill your password',
			input: 'password'
		},{
			type: 'button',
			label: 'Modal',
			output: 'submit'
		}]
	}
	modal(config = this.config, doc = this.doc, submit = d=>{}, change =  d=>{}){
		this.ms.show({
			component:FormComponent,
			config, 
			doc,
			submit,
			change,
			class: 'forms_modal'
		})
		console.log(config, doc)
	}
	constructor(public ms:ModalService) { }
}
