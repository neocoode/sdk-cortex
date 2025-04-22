import 'package:flutter/material.dart';

class ThemePlainTextDefault {
  final Color textColor;

  ThemePlainTextDefault({required this.textColor});

  factory ThemePlainTextDefault.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String hexColor) {
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemePlainTextDefault(
      textColor: _parseColor(json['textColor']),
    );
  }
}
