import 'package:flutter/material.dart';

class ThemeBorderRadius {
  final double small;
  final double medium;
  final double large;
  final double xlarge;

  ThemeBorderRadius({
    required this.small,
    required this.medium,
    required this.large,
    required this.xlarge,
  });

  factory ThemeBorderRadius.fromJson(Map<String, dynamic> json) {
    return ThemeBorderRadius(
      small: (json['small'] as num).toDouble(),
      medium: (json['medium'] as num).toDouble(),
      large: (json['large'] as num).toDouble(),
      xlarge: (json['xlarge'] as num).toDouble(),
    );
  }
}
