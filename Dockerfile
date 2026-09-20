# Image officielle de Node, version 20, variante allégée
FROM node:20-alpine

# Dossier de travail à l'intérieur du conteneur
# WORKDIR fixe le dossier courant dans l'image
# Les instructions suivantes partent de là
WORKDIR /app

# Copie mon fichier serveur.js vers " . " =  /app dans l'image
COPY server.js .

# Commande lancée au démarrage du conteneur
CMD ["node", "server.js" ]
