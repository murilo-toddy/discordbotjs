const bomdia = [];

module.exports = async function (msg) {

    if(msg.content === "salve todbot" || msg.content === 'oi todbot') {
        msg.channel.send("fala meu querido");
    }

    if(msg.content === "bom dia") {
        msg.react('💜');
        const reaction = await msg.channel.send("bom dia, flor do dia <@" + msg.author.id + ">");
        await reaction.react('⛅');
    }

    if(msg.content === 'tudo bem?') {
        msg.channel.send('não ne caralho');
    }

}