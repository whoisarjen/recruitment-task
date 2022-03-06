import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import { CustomeIconProps } from '../../interfaces/icon.interface';

const IconUnknown = ({ width, height }: CustomeIconProps) => {
    return <DeviceUnknownIcon sx={{ color: '#9e9e9e', width, height }} />
}

export default IconUnknown;