import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-sql-datas';

@Component({
  selector: 'app-sql-problemes',
  templateUrl: './sql-problemes.component.html',
  styleUrls: ['./sql-problemes.component.css']
})
export class SqlProblemesComponent implements OnInit {

    title = "SQL - PROBLEMES"
    logo = LOGOS.find(x=>x.type == "sql")
    questions = DATAS.find(x=>x.type == "problemes").test;

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
