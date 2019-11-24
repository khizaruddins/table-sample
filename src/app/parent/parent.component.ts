import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../data';
import { DataService } from '../data.service';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: [ './parent.component.css' ]
})
export class ParentComponent implements OnInit {
	displayedColumns: string[] = [ 'productId', 'name', 'price', 'isInStock' ];
	dataSource;

	hideShow: boolean = true;

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.data.subscribe((data) => (this.dataSource = data));
	}

	onNameChange(value: string) {
		value['name'] = 'hello name';
	}

	toggleEditMode(element: Object) {
		element['editMode'] = !element['editMode'];
	}

	changeValue(value: string, element: Object) {
		element['name'] = value;
		element['editMode'] = !element['editMode'];
	}
}
