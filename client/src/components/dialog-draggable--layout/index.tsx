import { useEffect } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

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
    height: ${height}px;
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
`

const DialogDraggableLayout = () => {

    useEffect(() => {
        const element: any = document.querySelector('#dialog')

        element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`

        window.addEventListener('resize', () => {
            element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`
        })

        return;
    }, [])

    return (
        <Draggable>
            <Box id="dialog">
                <div>I can now be moved around!</div>
            </Box>
        </Draggable>
    )
}

export default DialogDraggableLayout;