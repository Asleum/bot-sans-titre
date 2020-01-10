import {Client} from "discord.js"

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Pong!!');
    }
});

client.login("NjY0OTQ5ODUxNjAzMzM3MjE2.Xhehkg.-AIv4Og1ORMbO_IHesy1BgfTqL4");