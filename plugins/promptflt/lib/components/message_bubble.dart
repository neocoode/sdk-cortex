import 'package:flutter/material.dart';
import 'package:promptflt/components/renderer/user_message.dart';

import 'message_renderer.dart';

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

    // Mensagens do sistema/renderizadas
    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        margin: EdgeInsets.zero,
        padding: const EdgeInsets.symmetric(vertical: 2, horizontal: 8),
        decoration: BoxDecoration(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(18),
        ),
        child: MessageRenderer(message: widget.message),
      ),
    );
  }
}
