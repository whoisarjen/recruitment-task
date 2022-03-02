import OutletIcon from '@mui/icons-material/Outlet';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';

const IconDevice = ({ type }: { type: string }) => {
    return (
        <>
            {
                type === 'bulb' ? <LightbulbIcon /> :
                    type === 'outlet' ? <OutletIcon /> :
                        type === 'temperatureSensor' ? <ThermostatIcon /> :
                            <DeviceUnknownIcon /> // if didnt find, show unknown
            }
        </>
    )
}

export default IconDevice;