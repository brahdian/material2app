import {Component , Inject, ElementRef, AfterViewInit} from '@angular/core';

declare var jQuery:any;
declare var $:any;

//using webpack so import the js/css dependencies
//for you this might be a <script/style tag
import 'pivottable/dist/pivot.min.js';
import 'pivottable/dist/pivot.min.css';


@Component({
  selector: 'app-pivot',
  template: `<div id="pivot"></div>`
})

export class PivotWrapper extends ElementRef implements AfterViewInit{

    private el: ElementRef;

    contructor (@Inject(ElementRef) el: any){

      console.log("contructor defined");
        this.el = el;
    }
    ngAfterViewInit():any{

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
        targetElement.pivotUI( [
         {
           "Service Request": "SR10004205",
           "Summary": "on board a new employee",
           "Reported By": "BCBEU@IPC.TDS",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "9/18/15 12:43:49",
           "Age": "607",
           "Bucket": ">100 Days",
           "Target Finish": "9/18/15 16:43:49",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10004402",
           "Summary": "Add new user to group",
           "Reported By": "MICHAEL.THOMPSON@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "10/2/15 15:01:10",
           "Age": "593",
           "Bucket": ">100 Days",
           "Target Finish": "10/2/15 19:01:10",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10005148",
           "Summary": "testing email generations",
           "Reported By": "MARGARET.SHAW@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "1/6/16 08:59:31",
           "Age": "498",
           "Bucket": ">100 Days",
           "Target Finish": "1/6/16 12:59:31",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006465",
           "Summary": "test",
           "Reported By": "PRATSHA7@IN.IBM.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "PENDING",
           "Reported Date": "2/22/16 13:53:06",
           "Age": "450",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "PRATSHA7@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006477",
           "Summary": "outage",
           "Reported By": "AMARNATH.SINHA@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/22/16 15:35:45",
           "Age": "450",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006505",
           "Summary": "TEST for Morning Checkout",
           "Reported By": "MARGARET.SHAW@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 13:37:08",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006507",
           "Summary": "TEST for Morning Checkout",
           "Reported By": "MARGARET.SHAW@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 13:43:39",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006508",
           "Summary": "TEST for Morning Checkout",
           "Reported By": "MARGARET.SHAW@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 13:45:47",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006515",
           "Summary": "TEST for Morning Checkout",
           "Reported By": "MARGARET.SHAW@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 14:12:03",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006519",
           "Summary": "Unable to login to laptop",
           "Reported By": "SANDRA.BROWN@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 14:36:37",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006548",
           "Summary": "Test Ticket-2 (assign to resolver group)",
           "Reported By": "SAKSHMIS@IN.IBM.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "2/23/16 16:31:09",
           "Age": "449",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "NAVPREETKAUR@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006595",
           "Summary": "tets",
           "Reported By": "MADHVI.SINGH@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "2/24/16 15:46:42",
           "Age": "448",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "NAVPREETKAUR@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006622",
           "Summary": "Relate Outage",
           "Reported By": "AMARNATH.SINHA@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "INPROG",
           "Reported Date": "2/25/16 10:01:55",
           "Age": "448",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "DHRIBEHL@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006626",
           "Summary": "ssss",
           "Reported By": "AMARNATH.SINHA@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "PENDING",
           "Reported Date": "2/25/16 11:38:48",
           "Age": "448",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AMARNATS@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006632",
           "Summary": "test",
           "Reported By": "AMARNATH.SINHA@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "PENDING",
           "Reported Date": "2/25/16 12:12:03",
           "Age": "447",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AMARNATS@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006694",
           "Summary": "Test Outage",
           "Reported By": "AMARNATH.SINHA@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "PENDING",
           "Reported Date": "2/29/16 16:31:28",
           "Age": "443",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AMARNATS@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006706",
           "Summary": "SOF form request a new emoploy.",
           "Reported By": "ASHLEY.KIRBY@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "PENDING",
           "Reported Date": "3/2/16 14:57:46",
           "Age": "441",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AJITBAWA@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006707",
           "Summary": "Windows 7:Not able to connect to VPN.",
           "Reported By": "MARY.STOKINGER@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "3/2/16 15:23:03",
           "Age": "441",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AJITBAWA@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006711",
           "Summary": "IOS:New Soft token request for mobile device.",
           "Reported By": "BCB-AFFECTEDACCOUNT",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "INPROG",
           "Reported Date": "3/2/16 16:19:32",
           "Age": "441",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AJITBAWA@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006712",
           "Summary": "Not able to log on to MCPS.",
           "Reported By": "BCB-AFFECTEDACCOUNT",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "INPROG",
           "Reported Date": "3/2/16 16:41:30",
           "Age": "441",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "AJITBAWA@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006790",
           "Summary": "wiindows 7mainframe  password reset",
           "Reported By": "NAVPREET.KAUR@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "3/16/16 16:32:25",
           "Age": "427",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         },
         {
           "Service Request": "SR10006789",
           "Summary": "wiindows 7mainframe  password reset",
           "Reported By": "NAVPREET.KAUR@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "3/16/16 16:32:25",
           "Age": "427",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "NAVPREETKAUR@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006874",
           "Summary": "win 7 : unable to log in cisco jabber",
           "Reported By": "ELLA.ACTIE@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "3",
           "Status": "INPROG",
           "Reported Date": "3/23/16 13:11:43",
           "Age": "420",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "ASESAXEN@IN.IBM.COM"
         },
         {
           "Service Request": "SR10006891",
           "Summary": "Test cal",
           "Reported By": "TIMOTHY.TERREAULT@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "3/28/16 04:34:52",
           "Age": "416",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "PAPAHWA1@IN.IBM.COM"
         },
         {
           "Service Request": "SR10009615",
           "Summary": "issue",
           "Reported By": "SHAKTI.CHAND@BCBSMA.COM",
           "Created By Group": "I-BCB-IN-HELPDESK",
           "Customer": "BCB-00",
           "Internal Priority": "3",
           "Priority": "3",
           "Status": "QUEUED",
           "Reported Date": "10/31/16 14:05:06",
           "Age": "198",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "I-BCB-IN-HELPDESK",
           "Owner": "SHAKTI.CHAND@IN.IBM.COM"
         },
         {
           "Service Request": "SR10009854",
           "Summary": "test VIP",
           "Reported By": "ANDREW.DREYFUS@BCBSMA.COM",
           "Created By Group": "",
           "Customer": "BCB-00",
           "Internal Priority": "4",
           "Priority": "",
           "Status": "QUEUED",
           "Reported Date": "1/31/17 14:51:33",
           "Age": "106",
           "Bucket": ">100 Days",
           "Target Finish": "",
           "Owner Group": "I-BCB-IN-HELPDESK",
           "Is Global Issue": "N",
           "Resolver Group": "",
           "Owner": ""
         }
        ] ,{
                rows: ["Bucket"],
                cols: ["Status"]
            });
    }

}
