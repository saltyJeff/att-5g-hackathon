var fs = require('fs');
var cp = require('child_process');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2)); //enhances argv
var path_appConfig = process.cwd(); //console.log(path)
const os = require('os');
const fetch = require('node-fetch');
const url = require('url');

process.on('message', (data) => {
    console.log('Message from parent:', data);

    //FOR TWITCH
    //streamlink --stream-url https://www.twitch.tv/datto best
    let ffmpegExec = `streamlink --stream-url https://www.twitch.tv/${data.leftChannel} best`;
    //console.log(ffmpegExec)
    let leftResponse;
    try {
        leftResponse = cp.execSync(ffmpegExec).toString().replace(/\n/g,"");
    }  catch(e){
        leftResponse = "no stream";
    }
    //console.log(leftResponse)
    ffmpegExec = `streamlink --stream-url https://www.twitch.tv/${data.rightChannel} best`;
    //console.log(ffmpegExec)
    let rightResponse;
    try {
        rightResponse = cp.execSync(ffmpegExec).toString().replace(/\n/g,"");
    }  catch(e){
        rightResponse = "no stream";
    }
    //console.log(rightResponse)
    process.send({
        lResponse: leftResponse,
        rResponse: rightResponse

    });
    process.exit();

});
