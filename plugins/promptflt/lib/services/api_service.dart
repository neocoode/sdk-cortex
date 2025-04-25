import 'dart:convert';

import 'package:http/http.dart' as http;

import 'http_client.dart';

class ApiService {
  static const String baseUrl =
      "http://ec2-18-207-238-131.compute-1.amazonaws.com:3525";
  static final http.Client _client = createHttpClient();

  /// Faz uma requisição GET genérica
  static Future<Map<String, dynamic>> get(String endpoint) async {
    final url = Uri.parse('$baseUrl$endpoint');
    final response = await _client.get(url);

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Erro ao fazer GET em $endpoint');
    }
  }

  /// Faz uma requisição POST genérica
  static Future<Map<String, dynamic>> post(
    String endpoint,
    Map<String, dynamic> body,
  ) async {
    final url = Uri.parse('$baseUrl$endpoint');
    final response = await _client.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: json.encode(body),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Erro ao fazer POST em $endpoint');
    }
  }

  // --- Endpoints específicos (como helpers opcionais) ---

  static Future<Map<String, dynamic>> validateSession() async {
    final url = Uri.parse('$baseUrl/chat/session');
    print('🟡 Validando sessão... $url');

    final response = await _client.get(url);
    print('✅ Resposta: ${response.statusCode} - ${response.body}');

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else if (response.statusCode == 401) {
      // Sessão inválida → retorna estrutura compatível
      return {'valid': false};
    } else {
      throw Exception('Erro ao validar sessão: ${response.statusCode}');
    }
  }

  static Future<Map<String, dynamic>> startSession(String userId) async {
    final url = Uri.parse('$baseUrl/chat/start-session');
    print('🚀 Iniciando nova sessão para usuário: $userId');

    final response = await _client.post(
      url,
      headers: {
        'Content-Type': 'application/json',
        "userId": userId,
      },
      body: json.encode({}),
    );

    print('✅ Resposta: ${response.statusCode} - ${response.body}');

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Erro ao iniciar nova sessão');
    }
  }

  static Future<Map<String, dynamic>> getUserProfile() async {
    final url = Uri.parse('$baseUrl/u/p');
    final response = await _client.get(url);
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Erro ao obter perfil');
    }
  }

  static Future<List<Map<String, dynamic>>> listChats() async {
    final data = await get('/chat/list');
    if (data['success'] == true && data['chats'] != null) {
      return List<Map<String, dynamic>>.from(data['chats']);
    }
    return [];
  }

  static Future<Map<String, dynamic>> sendMessage(String message) async {
    final url = Uri.parse('$baseUrl/chat/message');
    print('🔁 Enviando mensagem para API: $message');

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'message': message}),
      );

      print('✅ Status Code: ${response.statusCode}');
      print('📦 Body: ${response.body}');

      if (response.statusCode == 200) {
        // 👇 Correção UTF-8
        return json.decode(utf8.decode(response.bodyBytes));
      } else {
        throw Exception('Erro ao fazer POST em /chat/message');
      }
    } catch (e) {
      print('❌ Erro ao enviar mensagem: $e');
      rethrow;
    }
  }
}
