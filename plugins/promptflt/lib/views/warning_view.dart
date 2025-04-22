import 'dart:async';  // Para Timer
import 'package:flutter/material.dart';
import '../services/connection_service.dart';
import '../services/session_service.dart';
import '../services/api_service.dart';  // Para ApiService
import 'chat_view.dart';
import '../configs/app_config.dart';

class WarningView extends StatefulWidget {
  const WarningView({
    super.key,
  });

  @override
  State<WarningView> createState() => _WarningViewState();
}

class _WarningViewState extends State<WarningView> {
  final ValueNotifier<int> _countdown = ValueNotifier<int>(10);
  Timer? _countdownTimer;
  bool _isRetrying = false;

  @override
  void initState() {
    super.initState();
    _startRetrying();
  }

  void _startRetrying() {
    if (_isRetrying) return;
    _isRetrying = true;
    _startCountdown();
  }

  void _startCountdown() {
    _countdown.value = 10;
    
    _countdownTimer?.cancel();
    _countdownTimer = Timer.periodic(
      const Duration(seconds: 1),
      (timer) {
        if (_countdown.value > 0) {
          _countdown.value--;
        }
        if (_countdown.value == 0) {
          _validateAndRetry();
        }
      },
    );
  }

  Future<void> _validateAndRetry() async {
    try {
      final ready = await SessionService.ensureValidSession();
      
      if (ready) {
        if (mounted) {
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (_) => const ChatView()),
          );
        }
      } else {
        print('[RETRY] Sessão ainda inválida, tentando novamente...');
        _startCountdown();
      }
    } catch (e) {
      print('[ERRO] Falha na validação: $e');
      _startCountdown();
    }
  }

  @override
  void dispose() {
    _countdownTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: appConfig.theme.background,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Atenção',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: appConfig.theme.textPrimary,
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'Mensagem de aviso',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 16,
                color: appConfig.theme.textSecondary,
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: appConfig.theme.components.messageInput.buttonBackground,
                foregroundColor: appConfig.theme.components.messageInput.iconColor,
                padding: const EdgeInsets.symmetric(
                  horizontal: 32,
                  vertical: 16,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onPressed: () {
                // Implementar lógica de retry
              },
              child: const Text('Tentar Novamente'),
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