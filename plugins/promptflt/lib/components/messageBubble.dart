import 'package:flutter/material.dart';
import '../configs/app_config.dart';
import 'renderer/userMessage.dart';
import 'messageRenderer.dart';

class MessageBubble extends StatefulWidget {
  final Map<String, dynamic> message;
  final Function(String) onResend;

  const MessageBubble({
    super.key,
    required this.message,
    required this.onResend,
  });

  @override
  State<MessageBubble> createState() => _MessageBubbleState();
}

class _MessageBubbleState extends State<MessageBubble> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    final isUser = widget.message['type'] == 'user';

    if (isUser) {
      return Align(
        alignment: Alignment.centerRight,
        child: MouseRegion(
          onEnter: (_) => setState(() => isHovered = true),
          onExit: (_) => setState(() => isHovered = false),
          child: UserMessage(
            message: widget.message,
            isHovered: isHovered,
            onResend: widget.onResend,
          ),
        ),
      );
    }

    // Estilos do assistant
    final style = appConfig.theme.assistantMessage;

    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        margin: EdgeInsets.symmetric(
          horizontal: appConfig.theme.spacingSmall,
        ),
        padding: EdgeInsets.all(appConfig.theme.spacingSuperSmall),
        decoration: BoxDecoration(
          color: style.backgroundColor,
          borderRadius:
              BorderRadius.circular(appConfig.theme.borderRadiusLarge),
        ),
        child: DefaultTextStyle(
          style: TextStyle(
            color: style.textColor,
            fontSize: appConfig.theme.fontSizeMedium,
            fontFamily: appConfig.theme.fontFamily,
          ),
          child: MessageRenderer(message: widget.message),
        ),
      ),
    );
  }
}
