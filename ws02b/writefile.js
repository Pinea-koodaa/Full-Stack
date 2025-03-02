const fs = require('fs');
const text = "HayDay on kiva peli\n"
const extratext = "appendin käyttö"

fs.writeFile("output.txt", text, (err) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        console.log("Successfull");
    }
});

fs.appendFile("output.txt", extratext, (err) => {
    if (err) {
        console.log("Error append: ", err);
    }
    else {
        console.log("Successfull append");
    }
});

