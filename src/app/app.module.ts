import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [ AppComponent, ParentComponent, ChildComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
