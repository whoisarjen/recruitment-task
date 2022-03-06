import { SmartBulb } from "../../interfaces/device.interface";
import IconBulb from "../icon-bulb";
import styled from 'styled-components'
import TableDevice from "../table-device";

const Name = styled.h3`
    width: 100%;
    text-align: center;
`

const DialogDeviceBulb = (device: SmartBulb) => {
    return (
        <>
            <IconBulb {...device} width="100%" height="100px" />
            <Name>{device.name}</Name>
            <TableDevice {...{
                "ID": device.id,
                "Type": device.type,
                "Turned on": device.isTurnedOn ? "true" : "false",
                "Connection": device.connectionState,
                "Brightness": `${device.brightness}%`,
                "Color": device.color,
            }} />
        </>
    )
}

export default DialogDeviceBulb;