import styled from "styled-components";

const FooterGrid = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    display: grid;
    font-size: 0.875rem;
`

const Placeholder = styled.div`
    width: 100%;
    height: 40px;
`

const Footer = () => {
    return (
        <>
            <Placeholder />
            <FooterGrid>
                Made by Kamil Owczarek
            </FooterGrid>
        </>
    )
}

export default Footer;