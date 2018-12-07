import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-sql-datas';

@Component({
  selector: 'app-sql-modelisation',
  templateUrl: './sql-modelisation.component.html',
  styleUrls: ['./sql-modelisation.component.css']
})
export class SqlModelisationComponent implements OnInit {

    title = "SQL - MODELISATION"
    logo = LOGOS.find(x=>x.type == "sql")
    questions = DATAS.find(x=>x.type == "modelisation").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
