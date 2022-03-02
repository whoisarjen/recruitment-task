import { SmartOutlet } from '../../interfaces/device.interface';
import BoxDevice from '../box-device';

const BoxDeviceOutlet = ({ type, id, name, connectionState, isTurnedOn, powerConsumption }: SmartOutlet) => {
    return (
        <BoxDevice  {...{ type, name, connectionState }}>

        </BoxDevice>
    )
}

export default BoxDeviceOutlet;