import 'package:flutter/material.dart';

class CustomThemeItems {
  final Color? topBarBackground;
  final Color? topBarTextColor;
  final Color? topBarIconColor;    
  final Color? backgroundColor;
  final Color? titleColor;
  final Color? borderColor;
  final Color? textColor;
  final Color? iconColor;
  final Color? surfaceLight;
  final Color? rowBackground;
  final Color? rowTextColor;
  final FontWeight? fontWeight;

  const CustomThemeItems({
    this.titleColor,
    this.backgroundColor,
    this.topBarBackground,
    this.topBarTextColor,
    this.topBarIconColor,
    this.borderColor,
    this.textColor,
    this.iconColor,
    this.surfaceLight,
    this.rowBackground,
    this.rowTextColor,
    this.fontWeight,
  });
}

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
  final Color cursorColor;
  final Color cursorFocusedColor;
  final Color buttonColor;

  const MessageInputStyle({
    required this.containerBackground,
    required this.textFieldBackground,
    required this.textColor,
    required this.hintColor,
    required this.iconColor,
    required this.buttonBackground,
    required this.borderColor,
    required this.cursorColor,
    required this.cursorFocusedColor,
    required this.buttonColor,
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
  final Color modalBackgroundColor;

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

  final CustomThemeItems codeBlock;
  final CustomThemeItems schemaTable;
  final CustomThemeItems userMessage;
  final CustomThemeItems titleText;

  final AssistantMessageStyle assistantMessage;
  final MessageRendererStyle messageRenderer;
  final ImageGalleryStyle imageGallery;
  final LinkTextStyle linkText;
  final PlainMessageStyle plainMessage;
  final PlainTextStyle plainText;
  final PlainTextStyle plainTextDefault;
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
    required this.modalBackgroundColor,
  });
}
