import useSocket from "./useSocket";

export interface SocketProps {
    children: any
}

const Socket = ({ children }: SocketProps) => {
    useSocket()

    return <>{children}</>
}

export default Socket;