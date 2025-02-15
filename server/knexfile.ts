import path from 'path';

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "knex_test",
            user: "postgres",
            password: "addYourOwnPassword"
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        useNullAsDefault: true
    }
};
