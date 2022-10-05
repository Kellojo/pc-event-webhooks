#!/usr/bin/env node

import commandLineArgs from 'command-line-args';
import fetch from "node-fetch";
import chalk from 'chalk';

let interval = null;
const args = commandLineArgs([
    { name: 'url', alias: 'a', type: String },
    { name: 'interval', alias: 'i', type: Number },
]);


console.log(chalk.bold("PC Webhooks"));

if (!args.interval) args.interval = 1000;

const sendRequest = async () => {

    try {
        console.log(`Sending GET request to ${args.url}`);
        const response = await fetch(args.url, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        });

        console.log(`${response.statusText} ${response.status}`);
    } catch (error) {
        console.log(`failed to send request`);
    }

}

sendRequest();
setInterval(sendRequest, args.interval);
