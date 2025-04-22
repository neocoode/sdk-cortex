
import 'package:flutter/material.dart';

class ThemeColors {
  final Color primary;
  final Color secondary;
  final Color background;
  final Color surface;
  final Color surfaceLight;
  final Color error;
  final Color onPrimary;
  final Color onSecondary;
  final Color onBackground;
  final Color onSurface;
  final Color border;
  final Color divider;
  final Color text;
  final Color textSecondary;
  final Color shadow;

  ThemeColors({
    required this.primary,
    required this.secondary,
    required this.background,
    required this.surface,
    required this.surfaceLight,
    required this.error,
    required this.onPrimary,
    required this.onSecondary,
    required this.onBackground,
    required this.onSurface,
    required this.border,
    required this.divider,
    required this.text,
    required this.textSecondary,
    required this.shadow,
  });

  factory ThemeColors.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String hexColor) {
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeColors(
      primary: _parseColor(json['primary']),
      secondary: _parseColor(json['secondary']),
      background: _parseColor(json['background']),
      surface: _parseColor(json['surface']),
      surfaceLight: _parseColor(json['surfaceLight']),
      error: _parseColor(json['error']),
      onPrimary: _parseColor(json['onPrimary']),
      onSecondary: _parseColor(json['onSecondary']),
      onBackground: _parseColor(json['onBackground']),
      onSurface: _parseColor(json['onSurface']),
      border: _parseColor(json['border']),
      divider: _parseColor(json['divider']),
      text: _parseColor(json['text']),
      textSecondary: _parseColor(json['textSecondary']),
      shadow: _parseColor(json['shadow']),
    );
  }
}
