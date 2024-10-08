require("dotenv").config()
const {Client} = require("pg")

const SQL = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR(255), password VARCHAR(255), picture VARCHAR(255)); CREATE TABLE IF NOT EXISTS chats (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, usernameone VARCHAR(255), usernametwo VARCHAR(255), usernamethree VARCHAR(255), usernamefour VARCHAR(255), usernamefive VARCHAR(255)); CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, chatID INTEGER, username VARCHAR(255), message TEXT, picture VARCHAR(255), messageDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);';

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgresql://postgres:XQPmNbEqkeKPTKmmmHpiOkGALyQJLgIY@monorail.proxy.rlwy.net:44235/railway"
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main()