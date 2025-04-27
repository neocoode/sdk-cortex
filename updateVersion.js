/**
 * Script para atualização automática de versão no package.json
 * Este script incrementa automaticamente a versão patch do projeto
 * e adiciona a mensagem do último commit como referência
 * 
 * Funcionalidades:
 * - Incrementa a versão patch (x.y.z+1)
 * - Captura a mensagem do último commit
 * - Atualiza o package.json com as novas informações
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Obtém a mensagem do commit atual do repositório
 * @returns {string} Mensagem do commit atual ou string vazia em caso de erro
 */
function getCurrentCommitMessage() {
    try {
        // Pega a mensagem do commit que está sendo feito
        return execSync('git log -1 --pretty=%B').toString().trim();
    } catch (error) {
        console.error('Erro ao obter mensagem do commit atual:', error);
        return '';
    }
}

/**
 * Obtém o login do usuário que está fazendo o commit
 * @returns {string} Login do usuário ou string vazia em caso de erro
 */
function getUserLogin() {
    try {
        // Tenta obter o email do git config
        const email = execSync('git config user.email').toString().trim();
        // Extrai o login do email (parte antes do @)
        return email.split('@')[0];
    } catch (error) {
        console.error('Erro ao obter login do usuário:', error);
        return '';
    }
}

/**
 * Atualiza a versão no package.json
 * Incrementa a versão patch e adiciona a mensagem do último commit
 * @throws {Error} Se houver erro na leitura ou escrita do package.json
 */
function updateVersion() {
    try {
        // Lê o package.json
        const packagePath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

        // Divide a versão atual em major.minor.patch
        const [major, minor, patch] = packageJson.version.split('.').map(Number);

        // Incrementa o patch
        packageJson.version = `${major}.${minor}.${patch + 1}`;

        // Adiciona a descrição do commit atual
        const commitMessage = getCurrentCommitMessage();
        if (commitMessage) {
            packageJson.lastCommit = commitMessage;
        }

        // Adiciona o login do usuário
        const userLogin = getUserLogin();
        if (userLogin) {
            packageJson.lastLoginCommit = userLogin;
        }

        // Escreve o arquivo atualizado
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

        console.log(`Versão atualizada para ${packageJson.version}`);
        if (commitMessage) {
            console.log(`Commit atual: ${packageJson.lastCommit}`);
        }
        if (userLogin) {
            console.log(`Usuário: ${packageJson.lastLoginCommit}`);
        }
    } catch (error) {
        console.error('Erro ao atualizar a versão:', error);
        process.exit(1);
    }
}

updateVersion();