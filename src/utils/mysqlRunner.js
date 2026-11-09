const mysql = require('mysql2/promise');

const query = process.argv[2];

const config = {
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: Number(process.env.MYSQL_PORT ?? 3306),
    user: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PASSWORD ?? '',
    database: process.env.MYSQL_DATABASE ?? 'playwright_ddt',
};

(async () => {
    const connection = await mysql.createConnection(config);
    try {
        const [rows] = await connection.query(query);
        process.stdout.write(JSON.stringify(rows));
    } finally {
        await connection.end();
    }
})().catch((error) => {
    const detail = [error.code, error.message, error.address && `${error.address}:${error.port}`]
        .filter(Boolean)
        .join(' ');
    console.error(detail);
    process.exitCode = 1;
});
