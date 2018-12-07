import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-modelisation',
  templateUrl: './sql-modelisation.component.html',
  styleUrls: ['./sql-modelisation.component.css']
})
export class SqlModelisationComponent implements OnInit {

    title = "SQL - MODELISATION"
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
  constructor() { }

  ngOnInit() {
  }

}
