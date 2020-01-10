const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NjY0OTQ5ODUxNjAzMzM3MjE2.Xhehkg.-AIv4Og1ORMbO_IHesy1BgfTqL4');