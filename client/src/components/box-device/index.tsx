import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useRedux';
import { SmartDeviceDetails } from '../../interfaces/device.interface';
import { openDialog } from '../../redux/slices/device.slice';
import BoxIconConnectionState from '../box-icon-connection-state';
import BoxIconDevice from '../box-icon-device';

const Box = styled.div`
    width: 100%;
    background: #2f3b52;
    color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 44px auto 44px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    min-height: 88px;
    &:hover{
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`

const Content = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`

const BoxDevice = ({ device }: { device: SmartDeviceDetails }) => {
    const dispatch = useAppDispatch()
    const { type, name } = device;

    return (
        <Box onClick={() => dispatch(openDialog(device))}>
            <BoxIconDevice {...{ device }} />
            <Content>
                <div>{name}</div>
                <small>{type}</small>
            </Content>
            <BoxIconConnectionState {...device} />
        </Box >
    )
}

export default BoxDevice;