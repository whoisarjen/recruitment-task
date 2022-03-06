import { SmartTemperatureSensor } from "../../interfaces/device.interface";
import styled from 'styled-components'
import TableDevice from "../table-device";
import IconTemperatureSensor from "../icon-temperature-sensor";

const Name = styled.h3`
    width: 100%;
    text-align: center;
`

const DialogDeviceTemperatureSensor = (device: SmartTemperatureSensor) => {
    return (
        <>
            <IconTemperatureSensor {...device} width="100%" height="100px" />
            <Name>{device.name}</Name>
            <TableDevice {...{
                "ID": device.id,
                "Type": device.type,
                "Connection": device.connectionState,
                "Temperature": `${device.temperature}°C`,
            }} />
        </>
    )
}

export default DialogDeviceTemperatureSensor;