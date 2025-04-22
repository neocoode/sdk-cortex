import 'package:flutter/material.dart';

class ThemeTitleText {
  final Color textColor;
  final FontWeight fontWeight;

  ThemeTitleText({
    required this.textColor,
    required this.fontWeight,
  });

  factory ThemeTitleText.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String hexColor) {
      hexColor = hexColor.toUpperCase().replaceAll('#', '');
      if (hexColor.length == 6) hexColor = 'FF$hexColor';
      return Color(int.parse(hexColor, radix: 16));
    }

    FontWeight _parseFontWeight(String weight) {
      switch (weight.toLowerCase()) {
        case 'w100':
        case 'thin':
          return FontWeight.w100;
        case 'w200':
        case 'extraLight':
          return FontWeight.w200;
        case 'w300':
        case 'light':
          return FontWeight.w300;
        case 'w400':
        case 'normal':
          return FontWeight.w400;
        case 'w500':
        case 'medium':
          return FontWeight.w500;
        case 'w600':
        case 'semiBold':
          return FontWeight.w600;
        case 'w700':
        case 'bold':
          return FontWeight.w700;
        case 'w800':
        case 'extraBold':
          return FontWeight.w800;
        case 'w900':
        case 'black':
          return FontWeight.w900;
        default:
          return FontWeight.normal;
      }
    }

    return ThemeTitleText(
      textColor: _parseColor(json['textColor']),
      fontWeight: _parseFontWeight(json['fontWeight']),
    );
  }
}
