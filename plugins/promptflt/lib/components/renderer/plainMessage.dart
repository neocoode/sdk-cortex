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
    final style = appConfig.theme.plainMessage;

    return Container(
      margin: EdgeInsets.only(
          top: appConfig.theme.spacingXLarge,
          left: appConfig.theme.spacingSmall / 2,
          right: appConfig.theme.spacingSmall / 2),
      decoration: BoxDecoration(
        color: style.backgroundColor,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
      ),
      child: Text(
        content,
        style: TextStyle(
          color: style.textColor,
          fontSize: appConfig.theme.fontSizeLarge,
        ),
        textAlign: TextAlign.justify,
      ),
    );
  }
}
