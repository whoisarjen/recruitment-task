import styled from "styled-components";
import BoxDevice from "../../components/box-device";
import { SmartDeviceAny } from "../../interfaces/device.interface";

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`

const BaseHome = ({ devices }: { devices: Array<SmartDeviceAny> }) => {
    return (
        <Grid>
            {
                devices.length > 0 &&
                devices.map((device: SmartDeviceAny) =>
                    <BoxDevice key={device.id} {...{ device }} />
                )
            }
        </Grid>
    )
}
export default BaseHome;