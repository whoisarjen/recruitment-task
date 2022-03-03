import { Server, Socket } from "socket.io";
import { getAll } from "./db.utils";

export async function socket({ io }: { io: Server }) {
    io.on('connection', async (socket: Socket) => {
        console.log(`${socket.id} connected to socket!`)
        setInterval(() => {
            socket.emit('SmartDeviceDetails', changeDevice())
        }, 3500)
    });
}

const generateRandomString = (length: number) => {
    let result = "", seeds

    for (let i = 0; i < length - 1; i++) {
        seeds = [
            Math.floor(Math.random() * 10) + 48,
            Math.floor(Math.random() * 25) + 65,
            Math.floor(Math.random() * 25) + 97
        ]

        result += String.fromCharCode(seeds[Math.floor(Math.random() * 3)])
    }

    return result
}

const generateRandom = (min = 0, max = 100) => {
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}

const randomlyChooseRange = () => {
    const options = ['connected', 'disconnected', 'poorConnection']

    return options[generateRandom(0, 3)]
}


const changeDevice = () => {
    const devices = getAll()
    let device: any = { type: null };

    while (device.type == null) {
        device = devices[Math.floor(Math.random() * devices.length)];
    }

    return { ...device, name: generateRandomString(10), connectionState: randomlyChooseRange(), isTurnedOn: Math.round(Math.random()) };
}