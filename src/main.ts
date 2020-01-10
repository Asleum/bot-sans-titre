import {Bot} from "./bot"

if (process.argv.length !== 3) {
    console.log("Usage : node main.ts BOT_TOKEN")
} else {
    let bot = new Bot();
    bot.start(process.argv[2]);
}