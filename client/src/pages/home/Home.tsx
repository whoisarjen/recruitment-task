import styled from "styled-components";
import BoxDeviceBulb from "../../components/box-device-bulb";
import BoxDeviceOutlet from "../../components/box-device-outlet";
import BoxDeviceTemperatureSensor from "../../components/box-device-temperature-sensor";
import BoxDeviceUnknown from "../../components/box-device-unknown";
import { useAppDispatch } from "../../hooks/useRedux";
import { SmartDeviceAny } from "../../interfaces/device.interface";
import { openDialog } from "../../redux/slices/device.slice";

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
    const dispatch = useAppDispatch()

    return (
        <Grid>
            {
                devices.length > 0 &&
                devices.map((device: SmartDeviceAny) =>
                    device.type === 'bulb' ? <BoxDeviceBulb onClick={() => dispatch(openDialog(device))} key={device.id} {...device} /> :
                        device.type === 'outlet' ? <BoxDeviceOutlet onClick={() => dispatch(openDialog(device))} key={device.id} {...device} /> :
                            device.type === 'temperatureSensor' ? <BoxDeviceTemperatureSensor onClick={() => dispatch(openDialog(device))} key={device.id} {...device} /> :
                                <BoxDeviceUnknown onClick={() => dispatch(openDialog(device))} key={device.id} {...device} /> // If backend sent unsupported type
                )
            }
        </Grid>
    )
}
export default BaseHome;