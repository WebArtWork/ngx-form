import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
	selector: 'wform',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})

export class FormsComponent {
	@Input() config: any = {};
	@Input() doc: any = {};
	@Output() sign: EventEmitter<any> = new EventEmitter();
	constructor(
	) { }
}

