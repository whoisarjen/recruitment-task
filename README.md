The goal of the project is to create part of smart home web's interface. I need to get list of smart devices from mocked DB, show it on desktop and then listen for commming changes from socket.

## How does it work?

After connection to site, application is downloading devices and holds it in Redux. After achiving message from socket, it check redux to overwrite existing value or add it to array of devices. 

## What would I do extra in real product?

asd

## Starting project

To run the project we have to get care of server's and client's site.

Inside "_server" we need to install all dependencies:

```bash
$ npm install
```

then we can run server:

```bash
$ npm run start
```

Now we can move to "client" folder and basiclly do the same:

```bash
$ npm install
```

Client's site should be ready to start:

```bash
$ npm run start
```

After everything React should open browser with "localhost:3000". Server uses "localhost:1337".