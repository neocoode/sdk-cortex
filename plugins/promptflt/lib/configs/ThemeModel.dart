import 'package:flutter/material.dart';
import 'ThemeColors.dart';
import 'ThemeTypography.dart';
import 'ThemeSpacing.dart';
import 'ThemeBorderRadius.dart';
import 'ThemeComponents.dart';
import 'dart:convert';

class ThemeModel {
  final String name;
  final ThemeColors colors;
  final ThemeTypography typography;
  final ThemeSpacing spacing;
  final ThemeBorderRadius borderRadius;
  final ThemeComponents components;

  ThemeModel({
    required this.name,
    required this.colors,
    required this.typography,
    required this.spacing,
    required this.borderRadius,
    required this.components,
  });

  // === CONVENIENCE GETTERS ===
  Color get primary => colors.primary;
  Color get secondary => colors.secondary;
  Color get background => colors.background;
  Color get surface => colors.surface;
  Color get surfaceLight => colors.surfaceLight;
  Color get error => colors.error;
  Color get onPrimary => colors.onPrimary;
  Color get onSecondary => colors.onSecondary;
  Color get onBackground => colors.onBackground;
  Color get onSurface => colors.onSurface;
  Color get border => colors.border;
  Color get divider => colors.divider;
  Color get textPrimary => colors.text;
  Color get textSecondary => colors.textSecondary;
  Color get shadow => colors.shadow;
  Color get surfaceSecondary => colors.surfaceLight;

  double get spacingSmall => spacing.small;
  double get spacingMedium => spacing.medium;
  double get spacingLarge => spacing.large;
  double get spacingXLarge => spacing.xlarge;

  double get borderRadiusSmall => borderRadius.small;
  double get borderRadiusMedium => borderRadius.medium;
  double get borderRadiusLarge => borderRadius.large;
  double get borderRadiusXLarge => borderRadius.xlarge;

  String get fontFamily => typography.fontFamily;
  double get fontSizeSmall => typography.fontSize.small;
  double get fontSizeMedium => typography.fontSize.medium;
  double get fontSizeLarge => typography.fontSize.large;
  double get fontSizeXLarge => typography.fontSize.xlarge;
  double get fontSizeXXLarge => typography.fontSize.xxlarge;

  factory ThemeModel.fromJsonString(String jsonString) {
    if (jsonString.isEmpty) {
      throw ArgumentError('JSON string cannot be empty');
    }
    final Map<String, dynamic>? json = jsonDecode(jsonString);
    if (json == null) {
      throw ArgumentError('Invalid JSON string');
    }
    return ThemeModel(
      name: json['name'],
      components: ThemeComponents.fromJson(json['components'] ?? {}),
      colors: ThemeColors.fromJson(json['colors'] ?? {}),
      typography: ThemeTypography.fromJson(json['typography'] ?? {} ),
      spacing: ThemeSpacing.fromJson(json['spacing'] ?? {}),
      borderRadius: ThemeBorderRadius.fromJson(json['borderRadius'] ?? {}),
      

    );
  }
}
