export const DATAS = [
    {
        type:'connaissance',
        test:[
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
          ]
    },
    {
        type:'modelisation',
        test:[
            {
              number:"Q11",
              question:`instructions manquantes...`,
              answer:``
            },
            {
              number:"Q12",
              question:`D'après le schéma de base de données [...], indiquer ce qui qualifie le mieux la colonn "customer_id" de la table PURCHASE_ORDER.`,
              answer:`Clé étrangère.`
            },
          ]
    },
    {
        type:"problemes",
        test:[
            {
              number:"Q13",
              question:"Indiquer quelles propositions sont vraies pour une colonne déclarée en tant que clé primaire.",
              answer:`
              <ul>
                  <li>Elle ne peut pas être en plus une clé étrangère.</li>
                  <li>Elle ne peut pas contenir de doublons.</li>
                  <li>Elle peut être déclarée avec un type de 'caractères' tel que VARCHAR.</li>
              </ul>`
            }
          ]
    }
]