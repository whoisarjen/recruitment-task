import { SmartBulb } from '../../interfaces/device.interface';
import BoxDevice from '../box-device--layout';
import BoxConnectionState from '../box-connection-state';
import BoxIcon from '../box-icon';
import IconDeviceBulb from '../icon-device-bulb';
import BoxDeviceContent from '../box-device--content';

const BoxDeviceBulb = ({ type, id, name, connectionState, isTurnedOn, brightness, color, onClick }: SmartBulb & { onClick: () => void }) => {
    return (
        <div onClick={onClick}>
            <BoxDevice>
                <BoxIcon>
                    <IconDeviceBulb {...{ isTurnedOn, color }} />
                </BoxIcon>
                <BoxDeviceContent {...{ name, type }} />
                <BoxConnectionState connectionState={connectionState} />
            </BoxDevice>
        </div>
    )
}

export default BoxDeviceBulb;