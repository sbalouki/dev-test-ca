import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'

@Component({
  selector: 'app-sql-modelisation',
  templateUrl: './sql-modelisation.component.html',
  styleUrls: ['./sql-modelisation.component.css']
})
export class SqlModelisationComponent implements OnInit {

    title = "SQL - MODELISATION"
    logo = LOGOS.find(x=>x.type == "sql")

    questions = [
      {
        number:"Q11",
        question:`instructions manquantes...`,
        answer:``
      },
      {
        number:"Q12",
        question:`D'après le schéma de base de données [...], indiquer ce qui qualifie le mieux la colonn "customer_id" de la table PURCHASE_ORDER.`,
        answer:`Clé étrangère.`
      },
    ]
    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
