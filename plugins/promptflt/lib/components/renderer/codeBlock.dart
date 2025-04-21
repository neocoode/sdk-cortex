import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CodeBlock extends StatelessWidget {
  final String content;

  const CodeBlock({super.key, required this.content});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 10),
      padding: const EdgeInsets.all(0),
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(6),
      ),
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            decoration: BoxDecoration(
              color: const Color.fromARGB(255, 50, 50, 50),
              borderRadius: BorderRadius.circular(4),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Padding(
                  padding: EdgeInsets.all(8.0), // Adiciona padding ao texto
                  child: Text(
                    '',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.copy, color: Colors.white, size: 16),
                  padding: const EdgeInsets.all(8), // Adiciona padding ao ícone
                  onPressed: () {
                    // Lógica para copiar o conteúdo
                    Clipboard.setData(ClipboardData(text: content));
                  },
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.all(
                8.0), // Adiciona padding ao texto do content
            child: SelectableText(
              content,
              style: const TextStyle(
                color: Color.fromARGB(255, 245, 245, 245),
                fontFamily: 'monospace',
                fontSize: 16,
                height: 1.4,
              ),
              textAlign: TextAlign.start,
            ),
          ),
        ],
      ),
    );
  }
}
