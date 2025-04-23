import 'package:flutter/material.dart';
import 'configs/app_config.dart';
import 'views/chat_view.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await appConfig.initialize();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Prompt FLT',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme(
          primary: appConfig.theme.primary,
          secondary: appConfig.theme.secondary,
          surface: appConfig.theme.surface,
          error: appConfig.theme.error,
          onPrimary: appConfig.theme.onPrimary,
          onSecondary: appConfig.theme.onSecondary,
          onSurface: appConfig.theme.onSurface,
          onError: Colors.white,
          brightness: Brightness.light,
        ),
        scaffoldBackgroundColor: appConfig.theme.background,
        appBarTheme: AppBarTheme(
          backgroundColor: appConfig.theme.surface,
          foregroundColor: appConfig.theme.onSurface,
        ),
        textTheme: TextTheme(
          bodyLarge: TextStyle(color: appConfig.theme.text),
          bodyMedium: TextStyle(color: appConfig.theme.textSecondary),
          titleLarge: TextStyle(color: appConfig.theme.text),
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
  }
}
