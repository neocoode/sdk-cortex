import 'package:flutter/material.dart';

class ThemeMessageInput {
  final Color containerBackground;
  final Color textFieldBackground;
  final Color textColor;
  final Color hintColor;
  final Color iconColor;
  final Color buttonBackground;

  ThemeMessageInput({
    required this.containerBackground,
    required this.textFieldBackground,
    required this.textColor,
    required this.hintColor,
    required this.iconColor,
    required this.buttonBackground,
  });

  factory ThemeMessageInput.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String? hexColor, {String defaultColor = '#000000'}) {
      if (hexColor == null) {
        hexColor = defaultColor;
      }
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    return ThemeMessageInput(
      containerBackground: _parseColor(json['containerBackground']),
      textFieldBackground: _parseColor(json['textFieldBackground']),
      textColor: _parseColor(json['textColor']),
      hintColor: _parseColor(json['hintColor']),
      iconColor: _parseColor(json['iconColor']),
      buttonBackground: _parseColor(json['buttonBackground']),
    );
  }
}
