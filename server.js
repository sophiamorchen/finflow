// http est fourni par Node, rien à installer
const http = require('http')

// createServer reçoit une fonction appelée à chaque requête
// req = la requête reçue, res = la réponse à renvoyer

const server = http.createServer((req, res) => {
    res.end('API FinFlow en ligne')
})

// 0.0.0.0 est obligatoire dans un conteneur :
// Sans ça, le serveur n'écouterait que l'intérieur duy conteneur
server.listen(3000, '0.0.0.0')