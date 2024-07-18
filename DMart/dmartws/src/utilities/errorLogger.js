const fs = require("fs");

let errorLogger = (err, req, res, next)=> {
    if (err) {
        fs.appendFile("ErrorLogger.txt", new Date() + " - " + err.stack + "\n",(error) =>{
            if (error) {
                return "Failed in logging error";
            }
        });
        res.status(err.status || 500);
        res.json({ "message": err.message })
    }
    next();
}

module.exports = errorLogger;