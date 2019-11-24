import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ELEMENT_DATA } from './data';
import { ProductI } from './data.interface';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor() {}
	private dataSource = new BehaviorSubject<ProductI[]>(ELEMENT_DATA);
	data = this.dataSource.asObservable();

	changeData(value: ProductI[]) {
		this.dataSource.next(value);
	}

	changeName(value: string, index: number) {
		this.data.subscribe((data) => {
			console.log(data);
		});
	}

	changeProductPrice(price: number, index: number) {}

	changeIsInStock(trueFalse: boolean, index: number) {}
}
