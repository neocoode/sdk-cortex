import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

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
    final messageText = message['value'] ?? '';
    final textController = TextEditingController(text: messageText);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Container(
          margin: const EdgeInsets.only(top: 5, bottom: 10),
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 10),
          decoration: BoxDecoration(
            color: Colors.grey[600],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Text(
            messageText,
            style: const TextStyle(color: Colors.white, fontSize: 22),
          ),
        ),
        AnimatedOpacity(
          duration: const Duration(milliseconds: 200),
          opacity: isHovered ? 1.0 : 0.0,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(
                icon: const Icon(Icons.copy_outlined, color: Colors.grey),
                onPressed: () async {
                  await Clipboard.setData(ClipboardData(text: messageText));
                  if (context.mounted) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text(
                          'Mensagem copiada para a área de transferência',
                        ),
                        duration: Duration(seconds: 2),
                      ),
                    );
                  }
                },
              ),
              IconButton(
                icon: const Icon(Icons.refresh_outlined, color: Colors.grey),
                onPressed: () {
                  textController.text = messageText;
                  message['value'] = textController.text;
                  onResend(textController.text);
                },
              ),
            ],
          ),
        ),
      ],
    );
  }
}
