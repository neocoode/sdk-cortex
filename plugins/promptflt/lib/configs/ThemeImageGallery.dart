import 'package:flutter/material.dart';

class ThemeImageGallery {
  final Color borderColor;
  final Color loadingBackground;
  final Color errorBackground;
  final Color errorIconColor;
  final Color errorTextColor;

  ThemeImageGallery({
    required this.borderColor,
    required this.loadingBackground,
    required this.errorBackground,
    required this.errorIconColor,
    required this.errorTextColor,
  });

  factory ThemeImageGallery.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hex) {
      if (hex == null) {
        throw ArgumentError('Color value cannot be null');
      }
      hex = hex.toUpperCase().replaceAll('#', '');
      if (hex.length == 6) hex = 'FF$hex';
      return Color(int.parse(hex, radix: 16));
    }

    return ThemeImageGallery(
      borderColor: _parseColor(json['borderColor']),
      loadingBackground: _parseColor(json['loadingBackground']),
      errorBackground: _parseColor(json['errorBackground']),
      errorIconColor: _parseColor(json['errorIconColor']),
      errorTextColor: _parseColor(json['errorTextColor']),
    );
  }
}
