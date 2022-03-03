import { useEffect } from "react";
import io from "socket.io-client";

const useSocket = () => {
    useEffect(() => {
        const socket = io(process.env.REACT_APP_SERVER_URL as string, { path: `/api/v1/refresh` })

        socket.on('SmartDeviceDetails', (message) => {
            console.log('SmartDeviceDetails', message)
        })
    }, [])
}

export default useSocket;