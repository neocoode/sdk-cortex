import 'package:flutter/material.dart';

class ThemeCodeBlock {
  final Color titleColor;
  final Color backgroundColor;
  final Color borderColor;
  final Color textColor;
  final Color iconColor;

  ThemeCodeBlock({
    required this.titleColor,
    required this.backgroundColor,
    required this.borderColor,
    required this.textColor,
    required this.iconColor,
  });

  factory ThemeCodeBlock.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor) {
      if (hexColor == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeCodeBlock(
      titleColor: _parseColor(json['titleColor']),
      backgroundColor: _parseColor(json['backgroundColor']),
      borderColor: _parseColor(json['borderColor']),
      textColor: _parseColor(json['textColor']),
      iconColor: _parseColor(json['iconColor']),
    );
  }
}
