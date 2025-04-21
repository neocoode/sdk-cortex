import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:promptflt/components/renderer/plainText.dart';
import 'package:promptflt/components/renderer/plainTextDefault.dart';
import 'renderer/schemaTable.dart';
import 'renderer/link_text.dart';
import 'renderer/codeBlock.dart';
import 'renderer/plainMessage.dart';
import 'renderer/title_text.dart';

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
        return TitleText(content: value.toString());
      case 'message':
        return PlainMessage(content: value.toString());
      case 'text':
        return PlainText(content: value.toString());
      case 'table':
        final decodedValue = jsonDecode(value);
        final innerType = decodedValue['type'];

        if (innerType == 'schema') {
          final fields = List<Map<String, dynamic>>.from(
            decodedValue['fields'],
          );
          return SchemaTable(fields: fields);
        }
        return const SizedBox.shrink();
      case 'link':
        return LinkText(url: value.toString());
      case 'code':
      case 'json':
      case 'xml':
        return CodeBlock(content: value.toString());
      default:
        return PlainTextDefault(content: value.toString());
    }
  }
}
