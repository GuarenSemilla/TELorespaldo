const mongoose = require("mongoose")

mongoose.connect("mongodb://mongo/mydatabase").then(db => console.log("DB bkn esta conectada: ", db.connection.host)).catch(err => console.error(err))