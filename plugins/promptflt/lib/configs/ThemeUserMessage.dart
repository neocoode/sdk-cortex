import 'package:flutter/material.dart';

class ThemeUserMessage {
  final Color backgroundColor;
  final Color borderColor;
  final Color textColor;
  final Color iconColor;

  ThemeUserMessage({
    required this.backgroundColor,
    required this.borderColor,
    required this.textColor,
    required this.iconColor,
  });

  factory ThemeUserMessage.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor) {
      if (hexColor == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeUserMessage(
      backgroundColor: _parseColor(json['backgroundColor']),
      borderColor: _parseColor(json['borderColor']),
      textColor: _parseColor(json['textColor']),
      iconColor: _parseColor(json['iconColor']),
    );
  }
}

