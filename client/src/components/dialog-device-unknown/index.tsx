import { SmartDevice } from "../../interfaces/device.interface";
import styled from 'styled-components'
import TableDevice from "../table-device";
import IconUnknown from "../icon-unknown";

const Name = styled.h3`
    width: 100%;
    text-align: center;
`

const DialogDeviceUknown = (device: SmartDevice) => {
    return (
        <>
            <IconUnknown {...device} width="100%" height="100px" />
            <Name>{device.name}</Name>
            <TableDevice {...{
                "ID": device.id,
            }} />
        </>
    )
}

export default DialogDeviceUknown;