import OutletIcon from '@mui/icons-material/Outlet';
import OutletOutlinedIcon from '@mui/icons-material/OutletOutlined';
import { SmartOutlet } from '../../interfaces/device.interface';

const IconOutlet = ({ isTurnedOn }: SmartOutlet) => {
    return (
        <>
            {
                isTurnedOn
                    ?
                    <OutletIcon sx={{ color: '#90caf9' }} />
                    :
                    <OutletOutlinedIcon sx={{ color: '#9e9e9e' }} />
            }
        </>
    )
}

export default IconOutlet;