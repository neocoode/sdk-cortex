import 'package:flutter/material.dart';
import 'dart:async';

import '../components/messageBubble.dart';
import '../components/messageInput.dart';
import '../services/api_service.dart';
import '../services/session_service.dart';
import '../configs/app_config.dart';
import 'warning_view.dart';

class ChatView extends StatefulWidget {
  const ChatView({super.key});

  @override
  State<ChatView> createState() => _ChatViewState();
}

class _ChatViewState extends State<ChatView> {
  final List<Map<String, dynamic>> messages = [];
  final ValueNotifier<bool> _isProcessing = ValueNotifier<bool>(false);

  @override
  void initState() {
    super.initState();
    _validateSession();
  }

  Future<void> _validateSession() async {
    try {
      final ready = await SessionService.ensureValidSession();
      if (!ready && mounted) {
        _navigateToWarning();
      }
    } catch (e) {
      print('[ERRO] Falha ao validar sessão: $e');
      if (mounted) {
        _navigateToWarning();
      }
    }
  }

  void _navigateToWarning() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(builder: (_) => const WarningView()),
    );
  }

  void sendMessage(String message) async {
    final userMsg = {'type': 'user', 'value': message};
    setState(() => messages.add(userMsg));

    _isProcessing.value = true;

    try {
      final response = await ApiService.sendMessage(message).timeout(
        const Duration(seconds: 30),
        onTimeout: () {
          throw TimeoutException('Timeout ao enviar mensagem');
        },
      );

      final responses = response['response'] ?? [];
      for (var res in responses) {
        setState(() => messages.add(res));
      }

      _isProcessing.value = false;
    } catch (e) {
      print('[ERRO] Falha ao enviar mensagem: $e');
      _isProcessing.value = false;

      _navigateToWarning();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: appConfig.theme.background,
      body: Container(
        margin: EdgeInsets.symmetric(
            horizontal: 0, vertical: appConfig.theme.spacingLarge),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: messages.length,
                padding: EdgeInsets.symmetric(
                  horizontal: appConfig.theme.spacingXLarge,
                  vertical: 0,
                ),
                itemBuilder: (_, index) => MessageBubble(
                  message: messages[index],
                  onResend: sendMessage,
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(
                  horizontal: appConfig.theme.spacingXLarge),
              child: MessageInput(
                onSend: sendMessage,
                isProcessing: _isProcessing,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(bottom: appConfig.theme.spacingSmall),
              child: Text(
                "Lunar Beta - ${appConfig.theme.toString().split('.').last} - ${_getCurrentDate()}",
                style: TextStyle(
                  fontSize: appConfig.theme.fontSizeXLarge,
                  color: appConfig.theme.textSecondary,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  String _getCurrentDate() {
    final now = DateTime.now();
    return '${now.month.toString().padLeft(2, '0')}/${now.year}';
  }
}
