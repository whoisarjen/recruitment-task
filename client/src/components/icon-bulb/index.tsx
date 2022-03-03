import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const IconBulb = ({ isTurnedOn, color }: { isTurnedOn: boolean, color: string }) => {
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