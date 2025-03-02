const fs = require('fs');

fs.watch("watch.txt", (eventType, filename) => {
    if (eventType === 'change') {
        console.log(filename + "was modified.");
    }
});