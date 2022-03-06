import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { closeDialog } from '../../redux/slices/device.slice';
import Fade from '@mui/material/Fade';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogDeviceBulb from '../dialog-device-bulb';
import DialogDeviceOutlet from '../dialog-device-outlet';
import DialogDeviceTemperatureSensor from '../dialog-device-temperature-sensor';
import DialogDeviceUknown from '../dialog-device-unknown';

const width = 350;
const height = 200;

const Box = styled.div`
    position: fixed;
    z-index: 10000;
    left: calc(50% - ${width / 2}px);
    top: calc(50% - ${height / 2}px);
    transform: translate(-50%,-50%);
    width: ${width}px;
    max-width: 90%;
    min-width: 300px;
    min-height: ${height}px;
    background: #fff;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    cursor: pointer;
    display: none;
`

const DialogDevice = () => {
    const dispatch = useAppDispatch()
    const dialog = useAppSelector(state => state.device.dialog)
    const [isFirstFullLoad, setIsFirstFullLoad] = useState(true);

    useEffect(() => {
        const element: any = document.querySelector('#dialog')

        window.addEventListener('resize', () => {
            element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`
            element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`
        })

        return;
    }, [])

    useEffect(() => {
        const dialogReal: any = document.getElementById('dialogReal')
        const element: any = document.querySelector('#dialog')

        if (dialog) {
            element.style.display = `block`
            if (element.offsetHeight < dialogReal.offsetHeight + 10) {
                element.style.height = dialogReal.offsetHeight + 10 + 'px';
            }
        } else {
            element.style.display = `none`
        }

        // it has to be after display change (center dialog when max-width plays first role)
        if (isFirstFullLoad && dialog) {
            element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`
            element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`
            setIsFirstFullLoad(false);
        }
    }, [dialog])

    useEffect(() => {
        const dialogReal: any = document.getElementById('dialogReal');
        const element: any = document.getElementById('dialog');
        const resizer: any = document.createElement('div');

        resizer.className = 'resizer';
        resizer.style.width = '10px';
        resizer.style.height = '10px';
        resizer.style.position = 'absolute';
        resizer.style.right = 0;
        resizer.style.bottom = 0;
        resizer.style.cursor = 'se-resize';

        element.appendChild(resizer);
        resizer.addEventListener('mousedown', initResize, false);

        function initResize() {
            window.addEventListener('mousemove', Resize, false);
            window.addEventListener('mouseup', stopResize, false);
        }

        function Resize(e: any) {
            let { value: y } = (document.getElementById('dialog') as any).computedStyleMap().get('transform')[0].y;
            let { value: x } = (document.getElementById('dialog') as any).computedStyleMap().get('transform')[0].x;

            if ((e.clientX - element.offsetLeft - x) >= 200) {
                element.style.width = (e.clientX - element.offsetLeft - x) + 'px';
            }

            if (dialogReal.offsetHeight + 10 <= (e.clientY - element.offsetTop - y)) {
                element.style.height = (e.clientY - element.offsetTop - y) + 'px';
            } else {
                element.style.height = dialogReal.offsetHeight + 10 + 'px';
            }
        }

        function stopResize() {
            window.removeEventListener('mousemove', Resize, false);
            window.removeEventListener('mouseup', stopResize, false);
        }

        return;
    }, [])

    return (
        <Draggable cancel="#button_close, .resizer">
            <Fade in={dialog ? true : false}>
                <Box id="dialog">
                    <div id="dialogReal">
                        <DialogContent id="dialogReal">
                            {
                                dialog &&
                                (
                                    dialog.type === 'bulb' ? <DialogDeviceBulb {...dialog} /> :
                                        dialog.type === 'outlet' ? <DialogDeviceOutlet {...dialog} /> :
                                            dialog.type === 'temperatureSensor' ? <DialogDeviceTemperatureSensor {...dialog} /> :
                                                <DialogDeviceUknown {...dialog} />
                                )
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button id="button_close" onClick={() => dispatch(closeDialog())}>Close</Button>
                        </DialogActions>
                    </div>
                </Box>
            </Fade>
        </Draggable >
    )
}

export default DialogDevice;