import { SmartDeviceDetails } from "../../interfaces/api.interfaces";
import styled from 'styled-components';
import OutletIcon from '@mui/icons-material/Outlet';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CircleIcon from '@mui/icons-material/Circle';

const icon = {
    outlet: <OutletIcon />,
    bulb: <LightbulbIcon />,
    temperatureSensor: <DeviceThermostatIcon />,
    unknown: <DeviceUnknownIcon />,
}

const Box = styled.div`
    width: 100%;
    background: #2f3b52;
    color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 44px auto 44px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`

const Icon = styled.div`
    width: 44px;
    height: 44px;
    margin: auto;
    display: grid;
    ${this} svg{
        margin: auto;
    }
`

const Text = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px 20px;
`

const BoxDevice = ({ device }: { device: SmartDeviceDetails }) => {
    return (
        <Box>
            <Icon>
                {icon[device.type as keyof typeof icon] ? icon[device.type as keyof typeof icon] : icon['unknown']}
            </Icon>
            <Text>
                {device.name ? device.name : 'Unknown'}
            </Text>
            <Icon>
                <CircleIcon color={device.isTurnedOn ? "success" : "error"} fontSize="small" />
            </Icon>
        </Box>
    )
}

export default BoxDevice;