import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:universal_html/html.dart' as html;
import '../../configs/app_config.dart';

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
    final style = theme.components.schemaTable;

    if (fields.isEmpty) {
      return Text(
        "Erro: tabela sem dados",
        style: TextStyle(color: theme.error),
      );
    }

    return Container(
      margin: EdgeInsets.symmetric(vertical: theme.spacingSmall),
      padding: EdgeInsets.zero,
      decoration: BoxDecoration(
        color: style.rowBackground,
        borderRadius: BorderRadius.circular(theme.borderRadiusMedium),
        border: Border.all(color: style.borderColor),
        boxShadow: [
          BoxShadow(
            color: style.shadowColor,
            blurRadius: 4,
            offset: const Offset(0, 2),
          )
        ],
      ),
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Container(
            decoration: BoxDecoration(
              color: style.headerBackground,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(theme.borderRadiusMedium),
                topRight: Radius.circular(theme.borderRadiusMedium),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: EdgeInsets.all(theme.spacingSmall),
                  child: Text(
                    'Tabela Schema',
                    style: TextStyle(
                      color: style.headerTextColor,
                      fontSize: theme.fontSizeMedium,
                      fontWeight: FontWeight.bold,
                      fontFamily: theme.fontFamily,
                    ),
                  ),
                ),
                IconButton(
                  icon: Icon(
                    Icons.download,
                    color: style.headerTextColor,
                    size: 20,
                  ),
                  padding: EdgeInsets.all(theme.spacingSmall),
                  onPressed: _downloadCSV,
                ),
              ],
            ),
          ),
          // Conteúdo
          Padding(
            padding: EdgeInsets.all(theme.spacingSmall),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: DataTable(
                headingRowColor: MaterialStateProperty.all(
                  style.headerBackground.withOpacity(0.1),
                ),
                dataRowColor: MaterialStateProperty.all(style.rowBackground),
                columnSpacing: theme.spacingMedium,
                columns: [
                  'Campo',
                  'Tipo',
                  'Exemplo',
                  'Descrição',
                  'Fonte',
                ].map(
                  (header) => DataColumn(
                    label: Text(
                      header,
                      style: TextStyle(
                        color: style.headerTextColor,
                        fontSize: theme.fontSizeSmall,
                        fontWeight: FontWeight.bold,
                        fontFamily: theme.fontFamily,
                      ),
                    ),
                  ),
                ).toList(),
                rows: fields.map((field) {
                  return DataRow(
                    cells: [
                      field['field'] ?? '',
                      field['type'] ?? '',
                      field['example'] ?? '',
                      field['description'] ?? '',
                      field['source'] ?? '',
                    ].map(
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
                    ).toList(),
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
