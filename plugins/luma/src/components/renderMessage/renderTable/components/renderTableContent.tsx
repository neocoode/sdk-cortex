/**
 * @file renderTableContent.tsx
 * @description Componente responsável por renderizar o conteúdo da tabela baseado no tipo.
 * Faz o parse do JSON recebido e renderiza o componente apropriado de acordo com o tipo da tabela.
 * Atualmente suporta apenas tabelas do tipo schema.
 */

import { ETableType, ITable } from "@/interface/tableSchema";
import { useEffect, useMemo } from "react";
import RenderTableSchema from "./renderTableSchema/renderTableSchema";

interface IProps {
  value: string;
  key: string;
  setIsTableType: (isTableType: ETableType) => void;
}

export const RenderTableContent: React.FC<IProps> = ({ value, key, setIsTableType }) => {
  // Faz o parse do JSON apenas uma vez por valor
  const data = useMemo(() => {
    try {
      return JSON.parse(value as string) as ITable;
    } catch {
      return undefined;
    }
  }, [value]);

  // Atualiza o tipo da tabela quando data mudar
  useEffect(() => {
    if (data) {
      setIsTableType(data.type);
    }
  }, [data, setIsTableType]);

  if (!data) return <></>;

  switch (data.type) {
    case ETableType.schema:
      return <RenderTableSchema key={key} fields={data.fields} />;
    default:
      return <></>;
  }
};
