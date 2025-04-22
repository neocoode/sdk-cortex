import 'package:flutter/material.dart';
import '../../configs/app_config.dart';

class PlainTextDefault extends StatelessWidget {
  final String content;

  const PlainTextDefault({
    super.key,
    required this.content,
  });

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.components.plainTextDefault;

    return Container(
      margin: EdgeInsets.symmetric(vertical: appConfig.theme.spacingSmall / 2),
      child: Text(
        content,
        style: TextStyle(
          color: style.textColor,
          fontSize: appConfig.theme.fontSizeMedium,
        ),
      ),
    );
  }
}
