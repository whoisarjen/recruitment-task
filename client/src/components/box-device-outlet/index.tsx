import { SmartOutlet } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-title-description';
import BoxDevice from '../box-device';
import BoxIcon from '../box-icon';
import IconDeviceOutlet from '../icon-device-outlet';

const BoxDeviceOutlet = ({ type, id, name, connectionState, isTurnedOn, powerConsumption, onClick }: SmartOutlet & { onClick: () => void }) => {
    return (
        <BoxDevice onClick={onClick}>
            <BoxIcon>
                <IconDeviceOutlet {...{ isTurnedOn }} />
            </BoxIcon>
            <BoxDeviceContent {...{ title: name, description: type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceOutlet;