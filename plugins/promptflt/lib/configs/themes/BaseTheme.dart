import 'package:flutter/material.dart';

class UserMessageStyle {
  final Color backgroundColor;
  final Color borderColor;
  final Color textColor;
  final Color iconColor;

  const UserMessageStyle({
    required this.backgroundColor,
    required this.borderColor,
    required this.textColor,
    required this.iconColor,
  });
}

class AssistantMessageStyle {
  final Color backgroundColor;
  final Color textColor;

  const AssistantMessageStyle({
    required this.backgroundColor,
    required this.textColor,
  });
}

class MessageRendererStyle {
  final Color titleColor;
  final Color textColor;
  final Color linkColor;
  final Color codeBackground;
  final Color codeTextColor;

  const MessageRendererStyle({
    required this.titleColor,
    required this.textColor,
    required this.linkColor,
    required this.codeBackground,
    required this.codeTextColor,
  });
}

class ImageGalleryStyle {
  final Color borderColor;
  final Color loadingBackground;
  final Color errorBackground;
  final Color errorIconColor;
  final Color errorTextColor;

  const ImageGalleryStyle({
    required this.borderColor,
    required this.loadingBackground,
    required this.errorBackground,
    required this.errorIconColor,
    required this.errorTextColor,
  });
}

class CodeBlockStyle {
  final Color titleColor;
  final Color backgroundColor;
  final Color borderColor;
  final Color textColor;
  final Color iconColor;
  final Color surfaceLight;

  const CodeBlockStyle({
    required this.titleColor,
    required this.backgroundColor,
    required this.borderColor,
    required this.textColor,
    required this.iconColor,
    required this.surfaceLight,
  });
}

class LinkTextStyle {
  final Color iconColor;
  final Color textColor;
  final Color backgroundColor;

  const LinkTextStyle({
    required this.iconColor,
    required this.textColor,
    required this.backgroundColor,
  });
}

class PlainMessageStyle {
  final Color backgroundColor;
  final Color textColor;

  const PlainMessageStyle({
    required this.backgroundColor,
    required this.textColor,
  });
}

class PlainTextStyle {
  final Color textColor;

  const PlainTextStyle({
    required this.textColor,
  });
}

class TitleTextStyle {
  final Color textColor;
  final FontWeight fontWeight;

  const TitleTextStyle({
    required this.textColor,
    required this.fontWeight,
  });
}

class MessageInputStyle {
  final Color containerBackground;
  final Color textFieldBackground;
  final Color textColor;
  final Color hintColor;
  final Color iconColor;
  final Color buttonBackground;
  final Color borderColor;

  const MessageInputStyle({
    required this.containerBackground,
    required this.textFieldBackground,
    required this.textColor,
    required this.hintColor,
    required this.iconColor,
    required this.buttonBackground,
    required this.borderColor,
  });
}

class SchemaTableStyle {
  final Color headerBackground;
  final Color headerTextColor;
  final Color rowBackground;
  final Color rowTextColor;
  final Color borderColor;
  final Color shadowColor;

  const SchemaTableStyle({
    required this.headerBackground,
    required this.headerTextColor,
    required this.rowBackground,
    required this.rowTextColor,
    required this.borderColor,
    required this.shadowColor,
  });
}

class BaseTheme {
  final String name;
  final Color primary;
  final Color secondary;
  final Color background;
  final Color surface;
  final Color surfaceLight;
  final Color error;
  final Color onPrimary;
  final Color onSecondary;
  final Color onBackground;
  final Color onSurface;
  final Color border;
  final Color divider;
  final Color text;
  final Color textSecondary;
  final Color shadow;

  final String fontFamily;
  final double fontSizeSmall;
  final double fontSizeMedium;
  final double fontSizeLarge;
  final double fontSizeXLarge;
  final double fontSizeXXLarge;

  final double spacingSuperSmall;
  final double spacingSmall;
  final double spacingMedium;
  final double spacingLarge;
  final double spacingXLarge;

  final double borderRadiusSmall;
  final double borderRadiusMedium;
  final double borderRadiusLarge;
  final double borderRadiusXLarge;

  final UserMessageStyle userMessage;
  final AssistantMessageStyle assistantMessage;
  final MessageRendererStyle messageRenderer;
  final ImageGalleryStyle imageGallery;
  final CodeBlockStyle codeBlock;
  final LinkTextStyle linkText;
  final PlainMessageStyle plainMessage;
  final PlainTextStyle plainText;
  final PlainTextStyle plainTextDefault;
  final SchemaTableStyle schemaTable;
  final TitleTextStyle titleText;
  final MessageInputStyle messageInput;
  final Color backgroundSecondary;

  const BaseTheme({
    required this.name,
    required this.primary,
    required this.secondary,
    required this.background,
    required this.backgroundSecondary,
    required this.surface,
    required this.surfaceLight,
    required this.error,
    required this.onPrimary,
    required this.onSecondary,
    required this.onBackground,
    required this.onSurface,
    required this.border,
    required this.divider,
    required this.text,
    required this.textSecondary,
    required this.shadow,
    required this.fontFamily,
    required this.fontSizeSmall,
    required this.fontSizeMedium,
    required this.fontSizeLarge,
    required this.fontSizeXLarge,
    required this.fontSizeXXLarge,
    required this.spacingSuperSmall,
    required this.spacingSmall,
    required this.spacingMedium,
    required this.spacingLarge,
    required this.spacingXLarge,
    required this.borderRadiusSmall,
    required this.borderRadiusMedium,
    required this.borderRadiusLarge,
    required this.borderRadiusXLarge,
    required this.userMessage,
    required this.assistantMessage,
    required this.messageRenderer,
    required this.imageGallery,
    required this.codeBlock,
    required this.linkText,
    required this.plainMessage,
    required this.plainText,
    required this.plainTextDefault,
    required this.schemaTable,
    required this.titleText,
    required this.messageInput,
  });
}
