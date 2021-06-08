const fetch = require('node-fetch');

module.exports = async function(msg, args) {

    let keyword = 'fifa';
    if(keyword.length > 0) {
        keyword = args.join(' ');
    }

    let url = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORTOKEN}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();

    if(json.results.length === 0) {
        const reaction = await msg.channel.send("Não encontrei nenhum gif correspondente à busca");
        await reaction.react("🍉")
    } else {
        let gifIndex = Math.floor(Math.random() * json.results.length);
        //msg.channel.send("Se liga nesse gif que daora");
        const reaction = await msg.channel.send(json.results[gifIndex].url);
        await reaction.react("🍉");
    }

    return 1;

}
