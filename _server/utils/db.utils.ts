export const devices = [
    {
        type: 'bulb',
        id: '1',
        name: 'Bulb 10000',
        connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: true,
        brightness: 80, // <0, 100>
        color: 'red', // in the CSS formats
    },
    {
        type: 'outlet',
        id: '2',
        name: 'Outlet 10000',
        connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: false,
        powerConsumption: 50, // in watts
    },
    {
        type: 'temperatureSensor',
        id: '3',
        name: 'TemperatureSensor 10000',
        connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
        temperature: 100, // in Celsius
    },
    {
        type: 'unknown',
        id: '4',
        name: 'Type is unknown',
        connectionState: 'poorConnection',
    }
]