import type { CSSProperties, Key, ReactNode } from "react";
import styles from "./DataTable.module.css";

export type DataTableSize = "sm" | "md" | "lg";
export type DataTableAlignLastColumn = "left" | "right";

export type DataTableRow = {
  key: Key;
  cells: ReactNode[];
};

type DataTableProps = {
  headers: ReactNode[];
  rows: DataTableRow[];
  size?: DataTableSize;
  alignLastColumn?: DataTableAlignLastColumn;
  minWidth?: number | string;
  className?: string;
  tableClassName?: string;
};

const sizeClassMap: Record<DataTableSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

function toMinWidthValue(value: number | string | undefined) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

export default function DataTable({
  headers,
  rows,
  size = "md",
  alignLastColumn = "left",
  minWidth,
  className,
  tableClassName,
}: DataTableProps) {
  const containerClasses = [
    styles.wrapper,
    styles.container,
    sizeClassMap[size],
    alignLastColumn === "right" ? styles.alignLastColumnRight : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const tableClasses = [styles.table, tableClassName ?? ""].filter(Boolean).join(" ");

  const tableStyle: CSSProperties | undefined = minWidth
    ? { minWidth: toMinWidthValue(minWidth) }
    : undefined;

  return (
    <div className={containerClasses}>
      <table className={tableClasses} style={tableStyle}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={`${String(header)}-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, index) => (
                <td key={`${String(row.key)}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
