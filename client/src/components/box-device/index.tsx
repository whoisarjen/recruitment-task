import styled from 'styled-components';
import BoxConnectionState from '../box-connection-state';
import BoxIcon from '../box-icon';
import IconDevice from '../icon-device';

interface BoxDeviceProps {
    children: any
    type: string
    name: string
    connectionState: string
}

const Box = styled.div`
    width: 100%;
    background: #2f3b52;
    color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 44px auto 44px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`

const Text = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px 20px;
`

const BoxDevice = ({ children, type, name, connectionState }: BoxDeviceProps) => {
    return (
        <Box>
            <BoxIcon>
                <IconDevice {...{ type }} />
            </BoxIcon>
            <Text>
                {name}
            </Text>
            <BoxConnectionState connectionState={connectionState} />
            {children}
        </Box>
    )
}

export default BoxDevice;