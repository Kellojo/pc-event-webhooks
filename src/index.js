#!/usr/bin/env node

import {sendRequest} from './RestClient.js';
import commandLineArgs from 'command-line-args';
import chalk from 'chalk';
import death from 'death';

let interval = null;
const args = commandLineArgs([
    { name: 'startUrl', alias: 'a', type: String },
    { name: 'startMethod', alias: 'b', type: String },
    { name: 'startBody', alias: 'c', type: String },

    { name: 'stopUrl', alias: 'd', type: String },
    { name: 'stopMethod', alias: 'e', type: String },
    { name: 'stopBody', alias: 'f', type: String },
]);

// keep node running after code finishes (wait for on death callback)
if (args.stopUrl) {
    interval = setInterval(() => { }, 1 << 30);
}


console.log(chalk.bold("PC-Event-Webhooks"));


// start request
if (args.startUrl) {
    console.log("Sending start request...");
    sendRequest(
        args.startUrl,
        args.startMethod || "GET",
        args.startBody || "",
    );
}

// stop request
death(() => {
    clearInterval(interval);

    if (args.stopUrl) {
        console.log("Waiting for shutdown...");


        console.log("Sending shutdown request...");
        sendRequest(
            args.stopUrl,
            args.stopMethod || "GET",
            args.stopBody || "",
        );
    }
});

