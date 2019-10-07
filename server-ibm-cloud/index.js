//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; //SHOULD REMOVE THIS FOR PRODUCTION AND RESOLVE ISSUES, IF ANY

var fs = require('fs');
var cp = require('child_process');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2)); //enhances argv
var path_appConfig = process.cwd(); //console.log(path)
const os = require('os');
const fetch = require('node-fetch');
const url = require('url');

/////////////////////////Cloudant Setup/////////////////////////
//var nano = {};
//var db_name = "";
var db = "";

// Load the Cloudant library.
const Cloudant = require('@cloudant/cloudant');
//https://www.npmjs.com/package/@cloudant/cloudant

// Initialize Cloudant with settings from .env
//var username = process.env.cloudant_username || "nodejs";
//var password = process.env.cloudant_password;
/*const cloudant = Cloudant({
    account: username,
    password: password
});*/

//https://2aeca32c-420b-42c5-96ef-8032e3b74711-bluemix.cloudant.com/
var cloudant = Cloudant({
    account: "2aeca32c-420b-42c5-96ef-8032e3b74711-bluemix",
    key: "dsfkjhsdahfgdsafhdsa",
    password: "dfjkhdjkfhkasdhfjkdhaskjfhdskja"
});

//https://www.npmjs.com/package/@cloudant/cloudant#use-a-cloudant-api-key

try {
    db = cloudant.use("karaoke"); //database name

    cloudant.set_cors({
        enable_cors: true,
        allow_credentials: true,
        origins: ['*']
    }).then((data) => {
        // success - response is in 'data'.
    }).catch((err) => {
        // failure - error information is in 'err'.
    });
} catch (e) {
    console.log(e, "error loading nano for Cloudant");
}
/////////////////////////End Cloudant Setup/////////////////////////

// console.log(db);



'use strict';

const Mixer = require('@mixer/client-node');

const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

const channelName = process.argv[2];


/*
client.use(new Mixer.OAuthProvider(client, {
    clientId: 'Click here to get your Client ID!',
}));

client.request('GET', `channels/${channelName}`)
.then(res => {
    const viewers = res.body.viewersTotal;
    console.log(`You have ${viewers} total views...`);
});

*/

client.use(new Mixer.OAuthProvider(client, {
    clientId: 'Click here to get your Client ID!',
}));






