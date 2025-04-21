import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:universal_html/html.dart' as html;

class SchemaTable extends StatelessWidget {
  final List<Map<String, dynamic>> fields;

  const SchemaTable({super.key, required this.fields});

  void _downloadCSV() {
    if (fields.isEmpty) return;

    // Cabeçalho do CSV
    final headers = ['Campo', 'Tipo', 'Exemplo', 'Descrição', 'Fonte'];

    // Converter dados para CSV
    final csvData = StringBuffer();
    csvData.writeln(headers.join(','));

    for (var field in fields) {
      final row = [
        field['field'] ?? '',
        field['type'] ?? '',
        field['example'] ?? '',
        field['description'] ?? '',
        field['source'] ?? '',
      ].map((value) => '"${value.replaceAll('"', '""')}"').join(',');

      csvData.writeln(row);
    }

    // Criar blob e fazer download
    final bytes = utf8.encode(csvData.toString());
    final blob = html.Blob([bytes]);
    final url = html.Url.createObjectUrlFromBlob(blob);

    final anchor = html.AnchorElement(href: url)
      ..setAttribute('download', 'schema_table.csv')
      ..click();

    html.Url.revokeObjectUrl(url);
  }

  @override
  Widget build(BuildContext context) {
    if (fields.isEmpty) {
      return const Text(
        "Erro: tabela sem dados",
        style: TextStyle(color: Colors.red),
      );
    }

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
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    'Tabela Schema',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                IconButton(
                  icon:
                      const Icon(Icons.download, color: Colors.white, size: 16),
                  padding: const EdgeInsets.all(8),
                  onPressed: _downloadCSV,
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(6.0),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: DataTable(
                headingRowColor: MaterialStateProperty.all(
                  const Color.fromARGB(255, 67, 67, 67),
                ),
                dataRowColor: MaterialStateProperty.all(
                  const Color.fromARGB(255, 48, 48, 48),
                ),
                columns: const [
                  DataColumn(
                    label: Text(
                      'Campo',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  DataColumn(
                    label: Text(
                      'Tipo',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  DataColumn(
                    label: Text(
                      'Exemplo',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  DataColumn(
                    label: Text(
                      'Descrição',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  DataColumn(
                    label: Text(
                      'Fonte',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ],
                rows: fields.map((field) {
                  return DataRow(
                    cells: [
                      DataCell(
                        Text(
                          field['field'] ?? '',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          field['type'] ?? '',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          field['example'] ?? '',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          field['description'] ?? '',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          field['source'] ?? '',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                    ],
                  );
                }).toList(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
