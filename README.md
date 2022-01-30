# pc-event-webhooks
A small node app, that sends out webhook notifications, for certain lifecycle events of your computer.

## How to use the module
Create a shell script in your autostart location/folder on your computer and paste one of the following snippets into it.

```
// just at startup
npx pc-event-webhooks --startUrl=http://www.google.de --startMethod=GET --startBody='{ "action": "123" }'

// just at shutdown
npx pc-event-webhooks --stopUrl=http://www.google.de --stopMethod=GET --stopBody='{ "action": "123" }'

// startup and shutdown
npx pc-event-webhooks --startUrl=http://www.google.de --startMethod=GET --startBody='{ "action": "123" }' --stopUrl=http://www.google.de --stopMethod=GET --stopBody='{ "action": "123" }'
```

## Parameters
You can use the following parameters to customize the behaviour:

```
 --startUrl // the url to call at startup
 --startMethod // the HTTP method to use for the startup call
 --startBody // the body to send over to the url (currently only json is supported)

 --stopUrl // the url to call at shutdown
 --stopMethod // the HTTP method to use for the startup call
 --stopBody // the body to send over to the url (currently only json is supported)
```