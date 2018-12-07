import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-sql-datas';

@Component({
  selector: 'app-sql-connaissance',
  templateUrl: './sql-connaissance.component.html',
  styleUrls: ['./sql-connaissance.component.css']
})
export class SqlConnaissanceComponent implements OnInit {

    title = "SQL - CONNAISSANCE DU LANGAGE";
    logo = LOGOS.find(x=>x.type == "sql")
    questions = DATAS.find(x=>x.type == "connaissance").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
