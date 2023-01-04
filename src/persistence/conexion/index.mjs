import dbConfig from '../../core/config.mjs';

import { createPool } from 'mysql2/promise'

export default async function connect() {
    const connection = await createPool(dbConfig);
    return connection;
}
