import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { LOGOS } from '../link_img'

@Component({
  selector: 'app-php-modelisation',
  templateUrl: './php-modelisation.component.html',
  styleUrls: ['./php-modelisation.component.css']
})
export class PhpModelisationComponent implements OnInit {

  title = "PHP - MODELISATION";
    logo = LOGOS.find(x=>x.type == "php")

    questions = [
    {
      number:"Q17",
      answer:``
    },
    {
      number:"Q18",
      answer:`Iterator`
    },
    {
      number:"Q19",
      answer:`Vrai`
    },
    {
      number:"Q20",
      answer:`Proposition #1`
    },
  ];
  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
