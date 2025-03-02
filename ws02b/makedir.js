const fs = require('fs');

fs.rmdir("./kokeilukansio", (err) => {
    if (err) throw err;
    console.log("dir removed succesful");
})