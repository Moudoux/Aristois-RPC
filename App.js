const DiscordRPC = require('discord-rpc');
const ClientId = '389567324014772244';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({
    transport: 'ipc'
});
const startTimestamp = new Date();

async function setActivity() {
    if (!rpc)
        return;

    rpc.setActivity({
        details: 'Minecraft utility mod',
        state: 'Download now at aristois.net',
        startTimestamp: Date.now(),
        largeImageKey: 'aristois_big',
        largeImageText: 'The Aristois logo, visit aristois.net',
        smallImageKey: 'deftware',
        smallImageText: 'The dev of Aristois, visit deftware.me',
        instance: false,
    });
}

rpc.on('ready', () => {
    console.log("Ready");
    setActivity();
    setInterval(() => {
        setActivity();
    }, 15e3);
});

rpc.login(ClientId).catch(console.error);
