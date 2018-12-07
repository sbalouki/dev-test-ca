import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-php-datas';

@Component({
  selector: 'app-php-problemes',
  templateUrl: './php-problemes.component.html',
  styleUrls: ['./php-problemes.component.css']
})
export class PhpProblemesComponent implements OnInit {

    title = "PHP - PROBLEMES"
    logo = LOGOS.find(x=>x.type == "php")
    questions = DATAS.find(x=>x.type == "problemes").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
    ngOnInit() {
    }
}
