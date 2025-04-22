import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../configs/app_config.dart';

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
  final style = appConfig.theme.components.messageInput;

  return SafeArea(
    child: Container(
      margin: EdgeInsets.all(appConfig.theme.spacingMedium),
      padding: EdgeInsets.symmetric(
        horizontal: appConfig.theme.spacingMedium,
        vertical: appConfig.theme.spacingMedium,
      ),
      decoration: BoxDecoration(
        color: style.containerBackground,
        borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusXLarge),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Campo de texto
          Container(
            padding: const EdgeInsets.all(0),
            decoration: BoxDecoration(
              color: style.textFieldBackground,
              borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
            ),
            child: TextField(
              controller: controller,
              focusNode: _focusNode,
              style: TextStyle(
                fontSize: appConfig.theme.fontSizeLarge,
                color: style.textColor,
              ),
              decoration: InputDecoration(
                hintText: 'Pergunte alguma coisa',
                hintStyle: TextStyle(
                  fontSize: appConfig.theme.fontSizeLarge,
                  color: style.hintColor,
                ),
                border: InputBorder.none,
                filled: false,
                contentPadding: EdgeInsets.symmetric(
                  horizontal: appConfig.theme.spacingMedium,
                ),
              ),
              onSubmitted: (_) => _send(),
            ),
          ),

          SizedBox(height: appConfig.theme.spacingMedium),

          // Linha de botões + enviar
          Row(
            children: [
              // Botão "+"
              Container(
                padding: EdgeInsets.all(appConfig.theme.spacingSmall),
                decoration: BoxDecoration(
                  color: style.textFieldBackground,
                  shape: BoxShape.circle,
                ),
                child: SvgPicture.asset(
                  'assets/plus.svg',
                  height: 24,
                  colorFilter: ColorFilter.mode(
                    style.iconColor,
                    BlendMode.srcIn,
                  ),
                ),
              ),

              SizedBox(width: appConfig.theme.spacingSmall),

              // Botão "..."
              Container(
                padding: EdgeInsets.all(appConfig.theme.spacingSmall),
                decoration: BoxDecoration(
                  color: style.textFieldBackground,
                  shape: BoxShape.circle,
                ),
                child: SvgPicture.asset(
                  'assets/more.svg',
                  height: 24,
                  colorFilter: ColorFilter.mode(
                    style.iconColor,
                    BlendMode.srcIn,
                  ),
                ),
              ),

              const Spacer(),

              // Botão de ação (enviar, gravar ou processando)
              ValueListenableBuilder<bool>(
                valueListenable: widget.isProcessing,
                builder: (context, isProcessing, child) {
                  final isTyping = _isTyping.value;
                  final String iconPath = isProcessing
                      ? 'assets/process.svg'
                      : (isTyping ? 'assets/send.svg' : 'assets/record.svg');

                  return Container(
                    padding: EdgeInsets.all(appConfig.theme.spacingSmall),
                    decoration: BoxDecoration(
                      color: isTyping ? style.buttonBackground : Colors.transparent,
                      shape: BoxShape.circle,
                    ),
                    child: IconButton(
                      icon: SvgPicture.asset(
                        iconPath,
                        height: 24,
                        colorFilter: ColorFilter.mode(
                          style.iconColor,
                          BlendMode.srcIn,
                        ),
                      ),
                      onPressed: isTyping && !isProcessing ? _send : null,
                      tooltip: isTyping ? 'Enviar' : 'Gravar áudio',
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
