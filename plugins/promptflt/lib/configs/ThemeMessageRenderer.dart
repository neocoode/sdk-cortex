import 'package:flutter/material.dart';

class ThemeMessageRenderer {
  final Color titleColor;
  final Color textColor;
  final Color linkColor;
  final Color codeBackground;
  final Color codeTextColor;

  ThemeMessageRenderer({
    required this.titleColor,
    required this.textColor,
    required this.linkColor,
    required this.codeBackground,
    required this.codeTextColor,
  });

  factory ThemeMessageRenderer.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor) {
      if (hexColor == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeMessageRenderer(
      titleColor: _parseColor(json['titleColor']),
      textColor: _parseColor(json['textColor']),
      linkColor: _parseColor(json['linkColor']),
      codeBackground: _parseColor(json['codeBackground']),
      codeTextColor: _parseColor(json['codeTextColor']),
    );
  }
}
