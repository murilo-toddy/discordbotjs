module.exports = function(msg, args) {
    let chooser = args.join(' ');
    let options = chooser.split(' | ');
    var choosen = Math.floor(Math.random() * options.length);
    msg.channel.send("Eu escolho " + options[choosen]);
};