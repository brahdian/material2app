import { Component,ElementRef,Inject} from '@angular/core';

declare var jQuery: any;
import {PivotWrapper} from './pivot.component';
import {PivotWrapperres} from './pivotres.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
