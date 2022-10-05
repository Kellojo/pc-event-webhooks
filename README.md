# pc-event-webhooks
A small node app, that sends out GET requests while it's running on a set interval

## How to use the module
Create a shell script in your autostart location/folder on your computer and paste one of the following snippet into it:

```
npx pc-event-webhooks --url=http://www.google.de --interval=5000'

```

## Parameters
You can use the following parameters to customize the behaviour:

```
 --url      // the url to call
 --interval // the time in ms to wait between each call
```