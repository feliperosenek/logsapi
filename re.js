const fetch = require("node-fetch")

async function log(logtype,message,pipe){
    var timedate = new Date()
    var url = 'https://logsapi-production.up.railway.app'
    var dataLog = JSON.stringify({
        "logtype": logtype,
        "message": message,
        "pipe": pipe,
        "timedate": timedate
    });

    var sendlog = {
        method: 'post',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : dataLog
    };
    await fetch(url,sendlog)
}

log("info","Configurando um novo contrato","Pipefy -> ZapSign") 