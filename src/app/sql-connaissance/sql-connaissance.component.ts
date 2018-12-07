import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-connaissance',
  templateUrl: './sql-connaissance.component.html',
  styleUrls: ['./sql-connaissance.component.css']
})
export class SqlConnaissanceComponent implements OnInit {

    title = "SQL - CONNAISSANCE DU LANGAGE";
    questions = [
      {
        number:"Q1",
        question:``,
        answer:`SELECT count(*) FROM customer GROUP BY city HAVING COUNT (customer_id)`
      },
      {
        number:"Q2",
        question:`Quelle commande permet d'ajouter une ligne dans une table d'une base de données ?`,
        answer:`INSERT -- INSERT INTO table (column1, column2) VALUES ('value1', 'value2')`
      },
      {
        number:"Q3",
        question:`(il manque sans doute une partie des instructions)`,
        answer:`SELECT firstname, lastname FROM customer`
      },
      {
        number:"Q4",
        question:`Quelle commande permet d'effacer des lignes dans une table ?`,
        answer:`DELETE FROM table WHERE ...`
      },
      {
        number:"Q5",
        question:`Quelle commande est utilisée pour supprimer une table d'une base de données ?`,
        answer:`DROP table`
      },
      {
        number:"Q6",
        question:`instructions manquantes...`,
        answer:``
      },
      {
        number:"Q7",
        question:`instructions manquantes...`,
        answer:``
      },
      {
        number:"Q8",
        question:``,
        answer:`Select * from customer where zip_code IS NOT NULL`
      },
      {
        number:"Q9",
        question:`instructions manquantes...`,
        answer:``
      },
      {
        number:"Q10",
        question:``,
        answer:`SELECT * FROM product join product_category on product.product_category_id = product_category.product_category_id`
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
