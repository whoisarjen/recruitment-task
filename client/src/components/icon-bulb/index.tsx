import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { SmartBulb } from '../../interfaces/device.interface';

const IconBulb = ({ isTurnedOn, color }: SmartBulb) => {
    return (
        <>
            {
                isTurnedOn
                    ?
                    <LightbulbIcon sx={{ color }} />
                    :
                    <LightbulbOutlinedIcon sx={{ color: '#9e9e9e' }} />
            }
        </>
    )
}

export default IconBulb;