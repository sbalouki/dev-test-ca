import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-sharp',
  templateUrl: './c-sharp.component.html',
  styleUrls: ['./c-sharp.component.css']
})
export class CSharpComponent implements OnInit {

    title = "C# - QUESTIONS SUR C#";
    questions = [
      {
        number:"Q1",
        question:`Une classe abstraite peut contenir des méthodes concrètes.`,
        answer:`Vrai`,
        answer_type:"text"
      },
      {
        number:"Q2",
        question:`<code>public class A{}</code>. Quelle est la classe parente de A ?`,
        answer:`Vrai`,
        answer_type:"text"
      },
      {
        number:"Q3",
        question:`Quelle est la valeur de i3 ?<code><br>
        int i1 = 5;<br>
        int i2 = 2;<br>
        int i3 = i1 / i2;</code>.`,
        answer:`2`,
        answer_type:"code"
      },
      {
        number:"Q4",
        question:`Quelle propriété permet d'obtenir le nombre de caractères dans une chaîne ?`,
        answer:`Length`,
        answer_type:"code"
      },
      {
        number:"Q5",
        question:`Quelle est la valeur retournée par <code>list.Count</code> ?`,
        answer:`3`,
        answer_type:"code"
      },
      {
        number:"Q6",
        question:`Quelle est la valeur retournée par <code>m[o1]</code> ?`,
        answer:`2`,
        answer_type:"code"
      },
      {
        number:"Q7",
        question:`Parmi ces types primitifs, le(s)quel(s) existe(nt) en C#?`,
        answer:`<ul><li>boolean</li><li>float</li><li>int</li></ul>`,
        answer_type:"text"
      },
      {
        number:"Q8",
        question:`Quelle est la valeur retournée par hashSet.Count ?`,
        answer:`2`,
        answer_type:"code"
      },
      {
        number:"Q9",
        question:`Quelle(s) exception(s) fait/font partie de l'API .Net pour C# ?`,
        answer:`<ul><li>NullReferenceException</li><li>IndexOutOfRangeException</li></ul>`,
        answer_type:"text"
      },
      {
        number:"Q10",
        question:`Saisissez le résultat qu'affiche ce bout de code.
        `,
        answer:`1`,
        answer_type:"code"
      },
      {
        number:"Q11",
        question:`Le garbage collector garantit qu'il y a suffisamment de mémoire pour exécuter un programme .Net.`,
        answer:`Vrai`,
        answer_type:"text"
      },
      {
        number:"Q12",
        question:`Une classe C# peut avoir plusieurs classes parentes.`,
        answer:`??`,
        answer_type:"code"
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
