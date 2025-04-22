import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'configs/app_config.dart';
import 'configs/ThemeManager.dart';
import 'views/chat_view.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await appConfig.initialize();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<ThemeType>(
      valueListenable: appConfig.themeController,
      builder: (context, themeType, child) {
        return MaterialApp(
          title: 'Prompt FLT - ${themeType.toString().split('.').last.toUpperCase()}',
          theme: ThemeData(
            useMaterial3: true,
            colorScheme: ColorScheme.fromSeed(
              seedColor: appConfig.theme.primary,
              brightness: themeType == ThemeType.dark ? Brightness.dark : Brightness.light,
              background: appConfig.theme.background,
              surface: appConfig.theme.surface,
              primary: appConfig.theme.primary,
              secondary: appConfig.theme.surfaceSecondary,
              error: appConfig.theme.error,
              onBackground: appConfig.theme.textPrimary,
              onSurface: appConfig.theme.textPrimary,
              onPrimary: Colors.white,
              onSecondary: appConfig.theme.textPrimary,
              onError: Colors.white,
            ),
            scaffoldBackgroundColor: appConfig.theme.background,
            appBarTheme: AppBarTheme(
              backgroundColor: appConfig.theme.surface,
              foregroundColor: appConfig.theme.textPrimary,
            ),
            textTheme: TextTheme(
              bodyLarge: TextStyle(color: appConfig.theme.textPrimary),
              bodyMedium: TextStyle(color: appConfig.theme.textPrimary),
              titleLarge: TextStyle(color: appConfig.theme.textPrimary),
            ),
            inputDecorationTheme: InputDecorationTheme(
              filled: true,
              fillColor: appConfig.theme.surfaceLight,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: appConfig.theme.border),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: appConfig.theme.border),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: appConfig.theme.primary),
              ),
              hintStyle: TextStyle(color: appConfig.theme.textSecondary),
            ),
          ),
          home: const ChatView(),
        );
      },
    );
  }
}
