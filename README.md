Hello ;)

Ce projet est le Fil-Rouge de la formation POEC Developpeur Front End du 11/2022 au 02/2023 dispensée par IB-CEGOS en partenariat avec les formateurs de Sémifir:


Réalisation du projet fil-rouge:

Objectifs 
	Mesurer le niveau de maîtrise du développement
	Définir l’architecture technique cible (base de données, logique de navigation, recensement 
des écrans,… )
	Mettre en pratique les connaissances acquises au travers d’un projet
	Développer ses compétences de développeur

Programme
1.	Présentation du déroulement par le formateur
	Sur la base d’un cas pratique énoncé ci-après, les participants sont amenés à concevoir 
puis réaliser une application en sous-groupes
2.	Réflexion sur l’architecture technique
	Recensement des fonctionnalités
	Élaboration du modèle de la base de données
	Développement des premières fonctionnalités 
3.	Rédaction d’un dossier d’analyse
	Un dossier d’analyse par équipe
	Intégrer les diagrammes qui semblent pertinents pour décrire l’application
	Penser dès le début à la réalisation
4.	Début des développements
	Mise en place de la base de données
	Mise en place de l’architecture technique cible
	Développement des premiers écrans
5.	Discussions/Échanges
	Échanges entre les participants sur cette première expérience
	Conseils et partage de bonnes pratiques par le formateur
Énoncé du cas pratique
Contexte de la demande

Une entreprise industrielle, UltraMotionCorp, souhaite créer une application web permettant à de futurs partenaires de s’inscrire et revendre leurs services. A cet effet, UltraMotionCorp a établi une version préliminaire du cahier des charges (CDC). Il est important de noter que ce dernier pourra tout à fait être modifié et étendu tout le long du cycle de développement et de livraison. Le délai fixé par le client est de quatre mois maximum à partir de la soumission du CDC.



L’application est principalement axée sur les points suivants :

1)	Le module d’inscription:
 Le client souhaite pouvoir donner la possibilité aux partenaires de créer une liste de services tel que :
1.	Le câblage d’armoire électrique
2.	L’accompagnement aux choix de matériels industriels
3.	L’installation de matériels 
4.	Etc…
Pour chaque type de service, le partenaire propose un taux horaire.
Chaque partenaire peut ajouter son logo, une description de son entreprise, l’effectif, le numéro de siret, ses coordonnées, son domaine principal d’activité et la zone géographique qu’il couvre.

2)	Le module de recherche de prestations:
L’application doit pouvoir permettre à des tiers de rechercher des entreprises, par nom et surtout par type de prestation. Une fois la prestation trouvée, le client peut ajouter cette prestation à un panier et continuer ses recherches.

Une fois le panier validé, une notification est envoyée aux entreprises sélectionnées, celle-ci doivent pouvoir valider la prestation ou non.

3)	Un module de devis
Lorsqu’une entreprise est sélectionnée, elle doit pouvoir proposer un devis pour la prestation en question.
On devra pouvoir gérer le temps de prestation mais également également la vente de matériel. Lors de la validation du devis, le prix total du panier est mis à jour.

4)	Un module de communication
Dés lors qu’un client et qu’un prestataire finalisent un devis, ils doivent pouvoir échanger des documents via l’application sous forme de fichiers pdf. Ces fichiers seront rattachés au numéro de devis et accessibles par le client et le prestataire.

5)	Evaluation de la prestation : 
Lorsque le client décide de valider une prestation, celle-ci est réputée débuter. Les deux parties peuvent décider de terminer la prestation, lorsque que c’est le cas des deux côtés, la prestation s’arrête. Et une évaluation portant sur 4 items est proposée au client (l’evaluation se fera via l’attributiuon d’une note de 0 à 5) :
1.	La qualité globale de la prestation
2.	La facilité de communication
3.	La qualité du dossier technique fournit 
4.	Le niveau d’expertise

6)	Module de monitoring :
Une partie administration doit permettre de visualiser :
1.	le nombre de prestations en cours et terminées.
2.	Le nombre moyen, Max et min de prestation par prestataire
3.	Le prix moyen, Max et min d’une prestation.


Pour récupérer le projet il faut cloner le dépot et ouvrir le dossier umc dans vscode
ouvrir le terminal et se placer à la racine du dossier umc

entrer la commande : npm install

il est ensuite possible de démarrer l'application dans le navigateur 

avec la commande: npm start



base de données:

l'application est équipé d'un fichier db.json avec quelques données pour initialiser un mock il faut donc installer ses dépendances 

avec la commande: npm install -g json-server

il sera ensuite possible de lancer l'écoute du mock

avec la commande : json-server --watch db.json --port 8000

le serveur se lance sur l'adresse http://localhost:8000 

il est possible de le tester en tapant dans le navigateur: 

http://localhost:8000/utilisateurs 

ou encore 

http://localhost:8000/utilisateurs/1
