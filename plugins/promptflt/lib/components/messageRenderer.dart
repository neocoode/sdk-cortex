import 'dart:convert';
import 'package:flutter/material.dart';
import '../configs/app_config.dart';

import 'renderer/schemaTable.dart';
import 'renderer/linkText.dart';
import 'renderer/codeBlock.dart';
import 'renderer/titleText.dart';
import 'renderer/imageGallery.dart';
import 'renderer/plainText.dart';
import 'renderer/plainTextDefault.dart';
import 'renderer/plainMessage.dart';

class MessageRenderer extends StatelessWidget {
  final Map<String, dynamic> message;

  const MessageRenderer({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    final type = message['type'];
    final value = message['value'];

    if (value == null || value.toString().isEmpty) {
      return const SizedBox.shrink();
    }

    switch (type) {
      case 'title':
        return TitleText(
          content: value.toString(),
        );

      case 'message':
        return PlainMessage(
          content: value.toString(),
        );

      case 'text':
        return PlainText(
          content: value.toString(),
        );

      case 'table':
        final decodedValue = jsonDecode(value);
        final innerType = decodedValue['type'];

        if (innerType == 'schema') {
          final fields =
              List<Map<String, dynamic>>.from(decodedValue['fields']);
          return SchemaTable(fields: fields);
        }
        return const SizedBox.shrink();

      case 'link':
        return LinkText(
          url: value.toString(),
        );

      case 'imageUrl':
        try {
          final decodedValue = jsonDecode(value.toString());
          if (decodedValue is List) {
            final imageUrls = decodedValue.map((e) => e.toString()).toList();
            return ImageGallery(imageUrls: imageUrls);
          }
        } catch (_) {
          return const SizedBox.shrink();
        }
        return const SizedBox.shrink();

      case 'code':
      case 'json':
      case 'xml':
        return Container(
          margin: EdgeInsets.symmetric(vertical: appConfig.theme.spacingSmall),
          child: CodeBlock(
            content: value.toString(),
          ),
        );

      default:
        return PlainTextDefault(
          content: value.toString(),
        );
    }
  }
}
