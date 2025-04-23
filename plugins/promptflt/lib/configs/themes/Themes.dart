import 'BaseTheme.dart';
import 'MarsTheme.dart';

class Themes {
  static final BaseTheme lunar = MarsTheme();

  static BaseTheme getTheme(String name) {
    switch (name.toLowerCase()) {
      case 'lunar':
        return lunar;
      default:
        return lunar;
    }
  }
}
