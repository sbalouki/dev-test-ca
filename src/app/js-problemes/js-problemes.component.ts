import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-js-datas';

@Component({
  selector: 'app-js-problemes',
  templateUrl: './js-problemes.component.html',
  styleUrls: ['./js-problemes.component.css']
})
export class JsProblemesComponent implements OnInit {
  
  title = "JAVASCRIPT - RESOLUTION DE PROBLEMES";
  logo = LOGOS.find(x=>x.type == "js")

  questions = DATAS.find(x=>x.type == "problemes").test;

  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
