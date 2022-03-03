import { SmartBulb } from '../../interfaces/device.interface';
import BoxDevice from '../box-device';
import BoxConnectionState from '../box-connection-state';
import BoxIcon from '../box-icon';
import IconDeviceBulb from '../icon-device-bulb';
import BoxDeviceContent from '../box-title-description';

const BoxDeviceBulb = ({ type, id, name, connectionState, isTurnedOn, brightness, color, onClick }: SmartBulb & { onClick: () => void }) => {
    return (
        <BoxDevice onClick={onClick}>
            <BoxIcon>
                <IconDeviceBulb {...{ isTurnedOn, color }} />
            </BoxIcon>
            <BoxDeviceContent {...{ title: name, description: type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceBulb;