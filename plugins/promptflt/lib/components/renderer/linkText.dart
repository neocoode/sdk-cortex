import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../configs/app_config.dart';

class LinkText extends StatelessWidget {
  final String url;

  const LinkText({
    super.key,
    required this.url,
  });

  Future<void> _launchUrl() async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }

  @override
  Widget build(BuildContext context) {
    final style = appConfig.theme.linkText;

    return InkWell(
      onTap: _launchUrl,
      child: Container(
        decoration: BoxDecoration(
          borderRadius:
              BorderRadius.circular(appConfig.theme.borderRadiusLarge),
        ),
        child: Row(
          children: [
            Icon(
              Icons.link,
              color: style.iconColor,
              size: 20,
            ),
            SizedBox(width: appConfig.theme.spacingSmall / 2),
            Flexible(
              child: Text(
                url,
                style: TextStyle(
                  color: style.textColor,
                  fontSize: appConfig.theme.fontSizeMedium,
                  decoration: TextDecoration.underline,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
