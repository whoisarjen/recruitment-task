export interface SmartDevice {
    type: string; // 'bulb', 'outlet' or 'temperatureSensor';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}

export interface SmartBulb {
    type: 'bulb';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    brightness: number; // <0, 100>
    color: string; // in the CSS formats
}

export interface SmartOutlet {
    type: 'outlet';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    powerConsumption: number; // in watts
}

export interface SmartTemperatureSensor {
    type: 'temperatureSensor';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    temperature: number; // in Celsius
}

export type SmartDeviceDetails = SmartBulb | SmartOutlet | SmartTemperatureSensor;