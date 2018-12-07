import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.css']
})
export class AngularjsComponent implements OnInit {

    title = "ANGULARJS - QUESTIONS SUR LE FRAMEWORK"
    logo = LOGOS.find(x=>x.type == "angularjs")

    questions = [
      {
        number:"Q1",
        question:``,
        answer:`&`,
        answer_type:"code"
      },
      {
        number:"Q2",
        question:`Qu'est ce qui est vrai à propos de l'expression <code>track by</code> de la directive
        <code>ng-repeat</code> ?`,
        answer:`<ul><li>Quand aucune expression <code>track by</code> n'est fournie, l'expression par défaut utilisée est la 
        fonction built-in <code>$id</code>.</li>
        <li>On ne peut pas référencer une fonction du scope dans une expression <code>track by</code>.</li>
        </ul>`,
        answer_type:"text"
      },
      {
        number:"Q3",
        question:`Parmi les propositions [...], l'une [...] n'est pas un service interne d'AngularJS. Laquelle ?`,
        answer:`$cookies`,
        answer_type:"code"
      },
      {
        number:"Q4",
        question:``,
        answer:`deferred.reject('Invalid data')`,
        answer_type:"code"
      },
      {
        number:"Q5",
        question:``,
        answer:`<ul>
          <li>
            Une modification de <code>custName</code> modifie la valeur de <code>myName</code> dans le scope parent.
          </li>
          <li>
            Une modification de <code>custCountry</code> ne modifie <strong>pas</strong> la valeur de <code>myCountry</code> dans le scope parent.
          </li>
        </ul>`,
        answer_type:"text"
      },
      {
        number:"Q6",
        question:`Par quelle façon peut-on afficher un montant exprimé dans la monnaie locale ?`,
        answer:`{{100 | currency}}`,
        answer_type:"code"
      },
      {
        number:"Q7",
        question:`Parmis ces propositions, quelles sont celles qui désignent des directives du framework AngularJS ?`,
        answer:`<ul>
        <li>
          ng-app
        </li>
        <li>
          ng-model
        </li>
        <li>
          ng-bind
        </li>
      </ul>`,
        answer_type:"code"
      },
      {
        number:"Q8",
        question:`Qu'est ce qui est vrai à propos de la directive <code>ngRequired</code> ?`,
        answer:`<ul>
        <li>
          Elle fonctionne sur des champs input et select et ne peut pas être appliquée sur un champs personnalisé.
        </li>
        <li>
          Elle ajoute au <code>ngModel</code> la validation des données requises.
        </li>
        <li>
          Elle ajoute l'attribut <code>required</code> sur son élément si l'expression du <code>ngRequired</code> est évaluée à <code>true</code>.
        </li>
      </ul>`,
        answer_type:"text"
      },
      {
        number:"Q9",
        question:`[...]Quelle valeur de l'option <code>restrict</code> permet de restreindre l'usage d'une directive au niveau d'une classe, d'un élément 
        ou d'un attribut ?`,
        answer:`ACE`,
        answer_type:"text"
      },
      {
        number:"Q10",
        question:`Quel est le remplacement AngularJS de la fonction <code>window.setInterval</code> ?`,
        answer:`$setInterval`,
        answer_type:"code"
      },
      {
        number:"Q11",
        question:`Que fait le service <code>$location</code> ?`,
        answer:`<ul>
        <li>
          Il parse l'URL de la barre d'adresse du navigateur et la rend disponible au niveau de l'application.
        </li>
        <li>
          Il s'assure que les changements effectués au niveau de <code>$location</code> sont reflétés au niveau de l'URL du navigateur.
        </li>
      </ul>`,
        answer_type:"text"
      },
      {
        number:"Q12",
        question:``,
        answer:`$scope.apply();`,
        answer_type:"code"
      },
      {
        number:"Q13",
        question:`Parmi ces expressions, l'une d'elle est représente une expression AngularJS valide. Laquelle ?`,
        answer:`{{ 2 + 2 }}`,
        answer_type:"text"
      },
      {
        number:"Q14",
        question:`Quelle valeur de propriété d'un scope isolé permet de créer une association bidirectionnelle entre le scope local de la directive
        et le scope parent ?`,
        answer:`=`,
        answer_type:"code"
      },
      {
        number:"Q15",
        question:`Quel service AngularJS utiliseriez-vous si vous souhaitez exécuter une fonction de manière asynchrone ? `,
        answer:`$q`,
        answer_type:"code"
      },
      {
        number:"Q16",
        question:`Sélectionnez les requêtes <code>$http</code> valides parmi les propositions [...]`,
        answer:`<ul>
        <li>
          $http.get('/someUrl', config).then(successCallback, errorCallback);
        </li>
        <li>
          $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        </li>
      </ul>`,
        answer_type:"code"
      },
      {
        number:"Q17",
        question:``,
        answer:`Le code 2`,
        answer_type:"text"
      },
    ]
    constructor(private titleService: Title ) 
    {
        this.titleService.setTitle( this.title );
    }
  ngOnInit() {
  }

}
