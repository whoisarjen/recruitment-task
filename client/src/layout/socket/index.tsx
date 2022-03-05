import { useEffect } from "react";
import io from "socket.io-client";
import { useAppDispatch } from "../../hooks/useRedux";
import { SmartDeviceDetails } from "../../interfaces/device.interface";
import { changeOne } from "../../redux/slices/device.slice";

const Socket = ({ children }: { children: any }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(process.env.REACT_APP_SERVER_URL as string, { path: `/api/v1/refresh`, withCredentials: true })

        socket.on('SmartDeviceDetails', (message: SmartDeviceDetails) => {
            console.log('SmartDeviceDetails', message)
            dispatch(changeOne(message))
        })
    }, [])

    return <>{children}</>
}

export default Socket;