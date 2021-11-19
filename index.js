const DJS = require("discord.js");
const config = require("./config.json");
const client = new DJS.Client({
  allowedMentions: { parse: ["users", "roles"] },
  intents: [
    DJS.Intents.FLAGS.GUILDS,
    DJS.Intents.FLAGS.GUILD_MESSAGES,
    DJS.Intents.FLAGS.GUILD_MEMBERS,
    DJS.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    DJS.Intents.FLAGS.GUILD_WEBHOOKS,
    DJS.Intents.FLAGS.GUILD_VOICE_STATES,
    DJS.Intents.FLAGS.GUILD_INVITES,
    DJS.Intents.FLAGS.GUILD_BANS,
    DJS.Intents.FLAGS.GUILD_PRESENCES
   ],
});

client.commands = new DJS.Collection();
client.aliases = new DJS.Collection();

client.once("ready", async () => {
  console.log(`Successfully logged on to ${client.user.tag}!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${config.prefix}help`, { type: "LISTENING", url: "https:/github.com/CodeXSane/Discord-Bot" }) // Types are: 'LISTENING', 'WATCHING', 'PLAYING', 'STREAMING'
});

client.login(config.token);
