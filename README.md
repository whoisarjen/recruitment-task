The goal of the project is to create part of smart home web's interface, which cover:

- [x] Connect to DB and get all user's devices
- [x] Connect socket on specyfic path and wait for messages
- [x] Show list of user's devices with basic information
- [x] Click on device open dialog, which can be moved and resized. After closed hold the same position
- [x] Dynamically update list with value from socket (and potencailly dialog)

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