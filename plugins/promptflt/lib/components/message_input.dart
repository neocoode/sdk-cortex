import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MessageInput extends StatefulWidget {
  final void Function(String) onSend;
  final ValueNotifier<bool> isProcessing;

  const MessageInput({
    super.key,
    required this.onSend,
    required this.isProcessing,
  });

  @override
  State<MessageInput> createState() => MessageInputState();
}

class MessageInputState extends State<MessageInput> {
  final TextEditingController controller = TextEditingController();
  final ValueNotifier<bool> _isTyping = ValueNotifier<bool>(false);
  final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    controller.addListener(() {
      _isTyping.value = controller.text.isNotEmpty;
    });
    
    // Adicionar foco automático após o widget ser construído
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _focusNode.requestFocus();
    });
  }

  void _send() {
    final text = controller.text.trim();
    if (text.isEmpty) return;
    widget.onSend(text);
    controller.clear();
    _isTyping.value = false;
    _focusNode.requestFocus();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        margin: const EdgeInsets.all(12),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
        decoration: BoxDecoration(
          color: Colors.grey[800],
          borderRadius: BorderRadius.circular(25),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              padding: const EdgeInsets.all(0),
              decoration: BoxDecoration(
                color: Colors.grey[700],
                borderRadius: BorderRadius.circular(15),
              ),
              child: TextField(
                controller: controller,
                focusNode: _focusNode,
                style: const TextStyle(fontSize: 20),
                decoration: const InputDecoration(
                  hintText: 'Pergunte alguma coisa',
                  hintStyle: TextStyle(fontSize: 20),
                  border: InputBorder.none,
                  filled: false,
                  contentPadding: EdgeInsets.symmetric(horizontal: 12),
                ),
                onSubmitted: (_) => _send(),
              ),
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Colors.grey[600],
                    shape: BoxShape.circle,
                  ),
                  child: SvgPicture.asset('assets/plus.svg', height: 24),
                ),
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Colors.grey[600],
                    shape: BoxShape.circle,
                  ),
                  child: SvgPicture.asset('assets/more.svg', height: 24),
                ),
                const Spacer(),
                ValueListenableBuilder<bool>(
                  valueListenable: widget.isProcessing,
                  builder: (context, isProcessing, child) {
                    return Container(
                      padding: const EdgeInsets.all(0),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        shape: BoxShape.circle,
                      ),
                      child: IconButton(
                        icon: SvgPicture.asset(
                          isProcessing
                              ? 'assets/process.svg'
                              : (_isTyping.value
                                  ? 'assets/send.svg'
                                  : 'assets/record.svg'),
                          height: 24,
                          colorFilter: const ColorFilter.mode(
                            Colors.black,
                            BlendMode.srcIn,
                          ),
                        ),
                        onPressed:
                            _isTyping.value && !isProcessing ? _send : null,
                      ),
                    );
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    _focusNode.dispose();
    super.dispose();
  }
}
