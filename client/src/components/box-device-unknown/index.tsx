import { SmartDevice } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-device--content';
import BoxDevice from '../box-device--layout';
import BoxIcon from '../box-icon';
import IconDeviceUnknown from '../icon-device-unknown';

const BoxDeviceUnknown = ({ name, connectionState, type }: SmartDevice) => {
    return (
        <BoxDevice>
            <BoxIcon>
                <IconDeviceUnknown />
            </BoxIcon>
            <BoxDeviceContent {...{ name, type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceUnknown;