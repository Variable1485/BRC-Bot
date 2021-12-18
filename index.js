const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const discord = require('discord.js');
const client = new discord.Client();
// const { token } = require('./config.json');

const client = new Client({  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS]  });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

 client.once("ready", () => { 
        client.user.setStatus("dnd");
        client.user.setActivity('Commands from people ', { type: "PLAYING"})
    })

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command, try again later.', ephemeral: true });
	}
});

client.on('message', () => {
    if (message.content === "!sendguildmessages") {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("messageToSend"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        }
    }
});

client.login(process.env.BRC_TOKEN);