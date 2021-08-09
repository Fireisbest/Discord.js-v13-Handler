const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} Is Online!!`)
);
