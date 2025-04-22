import 'package:flutter/material.dart';

class ThemePlainText {
  final Color textColor;

  ThemePlainText({required this.textColor});

  factory ThemePlainText.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String hexColor) {
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemePlainText(
      textColor: _parseColor(json['textColor']),
    );
  }
}
