import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_highlight/flutter_highlight.dart';
import 'package:flutter_highlight/themes/monokai-sublime.dart';
import '../../configs/app_config.dart';

class CodeBlock extends StatelessWidget {
  final String content;

  const CodeBlock({
    super.key,
    required this.content,
  });

  void _copyToClipboard(BuildContext context) {
    Clipboard.setData(ClipboardData(text: content));
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          'Código copiado para a área de transferência',
          style: TextStyle(
            color: appConfig.theme.onPrimary,
          ),
        ),
        backgroundColor: appConfig.theme.backgroundSecondary,
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.codeBlock;

    return Container(
      margin: EdgeInsets.only(
          top: appConfig.theme.spacingXLarge,
          left: appConfig.theme.spacingSmall / 2,
          right: appConfig.theme.spacingSmall / 2),
      decoration: BoxDecoration(
        color: style.backgroundColor,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
        border: Border.all(
          color: style.borderColor,
          width: 1,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Top bar com título e botão copiar
          Container(
            padding: EdgeInsets.symmetric(
              horizontal: appConfig.theme.spacingMedium,
              vertical: appConfig.theme.spacingSmall,
            ),
            decoration: BoxDecoration(
              color: style.surfaceLight,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(appConfig.theme.borderRadiusLarge),
                topRight: Radius.circular(appConfig.theme.borderRadiusLarge),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Código',
                  style: TextStyle(
                    color: style.titleColor,
                    fontSize: appConfig.theme.fontSizeMedium,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                IconButton(
                  icon: Icon(
                    Icons.copy,
                    color: style.iconColor,
                    size: 20,
                  ),
                  onPressed: () => _copyToClipboard(context),
                ),
              ],
            ),
          ),

          // Bloco de código com highlight
          Container(
            decoration: BoxDecoration(
              color: style.backgroundColor,
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(appConfig.theme.borderRadiusLarge),
                bottomRight: Radius.circular(appConfig.theme.borderRadiusLarge),
              ),
            ),
            child: HighlightView(
              padding: EdgeInsets.all(appConfig.theme.spacingMedium),
              content,
              language: 'dart',
              theme: monokaiSublimeTheme,
              textStyle: TextStyle(
                fontSize: appConfig.theme.fontSizeMedium,
                fontFamily: appConfig.theme.fontFamily,
                color: style.textColor,
                height: 1.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
