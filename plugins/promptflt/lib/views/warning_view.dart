import 'dart:async';  // Para Timer
import 'package:flutter/material.dart';
import '../services/connection_service.dart';
import '../services/session_service.dart';
import '../services/api_service.dart';  // Para ApiService
import 'chat_view.dart';

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
      backgroundColor: const Color(0xFF232323),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Cortex',
              style: TextStyle(
                color: Colors.white,
                fontSize: 48,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              _getCurrentDate(),
              style: const TextStyle(
                color: Colors.grey,
                fontSize: 24,
              ),
            ),
            const SizedBox(height: 20),
            SizedBox(
              width: 200,
              child: ValueListenableBuilder<int>(
                valueListenable: _countdown,
                builder: (context, countdown, _) {
                  final progress = (10 - countdown) / 10;
                  return Column(
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: progress,
                          backgroundColor: Colors.grey[800],
                          valueColor: const AlwaysStoppedAnimation<Color>(
                            Colors.red,
                          ),
                          minHeight: 8,
                        ),
                      ),
                    ],
                  );
                },
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