function requete(fichier) // Requête Asynchrone
{

	var demo = document.getElementById("demo");
	var xhr = new XMLHttpRequest(); // Instancie un nouvel objet

	xhr.onreadystatechange = function()
	{
		// console.log(this);
		if(this.readyState === 4 && this.status === 200) // Si la requête est bien executée
		{
			demo.innerHTML = this.responseText;
		}
		else if(this.readyState === 4 && this.status === 404)
		{
			alert("Erreur 404");
		}
	};

	if (fichier.trim() == "") // Mini sécurité pour évité la vue d'arborescence.
	{
		fichier = "erreur.php";
	}


	xhr.open("GET", "async/"+fichier, true); // Méthode, Path, VRAI ou FAUX (true pour Assynchrone)
	xhr.responseType = "text"; // Permet de dire qu'on récupère du texte, et pas du XML
	xhr.send(); // Envoyer la requête
}
// ------------------------------------------------------
// Recherche de fichier formulaire

document.getElementById("formReq").addEventListener("submit", function(e)
{
	e.preventDefault();

	var fichierRecup = document.getElementById("input-fichier").value;
	requete(fichierRecup);

	return false;
});


/********************************************
	Les états possible du "readyState"
	----------------------------------
	0 : Requête non initialisée
	1 : Connexion au serveur établie
	2 : Requête reçue
	3 : Requête en cours de traitement
	4 : Requête terminée et réponse prête

	*****************************************
	*****************************************

	Quelques statuts HTTP
	---------------------
	- 200 : Requête OK
	- 403 : Accès interdit
	- 404 : Page (ou fichier) introuvable
	- 500 : Erreur interne du serveur
********************************************/