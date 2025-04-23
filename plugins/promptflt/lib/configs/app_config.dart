import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:promptflt/configs/themes/BaseTheme.dart';
import 'themes/Themes.dart';

class AppConfig {
  static final AppConfig _instance = AppConfig._internal();
  factory AppConfig() => _instance;
  AppConfig._internal();

  late final BaseTheme theme;

  Future<void> initialize() async {
    await dotenv.load();
    final themeName = dotenv.env['THEME'] ?? 'lunar';
    theme = Themes.getTheme(themeName);
  }
}

final appConfig = AppConfig();
