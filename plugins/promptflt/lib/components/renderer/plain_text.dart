import 'package:flutter/material.dart';

class PlainText extends StatelessWidget {
  final String content;

  const PlainText({super.key, required this.content});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 10),
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(8)),
      child: Text(
        content,
        style: const TextStyle(color: Colors.white, fontSize: 20),
      ),
    );
  }
}
