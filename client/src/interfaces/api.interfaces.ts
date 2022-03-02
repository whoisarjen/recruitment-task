export interface SmartDevice {
    type: string;
    id: string;
    name: string;
    connectionState: string;
}

export interface SmartBulb extends SmartDevice {
    type: 'bulb';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    brightness: number; // <0, 100>
    color: string; // in the CSS formats
}

export interface SmartOutlet extends SmartDevice {
    type: 'outlet';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    powerConsumption: number; // in watts
}

export interface SmartTemperatureSensor extends SmartDevice {
    type: 'temperatureSensor';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    temperature: number; // in Celsius
}

// SmartDeviceDetails can be SmartBulb, SmartOutlet or SmartTemperatureSensor
export interface SmartDeviceDetails {
    type: string;
    id: string;
    name: string;
    connectionState: string;
    isTurnedOn?: boolean;
    brightness?: number;
    color?: string;
    powerConsumption?: number;
    temperature?: number;
}