import 'package:flutter/material.dart';
class ThemeAssistantMessage {
  final Color backgroundColor;
  final Color textColor;

  ThemeAssistantMessage({
    required this.backgroundColor,
    required this.textColor,
  });

  factory ThemeAssistantMessage.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor) {
      if (hexColor == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeAssistantMessage(
      backgroundColor: _parseColor(json['backgroundColor']),
      textColor: _parseColor(json['textColor']),
    );
  }
}