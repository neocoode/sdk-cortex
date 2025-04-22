import 'package:flutter/material.dart';

class ThemeSpacing {
  final double small;
  final double medium;
  final double large;
  final double xlarge;

  ThemeSpacing({
    required this.small,
    required this.medium,
    required this.large,
    required this.xlarge,
  });

  factory ThemeSpacing.fromJson(Map<String, dynamic> json) {
    return ThemeSpacing(
      small: (json['small'] as num).toDouble(),
      medium: (json['medium'] as num).toDouble(),
      large: (json['large'] as num).toDouble(),
      xlarge: (json['xlarge'] as num).toDouble(),
    );
  }
}
