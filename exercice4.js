

// exercice 4
// total d'une commande

var pu = parseInt(prompt("entrer un prix"));
var qtecom = parseInt(prompt("entrer la quantité commandé"));
var result=0;
var rem=0;
var port=0;
var pap=0;
tot=pu*qtecom;
if (tot >= 100 && tot<=200 )
{
    rem=(tot * 5 )/ 100;
    result=tot - rem;
    
    
}
else if (tot>200)
{
    rem=(tot*10)/100;
    result=tot - rem;
    if (result>500)
    {
        port="0"; 
    }
}

 if (result<500)
{
    port=(result*2)/100; 
    if (result<100)
    {
        result=tot;
        port="6euros";
    }
    if (port<6)
    port=parseInt("6");
    
}

 pap=result+port;   
document.write("le prix à payer est de ",pap+"euros"+"<br>"+"le frais de port est de "+port+ "euros"+"<br>"+'La remise est de ',rem+"euros");


