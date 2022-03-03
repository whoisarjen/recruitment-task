import IconDeviceTemperatureSensor from '../icon-device-temperature-sensor';
import { SmartTemperatureSensor } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-title-description';
import BoxDevice from '../box-device';
import BoxIcon from '../box-icon';

const BoxDeviceTemperatureSensor = ({ type, id, name, connectionState, temperature, onClick }: SmartTemperatureSensor & { onClick: () => void }) => {
    return (
        <BoxDevice onClick={onClick}>
            <BoxIcon>
                <IconDeviceTemperatureSensor />
            </BoxIcon>
            <BoxDeviceContent {...{ title: name, description: type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceTemperatureSensor;