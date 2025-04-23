import 'package:flutter/material.dart';
import '../../configs/app_config.dart';

class UserMessage extends StatelessWidget {
  final Map<String, dynamic> message;
  final bool isHovered;
  final Function(String) onResend;

  const UserMessage({
    super.key,
    required this.message,
    required this.isHovered,
    required this.onResend,
  });

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.userMessage;

    return Container(
      margin: EdgeInsets.symmetric(
        vertical: appConfig.theme.spacingSmall / 2,
        horizontal: appConfig.theme.spacingSmall,
      ),
      padding: EdgeInsets.all(appConfig.theme.spacingMedium),
      decoration: BoxDecoration(
        color: style.backgroundColor,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
        border: Border.all(
          color: style.borderColor,
          width: 1,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Flexible(
            child: Text(
              message['value'].toString(),
              style: TextStyle(
                color: style.textColor,
                fontSize: appConfig.theme.fontSizeMedium,
                fontFamily: appConfig.theme.fontFamily,
              ),
            ),
          ),
          SizedBox(width: appConfig.theme.spacingSmall),
          IconButton(
            icon: Icon(
              Icons.refresh,
              color: style.iconColor,
              size: 20,
            ),
            onPressed: () => onResend(message['value'].toString()),
            tooltip: 'Tentar novamente',
          ),
        ],
      ),
    );
  }
}
