function checkForm()
{
    var sexe = document.getElementsByName('sexe');
    var verif=true;
    var filtre = new RegExp("^[A-Za-z]+$");

    // erreur nom
    var test = filtre.test(document.getElementById("nom").value);
    if(!test)
    {
       
        document.getElementById("idNom").innerHTML= "Veuillez saisir votre nom";

        
        verif= false; 
    }
    //erreur prenom
     test = filtre.test(document.getElementById("prenom").value);
    if(!test)
    {
        document.getElementById("idPrenom").innerHTML= "Veuillez saisir votre prenom";
    }
    // erreur sexe
    if  (!sexe[0].checked && !sexe[1].checked)
    {
      
        document.getElementById("idSexe").innerHTML= "Veuillez coher votre sexe";
    }

    // erreur date de naissance
    filtre = new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9]{4}$");
    test = filtre.test(document.getElementById("naissance").value);
    if(!test)
    {
        document.getElementById("idNaissance").innerHTML= "Veuillez saisir votre date de naissance";
    }
    // erreur ville
    filtre = new RegExp("^[A-Za-z]+$");
    test = filtre.test(document.getElementById("ville").value);
    if(!test)
    {
        document.getElementById("idVille").innerHTML= "Veuillez saisir votre ville";
    }
    // erreur email
    filtre = new RegExp("^[a-z0-9.-_]+@[a-z0-9.-]{2,}.[a-z]{2,4}$]");
    test = filtre.test(document.getElementById("email").value);
    if(!test)
    {
        document.getElementById("idEmail").innerHTML= "Veuillez saisir votre email";
    }
    // erreur question
    filtre = new RegExp("^[A-Za-z]+$");
    test = filtre.test(document.getElementById("sujet").value);
    if(!test)
    {

        document.getElementById("question").innerHTML= "Veuillez poser votre question";
    }
    // erreur cgu
    test = document.getElementById("cgu").checked;
    
    if(!test)
    {
        
        document.getElementById("idCgu").innerHTML= "Veuillez cocher la case";
    }

    return verif;

}


