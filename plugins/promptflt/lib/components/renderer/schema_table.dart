import 'package:flutter/material.dart';

class SchemaTable extends StatelessWidget {
  final List<Map<String, dynamic>> fields;

  const SchemaTable({super.key, required this.fields});

  void _downloadCSV() {
    // Lógica para download do CSV
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
      padding: const EdgeInsets.all(8.0),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(8),
      ),
      height: 300, // Defina uma altura fixa ou use um SizedBox
      child: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: DataTable(
                  headingRowColor: MaterialStateProperty.all(
                    const Color(0xFF2D3748),
                  ),
                  dataRowColor: MaterialStateProperty.all(
                    const Color(0xFF1E2939),
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
                  rows:
                      fields.map((field) {
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
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              ElevatedButton.icon(
                onPressed: _downloadCSV,
                icon: const Icon(Icons.download),
                label: const Text('Download CSV'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
