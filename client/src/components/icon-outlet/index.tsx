import OutletIcon from '@mui/icons-material/Outlet';
import OutletOutlinedIcon from '@mui/icons-material/OutletOutlined';

const IconOutlet = ({ isTurnedOn }: { isTurnedOn: boolean }) => {
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