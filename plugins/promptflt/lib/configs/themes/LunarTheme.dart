import 'package:flutter/material.dart';

import 'BaseTheme.dart';

const backgroundColor = Color.fromARGB(255, 29, 29, 29);
const primaryBackgroundColor = Color.fromARGB(255, 29, 29, 29);
const primaryBorderColor = Color.fromARGB(255, 255, 168, 63);

const secondaryBackground = Color.fromARGB(255, 131, 86, 31);
const secondaryBorderColor = Color.fromARGB(255, 149, 99, 36);

const topBarBackground = Color.fromARGB(255, 64, 64, 64);
const topBarTextColor = Color.fromARGB(255, 173, 173, 173);
const topBarIconColor = topBarTextColor;

const cardBackground = Color.fromARGB(255, 32, 32, 32);
const cardBorderColor = Color.fromARGB(255, 66, 66, 66);
const cardTextColor = Color.fromARGB(255, 236, 236, 236);

const textColor = Color.fromARGB(255, 236, 236, 236);

class LunarTheme extends BaseTheme {
  LunarTheme()
      : super(
          name: 'lunar',
          modalBackgroundColor: const Color.fromARGB(255, 68, 130, 189),
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
          userMessage: const CustomThemeItems(
            backgroundColor: Color.fromARGB(255, 49, 68, 111),
            borderColor: Color.fromARGB(255, 61, 83, 135),
            textColor: textColor,
            iconColor: Color.fromARGB(255, 158, 187, 255),
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
          codeBlock: const CustomThemeItems(
            topBarBackground: topBarBackground, 
            topBarTextColor: topBarTextColor,
            topBarIconColor: topBarIconColor,
            backgroundColor:cardBackground ,
            borderColor: cardBorderColor,

            surfaceLight: Color.fromARGB(255, 71, 71, 71),
            iconColor: Color.fromARGB(255, 201, 201, 201),
            titleColor: Color.fromARGB(255, 201, 201, 201),
            textColor: Color.fromARGB(255, 238, 208, 208),
          ),
          linkText: const LinkTextStyle(
            backgroundColor: backgroundColor,
            textColor: Color.fromARGB(255, 90, 172, 255),
            iconColor: Color.fromARGB(255, 133, 194, 255),
          ),
          titleText: const CustomThemeItems(
            textColor: Color.fromARGB(255, 88, 224, 197),
            fontWeight: FontWeight.bold,
          ),
          imageGallery: const ImageGalleryStyle(
            borderColor: Color(0xFFCCCCCC),
            loadingBackground: Color(0xFFF5F5F5),
            errorBackground: Color(0xFFFFEBE6),
            errorIconColor: Color(0xFFFF3333),
            errorTextColor: Color(0xFF757575),
          ),
          schemaTable: const CustomThemeItems(
            topBarBackground: topBarBackground, 
            topBarTextColor: topBarTextColor,
            topBarIconColor: topBarIconColor,
            borderColor: cardBorderColor,
            backgroundColor: cardBackground,
            rowBackground: cardBackground,
            rowTextColor: cardTextColor,
          ),
          messageInput: const MessageInputStyle(
            containerBackground: Color.fromARGB(255, 36, 36, 36),
            borderColor: Color.fromARGB(255, 42, 42, 42),
            textFieldBackground: Color.fromARGB(255, 73, 73, 73),
            cursorColor: Color.fromARGB(255, 87, 87, 87),
            cursorFocusedColor: Color.fromARGB(255, 173, 173, 173),
            hintColor: Color.fromARGB(255, 133, 171, 163),
            textColor: Color.fromARGB(255, 248, 255, 254),
            iconColor: Color.fromARGB(255, 88, 224, 197),
            buttonBackground: Color.fromARGB(255, 88, 224, 197),
            buttonColor: Color.fromARGB(255, 49, 33, 14),
          ),
        );
}
