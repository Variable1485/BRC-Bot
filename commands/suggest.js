client.on('message', msg => {    //This runs when a message is sent.
const args = msg.content.slice(prefix.length).split(' ');  //Get the arguments
const command = args.shift().toLowerCase();  //Making the command non case-sensitive


if (command === 'suggest'){   //if command is suggest
const channel = msg.guild.channels.find(ch => ch.name === 'game-suggestions');  //finds the channel named suggestions 

channel.send('Suggestion:\n ' + args.join(' '))  //Sends the arguments
}     //Closes the if (command === 'suggest'){ 
});   //Closes the client.on('message',msg => {