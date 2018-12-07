import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-php-datas';

@Component({
  selector: 'app-php-modelisation',
  templateUrl: './php-modelisation.component.html',
  styleUrls: ['./php-modelisation.component.css']
})
export class PhpModelisationComponent implements OnInit {

  title = "PHP - MODELISATION";
    logo = LOGOS.find(x=>x.type == "php")

  questions = DATAS.find(x=>x.type == "modelisation").test;
  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
