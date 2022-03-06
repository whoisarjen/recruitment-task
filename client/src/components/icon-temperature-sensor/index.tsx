import ThermostatIcon from '@mui/icons-material/Thermostat';
import { CustomeIconProps } from '../../interfaces/icon.interface';

const IconTemperatureSensor = ({ width, height }: CustomeIconProps) => {
    return <ThermostatIcon sx={{ color: '#90caf9', width, height }} />
}

export default IconTemperatureSensor;