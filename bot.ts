import {Client} from "discord.js"

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.id === client.user.id)
        return;
    const result = /(\w+)ine/i.exec(message.content);
    if (result) {
        message.reply(`on dit pas "${result[0]}", on dit "pain au ${result[1]}"`);
    }
});

client.login("NjY0OTQ5ODUxNjAzMzM3MjE2.Xhehkg.-AIv4Og1ORMbO_IHesy1BgfTqL4");