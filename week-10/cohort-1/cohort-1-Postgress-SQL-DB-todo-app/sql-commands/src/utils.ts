import { Client } from 'pg';

export async function getClient() {//postgress client
    const client = new Client("postgres://ckebidqt:veC2yF26sATIzkemsXS97w-GJHcDzDV1@tai.db.elephantsql.com/ckebidqt");
    await client.connect();
    return client;
}