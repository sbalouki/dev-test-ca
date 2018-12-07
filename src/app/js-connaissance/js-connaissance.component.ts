import { Component, OnInit } from '@angular/core';
import { LOGO_JS } from '../link_img'

@Component({
  selector: 'app-js-connaissance',
  templateUrl: './js-connaissance.component.html',
  styleUrls: ['./js-connaissance.component.css']
})
export class JsConnaissanceComponent implements OnInit {

  title = "JAVASCRIPT - CONNAISSANCE DU LANGAGE"
  logo_js = LOGO_JS;

  questions = [
    {
        number:"Q1",
        question: `En JS, laquelle des instructions suivantes permet de sortir d'une boucle ?`,
        answer:`break;`,
        answer_type:"code"
    },
    {
        number:"Q2",
        question: `En CSS, quel symbole est utilisé pour le préfixe d'un sélecteur par <strong>id</strong> ?`,
        answer:`#`,
        answer_type:"code"
    },
    {
        number:"Q3",
        question: `En HTML, quel est le nom de l'élément utilié pour afficher un champs d'édition de texte multiline ?`,
        answer:`
        <div>
            <p>
                <code>
                        &lt;textarea&gt;&lt;/textarea&gt;
                </code>
            </p>
            <textarea placeholder="Textarea, multiline text editor..."></textarea>
        </div>`,
        answer_type:""
    },
    {
        number:"Q4",
        question: `En Javascript avec <strong>jquery</strong>, quel est le meilleur sélecteur qui permet de sélectionner l'élément suivant :`,
        answer:`$('#content');`,
        answer_type:"code"
    },
    {
        number:"Q5",
        question: `Parmi ces propositions, quelle est la bonne façon de déclarer un tableau en Javascript`,
        answer:`var a = [1,2,3]`,
        answer_type:"code"
    },
    {
        number:"Q6",
        question: `En HTML, que faut-il ajouter à un champs de formulaire pour le désactiver ?`,
        answer:`
        <p class="lead">Un attribut disabled : 
        <code>&lt;input type="button" disabled&gt;</code></p>
        <p><input type="button" value="Bouton désactivé" disabled></p>`,
        answer_type:"text"
    },
    {
        number:"Q7",
        question: `En JavaScript, comment déclare-t-on une variable ?`,
        answer:`var x = 7;`,
        answer_type:"code"
        },
    {
      number:"Q8", 
      question: ` Quand vous ouvrez une page web à partir d'une URL, 
            quelle méthode HTTP est utilisée par votre navigateur pour envoyer 
            la requête initiale au serveur ?`,
        answer: `GET `,
        answer_type:"text"
    },
    {
      number:"Q9", 
      question: ` Quand vous ouvrez une page web à partir d'une URL, 
            quelle méthode HTTP est utilisée par votre navigateur pour envoyer 
            la requête initiale au serveur ?`,
        answer: `GET `,
        answer_type:"text"
    },
    {
      number:"Q10", 
      question: ` En CSS, à quoi correspondent les valeurs ci-dessous : 
      <code>margin: 10px 20px 15px -10px</code>`,
        answer: `top right bottom left`,
        answer_type:"text"
    },
    {
      number:"Q11", 
      question:`Parmi les expressions suivantes, lesquelles sont évaluées à true ?`,
      answer: ` 
      <pre><code>"a"==='a' //true
4.0===4  //true
"1"==1  //true</code></pre>`,
        answer_type:"pre_code"
    },
    {
      number:"Q12", 
      question:`Parmi les propositions suivantes, laquelle affiche 2 ?`,
      answer: `myjson.cities[0].pop`,
        answer_type:"code"
    },
    {
      number:"Q13", 
      question:`En JavaScript, quel est le résultat de l'expression suivantte :","2"===2;`,
      answer: `false`,
      answer_type:"code"
    },
    {
      number:"Q14", 
      question:`Parmi les propositions suivantes, lesquelles sont des méthodes HTTP valides ?`,
      answer: `POST, GET, PUT`,
      answer_type:"text"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
