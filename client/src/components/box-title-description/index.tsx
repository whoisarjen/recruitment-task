import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`

const Title = styled.div``

const Description = styled.small``


const BoxTitleDescription = ({ title, description }: { title: string, description: string }) => {
    return (
        <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Content>
    )
}

export default BoxTitleDescription;