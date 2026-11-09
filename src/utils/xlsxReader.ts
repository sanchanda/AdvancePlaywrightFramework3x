import * as path from 'path';
import * as XLSX from 'xlsx';

export interface TestDataRow {
    [key: string]: string;
}

export function readXLSX(filePath: string, sheetName?: string): TestDataRow[] {
    const fullPath = path.resolve(filePath);
    const workbook = XLSX.readFile(fullPath);
    const sheet = sheetName ?? workbook.SheetNames[0];

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(workbook.Sheets[sheet], {
        defval: '',
        raw: false,
    });

    return rows.map((row) => {
        const normalized: TestDataRow = {};
        for (const [key, value] of Object.entries(row)) {
            normalized[key.trim()] = String(value).trim();
        }
        return normalized;
    });
}
