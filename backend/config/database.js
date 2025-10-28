import mysql from 'mysql';

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'rishabh_jewellers',
    port: process.env.DB_PORT || 3306,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.log('💡 Make sure MySQL is running and credentials are correct');
        console.log('💡 Update .env file with your database credentials');
    } else {
        console.log('✅ Database connected successfully');
        connection.release();
    }
});

// Promisify pool query
const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

export { pool, query };
