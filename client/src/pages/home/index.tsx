import { useEffect, useState } from "react";
import BoxDevice from "../../components/box-device";
import useAxios from "../../hooks/useAxios";
import { SmartDeviceDetails } from "../../interfaces/api.interfaces";
import styled from "styled-components";

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`

function Home() {
    const { get } = useAxios()
    const [devices, setDevices] = useState([])

    useEffect(() => {
        (async () => {
            const res = await get({ url: '/api/v1/devices' })
            setDevices(res.data)
        })()
    }, [get])

    return (
        <Grid>
            {
                devices.length > 0 &&
                devices.map((device: SmartDeviceDetails) =>
                    <BoxDevice key={device.id} {...{ device }} />
                )
            }
        </Grid>
    );
}

export default Home;
