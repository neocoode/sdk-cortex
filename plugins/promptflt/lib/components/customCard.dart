import 'package:flutter/material.dart';
import 'package:promptflt/configs/app_config.dart';
import 'package:promptflt/configs/themes/BaseTheme.dart';

class CustomCard extends StatelessWidget {
  final String title;
  final List<Widget> rightIcons;
  final Widget content;
  final CustomThemeItems style;

  const CustomCard({
    super.key,
    required this.title,
    required this.rightIcons,
    required this.content,
    required this.style,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(
          top: appConfig.theme.spacingXLarge,
          left: appConfig.theme.spacingSmall / 2,
          right: appConfig.theme.spacingSmall / 2),
      decoration: BoxDecoration(
        color: style.topBarBackground,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
        border: Border.all(
          color: style.borderColor ?? Colors.transparent,          
          width: 2,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Top bar com título e ícones à direita
          Container(
            padding: EdgeInsets.only(
              left: appConfig.theme.spacingSmall,
              right: appConfig.theme.spacingSmall,
              top: appConfig.theme.spacingSmall / 2,
              bottom: appConfig.theme.spacingSmall / 2,
            ),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(8.0),
                topRight: Radius.circular(8.0),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: style.topBarTextColor,
                    fontSize: appConfig.theme.fontSizeSmall,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Row(children: rightIcons),
              ],
            ),
          ),

          // Conteúdo do meio
          Container(
            padding: EdgeInsets.all(appConfig.theme.spacingSuperSmall),
            decoration: BoxDecoration(
              color: style.backgroundColor,
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(appConfig.theme.borderRadiusLarge),
                bottomRight: Radius.circular(appConfig.theme.borderRadiusLarge),
              ),
            ),
            child: content,
          ),
        ],
      ),
    );
  }
}
