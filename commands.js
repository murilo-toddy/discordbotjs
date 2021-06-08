
//Commands
const gif = require('./commands/gif.js');
const motivacional = require('./commands/motivacional.js');
const ban = require('./commands/ban.js');
const refresh = require('./refresh.js');
const choose = require('./commands/choose.js');
const agenda = require('./commands/agenda.js');
const w = require('./waifu.js');

//Triggers
const trigger = require('./triggers/trigger.js');

const commands = {
    motivacional,
    gif,
    refresh,
    ban,
    choose,
    agenda,
    w,
};



module.exports = async function (msg) {

    let comandos = require('./googlesheets.js').comandos;
    let triggers = require('./googlesheets.js').triggers;
    let newcomandos = require('./refresh.js').comandos;
    let newtriggers = require('./refresh.js').triggers;
    let tokens = msg.content.split(' ');
    let command = tokens.shift();

    if(command.charAt(0) === '>') {
        
        let inSS = 0;
        command = command.substring(1);
        msg.react('🍉');

        console.log(newcomandos);
        
        if(!newcomandos) {
            for(var i = 0; i < comandos.length; i++) {
                if(comandos[i][0] === command) {
                    inSS = 1;
                    if(comandos[i][2]) {
                        const react = await msg.channel.send(comandos[i][1], {files: [comandos[i][2]]});
                        await react.react('✨');
                    } else if (comandos[i][1]) {
                        const react = await msg.channel.send(comandos[i][1]);
                        await react.react('✨');
                    }
                }
            }
        } else {
            for(var i = 0; i < newcomandos.length; i++) {
                if(newcomandos[i][0] === command) {
                    inSS = 1;
                    if(newcomandos[i][2]) {
                        const react = await msg.channel.send(newcomandos[i][1], {files: [comandos[i][2]]});
                        await react.react('✨');
                    } else if (newcomandos[i][1]) {
                        const react = await msg.channel.send(newcomandos[i][1]);
                        await react.react('✨');
                    }
                }
            }
        }

        if(inSS === 0) {
            if(commands.hasOwnProperty(command)) {
                commands[command](msg, tokens);
            } else {
                const reaction = await msg.channel.send("Comando não encontrado");
                await reaction.react('😔');
            }
        }
    } else {

        for(var i = 0; i < triggers.length; i++) {
            if(triggers[i][0] === msg.content) {
                if(triggers[i][2]) {
                    msg.react('🤠');
                    const react = await msg.channel.send(triggers[i][1], {files: [triggers[i][2]]});
                    await react.react('✨');
                } else if (triggers[i][1]) {
                    msg.react('🤠');
                    const react = await msg.channel.send(triggers[i][1]);
                    await react.react('✨');
                }
            }
        }

        trigger(msg);
    }

}