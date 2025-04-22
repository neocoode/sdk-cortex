import 'package:flutter/material.dart';

class ThemeTypography {
  final String fontFamily;
  final ThemeFontSize fontSize;

  ThemeTypography({
    required this.fontFamily,
    required this.fontSize,
  });

  factory ThemeTypography.fromJson(Map<String, dynamic> json) {
    return ThemeTypography(
      fontFamily: json['fontFamily'],
      fontSize: ThemeFontSize.fromJson(json['fontSize']),
    );
  }
}

class ThemeFontSize {
  final double small;
  final double medium;
  final double large;
  final double xlarge;
  final double xxlarge;

  ThemeFontSize({
    required this.small,
    required this.medium,
    required this.large,
    required this.xlarge,
    required this.xxlarge,
  });

  factory ThemeFontSize.fromJson(Map<String, dynamic> json) {
    return ThemeFontSize(
      small: (json['small'] as num).toDouble(),
      medium: (json['medium'] as num).toDouble(),
      large: (json['large'] as num).toDouble(),
      xlarge: (json['xlarge'] as num).toDouble(),
      xxlarge: (json['xxlarge'] as num).toDouble(),
    );
  }
}
