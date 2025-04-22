#!/bin/bash

kill -9 $(lsof -t -i :3000)

# 🚀 Executa o Flutter na pasta plugin/promptflt
echo "Iniciando Flutter (plugin/promptflt)..."
cd plugins/promptflt
flutter clean
flutter pub get
flutter run -d chrome --web-browser-flag "--disable-web-security" --hot

