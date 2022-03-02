import { SmartTemperatureSensor } from '../../interfaces/device.interface';
import BoxDevice from '../box-device';


const BoxDeviceTemperatureSensor = ({ type, id, name, connectionState, temperature }: SmartTemperatureSensor) => {
    return (
        <BoxDevice {...{ type, name, connectionState }}>

        </BoxDevice>
    )
}

export default BoxDeviceTemperatureSensor;