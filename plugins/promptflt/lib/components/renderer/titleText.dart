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
    final style = appConfig.theme.components.titleText;

    return Container(
      margin: EdgeInsets.symmetric(vertical: appConfig.theme.spacingSmall),
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
