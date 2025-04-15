import 'dart:convert';
import 'package:flutter/material.dart';
import 'renderer/schema_table.dart';
import 'renderer/link_text.dart';
import 'renderer/code_block.dart';
import 'renderer/plain_text.dart';

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
        return PlainText(content: value.toString());
    }
  }
}
