import { Component, OnInit } from '@angular/core';
import { LOGOS } from '../link_img'
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-js-modelisation',
  templateUrl: './js-modelisation.component.html',
  styleUrls: ['./js-modelisation.component.css']
})
export class JsModelisationComponent implements OnInit {
  
  title = "JAVASCRIPT - MODELISATION";
    logo = LOGOS.find(x=>x.type == "js")

  questions = [
    {
        number:"Q19",
        answer:`function scanChar(str)
{
    var printLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        asciiArt = null,
        i = 0;

    while (i < printLetters.length) {
        if(printChar(printLetters[i]) === str)
            return printLetters[i];
        i++;
    }
    return "?";
}
// Fake printChar pour test
function printChar(letter)
{
    return letter+"-je_suis_une_representation_graphique";
}
// POUR TEST //
console.log(scanChar(printChar("g")));`
    },
    {
        number:"Q20",
        answer:`?`
    },
    {
        number:"Q21",
        answer:`function helloProperties(o)
{
    var hello_array = [];
    for(var i = 0; i < Object.keys(o).length; i++)
        hello_array.push("Hello-"+Object.keys(o)[i]);
    return hello_array;
}
var o = {
    john: 12,
    brian:true,
    doe:'hi',
    fred:false
};
// POUR TEST //
console.log(helloProperties(o));`
    },
    {
        number:"Q22",
        answer:`function isOnEvenPosition(table, value)
{
    if(table.indexOf(value) % 2 == 0)
        return true;
    return false;
}
// POUR TEST //
var t = [9,8,7,6,5,4,3,2,1,0];
console.log(isOnEvenPosition(t, 6));
console.log(isOnEvenPosition(t, 7));
console.log(isOnEvenPosition(t, 9));`
    },
    {
        number:"Q23",
        answer:`function reshape(n, str)
{
    var res = [];
    // Deletion of spaces in str
    shaped_str = str.replace(/\s/g, "");
    for(var i = 0; i < shaped_str.length; i++)
    {
        if(i % n == 0 && i > 0)
            res.push("\n");
        res.push(shaped_str[i]);
    }
    // Conversion of res[] content to string
    return res.join("");
}
// POUR TEST //
console.log(reshape(6, "1 23 456"));
console.log(reshape(1, "ABC DEFG H"));`
    },
  ];
  constructor(private titleService: Title ) 
  {
      this.titleService.setTitle( this.title );
  }
  ngOnInit() {
  }

}
