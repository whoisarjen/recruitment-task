import BoxIcon from "../box-icon";
import { yellow, red, green } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import SignalWifi0BarIcon from '@mui/icons-material/SignalWifi0Bar';

const BoxConnectionState = ({ connectionState }: { connectionState: string }) => {
    return (
        <BoxIcon>
            {
                connectionState === 'connected'
                    ?
                    <Tooltip title="Connected">
                        <SignalWifi4BarIcon sx={{ color: green[500] }} fontSize="small" />
                    </Tooltip>
                    :
                    connectionState === 'poorConnection'
                        ?
                        <Tooltip title="Poor connection">
                            <SignalWifi2BarIcon sx={{ color: yellow[500] }} fontSize="small" />
                        </Tooltip>
                        :
                        <Tooltip title="Disconnected">
                            <SignalWifi0BarIcon sx={{ color: red[500] }} fontSize="small" />
                        </Tooltip>
            }
        </BoxIcon>
    )
}

export default BoxConnectionState;