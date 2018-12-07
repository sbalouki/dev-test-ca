import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo_js = LOGOS.find(x => x.type == "js")
  logo_php = LOGOS.find(x => x.type == "php")
  logo_csharp = LOGOS.find(x => x.type == "c-sharp")
  logo_sql = LOGOS.find(x => x.type == "sql")
  logo_angularjs = LOGOS.find(x => x.type == "angularjs")

  title = "Test de Développement - Crédit Agricole d'Aquitaine";
  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }

  ngOnInit() {
  }

}
