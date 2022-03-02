import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    background: #2f3b52;
    color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 44px auto 44px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`

const BoxDeviceLayout = ({ children }: { children: any }) => {
    return (
        <Box>
            {children}
        </Box >
    )
}

export default BoxDeviceLayout;