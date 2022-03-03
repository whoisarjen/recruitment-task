import { useEffect } from "react";
import useDevices from "../../hooks/useDevices";
import { useAppDispatch } from "../../hooks/useRedux";
import { setAll } from "../../redux/slices/device.slice";

const Synchronization = ({ children }: { children: any }) => {
    const { devices } = useDevices()
    const dipsatch = useAppDispatch()
    
    useEffect(() => {
        dipsatch(setAll(devices))
    }, [devices])

    return <>{children}</>
}

export default Synchronization;