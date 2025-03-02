const fs = require('fs');

function readTxt() {
    fs.readFile("example.txt", "utf-8", (err, data) =>  {
        if (err) throw err
        console.log(data)
        }
    )

};

readTxt();