// exercice 3

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom=prompt("donner un prenom");

var idx = tab.indexOf(prenom);





    if  (idx >-1)
    {
        tab.splice(idx, 1);
        
        tab.push("");
    }
    else 
    {
       console.log("erreur") ;
    }

console.log(tab);


