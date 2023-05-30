import { config } from "dotenv";
import { Client } from "@xhayper/discord-rpc";

config();

const client = new Client({
  clientId: process.env.DISCORD_APP_ID,
});

client.on("ready", () => {
  client.user.setActivity({
    state: process.argv[2] || "Studying",
    details: process.argv[3] || "No Idea...",
    startTimestamp: Date.now(),
    largeImageKey: "https://i.gifer.com/9Utr.gif",
    largeImageText: "Studying",
  });
});

client.login();
