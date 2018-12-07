
export const DATAS = [
    { 
        type:'connaissance',
        test:[
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
        }]
    },
    {
        type:'modelisation',
        test:[
            {
                number:"Q19",
                answer:`function scanChar(str)
{
    var printLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
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
                answer:`function change(cash)
{
    var ten, five, two;
    
    var cash_ten    = cash, 
    cash_five       = cash, 
    cash_two        = cash;

    // Integer division by 10
    ten = Math.floor(cash / 10);
    cash = cash-ten*10;

    // Integer division by 5
    five = Math.floor(cash/5);
    cash = cash-five*5;

    // Integer division by 2
    two = Math.floor(cash/2);
    cash = cash-two*2;

    return {
        ten : ten,
        five: five,
        two: two
    };
}
// POUR TEST //
var test_value = 18;
console.log(change(test_value))
console.log("Billets de 10 : "+change(test_value).ten)
console.log("Billets de 5 : "+change(test_value).five)
console.log("Pieces de 2 : "+change(test_value).two)`
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
// POUR TEST //
var o = { john: 12, brian:true, doe:'hi', fred:false };
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
console.log(reshape(2, "ABC DEFG H"));`
            },
          ]
    },
    {
        type:'problemes',
        test:[
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
console.log(calc(array, 0, 1));</code></pre>`,
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
    },
  ]
