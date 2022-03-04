import { createSlice } from "@reduxjs/toolkit";
import { SmartDeviceDetails } from "../../interfaces/device.interface";

interface InitialStateProps {
    dialog: false | SmartDeviceDetails
    all: Array<SmartDeviceDetails>
}

const initialState: InitialStateProps = {
    dialog: false,
    all: []
};

export const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        openDialog: (state: any, action: any) => {
            state.dialog = action.payload;
        },
        closeDialog: (state: any) => {
            state.dialog = false;
        },
        setAll: (state: any, action: any) => {
            state.all = action.payload;
        },
        changeOne: (state: any, action: any) => {
            let isExisting = false;
            state.all = state.all.map((device: SmartDeviceDetails) => {
                if (device.id === action.payload.id) {
                    isExisting = true;
                    return action.payload
                }
                return device;
            })

            if (!isExisting) {
                state.all = [...state.all, action.payload]
            }

            if (state.dialog && state.dialog.id == action.payload.id) {
                state.dialog = action.payload
            }
        }
    }
});

export const { openDialog, closeDialog, setAll, changeOne } = deviceSlice.actions;

export default deviceSlice.reducer;