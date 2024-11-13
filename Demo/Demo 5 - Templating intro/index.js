// Importation des modules requis pour l'app
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const PORT = 8000;

// Initialisation du serveur
const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`)
})

// Initialisation de la const qui va contenir notre fichier de templating
const body = fs.readFileSync(__dirname+'/views/index.ejs', 'utf-8');

// Initialisation du rendering (rendu) de notre fichier et en même temps l'injection des variables attendues par le fichier ejs

const promotion = 'Web Mobile de Technofutur'
// En javascript, si le nom de la clé d'un object est identique au nom de la variable qui contient la valeur alors
// il n'est pas nécessaire de l'indiquer deux fois (promotion: promotion ✅) on peut simplement appeler le nom de la clé (promotion ✅)
const bodyRender = ejs.render(body, {promotion: promotion})

// Création de la vue avec rendu ejs
const view = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(bodyRender)
};

// Envoie de la vue au serveur
server.on('request', view);
