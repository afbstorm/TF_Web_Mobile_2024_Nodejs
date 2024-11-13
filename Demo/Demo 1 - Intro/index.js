// Importation du module HTTP
const http = require('http');

// Déclaration du port écouté par le serveur
const PORT = 8000;

// Déclaration et initialisation du serveur
// createServer prend un callback qui va prendre deux params.
// Ces deux params sont :
// - request (req) : va contenir toutes les informations de la requête http interceptée
// - response (res) : va contenir toutes les informations que le serveur va renvoyée suite à la requête interceptée
const server = http.createServer((req, res) => {

    // Déclaration d'une constante qui va récupérer les informations de l'url de la requête
    const url = req.url.toLowerCase();
    const method = req.method;
    // .../product/42
    const productRegex = /(?<=^\/product\/)[0-9]+$/;

    // Pour créer un système de routing en nodejs, on a besoin de passer par une structure conditionnelle
    if (method === 'GET' && url === '/') {
        const body = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
                <title>Demo nodejs</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
        `;

        res.end(body);
    } else if (method === 'GET' && productRegex.test(url)) {
        const productId = productRegex.exec(url)
        const body = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
                <title>Demo nodejs</title>
            </head>
            <body>
                <h1>ID récupéré depuis l'url : ${productId}</h1>
            </body>
        </html>
        `;

        res.end(body);
    } else {
        const body = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
                <title>Demo nodejs</title>
            </head>
            <body>
                <h1>Erreur 404 : Page not found</h1>
            </body>
        </html>
        `;

        res.end(body);
    }
})

// Mise en écoute du serveur sur le port
server.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`)
})


// Verbes HTTP

// GET : Demande au serveur une ressource - un url / via un élément spécifique (id)
// POST : Envoie des données au serveur qui les vérifies et les envoie ensuite à la DB (ou pas)
// DELETE : Récupère une ressource via son id et la supprime de la DB
// PUT : Modifier l'intégralité d'une ressource
// PATCH : Modifier une parti d'une ressource
