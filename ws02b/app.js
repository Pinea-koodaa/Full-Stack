const axios = require('axios');

function apitesti() {

axios.get("https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY")
    .then((response) => 
        console.log(response.data),
        console.log("fazer")
)};

apitesti();



/*  "https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY"*/