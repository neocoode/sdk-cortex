import 'package:flutter/material.dart';
import '../../configs/app_config.dart';

class PlainMessage extends StatelessWidget {
  final String content;

  const PlainMessage({
    super.key,
    required this.content,
  });

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.components.plainMessage;

    return Container(
      margin: EdgeInsets.symmetric(vertical: appConfig.theme.spacingSmall / 2),
      padding: EdgeInsets.all(appConfig.theme.spacingSmall),
      decoration: BoxDecoration(
        color: style.backgroundColor,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
      ),
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
