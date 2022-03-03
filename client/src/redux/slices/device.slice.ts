import { createSlice } from "@reduxjs/toolkit";
import { SmartDeviceAny } from "../../interfaces/device.interface";

interface InitialStateProps {
    dialog: false | SmartDeviceAny
}

const initialState: InitialStateProps = {
    dialog: false,
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
        }
    }
});

export const { openDialog, closeDialog } = deviceSlice.actions;

export default deviceSlice.reducer;