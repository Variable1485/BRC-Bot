const talkedRecently = new Set();
const { SlashCommandBuilder } = require('@discordjs/builders');

   if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 10 minutes before getting typing this again. - " + msg.author);
    } else {

           // the user can type the command ... your command code goes here :)
           module.exports = {
	data: new SlashCommandBuilder()
		.setName('revivededchat')
		.setDescription('This only works on the main BRC server (Temp)'),
	async execute(interaction) {
		await interaction.reply('<@890528060510715905>');
	},
};
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }