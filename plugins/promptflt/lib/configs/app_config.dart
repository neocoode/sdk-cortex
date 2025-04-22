import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'ThemeManager.dart';
import 'ThemeModel.dart';

class AppConfig {
  static final AppConfig _instance = AppConfig._internal();
  factory AppConfig() => _instance;
  
  late final ThemeManager themeManager;
  bool _initialized = false;
  
  AppConfig._internal();

  Future<void> initialize() async {
    if (_initialized) return;
    
    try {
      print('📁 Tentando carregar o arquivo .env...');
      await dotenv.load(fileName: ".env");
      print('✅ Arquivo .env carregado com sucesso!');
      print('🔍 Variáveis carregadas: ${dotenv.env}');
    } catch (e) {
      print('❌ Erro ao carregar .env: $e');
    }
    
    themeManager = ThemeManager();
    
    // Inicializa o tema baseado no ambiente
    final themeType = _getThemeFromEnv();
    print('🎨 Tema selecionado: $themeType');
    await themeManager.setTheme(themeType);
    
    _initialized = true;
  }

  ThemeType _getThemeFromEnv() {
    if (kIsWeb) {
      // Primeiro tenta ler do .env mesmo na web
      final themeEnv = dotenv.env['THEME_TYPE']?.toLowerCase();
      if (themeEnv != null) {
        print('🔧 Tema do .env: $themeEnv');
        return _parseThemeType(themeEnv);
      }
      
      // Se não encontrar no .env, tenta da URL
      final uri = Uri.base;
      final themeParam = uri.queryParameters['theme']?.toLowerCase();
      print('🌐 Tema da URL: $themeParam');
      return _parseThemeType(themeParam);
    } else {
      final themeEnv = dotenv.env['THEME_TYPE']?.toLowerCase() ?? 'dark';
      print('🔧 Tema do .env: $themeEnv');
      return _parseThemeType(themeEnv);
    }
  }

  ThemeType _parseThemeType(String? theme) {
    switch (theme) {
      case 'light':
        return ThemeType.light;
      case 'dark':
        return ThemeType.dark;
      case 'claro':
        return ThemeType.claro;
      default:
        return ThemeType.dark;
    }
  }

  // Getters úteis
  ThemeModel get theme => themeManager.theme;
  ValueNotifier<ThemeType> get themeController => themeManager.themeController;
  ThemeType get currentTheme => themeManager.currentTheme;
}

// Instância global para fácil acesso
final appConfig = AppConfig(); 