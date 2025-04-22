import 'package:flutter/material.dart';

class ThemeLinkText {
  final Color iconColor;
  final Color textColor;
  final Color backgroundColor;

  ThemeLinkText({
    required this.iconColor,
    required this.textColor,
    required this.backgroundColor,
  });

  factory ThemeLinkText.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hex) {
      if (hex == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hex = hex.toUpperCase().replaceAll('#', '');
      if (hex.length == 6) hex = 'FF$hex';
      return Color(int.parse(hex, radix: 16));
    }

    return ThemeLinkText(
      iconColor: _parseColor(json['iconColor']),
      textColor: _parseColor(json['textColor']),
      backgroundColor: _parseColor(json['backgroundColor']),
    );
  }
}
