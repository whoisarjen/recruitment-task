import { SmartOutlet } from "../../interfaces/device.interface";
import styled from 'styled-components'
import TableDevice from "../table-device";
import IconOutlet from "../icon-outlet";

const Name = styled.h3`
    width: 100%;
    text-align: center;
`

const DialogDeviceOutlet = (device: SmartOutlet) => {
    return (
        <>
            <IconOutlet {...device} width="100%" height="100px" />
            <Name>{device.name}</Name>
            <TableDevice {...{
                "ID": device.id,
                "Type": device.type,
                "Turned on": device.isTurnedOn ? "true" : "false",
                "Connection": device.connectionState,
                "Consumption": `${device.powerConsumption}W`,
            }} />
        </>
    )
}

export default DialogDeviceOutlet;