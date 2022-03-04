import { SmartDeviceDetails } from "../../interfaces/device.interface";
import BoxIcon from "../box-icon";
import IconBulb from "../icon-bulb";
import IconOutlet from "../icon-outlet";
import IconTemperatureSensor from "../icon-temperature-sensor";
import IconUnknown from "../icon-unknown";

const BoxIconDevice = ({ device }: { device: SmartDeviceDetails }) => {
    const { type } = device;

    return (
        <BoxIcon>
            {
                type === 'bulb' ? <IconBulb {...device} /> :
                    type === 'outlet' ? <IconOutlet {...device} /> :
                        type === 'temperatureSensor' ? <IconTemperatureSensor /> :
                            <IconUnknown />
            }
        </BoxIcon>
    )
}

export default BoxIconDevice;