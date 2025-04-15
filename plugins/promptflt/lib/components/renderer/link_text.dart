import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart' as launcher;

class LinkText extends StatelessWidget {
  final String url;

  const LinkText({super.key, required this.url});

  Future<void> _launchUrl() async {
    final Uri uri = Uri.parse(url);
    if (!await launcher.launchUrl(uri)) {
      throw Exception('Não foi possível abrir o link: $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 5),
      child: InkWell(
        onTap: _launchUrl,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Icon(Icons.link, color: Color(0xFF64B5F6), size: 20),
            const SizedBox(width: 2),
            Expanded(
              child: Text(
                url,
                style: const TextStyle(
                  color: Color(0xFF64B5F6),
                  decoration: TextDecoration.underline,
                  fontSize: 18,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
