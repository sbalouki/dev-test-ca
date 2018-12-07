import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img';
import { DATAS } from '../test-js-datas';

@Component({
  selector: 'app-js-connaissance',
  templateUrl: './js-connaissance.component.html',
  styleUrls: ['./js-connaissance.component.css']
})
export class JsConnaissanceComponent implements OnInit {

    title = "JAVASCRIPT - CONNAISSANCE DU LANGAGE"
    logo = LOGOS.find(x=>x.type == "js")
    questions = DATAS.find(x=>x.type == "connaissance").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }

    ngOnInit() {
    }

}
