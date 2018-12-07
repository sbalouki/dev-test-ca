import { Component, OnInit } from '@angular/core';
import { LOGO_PHP } from '../link_img'
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-php-connaissance',
  templateUrl: './php-connaissance.component.html',
  styleUrls: ['./php-connaissance.component.css']
})
export class PhpConnaissanceComponent implements OnInit {

  title = "PHP - CONNAISSANCE DU LANGAGE"
  logo = {alt:"logo php", img:LOGO_PHP}

  questions = [
    {
      number:"Q1",
      question:`Si la variable $a est égale à 7 et la variable $b est égale au caractère a, quelle est la valeur de la variable $$b ?`,
      answer:`echo $$b; // 7`,
      answer_type:"code"
    },
    {
      number:"Q2",
      question:`Saisissez le nom de la structure de langage, alias de la fonction exit() qui est couramment utilisée dans les scripts.`,
      answer:`die();`,
      answer_type:"code"
    },
    {
      number:"Q3",
      question:`Saisissez le nom de la 'superglobale' correspondant au tableau associatif des paramètres d'url.`,
      answer:`$_GET`,
      answer_type:"code"
    },
    {
      number:"Q4",
      question:`Saisissez le nom de la fonction qui permet d'afficher le type et le contenu d'une variable.`,
      answer:`var_dump();`,
      answer_type:"code"
    },
    {
      number:"Q5",
      question:`Saisissez le résultat de ce bout de code : $i = 0; echo $i++;`,
      answer:``,
      answer_type:"code"
    },
    {
      number:"Q6",
      question:`Saisissez le nom de la fonction qui convertit tous les caractères éligibles en entités HTML.`,
      answer:``,
      answer_type:"code"
    },
    {
      number:"Q7",
      question:`Quelle fonction retourne le nombre de caractères d'une chaîne ASCII ?`,
      answer:`strlen();`,
      answer_type:"code"
    },
    {
      number:"Q8",
      question:`Quelle est la taille du tableau $a ?`,
      answer:`count($a); // 1      `,
      answer_type:"code"
    },
    {
      number:"Q9",
      question:`Saisissez le nom de la fonction qui évalue une chaîne de caractères comme un script php.`,
      answer:`eval();`,
      answer_type:"code"
    },
    {
      number:"Q10",
      question:`Saisissez le nom de la fonction qui donne la taille d'un tableau.`,
      answer:`count();`,
      answer_type:"code"
    },
    {
      number:"Q11",
      question:`Pour que le code ne généère plus d'erreur, il faudrait...`,
      answer:`...déplacer le tag html après l'appel de la fonction header.`,
      answer_type:"text"
    },
    {
      number:"Q12",
      question:`Saisissez le nom de la fonction qui supprime les espaces en début et en fin d'une chaîne de caractères.`,
      answer:`trim();`,
      answer_type:"code"
    },
    {
      number:"Q13",
      question:`Saisissez le nom de la fonction qui sert à retourner une partie d'une chaîne de caractères 
      à partir de l'index de début et d'une longueur.`,
      answer:`substr($string, $index, $longueur);`,
      answer_type:"code"
    },
    {
      number:"Q14",
      question:`Quelle déclaration est une constante valide en PHP ?`,
      answer:`define("MAXSIZE", 100);`,
      answer_type:"code"
    },
  ]
  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
