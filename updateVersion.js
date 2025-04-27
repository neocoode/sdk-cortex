const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Função para obter a mensagem do último commit
function getLastCommitMessage() {
    try {
        return execSync('git log -1 --pretty=%B').toString().trim();
    } catch (error) {
        console.error('Erro ao obter mensagem do último commit:', error);
        return '';
    }
}

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

        // Adiciona a descrição do último commit
        packageJson.lastCommit = getLastCommitMessage();

        // Escreve o arquivo atualizado
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

        console.log(`Versão atualizada para ${packageJson.version}`);
        console.log(`Último commit: ${packageJson.lastCommit}`);
    } catch (error) {
        console.error('Erro ao atualizar a versão:', error);
        process.exit(1);
    }
}

updateVersion(); 