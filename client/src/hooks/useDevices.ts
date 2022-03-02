import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useDevices = () => {
    const { get } = useAxios()
    const [devices, setDevices] = useState([])

    useEffect(() => {
        (async () => {
            const res = await get({ url: '/api/v1/devices' })
            setDevices(res.data)
        })()
    }, [])

    return { devices }
}

export default useDevices;