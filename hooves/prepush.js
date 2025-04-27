// Script para ser executado antes do push
// Mata o processo rodando na porta 3000 e remove a pasta .next

// const { execSync } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// try {
//   // Mata o processo na porta 3000
//   execSync('kill -9 $(lsof -t -i :3000) || true', { stdio: 'inherit', shell: '/bin/bash' });
//   console.log('Processo na porta 3000 finalizado.');
// } catch (error) {
//   console.log('Nenhum processo na porta 3000 para finalizar.');
// }
