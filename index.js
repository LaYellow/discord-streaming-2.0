const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("streamstatus 24/7 by LaYellow")
  
client.user.setActivity(`Cracking spotify accounts`, {
type: "STREAMING",
url: "https://www.twitch.tv/ninja"})
  .then(presence => console.log(`Your Status has been set to ${presence.game ? presence.game.none : 'none'}`))
  .catch(console.error);
});

client.login('MzkwMTM2NzU1MjU0MTk4Mjg1.XOeLEQ.0JFsSB9_VIRBr7N7sX2KKh7N6Ns')
