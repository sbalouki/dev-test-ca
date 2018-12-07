import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-php-problemes',
  templateUrl: './php-problemes.component.html',
  styleUrls: ['./php-problemes.component.css']
})
export class PhpProblemesComponent implements OnInit {

    title = "PHP - PROBLEMES"
    questions = [
      {
        number:"Q15",
        answer:`???`
      },
      {
        number:"Q15",
        answer:`function calc($array, $n1,$n2){
    $res = 0;
    for($i = $n1; $i < $n2+1; $i++)
    {
        $res+=$array[$i];
    }
    return $res;
}`
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
