import styled from "styled-components";

const Box = styled.div`
    width: 44px;
    height: 44px;
    margin: auto;
    display: grid;
    ${this} svg{
        margin: auto;
    }
`

const BoxIcon = ({ children }: { children: any }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}

export default BoxIcon;