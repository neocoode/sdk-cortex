import 'package:http/http.dart' as http;

http.Client createHttpClient() {
  return http.Client(); // Padrão para mobile/desktop
}
