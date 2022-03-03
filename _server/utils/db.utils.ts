const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const devices = [
    {
        type: 'bulb',
        id: '1',
        name: 'Bulb 10000',
        connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: true,
        brightness: 80, // <0, 100>
        color: generateColor(), // in the CSS formats
    },
    {
        type: 'bulb',
        id: '2',
        name: 'Bulb 10000',
        connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: false,
        brightness: 50, // <0, 100>
        color: generateColor(), // in the CSS formats
    },
    {
        type: 'outlet',
        id: '3',
        name: 'Outlet 10000',
        connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: true,
        powerConsumption: 50, // in watts
    },
    {
        type: 'outlet',
        id: '4',
        name: 'Outlet 10000',
        connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
        isTurnedOn: false,
        powerConsumption: 50, // in watts
    },
    {
        type: 'temperatureSensor',
        id: '5',
        name: 'TemperatureSensor 10000',
        connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
        temperature: 100, // in Celsius
    },
    {
        // type: 'unknown',
        id: '6',
        name: 'This one shows what happens, when the back-end fails',
        // connectionState: 'poorConnection',
    }
]

export const getAll = () => {
    return devices.map(device => {
        if(device.color){
            device.color = generateColor()
        }
        return device;
    })
}