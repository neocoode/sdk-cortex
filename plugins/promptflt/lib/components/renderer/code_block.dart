import 'package:flutter/material.dart';

class CodeBlock extends StatelessWidget {
  final String content;

  const CodeBlock({super.key, required this.content});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF1E2939),
        borderRadius: BorderRadius.circular(6),
      ),
      width: double.infinity,
      child: Text(
        content,
        style: const TextStyle(
          color: Colors.white,
          fontFamily: 'monospace',
          fontSize: 19,
          height: 1.4,
        ),
      ),
    );
  }
}
