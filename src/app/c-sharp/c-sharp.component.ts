import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'
import { DATAS } from '../test-csharp-datas';

@Component({
  selector: 'app-c-sharp',
  templateUrl: './c-sharp.component.html',
  styleUrls: ['./c-sharp.component.css']
})
export class CSharpComponent implements OnInit {

    title = "C# - QUESTIONS SUR C#";
    logo = LOGOS.find(x=>x.type == "c-sharp")
    questions = DATAS.find(x=>x.type == "connaissance").test;
    
    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }

  ngOnInit() {
  }

}
