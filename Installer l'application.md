# Installer l'application

Pour installer l'application, récupérez le projet, puis lancer la commande suivante dans votre terminal: 
```shell
npm install
```
## Ajouter des dépendances

Pour ajouter une dépendance à l'application, lancer la commande suivante :
```shell
npm install --save <dependency_name>
```

Pour ajouter une dépendance relative au développement, lancer celle-ci :
```shell
npm install --save-dev <dependency_name>
```
## Configuration

Afin de lancer l'application sans problème, il vous faut créer un fichier `.env` comme suit: 
```
DISCORD_ACCESS_TOKEN= Votre token d'authentification fourni par discord
COMMAND_PREFIX= Le prefix que doit comporter chacune des commandes
```

# Lancer l'application

Pour lancer l'application normalement, lancer la commande suivante dans votre terminal: 
```shell
npm start
```

Pour lancer l'application avec du "hot reloading", lancer la commande suivante dans votre terminal:
```shell
npm run dev
```
# Mode d'emploie: GIT
## Commencer à travailler sur uen nouvelle fonctionnalité

Pour commencer à travailler sur une nouvelle fonctionnalité, je me place sur la branch develop: 
```shell
git checkout develop
```
Puis je créer une nouvelle branch et je me place dessus:
```shell
git branch <nom de ma branch>
git checkout <nom de ma branch>
```
...ou en une seule commande

```shell
git checkout -b <nom de ma branch>
```
## Travailler sur ma branche
*Les commandes suivantes manipulent la branch courante*
Ajouter un commit:
```shell
git commit -m "mon message de commit (en anglias de préférence)"
```
Mettre là jour la version distante de ma branche:
```shell
git push
```
## Ajouter mes derniers developpent quand j'ai fini une fonctionnalité
Deux cas sont possible: 
1. D'autres changements ont été ajouté depuis que j'ai commencé à travaillé sur ma fonctionnalité.
2. Ta branch develop est à jour.

Etapes à suivre:  
- Récupérer les dernieres mises à jour de la branch `develop`
```shell
git checkout develop
git pull
```
Maintenant ta branch `develop` est à jour, il faut récupérer ces changement sur ta branch.
- Retourner sur ma branch
```shell
git checkout <nom de ma branch>
```
...ou bien
```shell
git checkout -
```

- Récupérer les changement de develop
    ```shell
    git rebase `develop`
    ```

1. Il y a des conflits, dans ce cas il faut les résoudre. Une fois résolu, tape la command suivante:
    ```shell
    git add .
    git rebase --continue
    ```
**Note:** Tu peux avoir à résoudre plusieurs fois des conflits en fonction du nombre de commit de retard    que tu cherche à rattraper.
2. Il n'y a pas de conflit, c'est bon ta branch est à jour.

Avant de fusionner tes changements à la branch develop pense à mettre à jour ta branch sur le dépot GIT:
```shell
git push -f
```
- Ajouter les changements de ta branche sur `develop`
```shell
git checkout develop
git merge <nom de ma branche>
```
...ou
```shell
git checkout develop
git merge -
```
## Tips git
Pour ceux qui ont la flemme de mettre en place une cle ssh mais qui ne veulent pas taper leurs identifiants à chaque command git
```shell
git config --local credential.helper "cache --timeout 30000"
```
Cette commande met en cache tes identifiants pour une durée de 30000 secondes.
Tu n'auras plus qu'à les tapez une seule fois tes identifiants !