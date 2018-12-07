import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-js-datas';

@Component({
  selector: 'app-js-modelisation',
  templateUrl: './js-modelisation.component.html',
  styleUrls: ['./js-modelisation.component.css']
})
export class JsModelisationComponent implements OnInit {
  
  title = "JAVASCRIPT - MODELISATION";
    logo = LOGOS.find(x=>x.type == "js")

    questions = DATAS.find(x=>x.type == "modelisation").test;

  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
