import 'package:flutter/material.dart';

class PlainText extends StatelessWidget {
  final String content;

  const PlainText({super.key, required this.content});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(),
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(8)),
      child: Text(
        content,
        textAlign: TextAlign.justify,
        style: const TextStyle(
            color: Color.fromARGB(255, 220, 220, 220), fontSize: 20),
      ),
    );
  }
}
