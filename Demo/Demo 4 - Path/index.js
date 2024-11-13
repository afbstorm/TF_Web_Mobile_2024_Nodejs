const path = require('path');

// Le module path va permettre d'intéragir avec les chemins d'accès des dossiers, ou fichiers.
// Il va également permettre de concaténer des chemins ensemble
// Il va permettre de récupérer l'extension de fichier
// Il va permettre de récupérer le nom du dossier contenant un fichier
// Il va permettre de récupérer le dernier élément (avec extension) d'un chemin

const joinedPath = path.join('/monDossierExemple', 'fichierExemple.txt');
console.log('PATHJOIN ➡️ :', joinedPath)

const resolvedPath = path.resolve('/monDossierExemple', 'fichierExemple.txt');
console.log('PATHRESOLVE ➡️ :', resolvedPath)

const extension = path.extname(resolvedPath);
console.log('PATHEXTNAME ➡️ :', extension)

const endOfPath = path.basename(resolvedPath);
console.log('PATHBASENAME ➡️ :', endOfPath)

const directory = path.dirname(resolvedPath);
console.log('PATHDIRNAME ➡️ : ', directory)

console.log('DIRNAME ➡️ : ', __dirname)
console.log('FILENAME ➡️ : ', __filename)
