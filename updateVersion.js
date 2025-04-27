const fs = require('fs');
const path = require('path');

// Função para atualizar a versão no package.json
function updateVersion() {
    try {
        // Lê o package.json
        const packagePath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

        // Divide a versão atual em major.minor.patch
        const [major, minor, patch] = packageJson.version.split('.').map(Number);

        // Incrementa o patch
        packageJson.version = `${major}.${minor}.${patch + 1}`;

        // Escreve o arquivo atualizado
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

        console.log(`Versão atualizada para ${packageJson.version}`);
    } catch (error) {
        console.error('Erro ao atualizar a versão:', error);
        process.exit(1);
    }
}

updateVersion(); 