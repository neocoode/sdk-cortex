#!/bin/bash

# 🚀 Script para executar o app no macOS desktop

# Navega para o diretório do projeto
echo "📂 Navegando para o diretório do projeto..."
cd plugins/promptflt

# Atualiza dependências
echo "📦 Atualizando dependências..."
flutter pub get

# Executa o app no macOS
echo "▶️  Iniciando o aplicativo no macOS..."
flutter run -d macos --web-browser-flag --disable-web-security --hot

echo "ℹ️  Para encerrar o aplicativo, pressione 'q' no terminal" 