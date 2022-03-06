import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { SmartBulb } from '../../interfaces/device.interface';
import { CustomeIconProps } from '../../interfaces/icon.interface';

const IconBulb = ({ isTurnedOn, color, width, height }: SmartBulb & CustomeIconProps) => {
    return (
        <>
            {
                isTurnedOn
                    ?
                    <LightbulbIcon sx={{ color, width, height }} />
                    :
                    <LightbulbOutlinedIcon sx={{ color: '#9e9e9e', width, height }} />
            }
        </>
    )
}

export default IconBulb;