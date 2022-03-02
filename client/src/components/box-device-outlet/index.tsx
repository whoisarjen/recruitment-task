import { SmartOutlet } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-device--content';
import BoxDevice from '../box-device--layout';
import BoxIcon from '../box-icon';
import IconDeviceOutlet from '../icon-device-outlet';

const BoxDeviceOutlet = ({ type, id, name, connectionState, isTurnedOn, powerConsumption }: SmartOutlet) => {
    return (
        <BoxDevice>
            <BoxIcon>
                <IconDeviceOutlet {...{ isTurnedOn }} />
            </BoxIcon>
            <BoxDeviceContent {...{ name, type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceOutlet;