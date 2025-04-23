import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_highlight/flutter_highlight.dart';
import 'package:flutter_highlight/themes/monokai-sublime.dart';

import '../../configs/app_config.dart';
import '../customCard.dart';

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
        backgroundColor: appConfig.theme.modalBackgroundColor,
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.codeBlock;

    return CustomCard(
      title: 'Código',
      rightIcons: [
        IconButton(
          icon: Icon(
            Icons.copy,
            color: style.topBarIconColor,
            size: appConfig.theme.fontSizeMedium,
          ),
          onPressed: () => _copyToClipboard(context),
        ),
      ],
      content: ClipRRect(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(appConfig.theme.borderRadiusLarge),
          bottomRight: Radius.circular(appConfig.theme.borderRadiusLarge),
        ),
        child: HighlightView(
          padding: EdgeInsets.all(appConfig.theme.spacingMedium),
          content,
          language: 'quote',
          theme: monokaiSublimeTheme,
          textStyle: TextStyle(
            fontSize: appConfig.theme.fontSizeMedium,
            fontFamily: appConfig.theme.fontFamily,
            color: style.textColor,
            height: 1.5,
          ),
        ),
      ),
      style: style,
    );
  }
}
