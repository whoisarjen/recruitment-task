import styled from 'styled-components';
import { SmartDevice } from '../../interfaces/device.interface';
import BoxDevice from '../box-device';

const BoxDeviceUnknown = ({ type, id, name, connectionState }: SmartDevice) => {
    return (
        <BoxDevice {...{ type, name, connectionState }}>

        </BoxDevice>
    )
}

export default BoxDeviceUnknown;