import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-problemes',
  templateUrl: './sql-problemes.component.html',
  styleUrls: ['./sql-problemes.component.css']
})
export class SqlProblemesComponent implements OnInit {

    title = "SQL - PROBLEMES"
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

  constructor() { }

  ngOnInit() {
  }

}
