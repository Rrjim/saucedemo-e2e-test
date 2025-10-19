import { DataTable } from "@cucumber/cucumber";

/**
 * Parse a 2-column table into an object
 * Example:
 * | firstName  | John  |
 * | lastName   | Doe   |
 * | postalCode | 12345 |
 *
 * Returns:
 * { firstName: 'John', lastName: 'Doe', postalCode: '12345' }
 */

export function parseTwoColumnTable(
  dataTable: DataTable
): Record<string, string> {
  return dataTable.rowsHash();
}

/**
 * Parse a header-style table into an array of objects
 * Example:
 * | firstName | lastName | postalCode |
 * | John      | Doe      | 12345      |
 * | Jane      | Smith    | 67890      |
 *
 * Returns:
 * [
 *   { firstName: 'John', lastName: 'Doe', postalCode: '12345' },
 *   { firstName: 'Jane', lastName: 'Smith', postalCode: '67890' }
 * ]
 */

/**
 * Parse a single-row Cucumber data table into a typed object.
 */
export default function parseSingleRowTable<T = Record<string, string>>(
  dataTable: DataTable
): T {
  const rows = dataTable.hashes();
  if (rows.length !== 1) {
    throw new Error(
      `Expected exactly 1 row in data table, but got ${rows.length}`
    );
  }
  return rows[0] as T;
}

export function parseSingleColumnTable(
  dataTable: DataTable,
  columnKey: string
): string[] {
  const rows = dataTable.hashes();
  return rows.map((row) => row[columnKey]);
}

/**
 * ✅ Parse multi-row table
 */
export function parseMultiRowTable<T = Record<string, string>>(
  dataTable: DataTable
): T[] {
  return dataTable.hashes() as T[];
}
