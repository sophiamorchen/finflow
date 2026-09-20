
# Finflow

API de traitement de transactions, conteneurisées avec Docker

## Services

| Service | Role                  | Publié         |
|---------|-----------------------|----------------|
| Proxy   | Nginx, point d'entrée | oui, port 8000 |
| api     | API Node.js           |      non       |
| db      | POSTGREQL 16         |      non       |
| cache   | Redis 7               |      non       |   

## Démarrage

1. Cloner le dépôt
    git clone <url du dépôt>
    cd finflow

2. Créer le fichier d'environnement
    cp .env.example .env
Puis remplir `POSTGRE_PASSWORD` avec une valeur de votre choix

3. Lancer
    docker compose up -d
L'API est accessible sur http://localhost:8000

## Arrêter
    docker compose down

Les données de POSTGRESQL et Redis sont conservées dans des volumes nommés.
Pour les supprimer également : `docker compose down -v`

## Prérequis

Docker Desktop installé. Aucune installation Node, POSTGRESQL, Redis nécessaire
