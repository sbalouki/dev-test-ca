import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-angularjs-datas';

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.css']
})
export class AngularjsComponent implements OnInit {

    title = "ANGULARJS - QUESTIONS SUR LE FRAMEWORK"
    logo = LOGOS.find(x=>x.type == "angularjs")
    questions = DATAS.find(x=>x.type == "connaissance").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
