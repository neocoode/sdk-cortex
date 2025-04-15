import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'views/splash_view.dart';

void main() {
  runApp(const CortexChatApp());
}

class CortexChatApp extends StatelessWidget {
  const CortexChatApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cortex Chat',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
      ),
      home: const SplashView(),
    );
  }
}
