import 'package:flutter/material.dart';

class ThemeSchemaTable {
  final Color headerBackground;
  final Color headerTextColor;
  final Color rowBackground;
  final Color rowTextColor;
  final Color borderColor;
  final Color shadowColor;

  ThemeSchemaTable({
    required this.headerBackground,
    required this.headerTextColor,
    required this.rowBackground,
    required this.rowTextColor,
    required this.borderColor,
    required this.shadowColor,
  });

  factory ThemeSchemaTable.fromJson(Map<String, dynamic> json) {
    Color _parseColor(String hex) {
      hex = hex.toUpperCase().replaceAll('#', '');
      if (hex.length == 6) hex = 'FF$hex';
      return Color(int.parse(hex, radix: 16));
    }

    return ThemeSchemaTable(
      headerBackground: _parseColor(json['headerBackground']),
      headerTextColor: _parseColor(json['headerTextColor']),
      rowBackground: _parseColor(json['rowBackground']),
      rowTextColor: _parseColor(json['rowTextColor']),
      borderColor: _parseColor(json['borderColor']),
      shadowColor: _parseColor(json['shadowColor']),
    );
  }
}
