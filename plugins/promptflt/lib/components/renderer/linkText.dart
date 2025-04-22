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
    final style = appConfig.theme.components.linkText;

    return Container(
      margin: EdgeInsets.symmetric(vertical: appConfig.theme.spacingSmall / 2),
      child: InkWell(
        onTap: _launchUrl,
        child: Container(
          padding: EdgeInsets.all(appConfig.theme.spacingSmall),
          decoration: BoxDecoration(
            color: style.backgroundColor,
            borderRadius: BorderRadius.circular(appConfig.theme.borderRadiusLarge),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                Icons.link,
                color: style.iconColor,
                size: 20,
              ),
              SizedBox(width: appConfig.theme.spacingSmall),
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
      ),
    );
  }
}
