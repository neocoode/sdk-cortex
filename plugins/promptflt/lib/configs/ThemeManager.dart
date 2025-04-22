import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ThemeModel.dart';

enum ThemeType { light, dark, claro }

class ThemeManager {
  static final ThemeManager _instance = ThemeManager._internal();
  factory ThemeManager() => _instance;
  
  ThemeType _currentTheme = ThemeType.claro;
  final _themeController = ValueNotifier<ThemeType>(ThemeType.claro);
  late ThemeModel _theme;

  ThemeManager._internal() {
    _loadTheme();
  }

  Future<void> _loadTheme() async {
    try {
      final themeFile = _getThemeFile();
      final jsonString = await rootBundle.loadString(themeFile);
      if (jsonString.isEmpty) {
        throw ArgumentError('Theme file is empty');
      }
      print('🔍 JSON carregado:');
      print(jsonString);
      _theme = ThemeModel.fromJsonString(jsonString);
      _themeController.value = _currentTheme;
    } catch (e) {
      print('❌ Erro ao carregar tema: $e');
      // Carrega tema dark como fallback
      final jsonString = await rootBundle.loadString('lib/configs/themes/dark.json');
      print('🔍 JSON fallback carregado:');
      print(jsonString);
      _theme = ThemeModel.fromJsonString(jsonString);
      _currentTheme = ThemeType.dark;
      _themeController.value = ThemeType.dark;
    }
  }

  String _getThemeFile() {
    switch (_currentTheme) {
      case ThemeType.light:
        return 'lib/configs/themes/light.json';
      case ThemeType.dark:
        return 'lib/configs/themes/dark.json';
      case ThemeType.claro:
        return 'lib/configs/themes/claro.json';
    }
  }

  ThemeType get currentTheme => _currentTheme;
  ValueNotifier<ThemeType> get themeController => _themeController;
  ThemeModel get theme => _theme;

  Future<void> setTheme(ThemeType theme) async {
    _currentTheme = theme;
    await _loadTheme();
  }
} 