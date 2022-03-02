import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`

const Name = styled.div`

`

const Type = styled.small`

`


const BoxDeviceContent = ({ name, type }: { name: string, type: string }) => {
    return (
        <Content>
            <Name>{name}</Name>
            <Type>{type}</Type>
        </Content>
    )
}

export default BoxDeviceContent;