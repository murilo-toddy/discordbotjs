module.exports = async function(msg, args) {
    const reaction = await msg.channel.send("O usuário " + args + " foi ***BANIDO***");
    await reaction.react('❌');
    await reaction.react('🤬');

    const gif = require('./gif.js');
    gif(msg, ['Ednaldo', 'Pereira']);

}