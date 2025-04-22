import 'package:flutter/material.dart';

class ThemePlainMessage {
  final Color backgroundColor;
  final Color textColor;

  ThemePlainMessage({
    required this.backgroundColor,
    required this.textColor,
  });

  factory ThemePlainMessage.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor) {
      if (hexColor == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemePlainMessage(
      backgroundColor: _parseColor(json['backgroundColor']),
      textColor: _parseColor(json['textColor']),
    );
  }
}
