import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../../data';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit {
	displayedColumns: string[] = [ 'productId', 'name', 'price', 'isInStock' ];
	dataSource = ELEMENT_DATA;

	constructor() {}
 
	ngOnInit() {}
}
