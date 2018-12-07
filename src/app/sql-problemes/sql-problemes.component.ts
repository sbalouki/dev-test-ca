import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'

@Component({
  selector: 'app-sql-problemes',
  templateUrl: './sql-problemes.component.html',
  styleUrls: ['./sql-problemes.component.css']
})
export class SqlProblemesComponent implements OnInit {

    title = "SQL - PROBLEMES"
    logo = LOGOS.find(x=>x.type == "sql")
    
    questions = [
      {
        number:"Q13",
        question:"Indiquer quelles propositions sont vraies pour une colonne déclarée en tant que clé primaire.",
        answer:`
        <ul>
            <li>Elle ne peut pas être en plus une clé étrangère.</li>
            <li>Elle ne peut pas contenir de doublons.</li>
            <li>Elle peut être déclarée avec un type de 'caractères' tel que VARCHAR.</li>
        </ul>`
      }
    ]

    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
