let express = require("express");
let app = express();

app.use(express.static("./static"));

app.listen(process.env.PORT || 5000, function() {
        console.log("Listening on port 5000");
    });
