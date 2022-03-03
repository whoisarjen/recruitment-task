import { SmartDevice } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-title-description';
import BoxDevice from '../box-device';
import BoxIcon from '../box-icon';
import IconDeviceUnknown from '../icon-device-unknown';

const BoxDeviceUnknown = ({ name, connectionState, type, onClick }: SmartDevice & { onClick: () => void }) => {
    return (
        <BoxDevice onClick={onClick}>
            <BoxIcon>
                <IconDeviceUnknown />
            </BoxIcon>
            <BoxDeviceContent {...{ title: name, description: type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceUnknown;