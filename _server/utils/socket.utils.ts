import { Server, Socket } from "socket.io";

export async function socket({ io }: { io: Server }) {
    io.on('connection', async (socket: Socket) => {
        console.log(`${socket.id} connected to socket!`)
        socket.emit('SmartDeviceDetails', {
            data: {
    
            }
        })
    });
}