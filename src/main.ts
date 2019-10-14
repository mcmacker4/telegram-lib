import { Client, ClientConfig } from "./client/client";

// Example test client

const config = require('../bot.json') as ClientConfig
const client = new Client(config)

client.api.getMe().then(me => {
    console.log(`My name is ${me.first_name}`)
}).catch(err => {
    console.error(err)
})