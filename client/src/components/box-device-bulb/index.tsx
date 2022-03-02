import { SmartBulb } from '../../interfaces/device.interface';
import BoxDevice from '../box-device';

const BoxDeviceBulb = ({ type, id, name, connectionState, isTurnedOn, brightness, color }: SmartBulb) => {
    return (
        <BoxDevice {...{ type, name, connectionState }}>

        </BoxDevice>
    )
}

export default BoxDeviceBulb;