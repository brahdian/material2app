import {Component,ElementRef,Inject} from '@angular/core';

declare var jQuery:any;
declare var $:any;

//using webpack so import the js/css dependencies
//for you this might be a <script/style tag
import 'pivottable/pivot.min.js';
import 'pivottable/pivot.min.css';


export class PivotWrapper {

    private el: ElementRef;

    contructor (@Inject(ElementRef)el: ElementRef){
        this.el = el;
    }

    private buildPivot(){

        if (!this.el ||
            !this.el.nativeElement ||
            !this.el.nativeElement.children){
                console.log('cant build without element');
                return;
        }

        var container = this.el.nativeElement;
        var inst = jQuery(container);

        //the below id should be on your html element like div for the pivot
        //per the exmapmle in thepivot docs
        var targetElement = inst.find('#pivot');

        if (!targetElement){
            console.log('cant find the pivot element');
            return;
        }

        //this helps if you build more than once as it will wipe the dom for that element
        while (targetElement.firstChild){
            targetElement.removeChild(targetElement.firstChild);
        }

        //here is the magic
        targetElement.pivot( [
			        {color: "blue", shape: "circle"},
			        {color: "red", shape: "triangle"}
			    ] , {
			        rows: ["color"],
			        cols: ["shape"]
			    } );


        //voila!
    }

}
