import { execFileSync } from 'child_process';
import * as path from 'path';

export interface TestDataRow {
    [key: string]: string;
}

// Playwright registers one test() per DB row, so the rows have to be known at
// collection time — but mysql2 only offers an async API. The query therefore
// runs in a short-lived child process (mysqlRunner.js) and we read its JSON
// back synchronously. See 289_DDT_MYSQL.spec.ts.
const RUNNER = path.resolve(__dirname, 'mysqlRunner.js');

export function readMySQL(query: string): TestDataRow[] {
    try {
        const stdout = execFileSync(process.execPath, [RUNNER, query], { encoding: 'utf-8' });
        return JSON.parse(stdout);
    } catch (error) {
        const stderr = (error as { stderr?: string }).stderr?.trim();
        throw new Error(`MySQL query failed: ${stderr || (error as Error).message}`);
    }
}
