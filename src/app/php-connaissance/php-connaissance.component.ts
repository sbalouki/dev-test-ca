import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-php-datas';

@Component({
  selector: 'app-php-connaissance',
  templateUrl: './php-connaissance.component.html',
  styleUrls: ['./php-connaissance.component.css']
})
export class PhpConnaissanceComponent implements OnInit {

  title = "PHP - CONNAISSANCE DU LANGAGE";
  logo = LOGOS.find(x=>x.type == "php")
  questions = DATAS.find(x=>x.type == "connaissance").test;

  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
