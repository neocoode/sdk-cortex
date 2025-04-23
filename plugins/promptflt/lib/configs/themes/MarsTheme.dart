import 'package:flutter/material.dart';
import 'BaseTheme.dart';

const backgroundColor = Color.fromARGB(255, 83, 14, 14);
const textColor = Color.fromARGB(255, 236, 236, 236);

class MarsTheme extends BaseTheme {
  MarsTheme()
      : super(
          name: 'mars',
          primary: const Color.fromARGB(255, 255, 148, 124),
          secondary: const Color.fromARGB(255, 249, 92, 56),
          background: backgroundColor,
          backgroundSecondary: const Color.fromARGB(255, 234, 86, 53),
          surface: const Color(0xFF2E2E2E),
          surfaceLight: const Color(0xFFF0F0F0),
          error: const Color(0xFFFF3333),
          onPrimary: Colors.white,
          onSecondary: Colors.black,
          onBackground: const Color(0xFFE0E0E0),
          onSurface: const Color(0xFFE0E0E0),
          border: const Color(0xFFCCCCCC),
          divider: const Color(0xFFBBBBBB),
          text: const Color(0xFFE0E0E0),
          textSecondary: const Color(0xFFAAAAAA),
          shadow: const Color(0x1A000000),
          fontFamily: 'Roboto',
          fontSizeSmall: 14,
          fontSizeMedium: 16,
          fontSizeLarge: 20,
          fontSizeXLarge: 24,
          fontSizeXXLarge: 30,
          spacingSuperSmall: 4,
          spacingSmall: 8,
          spacingMedium: 16,
          spacingLarge: 24,
          spacingXLarge: 32,
          borderRadiusSmall: 4,
          borderRadiusMedium: 8,
          borderRadiusLarge: 12,
          borderRadiusXLarge: 16,
          messageRenderer: const MessageRendererStyle(
            titleColor: Color(0xFFFF5733),
            textColor: Color(0xFF333333),
            linkColor: Color(0xFF33FFBD),
            codeBackground: Color(0xFFF0F0F0),
            codeTextColor: Color(0xFF333333),
          ),
          userMessage: const UserMessageStyle(
            backgroundColor: backgroundColor,
            borderColor: Color.fromARGB(255, 128, 20, 20),
            textColor: Color.fromARGB(255, 255, 255, 255),
            iconColor: Color.fromARGB(255, 252, 158, 136),
          ),
          assistantMessage: const AssistantMessageStyle(
            backgroundColor: backgroundColor,
            textColor: textColor,
          ),
          plainMessage: const PlainMessageStyle(
            backgroundColor: backgroundColor,
            textColor: textColor,
          ),
          plainText: const PlainTextStyle(
            textColor: textColor,
          ),
          plainTextDefault: const PlainTextStyle(
            textColor: textColor,
          ),
          codeBlock: const CodeBlockStyle(
            backgroundColor: Color.fromARGB(255, 51, 46, 46),
            borderColor: Color.fromARGB(255, 150, 61, 61),
            surfaceLight: Color.fromARGB(255, 111, 41, 41),
            iconColor: Color.fromARGB(255, 241, 184, 184),
            titleColor: Color.fromARGB(255, 241, 184, 184),
            textColor: Color.fromARGB(255, 238, 208, 208),
          ),
          linkText: const LinkTextStyle(
            backgroundColor: backgroundColor,
            textColor: Color.fromARGB(255, 90, 172, 255),
            iconColor: Color.fromARGB(255, 133, 194, 255),
          ),
          titleText: const TitleTextStyle(
            textColor: textColor,
            fontWeight: FontWeight.bold,
          ),
          imageGallery: const ImageGalleryStyle(
            borderColor: Color(0xFFCCCCCC),
            loadingBackground: Color(0xFFF5F5F5),
            errorBackground: Color(0xFFFFEBE6),
            errorIconColor: Color(0xFFFF3333),
            errorTextColor: Color(0xFF757575),
          ),
          schemaTable: const SchemaTableStyle(
            headerBackground: Color.fromARGB(255, 100, 38, 38),
            borderColor: Color.fromARGB(255, 148, 65, 65),
            headerTextColor: Color.fromARGB(255, 241, 184, 184),
            rowBackground: Color.fromARGB(255, 54, 24, 24),
            rowTextColor: Color.fromARGB(255, 238, 208, 208),
            shadowColor: Color(0x1A000000),
          ),
          messageInput: const MessageInputStyle(
            containerBackground: Color.fromARGB(255, 100, 38, 38),
            borderColor: Color.fromARGB(255, 123, 51, 51),
            iconColor: Color.fromARGB(255, 246, 73, 73),
            buttonBackground: Color.fromARGB(255, 203, 67, 37),
            textFieldBackground: Color(0xFF1C1C1C),
            textColor: Color(0xFFE0E0E0),
            hintColor: Color(0xFFAAAAAA),
          ),
        );
}
