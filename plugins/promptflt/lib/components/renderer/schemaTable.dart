import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:universal_html/html.dart' as html;

import '../../configs/app_config.dart';
import '../customCard.dart';

class SchemaTable extends StatelessWidget {
  final List<Map<String, dynamic>> fields;

  const SchemaTable({super.key, required this.fields});

  void _downloadCSV() {
    if (fields.isEmpty) return;

    final headers = ['Campo', 'Tipo', 'Exemplo', 'Descrição', 'Fonte'];
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
    final theme = appConfig.theme;
    final style = theme.schemaTable;

    if (fields.isEmpty) {
      return Text(
        "Erro: tabela sem dados",
        style: TextStyle(color: theme.error),
      );
    }

    return CustomCard(
      title: 'Tabela Schema',
      rightIcons: [
        IconButton(
          icon: Icon(
            Icons.download,
            color: style.topBarIconColor,
            size: 20,
          ),
          padding: EdgeInsets.all(theme.spacingSmall),
          onPressed: _downloadCSV,
        ),
      ],
      content: Padding(
        padding: EdgeInsets.all(theme.spacingSmall),
        child: Container(
          color: style.backgroundColor,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              columnSpacing: theme.spacingMedium,
              columns: [
                'Campo',
                'Tipo',
                'Exemplo',
                'Descrição',
                'Fonte',
              ]
                  .map(
                    (header) => DataColumn(
                      label: Text(
                        header,
                        style: TextStyle(
                          color: style.rowTextColor,
                          fontSize: theme.fontSizeSmall,
                          fontWeight: FontWeight.bold,
                          fontFamily: theme.fontFamily,
                        ),
                      ),
                    ),
                  )
                  .toList(),
              rows: fields.map((field) {
                return DataRow(
                  cells: [
                    field['field'] ?? '',
                    field['type'] ?? '',
                    field['example'] ?? '',
                    field['description'] ?? '',
                    field['source'] ?? '',
                  ]
                      .map(
                        (value) => DataCell(
                          Text(
                            value,
                            style: TextStyle(
                              color: style.rowTextColor,
                              fontSize: theme.fontSizeSmall,
                              fontFamily: theme.fontFamily,
                            ),
                          ),
                        ),
                      )
                      .toList(),
                );
              }).toList(),
            ),
          ),
        ),
      ),
      style: style,
    );
  }
}
