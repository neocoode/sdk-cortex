import 'dart:async';
import 'package:flutter/material.dart';
import '../views/warning_view.dart';
import '../services/session_service.dart';
import '../views/chat_view.dart';
import '../services/api_service.dart';

class ConnectionService {
  static final ConnectionService _instance = ConnectionService._internal();
  factory ConnectionService() => _instance;
  ConnectionService._internal();

  final ValueNotifier<int> retryCountdown = ValueNotifier<int>(10);
  Timer? _retryTimer;
  Timer? _countdownTimer;
  bool _isRetrying = false;
  BuildContext? _currentContext;
  
  // Armazena a última mensagem que falhou para retentar
  String? _pendingMessage;
  Function(Map<String, dynamic>)? _onMessageSuccess;

  void startRetrying(BuildContext context) {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(builder: (_) => const WarningView()),
    );
  }

  void _startCountdown() {
    retryCountdown.value = 10;
    
    _countdownTimer?.cancel();
    _countdownTimer = Timer.periodic(
      const Duration(seconds: 1),
      (timer) {
        if (retryCountdown.value > 0) {
          retryCountdown.value--;
        }
        if (retryCountdown.value == 0) {
          _retryConnection();
        }
      },
    );

    _retryTimer?.cancel();
    _retryTimer = Timer(
      const Duration(seconds: 10),
      () => _onRetryTimeout(),
    );
  }

  Future<void> _retryConnection() async {
    if (_currentContext == null || !_currentContext!.mounted) return;
    
    try {
      final ready = await SessionService.ensureValidSession();
      
      if (ready) {
        // Se tiver uma mensagem pendente, tenta enviar primeiro
        if (_pendingMessage != null) {
          try {
            final response = await ApiService.sendMessage(_pendingMessage!).timeout(
              const Duration(seconds: 30),
            );
            
            // Se o envio for bem sucedido, notifica o callback
            if (_onMessageSuccess != null) {
              _onMessageSuccess!(response);
            }
          } catch (e) {
            print('[ERRO] Falha ao reenviar mensagem: $e');
            _startCountdown();
            return;
          }
        }

        // Se não tiver mensagem pendente ou o envio foi bem sucedido
        final navigator = Navigator.of(_currentContext!);
        await navigator.pushAndRemoveUntil(
          MaterialPageRoute(builder: (_) => const ChatView()),
          (route) => false,
        );
        
        stopRetrying();
      } else {
        print('[RETRY] Serviço ainda não está pronto, tentando novamente...');
        _startCountdown();
      }
    } catch (e) {
      print('[ERRO] Falha na reconexão: $e');
      _startCountdown();
    }
  }

  void _onRetryTimeout() {
    _countdownTimer?.cancel();
    retryCountdown.value = 10;
    _startCountdown();
  }

  void stopRetrying() {
    print('[CONNECTION] Parando processo de retry');
    _isRetrying = false;
    _retryTimer?.cancel();
    _countdownTimer?.cancel();
    retryCountdown.value = 10;
    _currentContext = null;
    _pendingMessage = null;
    _onMessageSuccess = null;
  }

  void dispose() {
    stopRetrying();
  }
}