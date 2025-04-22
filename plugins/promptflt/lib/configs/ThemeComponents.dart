import 'package:flutter/material.dart';

import 'ThemeUserMessage.dart';
import 'ThemeAssistantMessage.dart';
import 'ThemeMessageInput.dart';
import 'ThemeMessageRenderer.dart';
import 'ThemeImageGallery.dart';
import 'ThemeCodeBlock.dart';
import 'ThemeLinkText.dart';
import 'ThemePlainMessage.dart';
import 'ThemePlainText.dart';
import 'ThemePlainTextDefault.dart';
import 'ThemeSchemaTable.dart';
import 'ThemeTitleText.dart';

class ThemeComponents {
  final ThemeUserMessage userMessage;
  final ThemeAssistantMessage assistantMessage;
  final ThemeMessageInput messageInput;
  final ThemeMessageRenderer messageRenderer;
  final ThemeImageGallery imageGallery;
  final ThemeCodeBlock codeBlock;
  final ThemeLinkText linkText;
  final ThemePlainMessage plainMessage;
  final ThemePlainText plainText;
  final ThemePlainTextDefault plainTextDefault;
  final ThemeSchemaTable schemaTable;
  final ThemeTitleText titleText;

  ThemeComponents({
    required this.userMessage,
    required this.assistantMessage,
    required this.messageInput,
    required this.messageRenderer,
    required this.imageGallery,
    required this.codeBlock,
    required this.linkText,
    required this.plainMessage,
    required this.plainText,
    required this.plainTextDefault,
    required this.schemaTable,
    required this.titleText,
  });

  factory ThemeComponents.fromJson(Map<String, dynamic> json) {
    return ThemeComponents(
      userMessage: ThemeUserMessage.fromJson(json['userMessage'] ?? {}),
      assistantMessage: ThemeAssistantMessage.fromJson(json['assistantMessage'] ?? {}),
      messageInput: ThemeMessageInput.fromJson(json['messageInput'] ?? {}),
      messageRenderer: ThemeMessageRenderer.fromJson(json['messageRenderer'] ?? {}),
      imageGallery: ThemeImageGallery.fromJson(json['imageGallery'] ?? {}),
      codeBlock: ThemeCodeBlock.fromJson(json['codeBlock'] ?? {}),
      linkText: ThemeLinkText.fromJson(json['linkText'] ?? {}),
      plainMessage: ThemePlainMessage.fromJson(json['plainMessage'] ?? {}),
      plainText: ThemePlainText.fromJson(json['plainText'] ?? {}),
      plainTextDefault: ThemePlainTextDefault.fromJson(json['plainTextDefault'] ?? {}),
      schemaTable: ThemeSchemaTable.fromJson(json['schemaTable'] ?? {}),
      titleText: ThemeTitleText.fromJson(json['titleText'] ?? {}),
    );
  }
}

