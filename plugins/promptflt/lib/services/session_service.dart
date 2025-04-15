import 'api_service.dart';

class SessionService {
  static const String defaultUserId = "67cfa19fbca330b02331873d";

  /// Garante que há uma sessão válida e perfil carregado
  static Future<bool> ensureValidSession({String? userId}) async {
    try {
      final session = await ApiService.validateSession();

      if (session['valid'] != true) {
        await ApiService.startSession(userId ?? defaultUserId);

        final recheck = await ApiService.validateSession();
        if (recheck['valid'] != true) {
          return false;
        }
      }

      try {
        final profile = await ApiService.getUserProfile();
        return profile['success'] == true;
      } catch (e) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}
