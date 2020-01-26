import {Client, Message} from "discord.js"

export class Bot {

    client: Client = new Client();

    onReady() {
        console.log(`Logged in as ${this.client.user.tag}!`);
    }

    onMessage(message: Message) {
        if (message.author.id === this.client.user.id)
            return;
        const result = /\b(\S+[^aeiouy])ines?\b/i.exec(message.content);
        if (result) {
            message.reply(`on dit pas "${result[0]}", on dit "pain au ${result[1]}"`);
        }
    }

    start(token: string) {
        this.client.on('ready', () => this.onReady());
        this.client.on('message', message => this.onMessage(message));
        this.client.login(token);
    }

}




