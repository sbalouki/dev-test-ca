import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-problemes',
  templateUrl: './js-problemes.component.html',
  styleUrls: ['./js-problemes.component.css']
})
export class JsProblemesComponent implements OnInit {
  
  title = "JAVASCRIPT - RESOLUTION DE PROBLEMES";
  questions = [
    {
      number:"Q24",
      question: ``,
      answer:`<pre><code>function calc(array, n1, n2)
{
    var sub_array = array.slice(n1, n2+1);
    const add = (a,b) => a + b;
    return sub_array.reduce(add);
}
// POUR TEST //
var array = [0,1,2,3,4,5,3];
console.log(calc(array, 0, 1));
      </code></pre>`,
      answer_type:"pre_code"
    },
    {
      number:"Q25",
      question:`JavaScript est multithreadé ?`,
      answer:`Faux`,
      answer_type:"text"
    },
    {
      number:"Q26",
      question:`Soit un objet obj définit par le code suivant : [...]. <br>
      Parmi les propositions [...], cochez celles qui sont vraies.`,
      answer:`<ul>
                <li>obj.c s'évalue à 12</li>
                <li>obj.a s'évalue à 'hello'</li>
                <li>obj.b s'évalue à 'world'</li>
              </ul>`,
      answer_type:"text"
    },
    {
      number:"Q27",
      question:`JavaScript est ...`,
      answer:`sans rapport avec Java.`,
      answer_type:"text"
    },
    {
      number:"Q28",
      question:``,
      answer:`Singleton`,
      answer_type:"text"
    },
    {
      number:"Q29",
      question:`Vous réalisez une bibliothèque en JavaScript. Parmi ces options, laquelle priviligez-vous pour traiter un comportement inattendu ?`,
      answer:`throw "Comportement inattendu";`,
      answer_type:"code"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
