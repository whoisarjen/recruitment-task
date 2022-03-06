import OutletIcon from '@mui/icons-material/Outlet';
import OutletOutlinedIcon from '@mui/icons-material/OutletOutlined';
import { SmartOutlet } from '../../interfaces/device.interface';
import { CustomeIconProps } from '../../interfaces/icon.interface';

const IconOutlet = ({ isTurnedOn, width, height }: SmartOutlet & CustomeIconProps) => {
    return (
        <>
            {
                isTurnedOn
                    ?
                    <OutletIcon sx={{ color: '#90caf9', width, height }} />
                    :
                    <OutletOutlinedIcon sx={{ color: '#9e9e9e', width, height }} />
            }
        </>
    )
}

export default IconOutlet;