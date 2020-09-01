// exercice 1

var cpt = 0;
var cpt2 = 0;
var cpt3 = 0;

do
{
    var age = prompt("quelle est votre age ?");
    // personne de moins de 20 ans
    if (age<20)
    {
        
        cpt++;
        

    }
    
    // personne de plus de 40 ans
    else if (age>40)
    {
        cpt2++;      
    }
    // personne entre 20 et 40 ans
    else if(age>=20 && age<=40)
    {
        
        cpt3++;
        console.log(cpt3);
    }
}
    while(age<100)
document.write("le nombre de personne de moins de 20 ans est de ",cpt+"<br>");
document.write("le nombre de personne de plus de 40 ans  est de",cpt2+"<br>");
document.write("le nombre de personne entre 20 et 40 ans ",cpt3); 
