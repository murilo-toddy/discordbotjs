require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
exports.clientExp = client;
const cron = require('cron');
const welcome = require('./welcome.js');
require('./googlesheets.js');

client.login(process.env.BOTTOKEN); //Bot Token

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log(`\n -- TODBOT -- \n\n Bot initialized as ${client.user.tag}\n`);
  client.user.setActivity('>help');
  welcome(client);
}


let scheduledMessage = new cron.CronJob('15 38 15 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  let channel = client.channels.cache.get('815226137977552949');
  channel.send('Mensagem para 15:38');
});

// When you want to start it, use:
scheduledMessage.start();
// You could also make a command to pause and resume the job


const commandHandler = require('./commands');
require('./googlesheets');

client.on('message', commandHandler);
