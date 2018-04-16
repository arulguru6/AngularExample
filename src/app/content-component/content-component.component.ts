import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit {

   items: Array<any> = []
builds:object[];
  constructor() {

     this.builds=[
      {
        buildEnv:"CERT1",
        version:"1.3.4"
      },
      {
        buildEnv:"QA5",
        version:"1.2.4"
      },
      {
        buildEnv:"PROD",
        version:"1.0.4"
      }
    ]

    this.items = [
      { name: 'Android Cert1' },
      { name: 'Android Dev4' },
      { name: 'Android Cert2' },
      { name: 'Android QA5' },
      { name: 'Android Prod' },
      { name: 'Android Dark-Prod' },
    ]
   }

  ngOnInit() {
  }

  
}
