import 'BaseTheme.dart';
import 'LunarTheme.dart';

class Themes {
  static final BaseTheme lunar = LunarTheme();

  static BaseTheme getTheme(String name) {
    switch (name.toLowerCase()) {
      case 'lunar':
        return lunar;
      default:
        return lunar;
    }
  }
}
