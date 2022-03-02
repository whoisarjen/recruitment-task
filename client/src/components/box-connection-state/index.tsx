import BoxIcon from "../box-icon";
import { yellow, red, green } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import Tooltip from '@mui/material/Tooltip';

const BoxConnectionState = ({ connectionState }: { connectionState: string }) => {
    return (
        <BoxIcon>
            {
                connectionState === 'connected'
                    ?
                    <Tooltip title="Connected">
                        <CircleIcon sx={{ color: green[500] }} fontSize="small" />
                    </Tooltip>
                    :
                    connectionState === 'poorConnection'
                        ?
                        <Tooltip title="Poor connection">
                            <CircleIcon sx={{ color: yellow[500] }} fontSize="small" />
                        </Tooltip>
                        : // if not connected or null -> disconnected
                        <Tooltip title="Disconnected">
                            <CircleIcon sx={{ color: red[500] }} fontSize="small" />
                        </Tooltip>
            }
        </BoxIcon>
    )
}

export default BoxConnectionState;