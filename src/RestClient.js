import fetch from "node-fetch";
import chalk from 'chalk';

export async function sendRequest(url, method, body) {

    const response = await fetch(url, {
        method: method,
        body: body,
        headers: { 'Content-Type': 'application/json' }
    });



    if (response.ok) {
        console.log(chalk.green(`HTTP request to ${url} succeeded with status ${response.status} and response ${await response.text()}`));
    } else {
        console.error(chalk.red(`HTTP request to ${url} failed with status ${response.status} and error ${await response.text()}`));
    }
}
