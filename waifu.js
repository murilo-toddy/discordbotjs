const Discord = require('discord.js');

module.exports = function (msg, agrs) {
    let waifu = require('./googlesheets.js').waifu;
    let index = Math.floor(Math.random() * waifu.length + 1)

    msg.channel.send('```-- ' + waifu[index][0] + ' --' + '\n\n' + waifu[index][1] + '```', {files: [waifu[index][2]]});
    
    /*if(waifu[index][2]) {
        msg.channel.send('__' + waifu[index][1] + '__', {files: [waifu[index][2]]})
    } else if (waifu[index][1]) {
        msg.channel.send('__' + waifu[index][1] + '__')
    }*/

}