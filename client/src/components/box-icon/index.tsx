import styled from "styled-components";

const Icon = styled.div`
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
        <Icon>
            {children}
        </Icon>
    )
}

export default BoxIcon;