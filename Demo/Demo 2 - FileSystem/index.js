const fs = require('fs');

const handleFile = async () => {
    try {
        // writeFile prend 2 à 4 paramètres
        // 1 - le chemin d'accès au fichier, si le fichier n'existe pas alors il le crée
        // 2 - data a insérer dans le fichier
        // 3 - options, généralement utilisée pour le format (optionnel)
        // 4 - le callback (optionnel avec promises)
        await fs.promises.writeFile('./fichierExemple.txt', 'Hello World', 'utf8')
        console.log('Fichier écrit avec succès');

        // appendFile prend 4 paramètres
        // 1 - le chemin d'accès au fichier
        // 2 - data a insérer dans le fichier à la suite des infos existantes
        // 3 - options, généralement utilisée pour le format (optionnel)
        // 4 - le callback (optionnel avec promises)
        const update = await fs.promises.appendFile('./fichierExemple.txt', '\nEt bonjour encore une fois.', 'utf8');
        console.log('Fichier mis à jour avec succès');

        // readFile prend 1 à 3 paramètres
        // 1 - le chemin d'accès au fichier
        // 2 - le format (optionnel)
        // 3 - le callback (optionnel avec promises)
        const content = await fs.promises.readFile('./fichierExemple.txt', 'utf8');
        console.log(`Contenu du fichier : ${content}`);

        // unlink prend 1 à 2 paramètres
        // 1 - le chemin d'accès au fichier
        // 2 - le callback (optionnel avec promises)
        await fs.promises.unlink('./fichierExemple.txt');
        console.log('Fichier supprimé avec succès');
    } catch (err) {
        console.error(err)
    }
}

handleFile();