db.find({
    selector: {
        _id: 'game'

        //   "songName": "Feel Special"
    }
}, function (err, result) {
    if (err) {
        throw err;
    }

    console.log('Found %d documents from database karaoke', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
        // console.log('  Doc id: %s', JSON.stringify(result.docs[i]));
        //
        let leftStreamURL = result.docs[i].leftUser.streamUrl;
        let rightStreamURL = result.docs[i].rightUser.streamUrl;

        //console.log(leftStreamURL, rightUserStreamURL)
        //console.log(result.docs[i])

        (async () => {

            //https://player.twitch.tv/?channel=abc

            /*
            //FOR TWITCH
            const idReq = await fetch(`https://mixer.com/api/v1/channels/${channelName}?fields=id`)
            const idRes = await idReq.json()
            const id = idRes.id*/


            leftStreamURL = url.parse(leftStreamURL.toString());
            // const leftStreamURL = url.parse('https://player.twitch.tv/?channel=abc');
            const leftChannel = leftStreamURL.query.split("=")[1];
            //console.log(leftChannel);
            //console.log(typeof leftChannel);
            rightStreamURL = url.parse(rightStreamURL.toString());
            // const rightStreamURL = url.parse('https://player.twitch.tv/?channel=abc');
            const rightChannel = rightStreamURL.query.split("=")[1];
            //console.log(rightChannel);


            /*
            //FOR MIXER
            const idReq = await fetch(`https://mixer.com/api/v1/channels/${channelName}?fields=id`)
            const idRes = await idReq.json()
            const id = idRes.id
        
            const m3u8Url = `https://mixer.com/api/v1/channels/${id}/manifest.m3u8`
            console.log(m3u8Url)
            //manifest.RocketBear
            //{"message":"Broadcast not found.","statusCode":404,"error":"Not Found"}
            */



            //sudo apt install ffmpeg  -- //https://linuxize.com/post/how-to-install-ffmpeg-on-ubuntu-18-04/
            //ffmpeg -i https://mixer.com/api/v1/channels/32709/manifest.m3u8 -c copy -bsf:a aac_adtstoasc output.mp4
            //ffmpeg -i somefile.mp3 -f segment -segment_time 3 -c copy out%03d.mp3
            //ffmpeg -i https://mixer.com/api/v1/channels/32709/manifest.m3u8 -f segment -segment_time 3 -c copy out%03d.aac


            //install node and npm
            //-- https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/




            //https://streamlink.github.io/install.html

            //https://docs.python-guide.org/starting/install3/linux/ 
            //-- 
            //https://stackoverflow.com/questions/6587507/how-to-install-pip-with-python-3
            //-- sudo apt-get install python3-pip


            const {
                fork
            } = require('child_process');

            const forked = fork('child.js');

            forked.on('message', (childResponse) => {
                console.log('Message from remote process', childResponse);


                setTimeout(() => {
                    process.exit();
                }, 30000);

                if (childResponse.lResponse !== "no stream") {
                    const ffmpegExec = `ffmpeg -i ${childResponse.lResponse} -f segment -segment_time 3 -c copy lResponse%03d.aac`;
                    //const ffmpegExec = `ffmpeg -i ${childResponse.lResponse} -f segment -segment_time 3 -c copy lResponse%03d.aac`;
                    cp.exec(ffmpegExec);
                }
                if (childResponse.rResponse !== "no stream") {
                    const ffmpegExec = `ffmpeg -i ${childResponse.rResponse} -f segment -segment_time 3 -c copy rResponse%03d.aac`;
                    //const ffmpegExec = `ffmpeg -i ${childResponse.rResponse} -f segment -segment_time 3 -c copy rResponse%03d.aac`;
                    cp.exec(ffmpegExec);
                }

            });

            forked.send({
                leftChannel: leftChannel,
                rightChannel: rightChannel
            });


            /*//FOR TWITCH
            //streamlink --stream-url https://www.twitch.tv/datto best
            let ffmpegExec = `streamlink --stream-url https://www.twitch.tv/${leftChannel} best`;
            //console.log(ffmpegExec)
            const leftResponse = cp.exec(ffmpegExec);
            //var child = cp.fork(__dirname + '/analysis.js', [], {});
            //console.log(leftResponse)
            ffmpegExec = `streamlink --stream-url https://www.twitch.tv/${rightChannel} best`;
            //console.log(ffmpegExec)
            const rightResponse = cp.exec(ffmpegExec);
            //console.log(rightResponse)*/

            //FOR MIXER
            //const ffmpegExec = `ffmpeg -i ${m3u8Url} -f segment -segment_time 3 -c copy out%03d.aac`;
            //channel
            // cp.exec(ffmpegExec);

            //spawn ffmpeg





        })()




        // console.log('  Doc id: %s', result.docs[i]._id);
    }
});





//what is the name of user one?



//what is the name of user two?




//MIXER API
/*
https://mixer.com/api/v1/resources ....
/channels/{channelId}/manifest.m3u8
*/


//  c:\Users\Public\Documents\htdocs\MistServer>node index.js ninja

/*
client.request('GET', `channels/${channelName}`)
.then(res => {
    const viewers = res.body.viewersTotal;
    console.log(`You have ${viewers} total viewers...`);

    let rank = 1;
    const run = (page) => {
        return client.request('GET', '/channels', {
            qs: {
                page,
                fields: 'viewersTotal',
                order: 'viewersTotal:DESC',
            },
        }).then(res => {
            for (let i = 0; i < res.body.length; i++) {
                const channel = res.body[i];
                if (channel.viewersTotal <= viewers) {
                    console.log(`Your rank on Mixer is ${rank}!`);
                    return;
                }

                rank++;
            }

            console.log(`Your rank is at least ${rank}...`);
            return run(page + 1);
        });
    };

    return run(0);
});
*/


/*

let channelId = "2319013";//ninja
let m3u8URL = "https://mixer.com/api/v1/resources/channels/" + channelId + "/manifest.m3u8";


const response = await fetch(m3u8URL);
const m3u8 = await response.json();
console.log(JSON.stringify(m3u8));


*/