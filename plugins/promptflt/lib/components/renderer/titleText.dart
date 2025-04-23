import 'package:flutter/material.dart';
import '../../configs/app_config.dart';

class TitleText extends StatelessWidget {
  final String content;

  const TitleText({
    super.key,
    required this.content,
  });

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.titleText;

    return Container(
      margin: EdgeInsets.only(
          top: appConfig.theme.spacingXLarge,
          left: appConfig.theme.spacingSmall / 2,
          right: appConfig.theme.spacingSmall / 2),
      child: Text(
        content,
        style: TextStyle(
          color: style.textColor,
          fontSize: appConfig.theme.fontSizeXLarge,
          fontWeight: style.fontWeight,
        ),
      ),
    );
  }
}
